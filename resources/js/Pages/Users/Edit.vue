<script setup>

import {Head} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Form from "@/Pages/Users/Form.vue";

const props = defineProps({
    user: Object,
    user_roles: Array,
    roles: Object
});



</script>

<template>

    <Head title="Users" />

    <AuthenticatedLayout>

        <template #header> Edit User </template>

        <Form
            :user="props.user"
            :user_roles="user_roles"
            :roles="props.roles"
        />

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
