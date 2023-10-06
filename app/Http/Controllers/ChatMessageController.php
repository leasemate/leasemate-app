<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatMessageRequest;
use App\Http\Resources\ChatMessageCollection;
use App\Http\Resources\ChatMessageResource;
use App\Models\Chat;
use App\Models\ChatMessage;
use Illuminate\Http\Request;

class ChatMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Chat $chat)
    {

        $messages = $chat->messages()->orderBy('created_at', 'asc')->get();

        return ChatMessageResource::collection($messages);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChatMessageRequest $request, Chat $chat)
    {

        $validated = $request->validated();

        //send API request to back end with chat_id and message
        // get back response save message and response to DB

        $messages = [];

        $user_message = ['from'=> 'user', 'message' => $validated['message']];
        $messages[] = $user_message;

        $bot_message = ['from'=> 'bot', 'message' => 'Hi there!!!!!!!! How can i help? this is my bot response'];
        $messages[] = $bot_message;

        $messages = $chat->messages()->createMany($messages);

        $latestMessage = $messages->last();

        return new ChatMessageResource($latestMessage);

    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat, ChatMessage $message)
    {

    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
