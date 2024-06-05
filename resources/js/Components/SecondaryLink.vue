<script setup>
import {Link} from "@inertiajs/vue3";
import BoxIcon from "@/Components/BoxIcon.vue"
defineProps({
    type: {
        type: String,
        default: 'internal',
    },
    iconLeft: String,
    iconRight: String,
    classNames: {
        type: String,
        default: 'inline-flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-md uppercase tracking-widest font-semibold text-xs text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-300 disabled:opacity-25 transition ease-in-out duration-150',
    },
});
</script>

<template>

    <Link
        v-if="type=='internal'"
        :class="classNames"
    >
        <BoxIcon
            v-if="iconLeft"
                 :class="`bx-${iconLeft}`"
        />
        <slot />
        <BoxIcon
            v-if="iconRight"
            :class="`bx-${iconRight}`"
        />
    </Link>

    <a
        v-else
        :class="classNames"
        target="_blank"
        rel="noopener noreferrer"
    >
        <BoxIcon
            v-if="iconLeft"
            :class="`bx-${iconLeft}`"
        />
        <slot />
        <BoxIcon
            v-if="iconRight"
            :class="`bx-${iconRight}`"
        />
    </a>

</template>
