<script setup>

import { Head, Link, router } from "@inertiajs/vue3"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Button from "@/Components/Button.vue"
import TableDropdown from "@/Components/TableDropdown.vue"
import { MenuItem } from "@headlessui/vue"
import BoxIcon from "@/Components/BoxIcon.vue"
import DangerButton from "@/Components/DangerButton.vue"
import SecondaryButton from "@/Components/SecondaryButton.vue"
import Modal from "@/Components/Modal.vue"
import toast from "@/Stores/toast.js"
import { ref } from "vue"

const props = defineProps({
    assets: Array,
});


const assetToDelete = ref(null);
const confirmingAssetDeletion = ref(false);

const confirmAssetDeletion = (asset) => {
    confirmingAssetDeletion.value = true;
    assetToDelete.value = asset;
};

const closeModal = () => {
    confirmingAssetDeletion.value = false;
};

const deleteAsset = () => {

    if(assetToDelete.value) {
        closeModal();
        try {
            router.delete(route('assets.destroy', assetToDelete.value.id), {
                preserveScroll: true,
            });
        } catch (error) {
            toast.error(error);
            console.log(error);
        }

    }
}

</script>

<template>

    <Head title="Assets" />

    <AuthenticatedLayout>

        <template #header> Assets </template>

        <div class="flex justify-end">
            <PrimaryLink
                :href="route('assets.create')"
            >Create Asset</PrimaryLink>
        </div>

        <div v-if="assets.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

            <!-- Repeat this block for each asset -->
            <div  v-for="asset in assets" class="relative border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <Link :href="route('assets.show', asset)">
                    <img :src="asset.asset_photo_url ?? '/images/asset-tmp-photo.png'" alt="Asset Photo" class="w-full h-48 object-cover" />

                    <div class="p-4">
                        <h3 class="text-lg font-semibold">{{asset.name}}</h3>
                        <p class="text-sm text-gray-600">{{ asset.address }}</p>
                        <p class="text-sm text-gray-600">GLA: {{ filters.formatNumberSqFt(asset.gross_leasable_area)??'--' }}</p>
                    </div>
                </Link>

                <div class="absolute bottom-0 right-0 p-4">
                    <BoxIcon
                        @click="confirmAssetDeletion(asset)"
                        class="bx-trash text-red-400 hover:text-red-600 cursor-pointer"
                    />
                </div>

            </div>

        </div>

        <div v-else class="mt-10 py-48 bg-gray-50 rounded-lg shadow-md">
            <h2 class="text-center text-gray-300">No Assets</h2>
        </div>

        <Modal :show="confirmingAssetDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this asset?
                </h2>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        @click="deleteAsset()"
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
