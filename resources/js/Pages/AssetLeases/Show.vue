<script setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref} from "vue";
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

const page = usePage();
const user = computed(() => page.props.auth.user);
const props = defineProps({
    asset: Object,
    associates: Array,
    lease: Object,
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
    ],
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

// const handleOnProcessFile = (error, file) => {
//     // console.log("handle on process file");
//     // console.log(error);
//     // console.log(file);
//     router.reload({ only: ['leases'] });
// }

// const handleInit = () => {
//     console.log("handle init");
// }

onMounted(() => {

    Echo.private(`tenant-global-channel.${page.props.tenant_id}`)
        .listen('FileStatusUpdate', (e) => {
            router.reload({ only: ['leases'] });
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

        <Hero :asset="asset" />

        <Associates :associates="associates" />

        <h3>{{ lease.address }}</h3>


        <dl class="divide-y divide-gray-200">
            <div v-for="(value, key) in lease.extracted_data" class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt class="text-sm font-medium text-gray-500">
                    {{ key }}
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ value }}
                </dd>
            </div>
        </dl>


<!--        <FilePond-->
<!--            name="lease_document"-->
<!--            @init="handleInit"-->
<!--            @processfile="handleOnProcessFile"-->
<!--            ref="pond"-->
<!--            class-name="my-file-upload"-->
<!--            label-idle="Lease Drop or <span class='filepond&#45;&#45;label-action'>Browse</span>"-->
<!--        />-->

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
