<script setup>

import { onMounted, ref } from "vue";
import {Head, Link, useForm} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

import Form from "@/Pages/Assets/Form.vue";

</script>

<template>

    <Head title="Assets" />

    <AuthenticatedLayout>

        <template #header> Create Asset </template>

        <Form />

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
