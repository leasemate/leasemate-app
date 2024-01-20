<?php

namespace App\Http\Controllers;

use App\Facades\ReaiProcessor;
use App\Http\Resources\AssetResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Models\Asset;
use App\Models\Lease;

use Illuminate\Http\Request;
use App\Http\Requests\StoreLeaseRequest;
use Illuminate\Support\Facades\Storage;
use Laravel\Fortify\Rules\Password;

class AssetLeaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Asset $asset)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Asset $asset)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLeaseRequest $request, Asset $asset)
    {
        try {

            if ($request->hasFile('lease_document')) {

                $lease_document = $request->file('lease_document');

                $disk = 's3';
                $storedName = $lease_document->store(tenant('id')."/leases/".$asset->id, ['disk'=>$disk, 'visibility'=>'public']);

                $lease = $asset->leases()->create([
                    'user_id' => auth()->user()->id,
                    'og_filename' => $lease_document->getClientOriginalName(),
                    'filename' => $storedName,
                    'mime_type' => $lease_document->getMimeType(),
                    'disk' => $disk, // 'public
                    'size' => $lease_document->getSize(),
                    'ext' => $lease_document->getClientOriginalExtension(),
                ]);

                //To-do:
                //send API request with lease data to REAI API backend.

                $registerLeaseUploadResponse = ReaiProcessor::registerDocumentUpload($asset->id, $lease->id, $storedName);

                \Log::info('registerDocumentUpload', ['registerDocumentUploadResponse' => $registerLeaseUploadResponse]);

                if( ! $registerLeaseUploadResponse->successful()) {

                    if(Storage::disk('s3')->exists($lease->filename)) {
                        Storage::disk('s3')->delete($lease->filename);
                    }
                    $lease->forceDelete();

                    throw new \Exception('Failed to register lease upload.');
                }

                return response()->json(['success' => 1, 'lease' => $lease]);
            }

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            \Log::error($e->getTraceAsString());

            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset, Lease $lease)
    {
        return inertia()->render('AssetLeases/Show', [
            'asset' => new AssetResource($asset),
            'associates' => UserAssetResource::collection($asset->associates),
            'lease' => new LeaseResource($lease),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Asset $asset, Lease $lease)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Asset $asset, Lease $lease)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset, Lease $lease)
    {
        try {

            if(Storage::disk('s3')->exists($lease->filename)) {
                Storage::disk('s3')->delete($lease->filename);
                $lease->forceDelete();
            }

            return redirect()->back()->with('success', "Lease deleted");

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            \Log::error($e->getTraceAsString());

            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
