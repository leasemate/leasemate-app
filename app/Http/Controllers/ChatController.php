<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\ChatMessage;
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

        //send API request to bot - get back Chat id and response
        // create chat reocrd
        // then save the message and response
        $validated = $request->validated();


        if(!$chat->exists) {
            $chat = Chat::create([
                'user_id' => auth()->user()->id,
                'chat_uuid' => Str::uuid()->toString(),
            ]);
        }

        $messages = [];

        $user_message = ['from'=> 'user', 'message' => $validated['message']];
        $messages[] = $user_message;

        $bot_message = ['from'=> 'bot', 'message' => 'Hi there!!!!!!!! How can i help? this is my bot response'];
        $messages[] = $bot_message;

        $chat->messages()->createMany($messages);

        $chat->load('last_message');

        return new ChatResource($chat, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {

        $chat->load(['last_message', 'messages']);


        return new ChatResource($chat, 201);

    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        $chat->delete();

        return response()->noContent();
    }
}
