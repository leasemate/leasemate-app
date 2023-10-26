<?php

namespace App\Http\Controllers;

use App\Events\FileProcessed;
use App\Models\FileUpload;
use App\Models\Scopes\UserScope;
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

            if(in_array($status, ['Extracting','Processing', 'Completed', 'Failed']) === false) throw new \Exception('Invalid status');

            $file = FileUpload::withoutGlobalScope(UserScope::class)->where('stored_name', $s3_object)->first();

            if(!$file) throw new \Exception('File not found');

            $file->bot_doc_id = $document_id;
            $file->status = $status;
            $file->save();

            Log::info('Fire event: FileProcessed');

            event(new FileProcessed(auth()->user()->id, $file));

            return response()->json(['status' => 'success']);

        } catch(\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }

    }

}
