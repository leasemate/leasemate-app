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
import Hero from "@/Components/Lease/Hero.vue";
import Associates from "@/Components/Lease/Associates.vue";
import BoxIcon from "@/Components/BoxIcon.vue"

import VueFilePond, { setOptions } from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";

import "filepond/dist/filepond.min.css";
import 'highlight.js/styles/monokai.css';
import { fileStatusClass } from "@/Composables/fileStatusClass.js"

const page = usePage();
const user = computed(() => page.props.auth.user);

const props = defineProps({
    asset: Object,
    associates: Array,
    lease: Object,
});

const { getFileStatusClass } = fileStatusClass();

const FilePond = VueFilePond(FilePondPluginFileValidateType);
let serverResponse = '';

setOptions({
  credits: [],
  required: true,
  allowMultiple: false,
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
    router.reload({ only: ['lease'] });
}

onMounted(() => {

    // messageField.value.focus();

    Echo.private(`tenant-global-channel.${page.props.tenant_id}`)
        .listen('FileStatusUpdate', (e) => {
            router.reload({ only: ['lease'] });
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

        <div class="flex justify-start mb-4 space-x-4">

        </div>

        <div class="grid grid-cols-12 gap-4">

            <div class="col-span-6">

                <div class="mb-8">
                    <h2 class="text-indigo-600">{{ lease.tenant_name }}</h2>
                    <h5 class="text-gray-500">{{ lease.address }}</h5>
                </div>

            </div>
            <div class="col-span-6 flex flex-col">
                <FilePond
                    name="lease_amendment"
                    ref="pond"
                    @processfile="handleOnProcessFile"
                    class-name="my-file-upload"
                    label-idle="Amendment Drop (One at a time) or <span class='filepond--label-action'>Browse</span>"
                />
                <div class="ml-auto">
                <PrimaryLink :href="route('assets.leases.chats.index', [asset, lease])">
                    Chat Bot<BoxIcon class="bx-bot ml-2" />
                </PrimaryLink>
                </div>
            </div>
        </div>


        <div class="col-span-6 mt-2">

            <TabView :scrollable="true">

                <TabPanel
                    class="p-0"
                >

                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <span class="font-bold white-space-nowrap">Current Lease Terms</span>
                        </div>
                    </template>

                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-6 rounded-lg shadow-md border p-6">
                            <h5>Basic Terms</h5>

                            <div class="p-4 bg-white">

                                <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                    <div>
                                        <div class="font-bold text-gray-900">Tenant</div>
                                        <div class="text-sm text-gray-600">{{ lease.extracted_data.lessee_tenant??"--" }}</div>
                                    </div>
                                    <div>
                                        <div class="font-bold text-gray-900">Landlord</div>
                                        <div class="text-xs text-gray-600">{{ lease.extracted_data.lessor_landlord??"--" }}</div>
                                    </div>

                                    <div>
                                        <div class="font-bold text-gray-600">Premises Address</div>
                                        <div class="text-xs text-gray-600">{{ lease.address??"--" }}</div>
                                    </div>

                                    <div>
                                        <div class="font-bold text-gray-600">Building Address</div>
                                        <div class="text-xs text-gray-600">{{ lease.extracted_data.property_address??"--" }}</div>
                                    </div>

                                    <div>

                                        <div class="font-bold text-gray-600">Rentable Sq. Ft.</div>
                                        <div class="text-xs text-gray-600">{{ filters.formatNumber(lease.extracted_data.rentable_square_feet)??"--" }}</div>
                                    </div>

                                    <div>
                                        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                            <div>
                                                <div class="font-bold text-gray-600">Lease Term</div>
                                                <div class="text-xs text-gray-600">{{ lease.extracted_data.lease_term ? lease.extracted_data.lease_term+" Months" : "--" }}</div>
                                            </div>
                                            <div>
                                                <div class="font-bold text-gray-600">Expiration Date</div>
                                                <div class="text-xs text-gray-600">{{ lease.extracted_data.expiration_date??"--" }}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="col-span-6 rounded-lg shadow-md border p-6">

                            <h5>Rent Schedule</h5>
                            <div class="p-4 bg-white">

                                <Table class="mt-8 pb-0" :data="lease.extracted_data.rent_schedule" :columns="['Start Date', 'End Date', 'Amount', 'Frequency']">

                                    <template #head>
                                        <tr>
                                            <th scope="col" class="px-6 py-3">Start Date</th>
                                            <th scope="col" class="px-6 py-3">End Date</th>
                                            <th scope="col" class="px-6 py-3">Amount</th>
                                            <th scope="col" class="px-6 py-3">per SQFT</th>
                                        </tr>

                                    </template>

                                    <template #body>

                                        <tr v-for="base_rent in lease.monthly_base_rent" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">
                                            <th scope="row" class="px-6 py-4 space-x-2">{{ base_rent.start_date }}</th>
                                            <td class="px-6 py-4 text-gray-900 ">{{ base_rent.end_date }}</td>
                                            <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_total) }}</td>
                                            <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_per_square_foot) }}</td>
                                        </tr>
                                    </template>

                                </Table>

<!--                                <h6>Abatement</h6>-->
<!--                                <h6>Base Year</h6>-->

                            </div>

                        </div>
                    </div>

<!--                    <div class="json-container">-->

<!--                        <h3>Raw Extracted Data</h3>-->
<!--                        <h4>Basic Extracted Data</h4>-->
<!--                            <pre>{{ lease.extracted_data??"&#45;&#45;" }}</pre>-->
<!--                        <h4>Detailed Extracted Data</h4>-->
<!--                            <pre>{{ lease.detailed_extracted_data??"&#45;&#45;" }}</pre>-->

