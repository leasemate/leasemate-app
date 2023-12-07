<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {

        return array_merge(parent::share($request), [
//            'auth' => [
//                'user' => $request->user(),
//            ],
            'env' => config('app.env'),
            'tenant_id' => tenant('tenancy_db_name'),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'csrf' => csrf_token(),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'warning' => fn () => $request->session()->get('warning'),
                'error' => fn () => $request->session()->get('error'),
                'info' => fn () => $request->session()->get('info'),
            ],
            'my_notifications' => fn () => auth()->check() ? $request->user()->notifications()->limit(5)->get(): [],
            'notification_count' => fn () => auth()->check() ? ($request->user()->unreadNotifications()->count()??0) : 0,
        ]);
//        return [
//            ...parent::share($request),
//            'auth' => [
//                'user' => $request->user(),
//            ],
//            'ziggy' => fn () => [
//                ...(new Ziggy)->toArray(),
//                'location' => $request->url(),
//            ],
//            'csrf' => csrf_token(),
//            'flash' => [
//                'success' => fn () => $request->session()->get('success'),
//                'warning' => fn () => $request->session()->get('warning'),
//                'error' => fn () => $request->session()->get('error'),
//                'info' => fn () => $request->session()->get('info'),
//            ],
//            'my_notifications' => fn () => auth()->check() ? $request->user()->notifications()->limit(5)->get(): [],
//            'notification_count' => fn () => auth()->check() ? ($request->user()->unreadNotifications()->count()??0) : 0,
//        ];
    }
}
