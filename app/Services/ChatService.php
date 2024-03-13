<?php

namespace App\Services;

use App\Facades\ZepApi;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ChatService
{
    public string $session_id;

    public function __construct(protected Chat $chat, protected int $lease_id = 0)
    {
        if ($chat->exists) {
            $this->session_id = $chat->chat_uuid;
        }
    }

    public function createChat(): void
    {
        if (! auth()->check()) {
            throw new \Exception('To create a chat, you must be logged in.');
        }

        if ($this->chat->exists) {
            throw new \Exception('Chat already exists.');
        }

        $this->createSession();

        $this->chat = auth()->user()->chats()->create([
            'chat_uuid' => $this->session_id,
            'lease_id' => $this->lease_id,
        ]);
    }

    public function sendMessage($from, $message): void
    {
        if (! $this->chat->exists) {
            $this->createChat();
        }

        $this->chat->messages()->create(['from' => $from, 'message' => $message]);

        $this->chat->load('last_message');
    }

    public function destroy(): bool
    {
        if (! $this->chat->exists) {
            throw new \Exception('Chat does not exist.');
        }

        try {

            DB::beginTransaction();

            $this->chat->delete();

            ZepApi::deleteMessages($this->session_id);

            DB::commit();

            return true;

        } catch (\Exception $e) {

            DB::rollBack();

            return false;
        }

    }

    //create getter for chat
    public function getChat(): Chat
    {
        return $this->chat;
    }

    private function createSession(): void
    {
        $this->session_id = (string) Str::uuid();

        $zep_session_data = [
            'session_id' => $this->session_id,
            //            'user_id' => (string) auth()->user()->zep_user_id,
        ];

        ZepApi::createSession($zep_session_data);

    }
}
