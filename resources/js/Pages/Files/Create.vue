<script setup>
import { ref } from "vue";
import { Head, usePage } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

import VueFilePond, { setOptions } from "vue-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";

const FilePond = VueFilePond(FilePondPluginFileValidateType);
const files = ref([]);

let serverResponse = '';

const handleFilePondInit = () => {
    // console.log("FilePond has initialized");
};

setOptions({
    credits: [],
    required: true,
    allowMultiple: true,
    allowRevert: false,
    acceptedFileTypes: [
        'application/pdf',
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/gif',
    ],
    // files: files,
    server: {
        process: {
            url: '/file-upload',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': usePage().props.csrf,
            },
            onerror: (response) => {
                serverResponse = JSON.parse(response);
            },
        },
    },
    // labelFileProcessingComplete: "Upload Complete! Processing File...",
    labelFileProcessingError: (error) => {
        console.log(error);
        if (serverResponse.errors && serverResponse.errors.upload_file) {
            return serverResponse.errors.upload_file.join(' ');
        }
        return serverResponse.message;
    },
});

</script>

<template>
    <Head title="File Upload" />

    <AuthenticatedLayout>
        <template #header> File Upload </template>

        <div class="py-6">

            <FilePond
                name="upload_file"
                ref="pond"
                class-name="my-file-upload"
                label-idle="Drag & Drop your PDF files here or <span class='filepond--label-action'>Browse</span>"
                v-model="files"
                @init="handleFilePondInit"
            />

        </div>
    </AuthenticatedLayout>
</template>

<style >

.filepond--wrapper {
    border-radius: 0.875rem;
    border-width: 3px;
    border-style: dashed;
    --tw-border-opacity: 1;
    border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.filepond--root {
    margin: 0;
}

</style>
