<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ReaiProcessor
{
    private $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('reai_api.base_url');
    }

    public function hello()
    {
        $endpoint = '/hello';

        return $this->makeRequest($endpoint);
    }

    public function processFile($file)
    {
        $endpoint = '/process-file';

        return $this->makeRequest($endpoint, [
            'file' => $file
        ]);
    }

    public function makeRequest($endpoint, $method = 'GET', $data = [])
    {
        $url = $this->baseUrl . $endpoint;

        $response = Http::get($url, $data);

        return json_decode($response, true);
    }
}
