<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
            content="Tailwind Admin & Dashboard Template"
            name="description"
        />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        @routes
        @vite([
            'resources/js/app.js',
            "resources/js/Pages/{$page['component']}.vue"
            ])
        @inertiaHead

    </head>

    <body data-mode="light" data-sidebar-size="lg">

        @inertia

    </body>
</html>
