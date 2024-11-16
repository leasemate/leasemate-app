<?php

namespace App\Services;

use App\Models\Asset;
use App\Models\Document;
use App\Models\Lease;
use App\Models\Tenant;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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
            'tenant_domain' => explode('.', tenant('domain'))[0],
            'user_id' => auth()->user()->id ?? null,
        ];
    }

    public function poke()
    {
        $endpoint = $this->getEndpoint('/poke');

        return $this->makeRequest()->post($endpoint);
    }

    private function getEndpoint($endpoint): string
    {
        return $this->baseUrl.$endpoint;
    }

    //##################### Tenants ######################

    private function post($endpoint, $data = [])
    {
        return $this->send('post', $endpoint, $data);
    }

    private function send($method, $endpoint, $data = [])
    {
        //        $callStack = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2);
        //        $callingFunction = '';
        //        // Check if there is a calling function
        //        if (isset($callStack[1]['function'])) {
        //            $callingFunction = $callStack[1]['function'];
        //        }

        $payload = array_merge($this->baseData, $data);

        //        Log::info("SEND REQUEST: {$method}: {$endpoint} | method: {$callingFunction}", ['data:', $payload]);

        //        Log::info($this->getEndpoint($endpoint));

        return $this->makeRequest()->$method($this->getEndpoint($endpoint), $payload);
    }

    private function makeRequest()
    {
        return Http::acceptJson()
            ->contentType('application/json')
            ->withHeaders([
                'Authorization' => 'Bearer '.$this->apiKey,
            ]);
    }

    //##################### Assets ######################

    public function chat($chat_uuid, $message)
    {
        $post_data = [
            'chat_id' => $chat_uuid,
            'user_message' => $message,
        ];
        Log::info('SERVICE: Chat', ['post_data:', $post_data]);

        return $this->send('post', '/chat', $post_data);
    }

    public function registerTenant(Tenant $tenant)
    {
        Log::info('SERVICE: Registering tenant:');

        $post_data = [
            'tenant_id' => $tenant->id,
            'tenant_domain' => $this->getSubDomain($tenant->domain),
        ];

        return $this->send('post', '/tenants', $post_data);
    }

    private function getSubDomain($tenant_domain)
    {
        return explode('.', $tenant_domain)[0];
    }

    //##################### Documents ######################

    public function updateTenant(Tenant $tenant_id)
    {
        Log::info('SERVICE: Update tenant:');

        return $this->send('post', "/tenants/{$tenant_id}");
    }

    public function deleteTenant(Tenant $tenant)
    {
        Log::info('SERVICE: Delete tenant:');

        $post_data = [
            'tenant_id' => (string) $tenant->id,
            'tenant_domain' => (string) $this->getSubDomain($tenant->domain),
        ];

        return $this->send('delete', "/tenants/{$tenant->id}", $post_data);
    }

    public function registerAsset(Asset $asset)
    {
        Log::info('SERVICE: Registering asset:');

        $post_data = [
            'asset_id' => (int) $asset->id,
            'asset_name' => (string) $asset->name,
        ];

        return $this->send('post', '/assets', $post_data);
    }

    public function updateAsset(Asset $asset)
    {
        $post_data = [
            'asset_name' => (string) $asset->name,
        ];

        Log::info('SERVICE: Update asset:', $post_data);

        return $this->send('post', "/assets/{$asset->id}", $post_data);
    }

    //###################################################

    public function deleteAsset(Asset $asset)
    {
        Log::info('SERVICE: Delete asset:');

        return $this->send('delete', "/assets/{$asset->id}");
    }

    public function registerDocument(
        Asset $asset,
        Lease $lease,
        Document $document,
        $storedName,
        $classification = 'lease',
    ) {
        $post_data = [
            'classification' => $classification,
            'asset_id' => (int) $asset->id,
            'asset_name' => (string) $asset->name,
            's3_bucket' => config('filesystems.disks.s3.bucket'),
            's3_object' => $storedName,
        ];

        if ($document->collection_name === 'amendment') {
            $post_data['sub_classification'] = 'amendment';
            $post_data['document_id'] = $document->id;
            $post_data['parent_document_id'] = $lease->current_lease->lease_document->id;
        } else {
            $post_data['sub_classification'] = 'original';
            $post_data['document_id'] = $document->id;
            $post_data['parent_document_id'] = null;
        }

        Log::info('SERVICE: Registering document upload', ['post_data:', $post_data]);

        return $this->send('post', '/documents', $post_data);
    }

    public function restoreDocument(Document $document)
    {
        Log::info('REAI SERVICE: Restore document', ['document_id:', $document->id]);

        return $this->send('post', "/documents/{$document->id}/restore/");
    }

    public function archiveDocument(Document $document)
    {
        Log::info('REAI SERVICE: Archiving document', ['document_id:', $document->id]);

        return $this->send('post', "/documents/{$document->id}/archive/");
    }

    public function deleteDocument(Document $document)
    {
        Log::info('REAI SERVICE: Deleting document', ['document_id:', $document->id]);

        return $this->send('delete', "/documents/{$document->id}");
    }

    private function get($endpoint, $data = [])
    {
        return $this->send('get', $endpoint, $data);
    }

    private function delete($endpoint, $data = [])
    {
        return $this->send('delete', $endpoint, $data);
    }

    private function getBaseUrl()
    {
        return $this->baseUrl;
    }
}
