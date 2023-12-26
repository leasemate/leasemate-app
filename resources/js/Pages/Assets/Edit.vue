<script setup>

import { onMounted, ref } from "vue";
import {Head, Link, useForm} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

import Form from "@/Pages/Assets/Form.vue";

const props = defineProps({
    asset: Object,
    associates: Array,
});

</script>

<template>

    <Head title="Assets" />

    <AuthenticatedLayout>

        <template #header> Edit Asset </template>

        <Form
            :asset="asset"
            :associates="associates"
        />

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
