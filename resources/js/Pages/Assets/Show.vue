<script setup>
import {reactive, ref} from "vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Button from "@/Components/Button.vue";
import Table from "@/Components/Table.vue";

import { fileStatusClass } from "@/Composables/fileStatusClass.js";

import VueFilePond, { setOptions } from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import "filepond/dist/filepond.min.css";

import moment from "moment";

const page = usePage();
const props = defineProps({
    asset: Object,
    associates: Array,
    leases: Array,
});

const { getFileStatusClass } = fileStatusClass();
const fileStatuses = reactive({});

const FilePond = VueFilePond(FilePondPluginFileValidateType);

let serverResponse = '';

setOptions({
    credits: [],
    required: true,
    allowMultiple: true,
    allowRevert: false,
    acceptedFileTypes: [
        'application/pdf',
        // 'image/png',
        // 'image/jpeg',
        // 'image/jpg',
        // 'image/gif',
    ],
    // files: files,
    server: {
        process: {
            url: '/leases',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': page.props.csrf,
            },
            ondata: (formData) => {
                formData.append('asset_id', props.asset.id);
                return formData;
            },
            onerror: (response) => {
                console.log("on error");
                serverResponse = JSON.parse(response);
            },
        },
    },
    labelFileProcessingError: (error) => {
        console.log(error);
        if (serverResponse.errors && serverResponse.errors.upload_file) {
            return serverResponse.errors.upload_file.join(' ');
        }
        return serverResponse.message;
    },
});

const handleOnProcessFile = (error, file) => {
    // console.log("handle on process file");
    // console.log(error);
    // console.log(file);
    router.reload({ only: ['leases'] });
}

const handleInit = () => {
    console.log("handle init");
}


</script>

<template>

    <Head title="Asset" />

    <AuthenticatedLayout>

        <template #header> Asset - {{ asset.name }} </template>

        <div class="flex justify-end">
            <PrimaryLink
                :href="route('assets.edit', asset)">Edit Asset</PrimaryLink>
        </div>

        <div class="relative mt-4">
            <img src="/images/Commercial-real-estate.webp" alt="Property" class="w-full h-auto object-cover max-h-72 rounded-lg shadow-lg" />

            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <div class="text-center text-white p-4">
                    <h1 class="text-4xl font-bold mb-2">{{ asset.name }}</h1>
                    <p class="text-xl">{{ asset.address }}</p>
                    <p class="text-lg">GLA: {{ filters.formatNumberSqFt(asset.gross_leasable_area)??'--' }}</p>
                    <!-- Additional property details here -->
                </div>
            </div>
        </div>

        <div class="border rounded-lg px-4 py-4 my-8 shadow-lg">

            <h4>Associates:</h4>

            <ul>
                <li v-for="associate in associates" :key="associate.id">
                    {{ associate.display_name_with_roles }} - {{ associate.email }}
                </li>
            </ul>

        </div>

        <FilePond
            name="lease_document"
            @init="handleInit"
            @processfile="handleOnProcessFile"
            ref="pond"
            class-name="my-file-upload"
            label-idle="Lease Drop or <span class='filepond--label-action'>Browse</span>"
        />

        <Table>

            <template #head>
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Tenant Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Suite#
                    </th>
                    <th scope="col" class="px-6 py-3">
                        GLA
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Start Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        End Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Rent / Sq Ft
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                </tr>
            </template>


            <template #body>
                <tr v-for="lease in props.leases" :key="lease.id" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                        {{ lease.tenant_name }}
                    </th>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ lease.suite_number??'--' }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ filters.formatNumberSqFt(lease.gross_leasable_area)??'--' }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ lease.start_date??'--' }}
                    </td>
                    <td class="px-6 py-4 space-x-2">
                        {{ lease.end_date??'--' }}
                    </td>
                    <td class="px-6 py-4 space-x-2">
                        {{ filters.formatMoney(lease.rent_per_sqft)??'--' }}
                    </td>
                    <td class="px-6 py-4 space-x-2">

                        <span
                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            :class="getFileStatusClass(fileStatuses[lease.id] === 'Deleting' ? 'Deleting' : lease.status)">

                              <span class="relative mr-1.5 flex h-2.5 w-2.5">

                                  <template v-if="lease.status != 'Completed'">
                                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                            :class="getFileStatusClass(fileStatuses[lease.id] === 'Deleting' ? 'Deleting' : lease.status, 'PROCESS_CLASSES')"></span>
                                      <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                            :class="getFileStatusClass(fileStatuses[lease.id] === 'Deleting' ? 'Deleting' : lease.status, 'PROCESS_CLASSES')"></span>
                                  </template>

                                  <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                        :class="getFileStatusClass(fileStatuses[lease.id] === 'Deleting' ? 'Deleting' : lease.status, 'PROCESS_CLASSES')"></span>

                              </span>

                              <span>{{ fileStatuses[lease.id] === 'Deleting' ? 'Deleting' : lease.status }}</span>

                          </span>
                    </td>
                </tr>
            </template>
        </Table>


    </AuthenticatedLayout>

</template>

<style scoped>

</style>
