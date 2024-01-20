<script setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
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
import Hero from "@/Components/Lease/Hero.vue";
import Associates from "@/Components/Lease/Associates.vue";
import Modal from "@/Components/Modal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import toast from "@/Stores/toast.js";

const page = usePage();
const user = computed(() => page.props.auth.user);
const props = defineProps({
    asset: Object,
    associates: Array,
    leases: Array,
});

const leases = ref(props.leases);

// Watch for changes in the local ref
watch(props.leases, (newLeases, oldLeases) => {
    // Do something when props.leases changes
    console.log('props.leases has changed:', newLeases);
}, { deep: true });

const { getFileStatusClass } = fileStatusClass();
const localLeaseStatuses = reactive({});

const leaseToDelete = ref(null);
const confirmingLeaseDeletion = ref(false);

const confirmLeaseDeletion = (lease) => {
    confirmingLeaseDeletion.value = true;
    leaseToDelete.value = lease;
};

const closeModal = () => {
    confirmingLeaseDeletion.value = false;
};


const deleteLease = () => {

    if(leaseToDelete.value) {

        closeModal();

        try {

            // new Promise((resolve, reject) => {

            router.delete(route('assets.leases.destroy', [props.asset, leaseToDelete.value.id]), {
                    preserveScroll: true,
                    // only: ['uploaded_files'],
                    onSuccess: () => {
                        // console.log('success');
                        // localLeaseStatuses[leaseToDelete.value.id] = leaseToDelete.value.status;
                        // leaseToDelete.value = null;
                        // resolve();
                        // router.reload({ only: ['leases'] });
                    },
                    onError: () => {
                        // console.log('error');
                        // localLeaseStatuses[leaseToDelete.value.id] = leaseToDelete.value.status;
                        // reject(new Error("Failed to delete lease"));
                    }
                });
            // });

            // console.log('Lease deleted successfully');

        } catch (error) {
            toast.error(error);
            console.log(error);
        }

    }
}

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
            url: route('assets.leases.store', props.asset),
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': page.props.csrf,
            },
            // ondata: (formData) => {
            //     formData.append('asset_id', props.asset.id);
            //     return formData;
            // },
            onsuccess: (response) => {
                console.log("on success");
                console.log(response);
                // serverResponse = JSON.parse(response);
            },
            onerror: (response) => {
                console.log("on error");
                serverResponse = JSON.parse(response);
            },
        },
    },
    labelFileProcessingError: (error) => {
        console.log(error);
        console.log(serverResponse);
        if (serverResponse.errors && serverResponse.errors.lease_document) {
            return serverResponse.errors.lease_document.join(' ');
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
    // console.log("handle init");
}

onMounted(() => {

    Echo.private(`tenant-global-channel.${page.props.tenant_id}`)
        .listen('LeaseFileDeleted', (e) => {
            toast.success(e.lease_deleted.og_filename + ': Deleted successfully');
            router.reload({
                'preserveScroll': true,
            });
        })
        .listen('FileStatusUpdate', (e) => {
            router.reload({
                'preserveScroll': true,
            });
        });
});

onBeforeUnmount(() => {
    if(user.value) {
        Echo.leave(`tenant-global-channel.${page.props.tenant_id}`);
    }
});

</script>

<template>

    <Head title="Asset" />

    <AuthenticatedLayout>

        <template #header> Asset - {{ asset.name }} </template>

        <div class="flex justify-end">
            <PrimaryLink
                :href="route('assets.edit', asset)">Edit Asset</PrimaryLink>
        </div>

        <Hero :asset="asset" />

        <Associates :associates="associates" />

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
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        GLA (SQFT)
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
                    <th></th>
                </tr>
            </template>


            <template #body>
                <tr v-for="lease in props.leases" :key="lease.id" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

                    <th scope="row" class="px-6 py-4 space-x-2">

                        <span
                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            :class="getFileStatusClass(lease.status)">

                              <span class="relative mr-1.5 flex h-2.5 w-2.5">

                                  <template v-if="!['Ready', 'Failed'].includes(lease.status)">
                                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                            :class="getFileStatusClass(lease.status, 'PROCESS_CLASSES')"></span>
                                      <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                            :class="getFileStatusClass(lease.status, 'PROCESS_CLASSES')"></span>
                                  </template>

                                  <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                        :class="getFileStatusClass(lease.status, 'PROCESS_CLASSES')"></span>

                              </span>

                              <span>{{ lease.status }}</span>

                          </span>
                    </th>
                    <td class="px-6 py-4 space-x-2">

                    </td>
                    <td class="px-6 py-4 text-gray-900 ">
                        <Link
                            v-if="lease.tenant_name"
                            :href="route('assets.leases.show', [lease.asset_id, lease.id])"
                            >
                            <strong>{{ lease.tenant_name }}</strong>
                        </Link>

                        <a
                            v-else
                            :href="lease.filename"
                            target="_blank" rel="noopener noreferrer" class="font-medium"
                        >
                            {{ lease.og_filename }}
                        </a>

                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ lease.address??'--' }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ filters.formatNumber(lease.gla)??'--' }}
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
                        <DangerButton
                            :href="route('assets.leases.edit', [lease.asset_id, lease.id])"
                            class="text-sm"
                            @click="confirmLeaseDeletion(lease)"
                        >
                            Delete
                        </DangerButton>
                    </td>

                </tr>
            </template>
        </Table>

        <Modal :show="confirmingLeaseDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this lease?
                </h2>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        @click="deleteLease()"
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
