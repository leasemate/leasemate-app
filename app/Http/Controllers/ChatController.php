<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\ChatMessage;
use App\Facades\ReaiProcessor;
use Illuminate\Http\Resources\Json\JsonResource;
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

            //send API request to bot - get back Chat id and response
            // create chat reocrd
            // then save the message and response
            $validated = $request->validated();

            $reai_response = ReaiProcessor::chat($validated['message'], $chat->chat_uuid);

            if($reai_response->ok()) {

                $json = $reai_response->json();
                $chat_uuid = $json['chat_id'];

                if(!$chat->exists) {
                    $chat = Chat::create([
                        'user_id' => auth()->user()->id,
                        'chat_uuid' => $chat_uuid,
                    ]);
                }

                $chat->messages()->createMany([
                    ['from'=> 'user', 'message' => $validated['message']],
                    ['from'=> 'bot', 'message' => $json['bot_message']]
                ]);

                $chat->load('last_message');

                return redirect()->route('chats.show', $chat->chat_uuid);

            }

        } catch (\Exception $e) {

//            return response()->json(['errors' => $e->getMessage()], 422);

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
        $chat->delete();

        return redirect()->route('chats.index');

    }
}
