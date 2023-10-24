<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ReaiProcessor
{
    private $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('services.reai_api.base_url');
    }

    public function poke()
    {
        $endpoint = $this->getEndpoint('/poke');

        return $this->makeRequest()->post($endpoint);
    }

    public function chat($chat_uuid, $message)
    {
        $post_data = [
            'chat_id' => $chat_uuid,
            'user_id' => auth()->user()->id,
            'user_message' => $message
        ];
        Log::info('SERVICE: Chat', ['post_data:', $post_data]);

        return $this->post("/chat", $post_data);
    }

    public function processFile($file_path)
    {
        Log::info('SERVICE: Processing file', ['file_path:', $file_path]);

        $post_data = [
            'file_path' => $file_path,
            'delete_original' => true
        ];

        $response = Http::post(
            $this->getEndpoint('/process_upload'),
            $post_data
        );

        Log::info('response: '. $response->status());
        Log::error('Error processing file', ['response' => $response]);

        if($response->failed() && $response->status() === 500) {

            return json_encode(['status' => 500, 'message'=> 'Server Error']);
        }

        return $response->json();
    }

    public function post($endpoint, $data=[])
    {
        Log::info("Endpoint: ".$this->getEndpoint($endpoint));
        return $this->makeRequest()->post($this->getEndpoint($endpoint), $data);
    }

    public function makeRequest()
    {
        return Http::acceptJson()
            ->contentType('application/json')
            ->withHeaders([
                'x-api-key' => config('services.reai_api.api_key'),
            ]);
    }

    public function getBaseUrl()
    {
        return $this->baseUrl;
    }

    /**
     * @param $endpoint
     * @return string
     */
    public function getEndpoint($endpoint): string
    {
        return $this->baseUrl.$endpoint;
    }
}
