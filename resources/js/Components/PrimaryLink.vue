<script setup>
import { Link } from '@inertiajs/vue3'
import BoxIcon from '@/Components/BoxIcon.vue'

defineProps({
    classes: String,
    iconLeft: String,
    iconRight: String,
})
</script>

<template>
    <Link
        :classNames="classes"
        class="inline-flex items-center px-4 py-2 bg-indigo-600 dark:bg-indigo-300 border border-transparent rounded-md font-semibold text-xs text-white
        dark:text-gray-800 dark:hover:text-gray-200 uppercase tracking-widest hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:bg-indigo-700 dark:focus:bg-white active:bg-indigo-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
    >
        <BoxIcon
            v-if="iconLeft"
            :class="`bx-${iconLeft}`"
        />
        <slot />
        <BoxIcon
            v-if="iconRight"
            :class="`bx-${iconRight} ml-2`"
        />
    </Link>
</template>
