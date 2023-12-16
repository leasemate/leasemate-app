<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
});

</script>

<template>
    <Link :href="href" class="pl-6 pr-4 py-3 block text-sm font-medium text-gray-700 ease-linear hover:text-violet-500 hover:bg-indigo-50 dark:hover:bg-gray-700 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
        <slot />
    </Link>
</template>

