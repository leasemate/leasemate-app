<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head, Link, router} from "@inertiajs/vue3";
import {ref} from "vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Button from "@/Components/Button.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Modal from "@/Components/Modal.vue";
import Table from "@/Components/Table.vue";

const photoPreview = ref(null);

const props = defineProps({
    users: Array,
});

const confirmingDeletion = ref(false);
const userToDelete = ref(null);

const confirmDeletion = (role) => {
    confirmingDeletion.value = true;
    userToDelete.value = role;
};

const destroyUser = () => {

    closeModal();

    router.delete(route('users.destroy', userToDelete.value), {
        preserveScroll: true,
        onError: (error) => {
            toast.error(error);
        }
    });
}

const closeModal = () => {
    confirmingDeletion.value = false;
};

</script>

<template>

    <Head title="Users" />

    <AuthenticatedLayout>

        <template #header> Users </template>

        <div class="flex justify-end">
            <PrimaryLink :href="route('users.create')" class="mb-4">Create User</PrimaryLink>
        </div>

        <Table>

            <template #head>
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role(s)
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </template>


            <template #body>
                <tr v-for="user in users" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">

                        <div v-show="user.profile_photo_url" class="">
                            <span
                                class="block rounded-full w-10 h-10 bg-cover bg-no-repeat bg-center"
                                :style="'background-image: url(\'' + user.profile_photo_url + '\');'"
                            />
                        </div>

                        <div class="text-base font-semibold ml-2 dark:text-gray-100">{{  user.name }}</div>

                    </th>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ user.email }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ user.position ?? '--' }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">

                        <div v-if="user.is_super_admin">
                            <span class="badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20">Super Admin</span>
                        </div>
                        <div class="flex justify-start space-x-2">
                            <span v-for="role in user.roles" class="badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20">{{ role.name }}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4 space-x-2">

                        <Link
                            :href="route('users.edit', user)"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>

                        <Button
                            v-if="!user.is_super_admin"
                            @click="confirmDeletion(user)"
                            class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</Button>

                    </td>
                </tr>
            </template>
        </Table>

        <Modal :show="confirmingDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this user?
                </h2>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        @click="destroyUser()"
                    >
                        Delete
                    </DangerButton>
                </div>
            </div>
        </Modal>

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
