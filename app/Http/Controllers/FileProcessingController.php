<?php

namespace App\Http\Controllers;

use App\Events\AmendmentStatusUpdate;
use App\Events\LeaseProcessingUpdate;
use App\Models\Document;
use App\Models\Domain;
use App\Models\File;
use App\Models\Lease;
use App\Models\Scopes\UserScope;
use App\Models\Tenant;
use App\Notifications\FileProcessingStarted;
use App\Notifications\FileProcessingUpdate;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FileProcessingController extends Controller
{

    protected Lease $lease;
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

            \Log::info("start status update");
            \Log::info($request->all());

            $this->s3_object = $request->get('s3_object');
            $this->status = $request->get('status');
            $this->status_msg = $request->get('message');
            $this->status_progress = $request->get('progress');
            $this->basic_extracted_data = $request->get('basic_extracted_data');
            $this->detailed_extracted_data = $request->get('detailed_extracted_data');

            $tenant_id = explode("/", $this->s3_object)[0];

            $this->tenant = Tenant::findOrFail($tenant_id);

            tenancy()->initialize($this->tenant);

            \Log::info('Domain:', [tenant('domain')]);
            \Log::info($this->s3_object, [$this->status, $this->status_progress]);

            $this->document = Document::where('file_name', $this->s3_object)->firstOrFail();

            if ( !$this->document ) {
                throw new \Exception('Document not found');
            }

            $this->document->status = ($this->status == 'Completed' ? 'Ready' : $this->status);
            $this->document->status_msg = $this->status_msg ?? null;
            $this->document->status_progress = $this->status_progress ?? 0;
            $this->document->document_detail()->create([
                'basic_extracted_data' => $this->detailed_extracted_data,
                'detailed_extracted_data' => $this->detailed_extracted_data,
            ]);

            $this->document->save();

            $this->lease = $this->document->documentable;

            if( $this->document->collection_name === Document::COLLECTION_LEASE ) {

                $this->processLease();

            } elseif( $this->document->collection_name === Document::COLLECTION_AMENDMENT ) {

                $this->processAmendment();

            }

            return response()->json(['status' => 'success']);

        } catch(\Exception $e) {

            Log::error($e);

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

    }

    protected function processLease()
    {

        if ($this->basic_extracted_data && !empty($this->basic_extracted_data['classification'])) {

            $this->lease->tenant = !empty($this->basic_extracted_data['lessee_tenant']) ? $this->basic_extracted_data['lessee_tenant'] : 'Unknown';
            $this->lease->landlord = !empty($this->basic_extracted_data['lessor_landlord']) ? $this->basic_extracted_data['lessor_landlord'] : 'Unknown';
            $this->lease->premise_address = !empty($this->basic_extracted_data['lessee_tenant_address']) ? $this->basic_extracted_data['lessee_tenant_address'] : null;
            $this->lease->building_address = !empty($this->basic_extracted_data['property_address']) ? $this->basic_extracted_data['property_address'] : null;
            $this->lease->landlord_address = !empty($this->basic_extracted_data['lessor_landlord_address']) ? $this->basic_extracted_data['lessor_landlord_address'] : null;
            $this->lease->gla = !empty($this->basic_extracted_data['rentable_square_feet']) ? $this->basic_extracted_data['rentable_square_feet'] : null;
            $this->lease->start_date = !empty($this->basic_extracted_data['commencement_date']) ? Carbon::parse($this->basic_extracted_data['commencement_date']) : null;
            $this->lease->end_date = !empty($this->basic_extracted_data['expiration_date']) ? Carbon::parse($this->basic_extracted_data['expiration_date']) : null;
            $this->lease->rent_per_sqft = !empty($this->basic_extracted_data['rent_per_sqft']) ? (int)$this->basic_extracted_data['rent_per_sqft'] : null;
            $this->lease->term = !empty($this->basic_extracted_data['term']) ? (int)$this->basic_extracted_data['term'] : null;
            $this->lease->abatement = !empty($this->basic_extracted_data['abatement']) ? (int)$this->basic_extracted_data['abatement'] : null;
            $this->lease->pro_rata_share = !empty($this->basic_extracted_data['abatement']) ? (int)$this->basic_extracted_data['abatement'] : null;
            $this->lease->security_deposit = !empty($this->basic_extracted_data['security_deposit']) ? (int)$this->basic_extracted_data['security_deposit'] : null;
            $this->lease->rent_schedule = !empty($this->basic_extracted_data['monthly_base_rent']) ? (int)$this->basic_extracted_data['monthly_base_rent'] : null;
        }

        $this->lease->save();

        if( $this->detailed_extracted_data ) {
          $this->lease->lease_details()->create([
              'option_to_extend' => !empty($this->detailed_extracted_data['option_to_extend']) ? $this->detailed_extracted_data['option_to_extend'] : null,
              'right_of_first_offer' => !empty($this->detailed_extracted_data['right_of_first_offer']) ? $this->detailed_extracted_data['right_of_first_offer'] : null,
              'right_of_first_refusal' => !empty($this->detailed_extracted_data['right_of_first_refusal']) ? $this->detailed_extracted_data['right_of_first_refusal'] : null,
              'tenant_improvement_allowance' => !empty($this->detailed_extracted_data['tenant_improvement_allowance']) ? $this->detailed_extracted_data['tenant_improvement_allowance'] : null,
              'tenant_insurance_requirements' => !empty($this->detailed_extracted_data['tenant_insurance_requirements']) ? $this->detailed_extracted_data['tenant_insurance_requirements'] : null,
              'tenant_maintenance_obligations' => !empty($this->detailed_extracted_data['tenant_maintenance_obligations']) ? $this->detailed_extracted_data['tenant_maintenance_obligations'] : null,
              'landlord_maintenance_obligations' => !empty($this->detailed_extracted_data['landlord_maintenance_obligations']) ? $this->detailed_extracted_data['landlord_maintenance_obligations'] : null,
              'assignment_subletting' => !empty($this->detailed_extracted_data['assignment_subletting']) ? $this->detailed_extracted_data['assignment_subletting'] : null,
              'holding_over' => !empty($this->detailed_extracted_data['holding_over']) ? $this->detailed_extracted_data['holding_over'] : null,
          ]);
        }

        $lease_payload = $this->lease->only([
            'id',
            'asset_id',
            'status',
            'status_msg',
            'status_progress',
            'updated_at',
        ]);

        Log::info('Fire event: FileProcessed:', $lease_payload);
        event(new LeaseProcessingUpdate($this->lease->user_id, $lease_payload));

        if (in_array($this->status, ['Ready', 'Failed'])) {
            Log::info('Send notification: FileProcessingComplete:');
            $this->lease->user->notify(new LeaseProcessingUpdate($lease_payload));
        }

    }

    protected function processAmendment()
    {

//        event(new AmendmentStatusUpdate($this->document));
    }
}
