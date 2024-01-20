<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ReaiProcessor
{
    private $baseUrl;
    private $apiKey;

    private $baseData;

    public function __construct($base_url, $api_key)
    {
        $this->baseUrl = $base_url;
        $this->apiKey = $api_key;

        $this->baseData = [
            'tenant_id' => tenant('id'),
            'tenant_domain' => explode(".", tenant('domain'))[0],
            'user_id' => auth()->user()->id ?? null,
        ];
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
            'user_message' => $message
        ];
        Log::info('SERVICE: Chat', ['post_data:', $post_data]);

        return $this->send("post", "/chat", $post_data);
    }

    public function registerDocumentUpload($asset_id, $lease_id, $storedName)
    {

        $post_data =[
            'classification' => 'lease',
            'sub_classification' => 'original',
            'asset_id' => $asset_id,
            'document_id' => $lease_id,
            's3_object' => $storedName,
        ];

        Log::info('SERVICE: Registering lease upload', ['post_data:', $post_data]);

        return $this->send("post", "/register_document_upload", $post_data);
    }

    public function registerTenant($tenant_id, $tenant_domain)
    {
        $post_data =[
            'tenant_id' => $tenant_id,
            'tenant_domain' => $tenant_domain,
        ];

        Log::info('SERVICE: Registering tenant', ['post_data:', $post_data]);

        return $this->send('post',"/register_tenant", $post_data);
    }

    public function deleteFile($s3_object)
    {
        $post_data = [
            's3_object' => $s3_object
        ];

        Log::info('REAI SERVICE: Deleting file', ['post_data:', $post_data]);

        return $this->send("delete", "/document", $post_data);
    }

//    public function processFile($file_path)
//    {
//        Log::info("SERVICE: Processing file', ['file_path:', $file_path]);
//
//        $post_data = [
//            'file_path' => $file_path,
//            'delete_original' => true
//        ];
//
//        $response = Http::post(
//            $this->getEndpoint('/process_upload'),
//            $post_data
//        );
//
//        Log::info('response: '. $response->status());
//        Log::error('Error processing file', ['response' => $response]);
//
//        if($response->failed() && $response->status() === 500) {
//
//            return json_encode(['status' => 500, 'message'=> 'Server Error']);
//        }
//
//        return $response->json();
//    }

    public function send($method='get', $endpoint, $data=[])
    {
        $callStack = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2);
        $callingFunction='';
        // Check if there is a calling function
        if (isset($callStack[1]['function'])) {
            $callingFunction = $callStack[1]['function'];
        }

        Log::info('SEND REQUEST: '.$method.': '.$callingFunction, ['post_data:', array_merge($this->baseData, $data)]);

        return $this->makeRequest()->$method($this->getEndpoint($endpoint), array_merge($this->baseData, $data));
    }

    public function get($endpoint, $data=[])
    {
        return $this->send("get", $endpoint, $data);
    }

    public function post($endpoint, $data=[])
    {
        return $this->send("post", $endpoint, $data);
    }

    public function delete($endpoint, $data=[])
    {
        return $this->send("delete", $endpoint, $data);
    }

    public function makeRequest()
    {
        return Http::acceptJson()
            ->contentType('application/json')
            ->withHeaders([
                'Authorization' => 'Bearer '.$this->apiKey,
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
