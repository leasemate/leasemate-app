<?php

namespace App\Http\Controllers;

use App\Events\FileStatusUpdate;
use App\Models\Domain;
use App\Models\File;
use App\Models\Scopes\UserScope;
use App\Notifications\FileProcessingStarted;
use App\Notifications\FileProcessingUpdate;
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

            $tenant_domain = explode("/", $s3_object)[0];
            $domain = Domain::where('domain', $tenant_domain)->first();

            tenancy()->initialize($domain->tenant);

//            if(in_array($status, ['Extracting','Processing', 'Completed', 'Failed']) === false) throw new \Exception('Invalid status');

            $file = File::withoutGlobalScope(UserScope::class)->where('stored_name', $s3_object)->first();

            if(!$file) throw new \Exception('File not found', 404);

            $file->bot_doc_id = $document_id;
            $file->status = $status;
            $file->save();

            Log::info('Fire event: FileProcessed:'.$file);

            event(new FileStatusUpdate($file->user_id, $file));

            Log::info('Send notification: FileProcessingComplete:'.$file);

            $file->user->notify(new FileProcessingUpdate($file));

            return response()->json(['status' => 'success']);

        } catch(\Exception $e) {

            Log::error($e->getMessage());

            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

    }

}
