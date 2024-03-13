<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\ChatResource;
use App\Http\Resources\LeaseResource;
use App\Http\Resources\UserAssetResource;
use App\Models\Asset;
use App\Models\Chat;
use App\Models\Lease;
use App\Services\ChatService;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Asset $asset, Lease $lease, Chat $chat)
    {
        $lease->load(['asset', 'user', 'chats_with_last_message']);

        if ($chat->exists) {
            $chat->load(['last_message', 'messages']);
        }

        return inertia()->render('AssetLeases/Chat', [
            'asset' => new AssetResource($asset),
            'associates' => UserAssetResource::collection($asset->associates),
            'lease' => new LeaseResource($lease),
            'chats' => ChatResource::collection($lease->chats_with_last_message),
            'chat' => $chat->exists ? new ChatResource($chat) : null,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChatRequest $storeChatRequest, Asset $asset, Lease $lease, Chat $chat)
    {
        $validated = $storeChatRequest->validated();

        try {
            $chatService = new ChatService($chat, $lease->id);

            $chatService->sendMessage($validated['from'], $validated['message']);

            return response()->json([
                'chat' => new ChatResource($chatService->getChat()),
            ]);

        } catch (\Exception $e) {
            \Log::info($e);
            \Log::info($e->getMessage());
            \Log::info($e->getCode());

            return response()->json([
                'error' => $e->getMessage(),
            ], ((int) $e->getCode() ?: 500));

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset, Lease $lease, Chat $chat)
    {
        try {

            $chatService = new ChatService($chat);
            if (! $chatService->destroy()) {
                throw new \Exception('Failed to delete chat.');
            }

            return redirect()->route('assets.leases.chats', [$asset, $lease]);

        } catch (\Exception $e) {
            \Log::error($e->getMessage());

            return redirect()->back()->with('error', $e->getMessage());
        }

    }
}
