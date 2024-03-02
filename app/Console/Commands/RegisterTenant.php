<?php

namespace App\Console\Commands;

use App\Facades\LeasemateApi;
use App\Models\Domain;
use Illuminate\Console\Command;
use Illuminate\Contracts\Console\PromptsForMissingInput;

class RegisterTenant extends Command implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenants:register {tenant_domain : The domain of the tenant to register}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Register a tenant with the REAI API';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $tenantDomain = $this->argument('tenant_domain');

        $this->info('Registering tenant with domain: ' . $tenantDomain);

        $domain = Domain::where('domain', $tenantDomain)->first();

        $registerTenantResponse = LeasemateApi::registerTenant($domain->tenant_id, explode(".", $domain->domain)[0]);

        $this->info('Domain Registered!');

    }
}
