<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class LeasemateApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('leasemate-api', function () {
            return new \App\Services\LeasemateApi(
                config('services.leasemate_api.base_url'),
                config('services.leasemate_api.api_key')
            );
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
