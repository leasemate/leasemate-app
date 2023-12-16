<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head} from "@inertiajs/vue3";
import {ref} from "vue";

const photoPreview = ref(null);

const props = defineProps({
    users: Array,
});

</script>

<template>

    <Head title="Users" />

    <AuthenticatedLayout>

        <template #header> Users </template>


        <div class="relative overflow-x-auto rounded-lg ">
            <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 dark:text-gray-100 uppercase bg-gray-50/50 dark:bg-zinc-700">
            <tr>
<!--                <th scope="col" class="p-4">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 focus:ring-0 focus:outline-0 border-gray-100 focus:ring-offset-0 rounded dark:bg-zinc-700 dark:border-zinc-500 dark:checked:bg-violet-500">-->
<!--                        <label for="checkbox-all-search" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                </th>-->
                <th scope="col" class="px-6 py-3">
                    Name
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
            </thead>
            <tbody>



            <tr v-for="user in users" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

<!--                <td class="w-4 p-4">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 focus:ring-0 focus:outline-0 border-gray-100 focus:ring-offset-0 rounded dark:bg-zinc-700 dark:border-zinc-500 dark:checked:bg-violet-500">-->
<!--                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                </td>-->
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">

                    <div v-show="user.profile_photo_url" class="mt-2">
                        <span
                            class="block rounded-full w-10 h-10 bg-cover bg-no-repeat bg-center"
                            :style="'background-image: url(\'' + user.profile_photo_url + '\');'"
                        />
                    </div>

                    <div class="ltr:pl-3 rtl:pr-3 ltr:text-left rtl:text-right">
                        <div class="text-base font-semibold dark:text-gray-100">{{  user.name }}</div>
                        <div class="font-normal text-gray-500 dark:text-zinc-100/80"> {{ user.email }}</div>
                    </div>
                </th>
                <td class="px-6 py-4 dark:text-zinc-100/80">
                    React Developer
                </td>
                <td class="px-6 py-4">
                    <span class="badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20">Admin</span>
<!--                    <div class="flex items-center dark:text-zinc-100/80">-->
<!--                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 ltr:mr-2 rtl:ml-2"></div> Online-->
<!--                    </div>-->
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit user</a>
                </td>
            </tr>
<!--            <tr class="bg-white border-b border-gray-50 hover:bg-gray-50/50 dark:bg-zinc-700/50 dark:border-zinc-600">-->
<!--                <td class="w-4 p-4">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 focus:ring-0 focus:outline-0 border-gray-100 focus:ring-offset-0 rounded dark:bg-zinc-700 dark:border-zinc-500 dark:checked:bg-violet-500">-->
<!--                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                </td>-->
<!--                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">-->
<!--                    <img class="w-10 h-10 rounded-full" src="assets/images/users/avatar-3.jpg" alt="Jese image">-->
<!--                    <div class="ltr:pl-3 rtl:pr-3 ltr:text-left rtl:text-right">-->
<!--                        <div class="text-base font-semibold dark:text-gray-100">Jacob Greek</div>-->
<!--                        <div class="font-normal text-gray-500 dark:text-zinc-100/80">jacob@Greek.com</div>-->
<!--                    </div>-->
<!--                </th>-->
<!--                <td class="px-6 py-4 dark:text-zinc-100/80">-->
<!--                    Designer-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <div class="flex items-center dark:text-zinc-100/80">-->
<!--                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 ltr:mr-2 rtl:ml-2"></div> Online-->
<!--                    </div>-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit user</a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr class="bg-white border-b border-gray-50 hover:bg-gray-50/50 dark:bg-zinc-700/50 dark:border-zinc-600">-->
<!--                <td class="w-4 p-4">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 focus:ring-0 focus:outline-0 border-gray-100 focus:ring-offset-0 rounded dark:bg-zinc-700 dark:border-zinc-500 dark:checked:bg-violet-500">-->
<!--                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                </td>-->
<!--                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">-->
<!--                    <img class="w-10 h-10 rounded-full" src="assets/images/users/avatar-5.jpg" alt="Jese image">-->
<!--                    <div class="ltr:pl-3 rtl:pr-3 ltr:text-left rtl:text-right">-->
<!--                        <div class="text-base font-semibold dark:text-gray-100">Larry Leos</div>-->
<!--                        <div class="font-normal text-gray-500 dark:text-zinc-100/80">thebird@larry.com</div>-->
<!--                    </div>-->
<!--                </th>-->
<!--                <td class="px-6 py-4 dark:text-zinc-100/80">-->
<!--                    Vue JS Developer-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <div class="flex items-center dark:text-zinc-100/80">-->
<!--                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 ltr:mr-2 rtl:ml-2"></div> Online-->
<!--                    </div>-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit user</a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr class="bg-white border-b border-gray-50 hover:bg-gray-50/50 dark:bg-zinc-700/50 dark:border-zinc-600">-->
<!--                <td class="w-4 p-4">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 focus:ring-0 focus:outline-0 border-gray-100 focus:ring-offset-0 rounded dark:bg-zinc-700 dark:border-zinc-500 dark:checked:bg-violet-500">-->
<!--                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                </td>-->
<!--                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">-->
<!--                    <img class="w-10 h-10 rounded-full" src="assets/images/users/avatar-7.jpg" alt="Jese image">-->
<!--                    <div class="ltr:pl-3 rtl:pr-3 ltr:text-left rtl:text-right">-->
<!--                        <div class="text-base font-semibold dark:text-gray-100">Lambly Den</div>-->
<!--                        <div class="font-normal text-gray-500 dark:text-zinc-100/80">den@flowbite.com</div>-->
<!--                    </div>-->
<!--                </th>-->
<!--                <td class="px-6 py-4 dark:text-zinc-100/80">-->
<!--                    UI/UX Engineer-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <div class="flex items-center dark:text-zinc-100/80">-->
<!--                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 ltr:mr-2 rtl:ml-2"></div> Online-->
<!--                    </div>-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit user</a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr class="bg-white hover:bg-gray-50/50 dark:bg-zinc-700/50">-->
<!--                <td class="w-4 p-4">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 focus:ring-0 focus:outline-0 border-gray-100 focus:ring-offset-0 rounded dark:bg-zinc-700 dark:border-zinc-500 dark:checked:bg-violet-500">-->
<!--                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                </td>-->
<!--                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">-->
<!--                    <img class="w-10 h-10 rounded-full" src="assets/images/users/avatar-8.jpg" alt="Jese image">-->
<!--                    <div class="ltr:pl-3 rtl:pr-3 ltr:text-left rtl:text-right">-->
<!--                        <div class="text-base font-semibold dark:text-gray-100">Lucy Marinda</div>-->
<!--                        <div class="font-normal text-gray-500 dark:text-zinc-100/80">lucy12@marinda.com</div>-->
<!--                    </div>-->
<!--                </th>-->
<!--                <td class="px-6 py-4 dark:text-zinc-100/80">-->
<!--                    SEO Specialist-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <div class="flex items-center dark:text-zinc-100/80">-->
<!--                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 ltr:mr-2 rtl:ml-2"></div> Offline-->
<!--                    </div>-->
<!--                </td>-->
<!--                <td class="px-6 py-4">-->
<!--                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit user</a>-->
<!--                </td>-->
<!--            </tr>-->
            </tbody>
        </table>
        </div>

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
