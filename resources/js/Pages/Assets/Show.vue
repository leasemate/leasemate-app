<script setup>

import {Head} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const props = defineProps({
    asset: Object,
});

</script>

<template>

    <Head title="Asset" />

    <AuthenticatedLayout>

        <template #header> Asset - {{ asset.name }} </template>

        <div class="">

            <h1>{{ asset.name }}</h1>

            <h2>{{ asset.address }}</h2>

            <h3>{{ asset.gross_leasable_area }}</h3>

        </div>



    </AuthenticatedLayout>

</template>

<style scoped>

</style>
