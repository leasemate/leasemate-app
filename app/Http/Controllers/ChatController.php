<?php

namespace App\Http\Controllers;

use App\Facades\ZepApi;
use App\Http\Requests\StoreChatRequest;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chats = Chat::with('last_message')->orderBy('updated_at', 'desc')->get();

        return Inertia::render('Chat/Index', [
            'chats' => ChatResource::collection($chats)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChatRequest $request, Chat $chat)
    {

        try {

            $validated = $request->validated();

            $chatService = new ChatService($chat, $validated['lease_id']);

//            if( ! $chat->exists) {
//
//                $chatService->createChat($validated['lease_id']);
//                $chat_uuid = Str::uuid();
//
//                $zep_session_data= [
//                    'session_id' => (string) $chat_uuid,
//                    'user_id' => (string) auth()->user()->zep_user_id,
//                ];
//
//                ZepApi::createSession($zep_session_data);
//
//                $chat = auth()->user()->chats()->create([
//                    'chat_uuid' => $chat_uuid,
//                    'lease_id' => $validated['lease_id'],
//                ]);
//            }

            $chatService->sendMessage('user', $validated['message']);

//            $chat->messages()->create(['from'=> 'user', 'message' => $validated['message']]);

//            $chat->load('last_message');

            return response()->json([
                "chat" => new ChatResource($chatService->getChat()),
            ]);

        } catch (\Exception $e) {
            \Log::info($e);
            \Log::info($e->getMessage());
            \Log::info($e->getCode());
            return response()->json([
                'error' => $e->getMessage(),
            ], ((int)$e->getCode()?: 500));

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {

        $chats = Chat::with('last_message')->orderBy('updated_at', 'desc')->get();

        $chat->load(['last_message', 'messages']);

        return Inertia::render('Chat/Index', [
            'chat' => new ChatResource($chat),
            'chats' => ChatResource::collection($chats)
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        try {

            DB::beginTransaction();

            $chat->delete();

            ZepApi::deleteMessages($chat->chat_uuid);

            DB::commit();

            return redirect()->route('chats.index');

        } catch (\Exception $e) {

            DB::rollBack();

            return redirect()->route('chats.show', $chat->chat_uuid)->with('error', $e->getMessage());
        }

    }
}
