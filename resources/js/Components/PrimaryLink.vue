<script setup>
import {Link} from "@inertiajs/vue3";
</script>

<template>
    <Link
        class="btn text-white bg-violet-500 border-violet-500 hover:bg-violet-600 hover:border-violet-600 focus:bg-violet-600 focus:border-violet-600 focus:ring focus:ring-violet-500/30 active:bg-violet-600 active:border-violet-600"
    >
        <slot />
    </Link>
</template>
