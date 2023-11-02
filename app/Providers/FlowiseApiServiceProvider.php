<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class FlowiseApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('flowise_api', function () {
            return new \App\Services\FlowiseApi(
                config('services.flowise_api.base_url'),
                config('services.flowise_api.api_key'),
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
