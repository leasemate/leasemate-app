<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;
use Stancl\Tenancy\Resolvers\PathTenantResolver;
use App\Tenancy\CustomPathTenantResolver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->singleton(PathTenantResolver::class, function () {
            return new CustomPathTenantResolver(Cache::getFacadeRoot());
        });


        JsonResource::withoutWrapping();
    }
}
