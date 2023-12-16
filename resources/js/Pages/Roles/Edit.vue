<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head} from "@inertiajs/vue3";
import RoleForm from "@/Pages/Roles/Partials/RoleForm.vue";

const props = defineProps({
    role: Object,
    role_permissions: Array,
    permissions: Object
});


</script>

<template>

    <Head title="Roles" />

    <AuthenticatedLayout>

        <template #header> Update Role </template>

        <RoleForm
            :role="props.role"
            :role_permissions="props.role_permissions"
            :permissions="props.permissions" />

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
