<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ReaiProcessor
{
    private $baseUrl;
    private $apiKey;

    public function __construct($base_url, $api_key)
    {
        $this->baseUrl = $base_url;
        $this->apiKey = $api_key;
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

    public function registerLeaseUpload($asset_id, $lease_id, $storedName)
    {

        $post_data =[
            'classification' => 'lease',
            'sub_classification' => 'original',
            'tenant_id' => tenant('id'),
            'user_id' => auth()->user()->id,
            'asset_id' => $asset_id,
            'document_id' => $lease_id,
            's3_object' => $storedName,
        ];

        Log::info('SERVICE: Registering lease upload', ['post_data:', $post_data]);

        return $this->post("/register_document_upload", $post_data);
    }

    public function registerTenant($tenant_id, $tenant_domain)
    {
        $post_data =[
            'tenant_id' => $tenant_id,
            'tenant_domain' => $tenant_domain,
        ];

        Log::info('SERVICE: Registering tenant', ['post_data:', $post_data]);

        return $this->post("/register_tenant", $post_data);
    }

    public function deleteFile($s3_object)
    {
        $post_data = [
            's3_object' => $s3_object
        ];

        Log::info($post_data);

        return $this->delete("/document", $post_data);
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

        return $this->makeRequest()->post($this->getEndpoint($endpoint), $data);
    }

    public function delete($endpoint, $data=[])
    {
        return $this->makeRequest()->delete($this->getEndpoint($endpoint), $data);
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
