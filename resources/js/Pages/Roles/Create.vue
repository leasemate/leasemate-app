<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { ref, onMounted, watch } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Checkbox from "@/Components/Checkbox.vue";
import DefaultForm from "@/Components/DefaultForm.vue";
import RoleForm from "./Partials/RoleForm.vue";

const props = defineProps({
    permissions: Object
});

</script>

<template>
    <Head title="Roles" />
    <AuthenticatedLayout>

        <template #header> Create Role </template>

        <RoleForm
            :permissions="props.permissions"
        />

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
