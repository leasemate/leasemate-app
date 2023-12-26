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

    public function getAllUsers()
    {
        $response = $this->get('/user');
        if($response->successful()) {
            return $response->json();
        } else {
            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());
        }
    }



    public function createUser(array $user_data)
    {

        \Log::info('SERVICE: Creating user', ['post_data:', $user_data]);

        $response = $this->post('/user', $user_data);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error creating user', ['response' => $response]);

            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());

        }
    }

    public function updateUser(string $user_id, array $user_data)
    {
        \Log::info('SERVICE: Updating user', ['user_data:', $user_data]);

        $response = $this->patch('/user/'.$user_id, $user_data);

        \Log::info('SERVICE: Updating response', ['response' => $response]);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error updating user: '.$response->status()." - ".$response->reason());

            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());
        }
    }

    public function deleteUser(string $user_id)
    {
        \Log::info('SERVICE: Deleting user', ['user_id:', $user_id]);

        $response = $this->delete('/user/'.$user_id);

        \Log::info('SERVICE: Deleting response', ['response' => $response]);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error deleting user: '.$response->status()." - ".$response->reason());

            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());
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

            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());
        }

    }

    public function getMessages(string $session_id, $data)
    {
        \Log::info('SERVICE: Getting messages', ['session_id:', $session_id]);

        $response = $this->get('/sessions/'.$session_id.'/memory', $data);

        if ($response->successful()) {

            return $response->json();
        } else {
            \Log::error('SERVICE: Error getting messages', ['response' => $response]);

            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());
        }
    }

    public function deleteMessages(string $session_id)
    {
        \Log::info('SERVICE: Deleting messages', ['session_id:', $session_id]);

        $response = $this->delete('/sessions/'.$session_id.'/memory');

        \Log::info('SERVICE: Deleting messages response', ['response' => $response]);

        if($response->successful() || $response->notFound()) {
            return $response->json();

        } else {
            \Log::error('SERVICE: Error deleting messages', ['response' => $response]);

            throw new \Exception("Error: ".$response->status()." - ".$response->reason(), $response->status());
        }


    }

}
