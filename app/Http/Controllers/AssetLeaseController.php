<?php

namespace App\Http\Controllers;

use App\Facades\ReaiProcessor;
use App\Http\Requests\SendMessageRequest;
use App\Http\Requests\StoreLeaseAmendmentRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\ChatResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Jobs\DeleteLeaseFile;
use App\Models\Asset;
use App\Models\Chat;
use App\Models\Lease;

use App\Services\ChatService;
use Illuminate\Http\Request;
use App\Http\Requests\StoreLeaseRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
//                $storedName = basename($lease_document->getClientOriginalName());

                $lease = $asset->leases()->create([
                    'user_id' => auth()->user()->id,
                    'og_filename' => $lease_document->getClientOriginalName(),
                    'filename' => $storedName,
                    'mime_type' => $lease_document->getMimeType(),
                    'disk' => $disk, // 'public
                    'size' => $lease_document->getSize(),
                    'ext' => $lease_document->getClientOriginalExtension(),
                ]);

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
//            \Log::error($e->getTraceAsString());

            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function storeAmendment(StoreLeaseAmendmentRequest $request, Asset $asset, Lease $lease)
    {
        try {

            if ($request->hasFile('lease_amendment')) {

                $lease_amendment = $request->file('lease_amendment');

                $disk = 's3';

                $storedName = $lease_amendment->store(tenant('id') . "/leases/" . $asset->id, ['disk' => $disk, 'visibility' => 'public']);

                $amendment = $lease->documents()->create([
                    'uuid' => (string) Str::uuid(),
                    'collection_name' => 'amendments',
                    'name' => $lease_amendment->getClientOriginalName(),
                    'file_name' => $storedName,
                    'mime_type' => $lease_amendment->getMimeType(),
                    'disk' => $disk, // 'public
                    'size' => $lease_amendment->getSize(),
                    'extension' => $lease_amendment->getClientOriginalExtension(),
                ]);

                $registerAmendmentUploadResponse = ReaiProcessor::registerDocumentUpload($asset->id, $lease->id, $storedName, 'lease', 'amendment');

                if( ! $registerAmendmentUploadResponse->successful()) {

                    if(Storage::disk('s3')->exists($amendment->file_name)) {
                        Storage::disk('s3')->delete($amendment->file_name);
                    }
                    $amendment->forceDelete();

                    throw new \Exception('Failed to register amendment upload.');
                }

                return response()->json(['success' => 1, 'lease' => $lease]);

            }

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

        $lease->load(['asset', 'user', 'chatsWithLastMessage', 'documents']);

        if($chat->exists) {
            $chat->load(['last_message', 'messages']);
        }

        return inertia()->render('AssetLeases/Show', [
            'asset' => new AssetResource($asset),
            'associates' => UserAssetResource::collection($asset->associates),
            'lease' => new LeaseResource($lease),
            'chats' => ChatResource::collection($lease->chatsWithLastMessage),
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
            $lease->status = 'Deleting';
            $lease->save();

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
            $lease->status = 'Archived';
            $lease->save();
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
            $lease->status = 'Ready';
            $lease->save();
            return redirect()->back();

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

}
