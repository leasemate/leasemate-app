<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head} from "@inertiajs/vue3";
import Form from "@/Pages/Users/Form.vue";

const props = defineProps({
    roles: Object
});

</script>

<template>
    <Head title="Users" />
    <AuthenticatedLayout>

        <template #header> Users </template>

        <Form :roles="props.roles" />

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
