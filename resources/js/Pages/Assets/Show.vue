<script setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Button from "@/Components/Button.vue";
import Table from "@/Components/Table.vue";

import Tooltip from 'primevue/tooltip';
// import Menu from 'primevue/menu';

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
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import BoxIcon from "@/Components/BoxIcon.vue";

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

const toolTipOptions = (lease) => {
    if(lease.status == 'Failed') {
        return {
            value: lease.status_msg,
            pt: {
                arrow: {
                    style: {
                        borderRightColor: 'var(--primary-color)', // Customize the arrow color
                    },
                },
                text: 'rounded-md px-2 py-1 text-xs ring-1 ring-inset bg-red-50 text-red-800 ring-red-600/20'
            }
        };
    } else {
        return null;
    }

};

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


// const menu = ref();
// const items = ref([
//   {
//     label: 'Options',
//     items: [
//       {
//         label: 'Refresh',
//         icon: 'pi pi-refresh'
//       },
//       {
//         label: 'Export',
//         icon: 'pi pi-upload'
//       }
//     ]
//   }
// ]);
//
// const toggle = (event) => {
//   console.log('asdf');
//   menu.value.toggle(event);
// };

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
                    <th>
<!--                      <div class="flex justify-center">-->
<!--                        <Button type="button" icon="bx bx-menu-alt-right" class="relative items-center inline-flex text-center align-bottom justify-center leading-[normal] w-12 p-0 py-3 rounded-md text-white bg-gray-500 border border-gray-500 focus:outline-none focus:outline-offset-0 focus:ring hover:bg-gray-600 hover:border-gray-600 focus:ring-primary-400/50 dark:focus:ring-primary-300/50 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />-->
<!--                        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />-->
<!--                      </div>-->
                    </th>
                </tr>
            </template>


            <template #body>
                <tr v-for="lease in props.leases" :key="lease.id" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

                    <th scope="row" class="px-6 py-4 space-x-2">

                        <span
                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            :class="getFileStatusClass(lease.status)"
                            v-tooltip="toolTipOptions(lease)">


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

<!--                        <span class="badge font-medium rounded-full bg-gray-50 text-gray-500 text-10 pt-0.5 px-0.5 ">-->
<!--                            <i class=" bx bx-question-mark"></i>-->
<!--                        </span>-->


                    </th>
                    <td class="px-6 py-4 text-gray-900 ">
                        <Link
                            v-if="lease.tenant_name"
                            :href="route('assets.leases.show', [lease.asset_id, lease.id])"
                            >
                            <strong>{{ lease.tenant_name }}</strong>
                        </Link>

                        <Link
                            v-else
                            :href="lease.filename"
                            type="external"
                            class="text-gray-500"
                        >
                            {{ lease.og_filename }}
                        </Link>

                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ lease.address??'--' }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        <!-- {{ filters.formatNumber(lease.gla)??'--' }} -->
                        {{ lease.gla??'--' }}
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
                    <td class="px-6 py-4 ">
                        <div class="flex items-center space-x-2">
                            <SecondaryLink
                                :href="lease.filename"
                                type="external"
                                >
                                <BoxIcon class="bx-cloud-download" />
                            </SecondaryLink>

                            <DangerButton
                                :href="route('assets.leases.edit', [lease.asset_id, lease.id])"
                                class="text-sm"
                                @click="confirmLeaseDeletion(lease)"
                            >
                                Delete
                            </DangerButton>
                        </div>
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
