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
            'asset_id' => (int) $asset_id,
            'document_id' => (int) $lease_id,
            's3_bucket' => config('filesystems.disks.s3.bucket'),
            's3_object' => $storedName,
        ];

        Log::info('SERVICE: Registering lease upload', ['post_data:', $post_data]);

        return $this->send("post", "/documents", $post_data);
    }

    public function registerTenant($tenant_id, $tenant_domain)
    {
        $post_data =[
            'tenant_id' => $tenant_id,
            'tenant_domain' => $tenant_domain,
        ];

        Log::info('SERVICE: Registering tenant', ['post_data:', $post_data]);

        return $this->send('post',"/tenants", $post_data);
    }

    public function archiveFile($lease_id)
    {
        Log::info('REAI SERVICE: Archiving file', ['lease_id:', $lease_id]);

        return $this->send("delete", "/document/delete/".explode(".", tenant('domain'))[0]."/".$lease_id);
    }


    public function deleteFile($lease_id)
    {
        Log::info('REAI SERVICE: Deleting file', ['lease_id:', $lease_id]);

        return $this->send("delete", "/document/permanent_delete/".explode(".", tenant('domain'))[0]."/".$lease_id);
    }

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
