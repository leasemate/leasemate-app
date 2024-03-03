<?php

namespace App\Http\Controllers;

use App\Facades\LeasemateApi;
use App\Http\Requests\SendMessageRequest;
use App\Http\Requests\StoreLeaseAmendmentRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\ChatResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Jobs\DeleteLeaseFile;
use App\Models\Asset;
use App\Models\Chat;
use App\Models\Document;
use App\Models\Lease;

use App\Services\ChatService;
use Illuminate\Http\Request;
use App\Http\Requests\StoreLeaseRequest;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Fortify\Rules\Password;
use Illuminate\Support\Facades\DB;

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

            DB::beginTransaction();

            $upload_document = $request->file('lease_document');

            $lease = $asset
                ->leases()
                ->create(['user_id' => auth()->user()->id]);

            $this->saveDocument($asset, $lease, $upload_document, Document::COLLECTION_LEASE);

            DB::commit();

            return response()->json(['success' => 1, 'lease' => $lease]);

        } catch(\Exception $e) {
            \Log::error($e->getMessage());

            DB::rollBack();
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function storeAmendment(StoreLeaseAmendmentRequest $request, Asset $asset, Lease $lease)
    {
        try {

            $upload_document = $request->file('lease_amendment');

            $this->saveDocument($asset, $lease, $upload_document, Document::COLLECTION_AMENDMENT);

            return response()->json(['success' => 1, 'lease' => $lease]);

        } catch(\Exception $e) {

            \Log::error($e->getMessage());
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset, Lease $lease, Chat $chat)
    {

        $lease->load(['asset', 'user', 'chats_with_last_message', 'lease_document']);

        if($chat->exists) {
            $chat->load(['last_message', 'messages']);
        }

        return inertia()->render('AssetLeases/Show', [
            'asset' => new AssetResource($asset),
            'associates' => UserAssetResource::collection($asset->associates),
            'lease' => new LeaseResource($lease),
            'chats' => ChatResource::collection($lease->chats_with_last_message),
            'chat' => $chat->exists?new ChatResource($chat):null
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

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function archive(Asset $asset, Lease $lease)
    {
        try {
            $lease->delete();
            return redirect()->back();

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function restore(Asset $asset, Lease $lease)
    {
        try {
            $lease->restore();
            return redirect()->back();

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    /**
     * @param \Illuminate\Database\Eloquent\Model $lease
     * @param Asset $asset
     * @param array|\Illuminate\Http\UploadedFile|null $lease_document
     * @param bool|string $storedName
     * @return void
     * @throws \Exception
     */
    protected function saveDocument(Asset $asset, Lease $lease, UploadedFile $upload_document, string $collection_name = 'lease'): Document
    {

        $storedName = $upload_document->store(tenant('id')."/leases/".$asset->id, ['visibility'=>'public']);
//        $storedName = $upload_document->getBasename();

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

        if ( $registerLeaseUploadResponse->failed() ) {

            if ( Storage::disk()->exists($document->file_name) ) {
                Storage::disk()->delete($document->file_name);
            }

            throw new \Exception('Failed to register lease upload.');
        }

        return $document;
    }

}
