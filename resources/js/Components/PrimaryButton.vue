<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-2 py-1
    bg-indigo-600 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-white dark:text-gray-800
    hover:bg-indigo-700 dark:hover:bg-white
    focus:bg-indigo-700 dark:focus:bg-white
    active:bg-indigo-900 dark:active:bg-gray-300
    focus:outline-none focus:ring-2
    focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
