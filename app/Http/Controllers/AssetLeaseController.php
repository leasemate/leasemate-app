<?php

namespace App\Http\Controllers;

use App\Facades\LeasemateApi;
use App\Http\Requests\StoreLeaseAmendmentRequest;
use App\Http\Requests\StoreLeaseRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Jobs\DeleteLeaseFile;
use App\Models\Asset;
use App\Models\Chat;
use App\Models\Document;
use App\Models\Lease;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

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
     * Store a newly created resource in storage.
     */
    public function store(StoreLeaseRequest $request, Asset $asset)
    {
        try {

            DB::beginTransaction();

            $upload_document = $request->file('lease_document');

            $lease = $asset
                ->leases()
                ->create(['user_id' => auth()->user()->id]);

            $this->saveDocument($asset, $lease, $upload_document, Document::COLLECTION_LEASE);

            DB::commit();

            return response()->json(['success' => 1, 'lease' => $lease]);

        } catch (Exception $e) {
            DB::rollBack();
            \Log::error($e->getMessage());

            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Asset $asset)
    {
        //
    }

    protected function saveDocument(Asset $asset, Lease $lease, UploadedFile $upload_document, string $collection_name = 'lease'): Document
    {
        $path = tenant('id') . '/leases/' . $asset->id;
        $filename = $upload_document->hashName();
        $storedName = "{$path}/{$filename}";

        $document = $lease->documents()
            ->create([
                'asset_id' => $asset->id,
                'uuid' => (string)Str::uuid(),
                'collection_name' => $collection_name,
                'name' => $upload_document->getClientOriginalName(),
                'file_name' => $storedName,
                'mime_type' => $upload_document->getMimeType(),
                'disk' => config('filesystems.default'),
                'size' => $upload_document->getSize(),
                'extension' => $upload_document->getClientOriginalExtension(),
            ]);

        $registerLeaseUploadResponse = LeasemateApi::registerDocument($asset, $lease, $document, $storedName);

        \Log::info('registerDocumentUpload', ['registerDocumentUploadResponse' => $registerLeaseUploadResponse]);

        if ($registerLeaseUploadResponse->failed()) {
            throw new Exception('Failed to register lease upload.');
        }

        if (!app()->environment('local')) {
            $upload_document->storePubliclyAs($path, $filename);
        }

        return $document;
    }

    public function storeAmendment(StoreLeaseAmendmentRequest $request, Asset $asset, Lease $lease)
    {
        try {

            DB::beginTransaction();

            $upload_document = $request->file('lease_amendment');

            $amendment = $lease->amendments()->create([
                'asset_id' => $asset->id,
                'user_id' => auth()->user()->id,
                'type' => Lease::TYPE_AMENDMENT,
            ]);

            $this->saveDocument($asset, $amendment, $upload_document, Document::COLLECTION_AMENDMENT);

            DB::commit();

            return response()->json(['success' => 1, 'lease' => $lease]);

        } catch (Exception $e) {
            DB::rollBack();
            \Log::error($e->getMessage());
            if (!app()->environment('production')) {
                Log::error($e);
            }

            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset, Lease $lease, Chat $chat)
    {
        $lease->load([
            'asset',
            'user',
            'lease_detail',
            'lease_document.document_detail',
            'original_lease.lease_detail',
            'amendments_processing.lease_document',
            'amendments',
            'amendments.lease_detail',
            'amendments.lease_document.document_detail',
        ]);
        //dd($lease->toArray());

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
            $lease->lease_document_trashed->status = 'Deleting';
            $lease->lease_document_trashed->save();

            Log::info('Dispatching DeleteLeaseFile', ['lease_id' => $lease->id]);
            DeleteLeaseFile::dispatch($lease);

            return redirect()->back();

        } catch (Exception $e) {
            \Log::error($e->getMessage());

            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function archive(Asset $asset, Lease $lease)
    {
        try {
            $lease->delete();

            return redirect()->back();

        } catch (Exception $e) {
            \Log::error($e->getMessage());

            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function restore(Asset $asset, Lease $lease)
    {
        try {
            $lease->restore();

            return redirect()->back();

        } catch (Exception $e) {
            \Log::error($e->getMessage());

            return redirect()->back()->with('error', $e->getMessage());
        }
    }
}
