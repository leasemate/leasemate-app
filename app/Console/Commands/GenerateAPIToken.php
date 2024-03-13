<?php

namespace App\Console\Commands;

use App\Models\ApiToken;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class GenerateAPIToken extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'auth:generate-api-token {--fresh : Delete all existing tokens}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Use this command to generate an API token for the file processor.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Create API token:');

        $fresh = $this->option('fresh');

        if ($fresh) {
            $this->info('Deleting all existing tokens...');
            ApiToken::truncate();
        }

        $apiToken = ApiToken::create([
            'api_token' => hash('sha256', Str::uuid()->toString()),
        ]);

        $this->info('API token: '.$apiToken->api_token);

    }
}
