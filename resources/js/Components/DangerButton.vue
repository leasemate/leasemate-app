<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <!-- btn text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600-->
    <button
        class="inline-flex items-center px-2 py-1
        text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600
         rounded-md font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
    >
        <slot />
    </button>
</template>
