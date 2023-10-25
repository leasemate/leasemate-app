<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ReaiProcessorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('reai_processor', function () {
            return new \App\Services\ReaiProcessor(
                config('services.reai_api.base_url'),
                config('services.reai_api.api_key')
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
