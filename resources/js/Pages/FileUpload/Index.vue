<script setup>
import { onMounted, ref } from "vue";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import moment from "moment";
import Pagination from "@/Components/Pagination.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { uploaded_files } = defineProps({
    uploaded_files: {
        type: Object,
    },
});

onMounted(() => {
    // console.log(uploaded_files);
});

</script>


<template>
    <Head title="File Upload" />

    <AuthenticatedLayout>
        <template #header> File Upload </template>

        <div class="py-6">
            <div class="relative flex justify-end mb-4">
                <Link
                    :href="route('file-upload.create')"
                    type="button"
                    class="btn inline-flex justify-center items-center bg-primary text-white"
                >
                    <i class="mgc_add_line text-lg me-2"></i> Upload
                </Link>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-300">Your Files</h4>
                </div>

                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="inline-block min-w-full align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                    <thead class="bg-gray-50 dark:bg-gray-700">
                                        <tr
                                            class="text-gray-800 dark:text-gray-300"
                                        >
                                            <th
                                                scope="col"
                                                class="p-3.5 text-sm text-start font-semibold min-w-[10rem]"
                                            >
                                                File Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="p-3.5 text-sm text-start font-semibold min-w-[10rem]"
                                            >
                                                Last Modified
                                            </th>
                                            <th
                                                scope="col"
                                                class="p-3.5 text-sm text-start font-semibold min-w-[6rem]"
                                            >
                                                File Size
                                            </th>
                                            <th
                                                scope="col"
                                                class="p-3.5 text-sm text-start font-semibold min-w-[8rem]"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                class="p-3.5 text-sm text-start font-semibold"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-600">

                                        <tr v-for="file in uploaded_files.data" :key="file.id">

                                            <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                                <a :href="file.download_link" target="_blank" rel="noopener noreferrer" class="font-medium">{{ file.original_name }}</a>
                                            </td>
                                            <td
                                                class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                                <p>{{ moment(file.created_at,).format("MMM DD, YYYY h:mm a") }}</p>
                                                <span class="text-xs">by {{ file.user.name }}</span
                                                >
                                            </td>
                                            <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                                {{ file.size_readable }}
                                            </td>
                                            <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">

                                              <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                                {{file.status }}
                                              </span>
                                            </td>
                                            
                                            <td class="p-3.5">


                                              <Menu as="div" class="relative inline-block text-left">
                                                <div>
                                                  <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-more-vertical w-4 h-4"
                                                    >
                                                      <circle
                                                          cx="12"
                                                          cy="12"
                                                          r="1"
                                                      ></circle>
                                                      <circle
                                                          cx="12"
                                                          cy="5"
                                                          r="1"
                                                      ></circle>
                                                      <circle
                                                          cx="12"
                                                          cy="19"
                                                          r="1"
                                                      ></circle>
                                                    </svg>
<!--                                                    <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />-->
                                                  </MenuButton>
                                                </div>

                                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                                  <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div class="py-1">
                                                      <MenuItem v-slot="{ active }">
                                                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
                                                      </MenuItem>
                                                      <MenuItem v-slot="{ active }">
                                                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                                                      </MenuItem>
                                                      <MenuItem v-slot="{ active }">
                                                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                                                      </MenuItem>
                                                      <form method="POST" action="#">
                                                        <MenuItem v-slot="{ active }">
                                                          <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
                                                        </MenuItem>
                                                      </form>
                                                    </div>
                                                  </MenuItems>
                                                </transition>
                                              </Menu>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                :links="uploaded_files.links"
                class="mt-4"
            />
            <p class="mt-1">Showing {{ uploaded_files.from }} to {{ uploaded_files.to }} of {{ uploaded_files.total }}</p>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped></style>
