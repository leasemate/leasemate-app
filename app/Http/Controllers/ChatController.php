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

            if( ! $chat->exists) {

                $chat_uuid = Str::uuid();

                $zep_session_data= [
                    'session_id' => (string) $chat_uuid,
                    'user_id' => (string) auth()->user()->id,
                ];

                ZepApi::createSession($zep_session_data);

                $chat = Chat::create([
                    'user_id' => auth()->user()->id,
                    'chat_uuid' => $chat_uuid,
                ]);
            }

            $chat->messages()->create(['from'=> 'user', 'message' => $validated['message']]);

            $chat->load('last_message');

            return response()->json([
                "chat" => new ChatResource($chat),
            ]);

        } catch (\Exception $e) {

            return response()->json([
                'error' => $e->getMessage(),
            ], ($e->getCode()?: 500));

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
