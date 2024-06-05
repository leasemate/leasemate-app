<script setup>
import BoxIcon from "@/Components/BoxIcon.vue"

defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    iconLeft: String,
    iconRight: String,
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-3 py-2 uppercase text-xs tracking-widest
    bg-indigo-600 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-white dark:text-gray-800
    hover:bg-indigo-700 dark:hover:bg-white
    focus:bg-indigo-700 dark:focus:bg-white
    active:bg-indigo-900 dark:active:bg-gray-300
    focus:outline-none focus:ring-2
    focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
        <BoxIcon
            v-if="iconLeft"
            :class="`bx-${iconLeft}`"
        />
        <slot />
        <BoxIcon
            v-if="iconRight"
            :class="`bx-${iconRight} ml-2`"
        />
    </button>
</template>
