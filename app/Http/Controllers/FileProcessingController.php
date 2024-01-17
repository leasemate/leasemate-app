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
            $extracted_data = $request->get('extracted_data');

            $tenant_id = explode("/", $s3_object)[0];
            $tenant = Tenant::find($tenant_id);

            tenancy()->initialize($tenant);

//            if(in_array($status, ['Extracting','Processing', 'Completed', 'Failed']) === false) throw new \Exception('Invalid status');

            $lease = Lease::where('filename', $s3_object)->first();
//            dd($document);
//            $file = File::withoutGlobalScope(UserScope::class)->where('stored_name', $s3_object)->first();

            if(!$lease) throw new \Exception('File not found', 404);

            $lease->status = $status;

            if($extracted_data) {
                $lease->tenant_name = $extracted_data['lessee_tenant'];
                $lease->address = $extracted_data['property_address'];
                $lease->gla = $extracted_data['square_feet'];
                $lease->start_date = Carbon::parse($extracted_data['commencement_date']);
                $lease->end_date = Carbon::parse($extracted_data['expiration_date']);
                $lease->rent_per_sqft = $extracted_data['rent_per_sqft'];
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
