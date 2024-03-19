<?php

namespace App\Http\Controllers;

use App\Events\AmendmentProcessingUpdate;
use App\Events\LeaseProcessingUpdate;
use App\Models\Amendment;
use App\Models\Document;
use App\Models\Lease;
use App\Models\Tenant;
use App\Models\User;
use App\Notifications\DocumentCompleteNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FileProcessingController extends Controller
{
    protected User $user;

    protected Lease $lease;

    protected Amendment $amendment;

    protected Document $document;

    protected Tenant $tenant;

    protected string $s3_object;

    protected string $status;

    protected ?string $status_msg;

    protected ?int $status_progress;

    protected ?array $basic_extracted_data;

    protected ?array $detailed_extracted_data;

    public function statusUpdate(Request $request)
    {
        try {

            \Log::info('start status update');
            \Log::info($request->all());

            $this->s3_object = $request->get('s3_object');
            $this->status = $request->get('status');
            $this->status_msg = $request->get('message');
            $this->status_progress = $request->get('progress');
            $this->basic_extracted_data = $request->get('basic_extracted_data');
            $this->detailed_extracted_data = $request->get('detailed_extracted_data');

            $tenant_id = explode('/', $this->s3_object)[0];

            $this->tenant = Tenant::findOrFail($tenant_id);

            tenancy()->initialize($this->tenant);

            \Log::info('Domain:', [tenant('domain')]);
            \Log::info($this->s3_object, [$this->status, $this->status_progress]);

            $this->document = Document::where('file_name', $this->s3_object)->firstOrFail();

            if (! $this->document->exists) {
                throw new \Exception('Document not found');
            }

            $this->document->status = ($this->status == 'Completed' ? 'Ready' : $this->status);
            $this->document->status_msg = $this->status_msg ?? null;
            $this->document->status_progress = $this->status_progress ?? 0;

            if ($this->basic_extracted_data || $this->detailed_extracted_data) {
                $this->document->document_detail()->create([
                    'basic_extracted_data' => $this->basic_extracted_data,
                    'detailed_extracted_data' => $this->detailed_extracted_data,
                ]);
            }

            $this->document->save();

            if ($this->document->collection_name === Document::COLLECTION_LEASE) {

                Log::info('*************** LEASE ******************');
                $this->lease = $this->document->documentable;
                $this->user = $this->lease->user;

                $this->processLease();

            } elseif ($this->document->collection_name === Document::COLLECTION_AMENDMENT) {

                Log::info('*************** AMENDMENT ******************');
                $this->amendment = $this->document->documentable;
                $this->user = $this->amendment->lease->user;

                $this->processAmendment();
            }

            return response()->json(['status' => 'success']);

        } catch (\Exception $e) {

            Log::error($e);

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

    }

    protected function processLease()
    {
        $basicLeaseData = $this->getBasicLeaseData();

        if ($basicLeaseData) {
            $this->lease->fill($basicLeaseData);
            $this->lease->save();
        }

        if ($detailLeaseData = $this->getDetailedLeaseData()) {
            $this->lease->lease_detail()->create($detailLeaseData);
        }

        $lease_payload = $this->eventPayload();

        Log::info('Fire event: LeaseProcessingUpdate:', $lease_payload);
        event(new LeaseProcessingUpdate($this->user->id, $lease_payload));

        if (in_array($this->status, ['Ready', 'Failed'])) {
            Log::info('Send notification: LeaseCompleteNotification:');
            $this->lease->user->notify(new DocumentCompleteNotification($lease_payload));
        }

    }

    protected function processAmendment()
    {
        Log::info('Processing Amendment.................');

        //save data to amendment
        $this->amendment->execution_date = ! empty($this->basic_extracted_data['execution_date']) ? Carbon::parse($this->basic_extracted_data['execution_date']) : null;
        $this->amendment->save();

        $this->amendment->lease()->update($this->getBasicLeaseData());
        $this->amendment->lease->lease_detail()->update($this->getDetailedLeaseData());

        $amendment_payload = $this->eventPayload();

        Log::info('Fire event: AmendmentProcessingUpdate:', $amendment_payload);
        event(new AmendmentProcessingUpdate($this->user->id, $amendment_payload));

        if (in_array($this->status, ['Ready', 'Failed'])) {
            Log::info('Send notification: LeaseCompleteNotification:');
            $this->amendment->lease->user->notify(new DocumentCompleteNotification($amendment_payload));
        }
    }

    protected function eventPayload()
    {
        return [
            'uuid' => $this->document->uuid,
            'status' => $this->status,
            'status_msg' => $this->status_msg,
            'status_progress' => $this->status_progress,
            'file_name' => $this->document->name,
            'updated_at' => $this->document->updated_at->format('m/d/y'),
        ];
    }

    protected function getBasicLeaseData(): mixed
    {
        if (! $this->basic_extracted_data || empty($this->basic_extracted_data['classification'])) {
            return null;
        }

        try {
            $start_date = null;
            $start_date = ! empty($this->basic_extracted_data['commencement_date']) ? Carbon::parse($this->basic_extracted_data['commencement_date']) : null;
        } catch (\Exception $e) {
            Log::error($e);
        }

        try {
            $rent_schedule = ! empty($this->basic_extracted_data['rent_schedule']) ? $this->basic_extracted_data['rent_schedule'] : [];
            $end_date = is_array($rent_schedule) ? end($rent_schedule)['end_date'] ?? null : null;
        } catch (\TypeError|\Exception $e) {
            Log::error($e);
        }

        return [
            'tenant' => ! empty($this->basic_extracted_data['lessee_tenant']) ? $this->basic_extracted_data['lessee_tenant'] : 'Unknown',
            'landlord' => ! empty($this->basic_extracted_data['lessor_landlord']) ? $this->basic_extracted_data['lessor_landlord'] : 'Unknown',
            'premise_address' => ! empty($this->basic_extracted_data['premises_address']) ? $this->basic_extracted_data['premises_address'] : null,
            'building_address' => ! empty($this->basic_extracted_data['property_address']) ? $this->basic_extracted_data['property_address'] : null,
            'landlord_address' => ! empty($this->basic_extracted_data['lessor_landlord_address']) ? $this->basic_extracted_data['lessor_landlord_address'] : null,
            'gla' => ! empty($this->basic_extracted_data['rentable_square_feet']) ? $this->basic_extracted_data['rentable_square_feet'] : null,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'rent_schedule' => $rent_schedule,
            'rentable_sqft' => ! empty($this->basic_extracted_data['rentable_square_feet']) ? (int) $this->basic_extracted_data['rentable_square_feet'] : null,
            'rent_per_sqft' => ! empty($this->basic_extracted_data['rent_per_sqft']) ? (int) $this->basic_extracted_data['rent_per_sqft'] : null,
            'term' => ! empty($this->basic_extracted_data['lease_term']) ? (int) $this->basic_extracted_data['lease_term'] : null,
            'abatement' => ! empty($this->basic_extracted_data['abatement']) ? (int) $this->basic_extracted_data['abatement'] : null,
            'pro_rata_share' => ! empty($this->basic_extracted_data['abatement']) ? (int) $this->basic_extracted_data['abatement'] : null,
            'security_deposit' => ! empty($this->basic_extracted_data['security_deposit']) ? (int) $this->basic_extracted_data['security_deposit'] : null,
        ];
    }

    protected function getDetailedLeaseData(): mixed
    {
        if (empty($this->detailed_extracted_data)) {
            return null;
        }

        return [
            'option_to_extend' => ! empty($this->detailed_extracted_data['option_to_extend']) ? $this->detailed_extracted_data['option_to_extend'] : null,
            'right_of_first_offer' => ! empty($this->detailed_extracted_data['right_of_first_offer']) ? $this->detailed_extracted_data['right_of_first_offer'] : null,
            'right_of_first_refusal' => ! empty($this->detailed_extracted_data['right_of_first_refusal']) ? $this->detailed_extracted_data['right_of_first_refusal'] : null,
            'tenant_improvement_allowance' => ! empty($this->detailed_extracted_data['tenant_improvement_allowance']) ? $this->detailed_extracted_data['tenant_improvement_allowance'] : null,
            'tenant_insurance_requirements' => ! empty($this->detailed_extracted_data['tenant_insurance_requirements']) ? $this->detailed_extracted_data['tenant_insurance_requirements'] : null,
            'tenant_maintenance_obligations' => ! empty($this->detailed_extracted_data['tenant_maintenance_obligations']) ? $this->detailed_extracted_data['tenant_maintenance_obligations'] : null,
            'landlord_maintenance_obligations' => ! empty($this->detailed_extracted_data['landlord_maintenance_obligations']) ? $this->detailed_extracted_data['landlord_maintenance_obligations'] : null,
            'assignment_subletting' => ! empty($this->detailed_extracted_data['assignment_subletting']) ? $this->detailed_extracted_data['assignment_subletting'] : null,
            'holding_over' => ! empty($this->detailed_extracted_data['holding_over']) ? $this->detailed_extracted_data['holding_over'] : null,
        ];
    }
}
