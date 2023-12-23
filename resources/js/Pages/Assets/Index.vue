<script setup>

import {Head} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
</script>

<template>

    <Head title="Assets" />

    <AuthenticatedLayout>

        <template #header> Assets </template>

        <PrimaryLink
            :href="route('assets.create')">Create Asset</PrimaryLink>

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
