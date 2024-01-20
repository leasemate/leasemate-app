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
            \Log::info($request->all());

            $s3_object = $request->get('s3_object');
            $status = $request->get('status');
            $status_msg = $request->get('message');
            $extracted_data = $request->get('extracted_data');

            $tenant_id = explode("/", $s3_object)[0];
            $tenant = Tenant::find($tenant_id);

            tenancy()->initialize($tenant);

            $lease = Lease::where('filename', $s3_object)->first();

            if(!$lease) throw new \Exception('File not found', 404);

            $lease->status = $status;
            $lease->status_msg = $status_msg??null;

            if($extracted_data && !empty($extracted_data['classification'])) {

                $lease->tenant_name = !empty($extracted_data['lessee_tenant']) ? $extracted_data['lessee_tenant'] : null;
                $lease->address = !empty($extracted_data['property_address']) ? $extracted_data['property_address'] : null;
                $lease->gla = !empty($extracted_data['square_feet']) ? $extracted_data['square_feet'] : null;
                $lease->start_date = !empty($extracted_data['commencement_date']) ? Carbon::parse($extracted_data['commencement_date']) : null;
                $lease->end_date = !empty($extracted_data['expiration_date']) ? Carbon::parse($extracted_data['expiration_date']) : null;
                $lease->rent_per_sqft = !empty($extracted_data['expiration_date']) ? $extracted_data['rent_per_sqft'] : null;
                $lease->extracted_data = $extracted_data;
            }

            $lease->save();

            Log::info('Fire event: FileProcessed:'.$lease);
            event(new FileStatusUpdate($lease->user_id, $lease));

            Log::info('Send notification: FileProcessingComplete:'.$lease);

            $lease->user->notify(new FileProcessingUpdate($lease));

            return response()->json(['status' => 'success']);

        } catch(\Exception $e) {

            Log::error($e);

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

    }
}
