<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Laravel\Pennant\Feature;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'app_name' => config('app.name'),
            'env' => config('app.env'),
            'app_website' => config('app.website_url'),
            'session' => fn () => $request->session()->all(),
            'central_domain' => config('app.central_domain'),
            'tenant_id' => tenant('id'),
            'tenant_name' => tenant('company_name'),
            'tenant_domain' => tenant('domain'),
            'ziggy' => fn () => [
                ...(new Ziggy())->toArray(),
                'location' => $request->url(),
            ],
            'csrf' => csrf_token(),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'warning' => fn () => $request->session()->get('warning'),
                'error' => fn () => $request->session()->get('error'),
                'info' => fn () => $request->session()->get('info'),
            ],
            'features' => $this->getFeatures(),
            'my_notifications' => fn () => auth()->check() && tenant('id') ? $request->user()->notifications()->limit(5)->get() : [],
            'notification_count' => fn () => auth()->check() && tenant('id') ? ($request->user()->unreadNotifications()->count() ?? 0) : 0,
        ]);
    }

    private function getFeatures()
    {
        $tenant = tenant();
        return tenancy()->central(function () use ($tenant) {
            return Feature::for($tenant)->all();
        });
    }
}
