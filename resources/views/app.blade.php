<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
        content="Leasemate - Property Management Software"
        name="description"
    />

    <link rel="icon" href="{{ Vite::asset('resources/images/icon-32x32.png') }}" sizes="32x32" />
    <link rel="icon" href="{{ Vite::asset('resources/images/icon-192x192.png') }}" sizes="192x192" />
    <link rel="apple-touch-icon" href="{{ Vite::asset('resources/images/icon-192x192.png') }}" />

    <title inertia>{{ config('app.name') }}</title>

    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased" data-mode="light" data-sidebar-size="lg">
@inertia
</body>
</html>
