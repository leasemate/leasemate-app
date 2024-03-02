<?php

namespace App\Http\Controllers;

use App\Events\FileStatusUpdate;
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
    public function statusUpdate(Request $request)
    {
        try {

            \Log::info("start status update");
//            \Log::info($request->all());

            $s3_object = $request->get('s3_object');
            $status = $request->get('status');
            $status_msg = $request->get('message');
            $status_progress = $request->get('progress');
            $extracted_data = $request->get('basic_extracted_data');
            $detailed_extracted_data = $request->get('detailed_extracted_data');


            $tenant_id = explode("/", $s3_object)[0];
            $tenant = Tenant::find($tenant_id);

            tenancy()->initialize($tenant);

            \Log::info('Domain:', [tenant('domain')]);
            \Log::info($s3_object, [$status, $status_progress]);

            $lease = Lease::where('filename', $s3_object)->first();

            if( ! $lease) {
                \Log::info('File not found:', [$s3_object]);
                return response()->json(['status' => 'error', 'message' => 'File not found'], 404);
            }

            $lease->status = ($status == 'Completed' ? 'Ready' : $status);
            $lease->status_msg = $status_msg??null;
            $lease->status_progress = $status_progress??0;

            if($extracted_data && !empty($extracted_data['classification'])) {

                $lease->tenant_name = !empty($extracted_data['lessee_tenant']) ? $extracted_data['lessee_tenant'] : 'Unknown';
                $lease->address = !empty($extracted_data['lessee_tenant_address']) ? $extracted_data['lessee_tenant_address'] : null;
                $lease->gla = !empty($extracted_data['rentable_square_feet']) ? $extracted_data['rentable_square_feet'] : null;
                $lease->start_date = !empty($extracted_data['commencement_date']) ? Carbon::parse($extracted_data['commencement_date']) : null;
                $lease->end_date = !empty($extracted_data['expiration_date']) ? Carbon::parse($extracted_data['expiration_date']) : null;
                $lease->rent_per_sqft = !empty($extracted_data['rent_per_sqft']) ? $extracted_data['rent_per_sqft'] : null;
                $lease->extracted_data = $extracted_data;
            }

            if($detailed_extracted_data) {
                $lease->detailed_extracted_data = $detailed_extracted_data;
            }

            $lease->save();

            $lease_payload = $lease->only([
                'id',
                'asset_id',
                'og_filename',
                'status',
                'status_msg',
                'status_progress',
                'updated_at',
            ]);

            Log::info('Fire event: FileProcessed:', $lease_payload);
            event(new FileStatusUpdate($lease->user_id, $lease_payload));

            if(in_array($status, ['Ready', 'Failed'])) {
                Log::info('Send notification: FileProcessingComplete:');
                $lease->user->notify(new FileProcessingUpdate($lease_payload));
            }

            return response()->json(['status' => 'success']);

        } catch(\Exception $e) {

            Log::error($e);

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

    }
}
