<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFileUploadRequest;
use App\Http\Requests\UpdateFileUploadRequest;
use App\Models\FileUpload;
use Inertia\Inertia;

class FileUploadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $files = FileUpload::with('user')->orderBy('created_at', 'desc')->paginate(4);

        $files = $files->map(function ($file) {
            $file->size_readable = readableBytes($file->size);
            return $file;
        });

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
//            throw new \Exception("error ");

            $request->validate([
                'upload_file' => 'required|file|mimes:pdf,jpg,jpeg,png,gif|max:2048',  // Change max size as needed
            ]);

            if ($request->hasFile('upload_file')) {

                $file = $request->file('upload_file');

//                dd($file);
                $storedName = $file->store('pdfs');
                $storedName = uuid_create() . '.' . $request->upload_file->extension();

                $request->upload_file->storeAs('public/pdfs', $storedName);                // Store the file on disk (e.g., storage/app/uploads)

                // Create an entry in the database
                $fileUpload = new FileUpload();
                $fileUpload->user_id = auth()->user()->id;
                $fileUpload->original_name = $file->getClientOriginalName();
                $fileUpload->stored_name = "pdfs/".$storedName;
                $fileUpload->mime_type = $file->getClientMimeType();
                $fileUpload->size = $file->getSize();
                $fileUpload->save();

                return $fileUpload;

            }





//            $file_uploaded = FileUpload::create(['file' => $fileName]);

//        return redirect()->back()->with('message', 'PDF Uploaded Successfully');



        } catch (\Exception $e) {

            return response()->json(['message' => $e->getMessage()], 422);
        }





    }

    /**
     * Display the specified resource.
     */
    public function show(FileUpload $fileUpload)
    {
        //
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
