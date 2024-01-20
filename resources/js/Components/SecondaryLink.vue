<script setup>
import {Link} from "@inertiajs/vue3";
defineProps({
    type: {
        type: String,
        default: 'internal',
    },
});
</script>

<template>

    <Link
        v-if="type=='internal'"
        class="inline-flex items-center px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-25 transition ease-in-out duration-150">
        <slot />
    </Link>

    <a
        v-else
        class="inline-flex items-center px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-25 transition ease-in-out duration-150"
        target="_blank"
        rel="noopener noreferrer"
    >
        <slot />
    </a>

</template>
