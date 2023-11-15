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
        class="btn text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-500/30 active:bg-green-600 active:border-green-600"
    >
        <slot />
    </Link>
</template>
