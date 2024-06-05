<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, toRef} from "vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Table from "@/Components/Table.vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"
import SmallCard  from "@/Components/Lease/SmallCard.vue"
import Hero from "@/Components/Lease/Hero.vue";
import Associates from "@/Components/Lease/Associates.vue";
import BoxIcon from "@/Components/BoxIcon.vue"

import VueFilePond, { setOptions } from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";

import "filepond/dist/filepond.min.css";
import 'highlight.js/styles/monokai.css';
import { fileStatusClass } from "@/Composables/fileStatusClass.js"
import LeaseDetail from "@/Pages/AssetLeases/LeaseDetail.vue"
import BasicTerms from "@/Pages/AssetLeases/BasicTerms.vue"
import RentSchedule from "@/Pages/AssetLeases/RentSchedule.vue"
import Checkbox from "@/Components/Checkbox.vue"

const page = usePage();
const user = computed(() => page.props.auth.user);

const props = defineProps({
    asset: Object,
    associates: Array,
    lease: Object,
});

const { getFileStatusClass } = fileStatusClass();

const FilePond = VueFilePond(FilePondPluginFileValidateType);
const pond = ref(null);

let serverResponse = '';

setOptions({
  credits: [],
  required: true,
  allowMultiple: true,
  allowRevert: false,
  acceptedFileTypes: [
    'application/pdf',
  ],
  // files: files,
  server: {
    process: {
      url: route('assets.leases.store-amendment', [props.asset, props.lease]),
      headers: {
        'Accept': 'application/json',
        'X-CSRF-TOKEN': page.props.csrf,
      },
      ondata: (formData) => {
          formData.append('classification', 'lease_amendment')
          return formData
      },
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
    if (serverResponse.errors && serverResponse.errors.lease_amendment) {
      return serverResponse.errors.lease_amendment.join(' ');
    }
    return serverResponse.message;
  },
});

const handleOnProcessFile = (error, file) => {
    console.log("on process file");
    //
    // if(pond.value) {
    //     pond.value.removeFile(file.id);
    // }
    // console.log(pond.value)
    // console.log(file)

    router.reload({ only: ['lease'] });
}

onMounted(() => {
    Echo.private(`tenant-global-channel.${page.props.tenant_id}`)
        .listen('LeaseProcessingUpdate', (e) => {
            console.log(e);
            router.reload();
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

        <PrimaryLink :href="route('assets.show', asset)">
            <BoxIcon class="bx-arrow-back mr-2" />Leases
        </PrimaryLink>

        <Hero :asset="asset" />

        <Associates :associates="associates" />

        <div class="grid grid-cols-12 gap-4">

            <div class="col-span-6">

                <div class="mb-8">
                    <h2 class="text-indigo-600">{{ lease.tenant }}</h2>
                    <h5 class="text-gray-500">{{ lease.premise_address }}</h5>
                </div>

            </div>
            <div class="col-span-6 flex flex-col">
                <div class="max-h-36 overflow-auto h-36">
                    <FilePond
                        name="lease_amendment"
                        ref="pond"
                        @processfile="handleOnProcessFile"
                        class-name="my-file-upload"
                        label-idle="Amendment Drop or <span class='filepond--label-action'>Browse</span>"
                    />
                </div>
                <div class="ml-auto mt-4">
                    <PrimaryLink
                        class="bg-indigo-600"
                        :href="route('assets.leases.chats.index', [asset, lease])">
                        Chat <BoxIcon class="bx-comment-detail ml-2" />
                    </PrimaryLink>
                </div>
            </div>
        </div>

        <div v-if="lease.expired" class="relative px-5 py-3 border-2 bg-red-50 text-red-700 border-red-100 rounded mt-6 text-center">
            <h5>Lease Expired!</h5>
        </div>

        <div class="col-span-6 mt-2">

            <TabView :scrollable="true">

                <TabPanel>

                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <h6 class="font-bold white-space-nowrap">Current Lease</h6>
                        </div>
                    </template>


                    <div class="grid grid-cols-12 gap-6">

                        <SmallCard>

                            <template #header>
                                Basic Terms
                            </template>

                            <BasicTerms
                                :lease="lease"
                            />

                        </SmallCard>

                        <SmallCard>

                            <template #header>
                                Rent Schedule
                            </template>

                            <RentSchedule
                                :lease="lease"
                            />

                        </SmallCard>

                    </div>

                    <LeaseDetail
                        :lease_detail="lease.lease_detail"
                    />

                    <div v-if="false" class="json-container">

                        <template v-if="!lease.original_lease">
                            <h3>Original Lease Extraction Data</h3>
                            <h4>Basic Extracted Data</h4>
                            <pre>{{ lease.lease_document.document_detail.basic_extracted_data ?? "--" }}</pre>
                            <h4>Detailed Extracted Data</h4>
                            <pre>{{ lease.lease_document.document_detail.detailed_extracted_data ?? "--" }}</pre>
                        </template>

                    </div>

                </TabPanel>

                <TabPanel v-if="lease.amendments_processing.length">
                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <span class="inline-flex items-center text-xs font-medium">
                                <span class="relative flex h-2.5 w-2.5">
<!--                                  <template v-if="!['Ready', 'Failed', 'Archived'].includes(amendment.lease_document.status)">-->
                                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                            :class="getFileStatusClass('Pending', 'PROCESS_CLASSES')"></span>
                                      <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                            :class="getFileStatusClass('Pending', 'PROCESS_CLASSES')"></span>
<!--                                  </template>-->
<!--                                  <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"-->
<!--                                        :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>-->
                                </span>
                            </span>

                            <span class="font-bold white-space-nowrap">
                                <h6>Amendment Processing</h6>
                            </span>
                        </div>
                    </template>

<!--                    <div class="flex justify-center items-center h-96">-->
<!--                        <div class="text-center">-->
<!--                            <h4 class="text-gray-500">Processing...</h4>-->

<!--                            <p class="text-gray-400">Please wait while we process your amendment</p>-->
<!--                        </div>-->
<!--                    </div>-->


                    <Table>

                        <template #head>
                            <tr>
                                <th scope="col" class="pl-4 pr-2 py-3"></th>
                                <th scope="col" class="px-6 py-3">
                                    Amendment
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Progress
                                </th>
                            </tr>
                        </template>

                        <template #body>
                            <tr v-for="(amendment, index) in lease.amendments_processing" :key="amendment.id" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

                                <td class="pl-4 pr-2 py-4 space-x-2">

                                    <span
                                        class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                                        :class="getFileStatusClass(amendment.lease_document.status)">

                                          <span class="relative mr-1.5 flex h-2.5 w-2.5">

                                              <template v-if="!['Ready', 'Failed', 'Archived'].includes(amendment.lease_document.status)">
                                                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                                        :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>
                                                  <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                                        :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>
                                              </template>

                                              <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                                    :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>
                                          </span>

                                          <span class="whitespace-nowrap">{{ amendment.lease_document.status }}</span>

                                    </span>

                                </td>
                                <td class="pl-4 pr-2 py-4 space-x-2">
                                    <a :href="amendment.lease_document.file_name" target="_blank" class="underline">
                                    {{ amendment.lease_document.name }}
                                    </a>
                                </td>
                                <td class="pl-4 pr-2 py-4 space-x-2">
                                    <div class="flex items-center">
                                        <div class="flex-1 progress h-2.5 w-full bg-gray-200 rounded-full relative dark:bg-zinc-600">
                                            <div class="progress-bar h-2.5 bg-indigo-600 rounded-full ltr:rounded-r-none rtl:rounded-l-none progress-bar-striped animate-strip"
                                                 :style="`width: ${amendment.lease_document.status_progress ?? '0%'};`"
                                                 role="progressbar"
                                            ></div>

                                        </div>
                                        <div class="ml-2 font-bold">{{ amendment.lease_document.status_progress ?? "" }}</div>
                                    </div>
                                </td>
                            </tr>
                        </template>

                    </Table>

                </TabPanel>

                <TabPanel v-if="lease.amendments" v-for="(amendment, idx) in lease.amendments" :key="idx">
                    <template #header>
                        <div class="flex align-items-center gap-2">

                            <span class="inline-flex items-center text-xs font-medium">
                                <span class="relative flex h-2.5 w-2.5">
                                  <template v-if="!['Ready', 'Failed', 'Archived'].includes(amendment.lease_document.status)">
                                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                            :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>
                                      <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                            :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>
                                  </template>
                                  <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                        :class="getFileStatusClass(amendment.lease_document.status, 'PROCESS_CLASSES')"></span>
                                </span>
                            </span>

                            <span class="font-bold white-space-nowrap">
                                <h6
                                    :class="{ 'text-red-400': amendment.lease_document.status === 'Failed' }"
                                >
                                    Amendment #{{ lease.amendments.length - idx }} <small class="text-gray-400">{{ amendment.execution_date }}</small>
                                </h6>
                            </span>
                        </div>
                    </template>

                    <div class="grid grid-cols-12 gap-6">
                        <SmallCard>

                            <template #header>
                                Basic Terms
                            </template>

                            <BasicTerms
                                :lease="amendment"
                            />

                        </SmallCard>

                        <SmallCard>

                            <template #header>
                                Rent Schedule
                            </template>

                            <RentSchedule
                                :lease="amendment"
                            />

                        </SmallCard>
                    </div>

                    <LeaseDetail
                        :lease_detail="amendment.lease_detail ?? {}"
                    />

                    <div v-if="false" class="min-h-96">
                        <p class="m-0">

                            <div class="json-container">
                                <h3>Amendment Extraction Data</h3>
                                <h4>Basic Extracted Data</h4>
                                <pre>{{ amendment.lease_document.document_detail?.basic_extracted_data ?? "--" }}</pre>
                                <h4>Detailed Extracted Data</h4>
                                <pre>{{ amendment.lease_document.document_detail?.detailed_extracted_data ?? "--" }}</pre>

                            </div>
                        </p>
                    </div>
                </TabPanel>

                <TabPanel v-if="lease.original_lease">

                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <h6 class="font-bold white-space-nowrap">Original Lease</h6>
                        </div>
                    </template>

                    <div class="grid grid-cols-12 gap-6">
                        <SmallCard>

                            <template #header>
                                Basic Terms
                            </template>

                            <BasicTerms
                                :lease="lease.original_lease"
                            />

                        </SmallCard>

                        <SmallCard>

                            <template #header>
                                Rent Schedule
                            </template>

                            <RentSchedule
                                :lease="lease.original_lease"
                            />

                        </SmallCard>
                    </div>

                    <LeaseDetail
                        :lease_detail="lease.original_lease.lease_detail"
                    />

                    <div v-if="false" class="min-h-96">
                        <p class="m-0">

                            <div class="json-container">

                                <h3>Original Lease Extraction Data</h3>
                                <h4>Basic Extracted Data</h4>
                                <pre>{{ lease.lease_document.document_detail.basic_extracted_data ?? "--" }}</pre>
                                <h4>Detailed Extracted Data</h4>
                                <pre>{{ lease.lease_document.document_detail.detailed_extracted_data ?? "--" }}</pre>

                            </div>
                        </p>
                    </div>

                </TabPanel>

            </TabView>

        </div>

    </AuthenticatedLayout>

</template>

<style>

</style>

<style scoped>
.json-container pre {
    white-space: pre-wrap;
}

</style>

