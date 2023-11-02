<?php

namespace App\Http\Controllers;

use App\Facades\FlowiseApi;
use App\Facades\ZepApi;
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

                $chat_uuid = Str::uuid();

                $zep_session_data= [
                    'session_id' => (string) $chat_uuid,
                    'user_id' => (string) auth()->user()->id,
                ];

                $zep_session = ZepApi::createSession($zep_session_data);

                $chat = Chat::create([
                    'user_id' => auth()->user()->id,
                    'chat_uuid' => $chat_uuid,
                ]);
            }

            $chat->messages()->create(['from'=> 'user', 'message' => $validated['message']]);

//            $reai_response = ReaiProcessor::chat(config('services.flowise_api.chat_app_id'), $validated['message']);

            $flowise_data = [
                "question"=>$validated['message'],
                "overrideConfig"=>[
                    "ZepMemory_0"=>[
                        "sessionId"=>$chat->chat_uuid,
                    ]
                ]
            ];

            $flowise_response = FlowiseApi::chat(config('services.flowise_api.chat_app_id'), $flowise_data);

            $chat->messages()->create(['from'=> 'bot', 'message' => $flowise_response]);

            $chat->load('last_message');
            return redirect()->route('chats.show', $chat->chat_uuid);


//            if($flowise_response->ok()) {
//
//                $json = $flowise_response->json();
//
//                dd($json);
//
//                $chat->messages()->create(['from'=> 'bot', 'message' => $json['bot_message']]);
//
//                $chat->load('last_message');
//                return redirect()->route('chats.show', $chat->chat_uuid);
//
//            } elseif($flowise_response->serverError()) {
//
//                return redirect()->route('chats.show', $chat->chat_uuid)->with('error', "Server Error: ".$flowise_response->status()." ".$flowise_response->reason());
//            } elseif($flowise_response->clientError()) {
//
//                return redirect()->route('chats.show', $chat->chat_uuid)->with('error', "Client Error: ".$flowise_response->status()." ".$flowise_response->reason());
//            }


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
