<?php

namespace App\Models;

use App\Facades\LeasemateApi;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains;

    public static function booted()
    {
        static::creating(function ($tenant) {

            $tenant->password = bcrypt($tenant->password);

            Log::info('Tenant created', ['tenant' => $tenant]);

            Log::info('Send tenant domain to REAI API');

            // attempt to register the tenant with the REAI API here,
            // if there is an exception, we will catch it and not create the tenant or run job pipeline
            $registerTenantResponse = LeasemateApi::registerTenant($tenant);

            if($registerTenantResponse->failed()) {
                throw new \Exception("{$registerTenantResponse->status()}: {$registerTenantResponse->reason()}: API Error: Unable to register tenant.");
            }

            Log::info('registerTenantResponse', ['registerTenantResponse' => $registerTenantResponse]);

        });

        static::deleting(function ($tenant) {

            Log::info('Tenant deleted', ['tenant' => $tenant]);

            // attempt to delete the tenant with the REAI API here,
            // if there is an exception, we will catch it and not delete the tenant or run job pipeline
            $deleteTenantResponse = LeasemateApi::deleteTenant($tenant);

            if($deleteTenantResponse->failed()) {
                throw new \Exception("{$deleteTenantResponse->status()}: {$deleteTenantResponse->reason()}: API Error: Unable to delete tenant.");
            }

            Log::info('deleteTenantResponse', ['deleteTenantResponse' => $deleteTenantResponse]);
        });
    }

    public function users()
    {
        return $this->belongsToMany(CentralUser::class, 'tenant_users', 'tenant_id', 'global_user_id', 'id', 'global_id')
            ->using(TenantPivot::class);
    }

}
