<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import VueBasicAlert from "vue-basic-alert";
import {ref} from "vue";

const alert = ref(null);

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            Profile
        </template>

        <div class="card">
              <div class="p-4 sm:p-8">
                  <UpdateProfileInformationForm
                      :must-verify-email="mustVerifyEmail"
                      :status="status"
                      class="max-w-xl"
                  />
              </div>
        </div>

        <div class="card">
              <div class="p-4 sm:p-8">
                  <UpdatePasswordForm class="max-w-xl" />
              </div>
        </div>
        <div class="card">
              <div class="p-4 sm:p-8">
                  <DeleteUserForm class="max-w-xl" />
              </div>

        </div>

        <vue-basic-alert
            :duration="300"
            @close="true"
            ref="alert" />

    </AuthenticatedLayout>
</template>
