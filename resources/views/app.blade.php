<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

{{--        <meta name="csrf-token" content="{{ csrf_token() }}">--}}

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.5.0/dist/alpine.min.js"></script>

        <!-- Scripts -->
        @routes
        @vite([
            'resources/js/head.js',
            'resources/js/config.js',
            'resources/js/app.js',
            "resources/js/Pages/{$page['component']}.vue"
            ])
        @inertiaHead
    </head>
    <body class="font-sans antialiased text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-900">

        @inertia

        <!-- Global Vendor, plugins & Activation JS -->

<!--start::Global javascript (used in all pages)-->

{{--<script src="../vendors/flatpickr/dist/flatpickr.min.js"></script><!-- input date -->--}}
{{--<script src="../vendors/flatpickr/dist/plugins/rangePlugin.js"></script><!-- input range date -->--}}
{{--<script src="../vendors/@yaireo/tagify/dist/tagify.min.js"></script><!-- input tags -->--}}
{{--<script src="../vendors/pristinejs/dist/pristine.min.js"></script><!-- form validation -->--}}
{{--<script src="../vendors/simple-datatables/dist/umd/simple-datatables.js"></script><!--sort table-->--}}
<!--end::Global javascript (used in all pages)-->

<!-- Minify Global javascript (for production purpose) -->
<!-- <script src="../dist/js/scripts.js"></script> -->
<!--start::Demo javascript ( initialize global javascript )-->
{{--<script src="../src/js/demo.js"></script>--}}

<!--start::Customizer js ( Only for demo purpose )-->
{{--<script src="../src/js/customizer.js"></script>--}}
{{--<script src="../src/js/prism.js"></script>--}}


{{--        <script>--}}
{{--            window.csrf_token = @json(csrf_token());--}}
{{--        </script>--}}
    </body>
</html>
