<?php

namespace App\Http\Controllers;

use App\Facades\LeasemateApi;
use App\Http\Requests\StoreAmendmentRequest;
use App\Models\Amendment;
use App\Models\Document;
use App\Models\Lease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class LeaseAmendmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Lease $lease)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Lease $lease)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAmendmentRequest $request, Lease $lease)
    {
        try {

            DB::beginTransaction();

            $upload_document = $request->file('lease_amendment');

            $amendment = $lease->amendments()->create();

            $storedName = $upload_document->store(tenant('id').'/leases/'.$lease->asset_id, ['visibility' => 'public']);
            //        $storedName = $upload_document->getBasename();

            $document = $amendment->document()
                ->create([
                    'asset_id' => $lease->asset_id,
                    'uuid' => (string) Str::uuid(),
                    'collection_name' => Document::COLLECTION_AMENDMENT,
                    'name' => $upload_document->getClientOriginalName(),
                    'file_name' => $storedName,
                    'mime_type' => $upload_document->getMimeType(),
                    'disk' => config('filesystems.default'),
                    'size' => $upload_document->getSize(),
                    'extension' => $upload_document->getClientOriginalExtension(),
                ]);

            $registerLeaseUploadResponse = LeasemateApi::registerDocument($lease->asset, $lease, $document, $storedName);

            \Log::info('registerDocumentUpload', ['registerDocumentUploadResponse' => $registerLeaseUploadResponse]);

            if ($registerLeaseUploadResponse->failed()) {

                if (Storage::disk()->exists($document->file_name)) {
                    Storage::disk()->delete($document->file_name);
                }

                throw new \Exception('Failed to register amendment.');
            }

            DB::commit();

            return response()->json(['success' => 1, 'amendment' => $amendment]);

        } catch (\Exception $e) {
            \Log::error($e->getMessage());

            DB::rollBack();

            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Lease $lease, Amendment $amendment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lease $lease, Amendment $amendment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lease $lease, Amendment $amendment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lease $lease, Amendment $amendment)
    {
        //
    }
}
