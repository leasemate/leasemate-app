<?php

namespace App\Providers;

use App\Models\Tenant;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature;

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
        Feature::define('dashboard', fn (Tenant $tenant) => $tenant->email == 'demo@leasemate.ai');

        JsonResource::withoutWrapping();
    }
}
