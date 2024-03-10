<script setup>

const props = defineProps({
    asset: Object,
});

</script>

<template>

    <div class="relative mt-4">
        <img
            :src="asset.asset_photo ?? '/images/asset-tmp-photo.png'"
            alt="Property" class="w-full h-auto object-cover max-h-72 rounded-lg shadow-lg" />

        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg">
            <div class="text-center text-white p-4">
                <h1 class="text-4xl font-bold mb-2">{{ asset.name }}</h1>
                <p class="text-xl">{{ asset.address }}</p>
                <p class="text-lg">GLA: {{ filters.formatNumberSqFt(asset.gross_leasable_area)??'--' }}</p>
                <!-- Additional property details here -->
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
