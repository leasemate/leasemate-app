<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { defineProps } from 'vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import DangerButton from '@/Components/DangerButton.vue'
import { router } from '@inertiajs/vue3'
import PrimaryLink from '@/Components/PrimaryLink.vue'

defineProps({
    tenants: {
        type: Object,
    },
})

const deleteTenant = (tenant) => {

    if (confirm('Are you sure you want to delete this tenant?') === false) return

    router.delete(route('tenants.destroy', tenant), {
        preserveState: false,
    })

}

const forceLoginTenant = (tenant) => {
    router.post(route('tenants.force-login', tenant), {
        preserveState: false,
    })
}

</script>

<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Tenants
            </h2>
        </template>

        <div class="py-12">

            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">

                <div class="flex justify-end">
                    <PrimaryLink :href="route('tenants.create')" as="button" class="">
                        Create Tenant
                    </PrimaryLink>
                </div>

                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">

                    <div>
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-sm text-gray-700 dark:text-gray-100 bg-gray-50 dark:bg-zinc-600">
                            <tr>
                                <th class="px-6 py-3" scope="col">
                                    #
                                </th>
                                <th class="px-6 py-3" scope="col">
                                    Domain
                                </th>
                                <th class="px-6 py-3" scope="col">
                                    Name
                                </th>
                                <th class="px-6 py-3" scope="col">
                                    Email
                                </th>
                                <th class="px-6 py-3" scope="col">
                                    Login
                                </th>
                                <th class="px-6 py-3" scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="tenant in tenants"
                                class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                <th class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100"
                                    scope="row">
                                    {{ tenant.id }}
                                </th>
                                <td class="px-6 py-3.5 dark:text-zinc-100">
                                    <a :href="`http://${tenant.domain}`" target="_blank">
                                        {{ tenant.domain }}
                                        <i class="mdi mdi-arrow-top-right-bold-box-outline"></i>
                                    </a>
                                </td>
                                <td class="px-6 py-3.5 dark:text-zinc-100">
                                    {{ tenant.name }}
                                </td>
                                <td class="px-6 py-3.5 dark:text-zinc-100">
                                    {{ tenant.email }}
                                </td>
                                <td class="px-6 py-3.5 dark:text-zinc-100">
                                    <SecondaryButton @click="forceLoginTenant(tenant)">
                                        Login
                                    </SecondaryButton>
                                </td>
                                <td class="px-6 py-3.5 dark:text-zinc-100">
                                    <DangerButton class="justify-end" @click="deleteTenant(tenant)">
                                        Delete
                                    </DangerButton>
                                </td>
                            </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>

    </AppLayout>
</template>
