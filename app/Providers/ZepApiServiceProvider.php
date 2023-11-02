<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ZepApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('zep_api', function () {
            return new \App\Services\ZepApi(
                config('services.zep_api.base_url')
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
