<script setup>

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";
import moment from "moment";
import Pagination from "@/Components/Pagination.vue";

import Modal from "@/Components/Modal.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

import { fileStatusClass } from "@/Composables/fileStatusClass.js";

const { uploaded_files } = defineProps({
    uploaded_files: {
        type: Object,
    },
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
    fileToDelete.value = null;
};

const deleteFile = async () => {

    console.log(fileToDelete.value);
    if(fileToDelete.value) {
        router.delete(route('file-upload.destroy', fileToDelete.value.id), {
            preserveScroll: true,
            onSuccess: () => {
                fileToDelete.value = null;
                closeModal();
            }
        });
    }
}

onMounted(() => {

    Echo.private(`App.Models.User.${user.value.id}`)
        .listen('FileStatusUpdate', (e) => {
            router.reload({ only: ['uploaded_files'] });
        });
});

onBeforeUnmount(() => {
    Echo.leave(`App.Models.User.${user.value.id}`);
});

</script>

<template>
    <Head title="File Upload" />

    <AuthenticatedLayout>
        <template #header> File Upload </template>

        <div class="py-6">
            <div class="relative flex justify-end mb-4">
                <Link
                    :href="route('file-upload.create')"
                    type="button"
                    class="mb-4 btn text-white bg-violet-500 border-violet-500 hover:bg-violet-600 hover:border-violet-600 focus:bg-violet-600 focus:border-violet-600 focus:ring focus:ring-violet-500/30 active:bg-violet-600 active:border-violet-600"
                >
                    <i class="bx bx-plus text-16 align-middle ltr:mr-1 rtl:ml-1 "></i> Upload
                </Link>
            </div>

            <div class="flex flex-col">
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
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-600">

                                    <tr v-for="file in uploaded_files.data" :key="file.id">

                                        <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                            <a :href="file.download_link" target="_blank" rel="noopener noreferrer" class="font-medium">{{ file.original_name }}</a>
                                        </td>
                                        <td
                                            class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                            <p>{{ moment(file.created_at,).format("MMM DD, YYYY h:mm a") }}</p>
                                            <span class="text-xs">by {{ file.user.name }}</span
                                            >
                                        </td>
                                        <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                                            {{ file.size_readable }}
                                        </td>
                                        <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">

                                          <span
                                              class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                                              :class="getFileStatusClass(file.status)">
                                            {{file.status }}
                                          </span>
                                        </td>

                                        <td class="p-3.5">

                                            <button @click="confirmFileDeletion(file)">
                                                <i class="bx bx-trash text-lg hover:text-red-400"></i>
                                            </button>


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
                            Delete File
                        </DangerButton>
                    </div>
                </div>
            </Modal>

        </div>
    </AuthenticatedLayout>
</template>

<style scoped></style>
