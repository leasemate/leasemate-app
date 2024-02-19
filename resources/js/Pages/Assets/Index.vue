<script setup>

import {Head, Link} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";

const props = defineProps({
    assets: Array,
});

</script>

<template>

    <Head title="Assets" />

    <AuthenticatedLayout>

        <template #header> Assets </template>

            <div class="flex justify-end">
                <PrimaryLink
                    :href="route('assets.create', $page.props.tenant_domain??null)"
                >Create Asset</PrimaryLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

                <!-- Repeat this block for each asset -->
                <div  v-for="asset in assets" class="border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <Link :href="route('assets.show', [$page.props.tenant_domain, asset])">
                        <img src="/images/Commercial-real-estate.webp" alt="Asset Photo" class="w-full h-48 object-cover" />

                        <div class="p-4">
                            <h3 class="text-lg font-semibold">{{asset.name}}</h3>
                            <p class="text-sm text-gray-600">{{ asset.address }}</p>
                            <p class="text-sm text-gray-600">GLA: {{ filters.formatNumberSqFt(asset.gross_leasable_area)??'--' }}</p>
                            <!-- Add more details as needed -->
                        </div>
                    </Link>
                </div>

                <!-- End of asset block -->
            </div>

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
