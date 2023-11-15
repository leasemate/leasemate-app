<?php

namespace App\Http\Controllers;

use App\Events\FileStatusUpdate;
use App\Facades\ReaiProcessor;
use App\Http\Requests\StoreFileUploadRequest;
use App\Http\Requests\UpdateFileUploadRequest;
use App\Jobs\ProcessFile;
use App\Models\File;
//use App\Services\ReaiProcessor;
use App\Notifications\FileProcessingUpdate;
use App\Notifications\FileProcessingStarted;
use App\Services\ZepApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FilesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trashed_file_count = File::onlyTrashed()->count();

        $files = File::with('user')->orderBy('created_at', 'desc');

        if($trashed_file_count && request()->has('archived') && request('archived') ) {
            $files->onlyTrashed();
        }

        $files = $files->paginate(20)->withQueryString();;

        if(request()->has('page') && !$files->count()) {
            return redirect()->route('files.index', ($files->lastPage() == 1 ? [] : ['page' => $files->lastPage()]));
        }

        $transformed = $files->getCollection()->map(function ($file) {
            $file->size_readable = readableBytes($file->size);
            $file->download_link = Storage::disk('s3')->url($file->stored_name);
            return $file;
        });

        $files->setCollection($transformed);

        return Inertia::render('Files/Index', [
            'uploaded_files' => $files,
            'archived'=>(int) request('archived'),
            'trashed_file_count'=>(int)$trashed_file_count
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFileUploadRequest $request)
    {

        try {

            if ($request->hasFile('upload_file')) {

                $file = $request->file('upload_file');

//                $storedName = $file->getBasename();
//                $file->store(auth()->user()->id.'/pdfs');
                $storedName = $file->store(auth()->user()->id, ['disk'=>'s3', 'visibility'=>'public']);

//                $fullPath = Storage::path($storedName);

                if(!$storedName) {
                    throw new \Exception("Unable to upload file! Try again.");
                }

                Log::info('File uploaded:'.$file->getClientOriginalName());
                Log::info('Save uploaded file to DB:'.$storedName);

                $fileUpload = new File();
                $fileUpload->user_id = auth()->user()->id;
                $fileUpload->original_name = $file->getClientOriginalName();
                $fileUpload->stored_name = $storedName;
                $fileUpload->mime_type = $file->getClientMimeType();
                $fileUpload->size = $file->getSize();
                $fileUpload->save();

                Log::info('Fire event: FileProcessed');

                event(new FileStatusUpdate(auth()->user()->id, $fileUpload));

                return $fileUpload;
            }

        } catch (\Exception $e) {

            return response()->json(['errors' => $e->getMessage()], 422);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(File $file)
    {
        try {

            \Log::info($file);
            \Log::info("stored name");
            \Log::info($file->stored_name);

            if( ! in_array($file->status, ['Pending', 'Completed'])) {
                throw new \Exception("File cannot be deleted");
            }

            if(in_array($file->status, ['Pending','Failed'])) {

                if(Storage::disk('s3')->exists($file->stored_name)) {
                    Storage::disk('s3')->delete($file->stored_name);
                    $file->forceDelete();

                    return redirect()->back()->with('success', "File deleted");
                }

            } else {

                $response = ReaiProcessor::deleteFile($file->stored_name);

                if($response->ok()) {

                    $file->status = 'Deleted';
                    $file->save();
                    $file->delete();

                    return redirect()->back()->with('success', "File deleted");

                } elseif($response->serverError() || $response->clientError()) {

                    return redirect()->back()->with('error', $response->status().": ".$response->reason());
                } else {

                    return redirect()->back()->with('error', "Error deleting file");
                }

            }

        } catch(\Exception $e) {

            return redirect()->back()->with('error', $e->getMessage());

        }

    }

}