<!--                    </div>-->

                </TabPanel>
                <TabPanel v-if="lease.documents.length">

                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <span class="font-bold white-space-nowrap">Original Lease Abstract</span>
                        </div>
                    </template>

                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-6 rounded-lg shadow-md border p-6">
                            <h5>Basic Terms</h5>

                            <div class="p-4 bg-white">

                                <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                    <div>
                                        <div class="font-bold text-gray-900">Tenant</div>
                                        <div class="text-sm text-gray-600">{{ lease.extracted_data.lessee_tenant??"--" }}</div>
                                    </div>
                                    <div>
                                        <div class="font-bold text-gray-900">Landlord</div>
                                        <div class="text-xs text-gray-600">{{ lease.extracted_data.lessor_landlord??"--" }}</div>
                                    </div>

                                    <div>
                                        <div class="font-bold text-gray-600">Premises Address</div>
                                        <div class="text-xs text-gray-600">{{ lease.extracted_data.premises_address??"--" }}</div>
                                    </div>

                                    <div>
                                        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                            <div>
                                                <div class="font-bold text-gray-600">Lease Term</div>
                                                <div class="text-xs text-gray-600">{{ lease.extracted_data.lease_term ? lease.extracted_data.lease_term+" Months" : "--" }}</div>
                                            </div>
                                            <div>
                                                <div class="font-bold text-gray-600">Expiration Date</div>
                                                <div class="text-xs text-gray-600">{{ lease.extracted_data.expiration_date??"--" }}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="font-bold text-gray-600">Rentable Sq. Ft.</div>
                                        <div class="text-xs text-gray-600">{{ filters.formatNumber(lease.extracted_data.rentable_square_feet)??"--" }}</div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="col-span-6 rounded-lg shadow-md border p-6">
                            <h5>Rent Schedule</h5>
                            <div class="p-4 bg-white">

                                <Table class="mt-8" :data="lease.extracted_data.rent_schedule" :columns="['Start Date', 'End Date', 'Amount', 'Frequency']">

                                    <template #head>
                                        <tr>
                                            <th scope="col" class="px-6 py-3">Start Date</th>
                                            <th scope="col" class="px-6 py-3">End Date</th>
                                            <th scope="col" class="px-6 py-3">Amount</th>
                                            <th scope="col" class="px-6 py-3">per SQFT</th>
                                        </tr>

                                    </template>

                                    <template #body>
                                        <tr v-for="base_rent in lease.monthly_base_rent" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">
                                            <th scope="row" class="px-6 py-4 space-x-2">{{ base_rent.start_date }}</th>
                                            <td class="px-6 py-4 text-gray-900 ">{{ base_rent.end_date }}</td>
                                            <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_total) }}</td>
                                            <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_per_square_foot) }}</td>
                                        </tr>
                                    </template>

                                </Table>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel v-if="lease.documents" v-for="(document, idx) in lease.documents" :key="idx">
                    <template #header>
                        <div class="flex align-items-center gap-2">

                            <span class="inline-flex items-center text-xs font-medium">
                                <span class="relative flex h-2.5 w-2.5">
                                  <template v-if="!['Ready', 'Failed', 'Archived'].includes(document.status)">
                                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                            :class="getFileStatusClass(document.status, 'PROCESS_CLASSES')"></span>
                                      <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                            :class="getFileStatusClass(document.status, 'PROCESS_CLASSES')"></span>
                                  </template>
                                  <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                        :class="getFileStatusClass(document.status, 'PROCESS_CLASSES')"></span>
                                </span>
                            </span>

                            <span class="font-bold white-space-nowrap">
                                <span
                                    :class="{ 'text-red-400': document.status === 'Failed' }"
                                >
                                    Amendment #{{ ++idx }} <small class="text-gray-400">5/25/23</small>
                                </span>
                            </span>
                        </div>
                    </template>
                    <p class="m-0">

<!--                        <h5>Condition</h5>-->
<!--                        <div class="p-4 bg-white space-y-4">-->
<!--                            <div>-->
<!--                                <h6>Condition</h6>-->
<!--                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <h6>TI Allowance</h6>-->
<!--                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                                <h6>Landlord Work</h6>-->
<!--                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>-->
<!--                            </div>-->
<!--                        </div>-->

                        <h4>Processing...</h4>

                        <h5>{{ document.uuid }}</h5>
                    </p>
                </TabPanel>

            </TabView>

            <div class="m-6 mt-0 p-6 pt-0 rounded-lg shadow-md border">


                <Accordion :multiple="true" :activeIndex="[0]">

                    <AccordionTab header="">
                        <template #header>
                            <h5>Options & Rights</h5>
                        </template>

                        <h6 class="text-indigo-600">Option to Extend</h6>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>

                        <h6  class="text-indigo-600">Right of First Offer</h6>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>

                        <h6  class="text-indigo-600">Right of First Refusal</h6>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>

                        <h6  class="text-indigo-600">Assignment &amp; Subletting</h6>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>

                        <h6  class="text-indigo-600">Holding Over</h6>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>

                    <AccordionTab header="">
                        <template #header>
                            <h5>Condition</h5>
                        </template>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </AccordionTab>

                    <AccordionTab header="">
                        <template #header>
                            <h5>Miscellaneous</h5>
                        </template>
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>

            </div>
            <div class="json-container">

            <h3>Raw Extracted Data</h3>
            <h4>Basic Extracted Data</h4>
            <pre>{{ lease.extracted_data??"--" }}</pre>
            <h4>Detailed Extracted Data</h4>
            <pre>{{ lease.detailed_extracted_data??"--" }}</pre>

            </div>

        </div>

    </AuthenticatedLayout>

</template>



<style scoped>
.json-container pre {
    white-space: pre-wrap;
}

</style>

