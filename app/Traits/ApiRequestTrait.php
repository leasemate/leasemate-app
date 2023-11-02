<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;

trait ApiRequestTrait
{
    protected $baseUrl;
    protected $apiKey;

    public function setApiConfig($baseUrl, $apiKey=null)
    {
        $this->baseUrl = $baseUrl;
        $this->apiKey = $apiKey;
    }

    public function post($endpoint, $data=[])
    {
        return $this->makeRequest()->post($this->getEndpoint($endpoint), $data);
    }

    public function put($endpoint, $data=[])
    {
        return $this->makeRequest()->put($this->getEndpoint($endpoint), $data);
    }

    public function patch($endpoint, $data=[])
    {

        return $this->makeRequest()->patch($this->getEndpoint($endpoint), $data);
    }

    public function delete($endpoint, $data=[])
    {
        return $this->makeRequest()->delete($this->getEndpoint($endpoint), $data);
    }

    protected function makeRequest()
    {

        $headers = [];

        if($this->apiKey) {
            $headers['Authorization'] = 'Bearer ' . $this->apiKey;
        }

        return Http::acceptJson()
            ->contentType('application/json')
            ->withHeaders($headers);
    }

    protected function getBaseUrl()
    {
        return $this->baseUrl;
    }

    protected function getEndpoint($endpoint)
    {
        return $this->baseUrl . $endpoint;
    }
}
