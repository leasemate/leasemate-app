<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Facades\ReaiProcessor;
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

            if(!$chat->exists) {
                $chat = Chat::create([
                    'user_id' => auth()->user()->id,
                    'chat_uuid' => Str::uuid(),
                ]);
            }

            $chat->messages()->create(['from'=> 'user', 'message' => $validated['message']]);

            $reai_response = ReaiProcessor::chat($chat->chat_uuid, $validated['message']);

            if($reai_response->ok()) {

                $json = $reai_response->json();

                $chat->messages()->create(['from'=> 'bot', 'message' => $json['bot_message']]);

                $chat->load('last_message');
                return redirect()->route('chats.show', $chat->chat_uuid);

            } elseif($reai_response->serverError()) {

                return redirect()->route('chats.show', $chat->chat_uuid)->with('error', "Server Error: ".$reai_response->status()." ".$reai_response->reason());
            } elseif($reai_response->clientError()) {

                return redirect()->route('chats.show', $chat->chat_uuid)->with('error', "Client Error: ".$reai_response->status()." ".$reai_response->reason());
            }


        } catch (\Exception $e) {

            return redirect()->route('chats.show', $chat->chat_uuid)->with('error', $e->getMessage());
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
