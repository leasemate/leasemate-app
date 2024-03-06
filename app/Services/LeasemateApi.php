<?php

namespace App\Services;

use App\Models\Asset;
use App\Models\Document;
use App\Models\Lease;
use App\Models\Tenant;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use PhpParser\Comment\Doc;

class LeasemateApi
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

    ###################### Tenants ######################

    public function registerTenant(Tenant $tenant)
    {
        Log::info('SERVICE: Registering tenant:');

        $post_data = [
            'tenant_id' => $tenant->id,
            'tenant_domain' => $this->getSubDomain($tenant->domain),
        ];

        return $this->send('post',"/tenants", $post_data);
    }

    public function updateTenant(Tenant $tenant_id)
    {
        Log::info('SERVICE: Update tenant:');

        return $this->send('post',"/tenants/{$tenant_id}");
    }

    public function deleteTenant(Tenant $tenant)
    {
        Log::info('SERVICE: Delete tenant:');

        $post_data = [
            'tenant_id' => (string) $tenant->id,
            'tenant_domain' => (string) $this->getSubDomain($tenant->domain),
        ];

        return $this->send('delete',"/tenants/{$tenant->id}", $post_data);
    }

    ###################### Assets ######################

    public function registerAsset(Asset $asset)
    {
        Log::info('SERVICE: Registering asset:');

        $post_data = [
            'asset_id' => (int) $asset->id,
            'asset_name' => (string) $asset->name,
        ];

        return $this->send('post',"/assets", $post_data);
    }

    public function updateAsset(Asset $asset)
    {
        Log::info('SERVICE: Update asset:');

        return $this->send('post',"/assets/{$asset->id}");
    }

    public function deleteAsset(Asset $asset)
    {
        Log::info('SERVICE: Delete asset:');

        return $this->send('delete',"/assets/{$asset->id}");
    }

    ###################### Documents ######################

    public function registerDocument(
        Asset $asset,
        Lease $lease,
        Document $document,
        $storedName,
        $classification = 'lease',
    ) {
        $post_data =[
            'classification' => $classification,
            'asset_id' => (int) $asset->id,
            'asset_name' => (string) $asset->name,
            's3_bucket' => config('filesystems.disks.s3.bucket'),
            's3_object' => $storedName,
        ];

        if($document->collection_name === 'amendment') {
            $post_data['sub_classification'] = 'amendment';
            $post_data['document_id'] = $document->id;
            $post_data['parent_document_id'] = $lease->id;
        } else {
            $post_data['sub_classification'] = 'original';
            $post_data['document_id'] = $lease->id;
            $post_data['parent_document_id'] = null;
        }

        Log::info('SERVICE: Registering lease upload', ['post_data:', $post_data]);

        return $this->send("post", "/documents", $post_data);
    }

    public function restoreDocument($lease)
    {
        Log::info('REAI SERVICE: Restore file', ['lease_id:', $lease->id]);

        return $this->send("post", "/document/{$lease->id}/restore/");
    }

    public function archiveDocument($lease)
    {
        Log::info('REAI SERVICE: Archiving file', ['lease_id:', $lease->id]);

        return $this->send("post", "/document/{$lease->id}/archive/");
    }


    public function deleteDocument($lease)
    {
        Log::info('REAI SERVICE: Deleting file', ['lease_id:', $lease->id]);

        return $this->send("delete", "/document/{$lease->id}");
    }

    ####################################################

    private function getSubDomain($tenant_domain)
    {
        return explode(".", $tenant_domain)[0];
    }

    private function send($method='get', $endpoint, $data=[])
    {
        $callStack = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2);
        $callingFunction='';
        // Check if there is a calling function
        if (isset($callStack[1]['function'])) {
            $callingFunction = $callStack[1]['function'];
        }

        $payload = array_merge($this->baseData, $data);

        Log::info("SEND REQUEST: {$method}: {$endpoint} | method: {$callingFunction}", ['data:', $payload]);

        Log::info($this->getEndpoint($endpoint));

        return $this->makeRequest()->$method($this->getEndpoint($endpoint), $payload);
    }

    private function get($endpoint, $data=[])
    {
        return $this->send("get", $endpoint, $data);
    }

    private function post($endpoint, $data=[])
    {
        return $this->send("post", $endpoint, $data);
    }

    private function delete($endpoint, $data=[])
    {
        return $this->send("delete", $endpoint, $data);
    }

    private function makeRequest()
    {
        return Http::acceptJson()
            ->contentType('application/json')
            ->withHeaders([
                'Authorization' => 'Bearer '.$this->apiKey,
            ]);
    }

    private function getBaseUrl()
    {
        return $this->baseUrl;
    }

    /**
     * @param $endpoint
     * @return string
     */
    private function getEndpoint($endpoint): string
    {
        return $this->baseUrl.$endpoint;
    }
}
