<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ref } from "vue";

import VueFilePond, { setOptions } from "vue-filepond";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";

const token = document.querySelector('meta[name="csrf-token"]').content;
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
                'X-CSRF-TOKEN': token,
            },
            onerror: (response) => {
                serverResponse = JSON.parse(response);
            }
        },
    },
    labelFileProcessingComplete: "Upload Complete! Processing File...",
    labelFileProcessingError: (error) => {
        return serverResponse.errors;
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

<style scoped></style>
