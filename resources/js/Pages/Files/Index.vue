<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";

import VueFilePond, { setOptions } from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";

import "filepond/dist/filepond.min.css";

import moment from "moment";
import Pagination from "@/Components/Pagination.vue";

import Modal from "@/Components/Modal.vue";
import DangerLink from "@/Components/DangerLink.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

import { fileStatusClass } from "@/Composables/fileStatusClass.js";
import toast from "@/Stores/toast.js";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SuccessLink from "@/Components/SuccessLink.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";

const { uploaded_files } = defineProps({
    uploaded_files: {
        type: Object,
    },
    archived: {
        type: Number,
    },
    trashed_file_count: {
        type: Number
    }
});

const page = usePage();
const user = computed(() => page.props.auth.user);
const { getFileStatusClass } = fileStatusClass();

const fileToDelete = ref(null);
const confirmingFileDeletion = ref(false);

const confirmFileDeletion = (file_obj) => {
    confirmingFileDeletion.value = true;
    fileToDelete.value = file_obj;
};

const closeModal = () => {
    confirmingFileDeletion.value = false;
    // fileToDelete.value = null;
};

const deletingFileId = ref(null);
const fileStatuses = reactive({});

const deleteFile = async () => {

    // console.log(fileToDelete.value);
    // console.log(fileToDelete.value.id);

    if(fileToDelete.value) {

        deletingFileId.value = fileToDelete.value.id;
        fileStatuses[fileToDelete.value.id] = 'Deleting';

        closeModal();

        try {

            await new Promise((resolve, reject) => {

                router.delete(route('files.destroy', fileToDelete.value.id), {
                    preserveScroll: true,
                    // only: ['uploaded_files'],
                    onSuccess: () => {
                        fileStatuses[fileToDelete.value.id] = '';
                        fileToDelete.value = null;
                        deletingFileId.value = null;
                        resolve();
                    },
                    onError: () => {
                        reject(new Error("Failed to delete file"));
                    }
                });
            });

        } catch (error) {
            toast.error(error);
            console.log(error);
        }

    }
}



const FilePond = VueFilePond(FilePondPluginFileValidateType);
const files = ref([]);

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
            url: '/files',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': page.props.csrf,
            },
            onerror: (response) => {
                console.log("on error");
                serverResponse = JSON.parse(response);
            },
            // onload: (response) => {
            //     console.log("on load");
            //     console.log(JSON.parse(response));
            //     console.log(files.value);
            // },
        },
    },
    // labelFileProcessingComplete: (resp) => {
        // console.log("LABEL FILE PROCESS COMPLETE");
        // console.log(resp);
        // router.reload({ only: ['uploaded_files'] });
        // return "Upload Complete! Processing File...";
    // },
    labelFileProcessingError: (error) => {
        console.log(error);
        if (serverResponse.errors && serverResponse.errors.upload_file) {
            return serverResponse.errors.upload_file.join(' ');
        }
        return serverResponse.message;
    },
});

const userWatcher = watch(
    user,
    (newUser, oldUser) => {
        if (oldUser) {
            // Leave the channel when the user changes or becomes null/undefined
            Echo.leave(`App.Models.User.${oldUser.id}`);
        }
    },
    { immediate: false } // Set to true if you want to leave on component mount
);

onMounted(() => {

    Echo.private(`App.Models.User.${user.value.id}`)
        .listen('FileStatusUpdate', (e) => {
            console.log('teslkjslkdf');
            router.reload({ only: ['uploaded_files'] });
        });
});

onBeforeUnmount(() => {
    if(user.value) {
        Echo.leave(`App.Models.User.${user.value.id}`);
    }
});

</script>

<template>
    <Head title="File Upload" />

    <AuthenticatedLayout>
        <template #header> Files </template>

        <div class="py-6">
            <div v-if="trashed_file_count" class="relative flex justify-end mb-4">

                <PrimaryLink
                    :href="route('files.index', {archived: archived ? false : true })"
                >
                    {{ archived ? "Current" : "Archived"}} Files

                </PrimaryLink>

            </div>

            <div class="py-6">

                <FilePond
                    v-if="!archived"
                    name="upload_file"
                    ref="pond"
                    class-name="my-file-upload"
                    label-idle="Drag & Drop your PDF files here or <span class='filepond--label-action'>Browse</span>"
                    v-model="files"
                />

            </div>

            <div v-if="uploaded_files.data.length" class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-visible">
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
                                            Uploaded
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
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-600">

                                    <tr v-for="file in uploaded_files.data" :key="file.id">

                                        <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                            <a :href="file.download_link" target="_blank" rel="noopener noreferrer" class="font-medium">{{ file.original_name }}</a>
                                        </td>
                                        <td
                                            class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                            <p>{{ moment(file.created_at,).format("MMM DD, YYYY h:mma") }}</p>
                                            <span class="text-xs">by {{ file.user.name }}</span
                                            >
                                        </td>
                                        <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                            {{ file.size_readable }}
                                        </td>
                                        <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">

                                          <span
                                              class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                                              :class="getFileStatusClass(fileStatuses[file.id] === 'Deleting' ? 'Deleting' : file.status)">

                                              <span class="relative mr-1.5 flex h-2.5 w-2.5">

                                                  <template v-if="file.status != 'Completed'">
                                                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full"
                                                            :class="getFileStatusClass(fileStatuses[file.id] === 'Deleting' ? 'Deleting' : file.status, 'PROCESS_CLASSES')"></span>
                                                      <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                                            :class="getFileStatusClass(fileStatuses[file.id] === 'Deleting' ? 'Deleting' : file.status, 'PROCESS_CLASSES')"></span>
                                                  </template>

                                                  <span v-else class="relative inline-flex h-2.5 w-2.5 rounded-full"
                                                        :class="getFileStatusClass(fileStatuses[file.id] === 'Deleting' ? 'Deleting' : file.status, 'PROCESS_CLASSES')"></span>

                                              </span>

                                              <span>{{ fileStatuses[file.id] === 'Deleting' ? 'Deleting' : file.status }}</span>

                                          </span>

                                        </td>

                                        <td class="p-3.5">

                                            <DangerButton
                                                v-if="['Pending', 'Completed', 'Failed'].includes(file.status)"
                                                @click="confirmFileDeletion(file)"
                                                >
                                                <i class="bx bx-trash text-lg"></i>
                                            </DangerButton>

                                            <div v-if="file.status == 'Deleted'">

                                                <SuccessLink
                                                    :href="route('files.restore', file)"
                                                    method="post"
                                                    as="button"
                                                >
                                                    Restore
                                                </SuccessLink>

<!--                                                <DangerLink-->
<!--                                                    :href="route('files.prune', file)"-->
<!--                                                    method="post"-->
<!--                                                    as="button"-->
<!--                                                    class="ml-2"-->
<!--                                                >-->
<!--                                                    Permanently Delete-->
<!--                                                </DangerLink>-->

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                :dataset="uploaded_files"
                class="mt-4"
            />

            <Modal :show="confirmingFileDeletion" @close="closeModal">
                <div class="p-6">
                    <h2 class="text-lg font-medium text-gray-900">
                        Are you sure you want to delete this document?
                    </h2>

                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                        <DangerButton
                            class="ml-3"
                            @click="deleteFile()"
                        >
                            Delete
                        </DangerButton>
                    </div>
                </div>
            </Modal>


        </div>
    </AuthenticatedLayout>
</template>

<style scoped></style>
