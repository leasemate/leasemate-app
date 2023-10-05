<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ReaiProcessor
{
    private $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('reai_api.base_url');
    }

    public function poke()
    {
        $endpoint = $this->getEndpoint('/poke');

        return $this->makeRequest()->post($endpoint);
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


//        dump($response->body());
//        dump($response->json());
//        dump($response->object());
////        dump($response->collect($key = null));
//        dump($response->status()); //500
//        dump($response->successful());
////        dump($response->redirect(): bool;
//        dump($response->failed());
//        dump($response->clientError());
////        dump($response->header($header));
//        dump($response->headers());
//
//        dump($response->failed());
//
//        dd($response);
    }

    public function post($endpoint, $data=[])
    {
        return $this->makeRequest()->post($this->getEndpoint($endpoint), $data);
    }

    public function makeRequest()
    {
        return Http::acceptJson()->contentType('application/json');
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
