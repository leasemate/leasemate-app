<?php

namespace App\Http\Controllers;

use App\Events\FileStatusUpdate;
use App\Models\Document;
use App\Models\Domain;
use App\Models\File;
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
            $document_id = $request->get('document_id');
            $status = $request->get('status');
            $extracted_data = $request->get('extracted_data');

            $tenant_id = explode("/", $s3_object)[0];
            $tenant = Tenant::find($tenant_id);

            tenancy()->initialize($tenant);

//            if(in_array($status, ['Extracting','Processing', 'Completed', 'Failed']) === false) throw new \Exception('Invalid status');

            $document = Document::where('file_name', $s3_object)->with('documentable')->first();
//            dd($document);
//            $file = File::withoutGlobalScope(UserScope::class)->where('stored_name', $s3_object)->first();

            if(!$document) throw new \Exception('File not found', 404);

            $document->documentable->tenant_name = $extracted_data['lessee_tenant'];
            $document->documentable->suite_number = null;
            $document->documentable->gross_leasable_area = $extracted_data['square_feet'];
            $document->documentable->start_date = Carbon::parse($extracted_data['commencement_date']);
            $document->documentable->end_date = null;
            $document->documentable->rent_per_sqft = null;
            $document->documentable->status = $status;
            $document->documentable->abstract_data = $extracted_data;
            $document->documentable->save();

//            Log::info('Fire event: FileProcessed:'.$document);
//            event(new FileStatusUpdate($document->documentable->user_id, $document));

            Log::info('Send notification: FileProcessingComplete:'.$document);

            $document->documentable->user->notify(new FileProcessingUpdate($document));

            return response()->json(['status' => 'success']);

        } catch(\Exception $e) {

            Log::error($e->getMessage());

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

    }




}
