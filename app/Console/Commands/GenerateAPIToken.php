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
    protected $signature = 'auth:generate-api-token';

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
        $this->info('API token created: ' . ApiToken::factory()->create()->api_token);
    }
}
