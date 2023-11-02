<?php

namespace App\Services;

use App\Models\User;
use App\Traits\ApiRequestTrait;

class ZepApi
{
    use ApiRequestTrait;

    public function __construct($apiBaseUrl)
    {
        $this->setApiConfig($apiBaseUrl);
    }

    public function createUser(array $user_data)
    {

        \Log::info('SERVICE: Creating user', ['post_data:', $user_data]);

        $response = $this->post('/user', $user_data);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error creating user', ['response' => $response]);

            throw new \Exception("Error: ".$response->status()." - ".$response->reason());
        }
    }

    public function updateUser(int $user_id, array $user_data)
    {
        \Log::info('SERVICE: Updating user', ['user_data:', $user_data]);

        $response = $this->patch('/user/'.$user_id, $user_data);

        \Log::info('SERVICE: Updating response', ['response' => $response]);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error updating user: '.$response->status()." - ".$response->reason());

            throw new \Exception("Error: ".$response->status()." - ".$response->reason());
        }
    }

    public function createSession(array $session_data)
    {
        \Log::info('SERVICE: Creating session', ['post_data:', $session_data]);

        $response = $this->post('/sessions', $session_data);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error creating user', ['response' => $response]);

            throw new \Exception("Error: ".$response->status()." - ".$response->reason());
        }

    }

}
