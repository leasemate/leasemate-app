<?php

namespace App\Http\Controllers;

use App\Facades\ReaiProcessor;
use App\Http\Requests\StoreFileUploadRequest;
use App\Http\Requests\UpdateFileUploadRequest;
use App\Jobs\ProcessFile;
use App\Models\FileUpload;
//use App\Services\ReaiProcessor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FileUploadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $files = FileUpload::with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        $transformed = $files->getCollection()->map(function ($file) {
            $file->size_readable = readableBytes($file->size);
            $file->download_link = Storage::disk('s3')->url($file->stored_name);
            return $file;
        });

        $files->setCollection($transformed);

        return Inertia::render('FileUpload/Index', [
            'uploaded_files' => $files
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('FileUpload/Create');
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

                // Create an entry in the database
                $fileUpload = new FileUpload();
                $fileUpload->user_id = auth()->user()->id;
                $fileUpload->original_name = $file->getClientOriginalName();
                $fileUpload->stored_name = $storedName;
                $fileUpload->mime_type = $file->getClientMimeType();
                $fileUpload->size = $file->getSize();
                $fileUpload->save();

//                ProcessFile::dispatch($fileUpload);

                return $fileUpload;
            }

        } catch (\Exception $e) {

            return response()->json(['errors' => $e->getMessage()], 422);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(FileUpload $fileUpload)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FileUpload $fileUpload)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFileUploadRequest $request, FileUpload $fileUpload)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FileUpload $fileUpload)
    {
        //
    }

}
