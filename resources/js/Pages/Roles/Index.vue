<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, Link, router } from '@inertiajs/vue3'
import { ref } from 'vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import DangerButton from '@/Components/DangerButton.vue'
import Modal from '@/Components/Modal.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import Button from '@/Components/Button.vue'
import Table from '@/Components/Table.vue'

const props = defineProps({
    roles: Array,
})

const confirmingDeletion = ref(false)
const roleToDelete = ref(null)

const confirmDeletion = (role) => {
    confirmingDeletion.value = true
    roleToDelete.value = role
}

const destroyRole = () => {

    closeModal()

    router.delete(route('roles.destroy', roleToDelete.value), {
        preserveScroll: true,
        onError: (error) => {
            toast.error(error)
        },
    })
}

const closeModal = () => {
    confirmingDeletion.value = false
}

</script>

<template>

    <Head title="Users" />

    <AuthenticatedLayout>

        <template #header> Roles</template>

        <div class="flex justify-end">
            <PrimaryLink
                :href="route('roles.create')"
                class="mb-4"
                icon-left="plus"></PrimaryLink>

        </div>

        <Table>

            <template #head>
                <tr>
                    <th class="px-6 py-3" scope="col">
                        Role
                    </th>
                    <th class="px-6 py-3" scope="col">
                        Permissions
                    </th>

                    <th class="px-6 py-3" scope="col">
                        Action
                    </th>
                </tr>
            </template>

            <template #body>

                <tr v-for="role in roles"
                    class="bg-white border-b border-gray-100 dark:bg-zinc-700 dark:border-zinc-600">

                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
                        {{ role.name }}
                    </th>
                    <td class="px-6 py-4">
                        <span
                            class="badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20">
                            <template v-if="role.name =='Admin'">
                                All Permissions
                            </template>
                            <template v-else>
                                {{ role.permissions.length }}
                            </template>
                        </span>
                    </td>

                    <td class="px-6 py-4 space-x-2">
                        <Link
                            v-if="role.name != 'Admin'"
                            :href="route('roles.edit', role)"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                        </Link>

                        <Button
                            v-if="role.can_delete"
                            class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                            @click="confirmDeletion(role)">Delete
                        </Button>
                    </td>

                </tr>

            </template>

        </Table>

        <Modal :show="confirmingDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this role?
                </h2>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel</SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        @click="destroyRole()"
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
