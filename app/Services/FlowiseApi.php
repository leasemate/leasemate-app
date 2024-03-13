<?php

namespace App\Services;

use App\Traits\ApiRequestTrait;

class FlowiseApi
{
    use ApiRequestTrait;

    public function __construct($apiBaseUrl, $apiKey)
    {
        $this->setApiConfig($apiBaseUrl, $apiKey);
    }

    public function chat($chat_id, $chat_data)
    {

        \Log::info('SERVICE: Chat', ['chat ID:', $chat_id]);
        \Log::info('SERVICE: Chat', ['chat_data:', $chat_data]);

        $response = $this->post('/prediction/'.$chat_id, $chat_data);

        \Log::info('SERVICE: Chat response', ['response' => $response]);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error Chat: '.$response->status().' - '.$response->reason());

            throw new \Exception('Error: '.$response->status().' - '.$response->reason());
        }

    }
}
