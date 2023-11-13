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

        $user_message = ['from'=> 'bot', 'message' => $validated['message']];

        $message = $chat->messages()->create($user_message);

//        dd($messages);
//        $latestMessage = $chat->messages()->orderBy('created_at')->first();

//        dd($latestMessage);
        return new ChatMessageResource($message);

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
