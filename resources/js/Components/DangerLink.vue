<script setup>
import {Link} from "@inertiajs/vue3";
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <Link
        :type="type"
        class="btn text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600"
    >
        <slot />
    </Link>
</template>
