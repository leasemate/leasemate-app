<script setup>

import RentSchedule from "@/Pages/AssetLeases/RentSchedule.vue"
</script>

<template>
    <div class="col-span-6 rounded-lg shadow-md border p-4">

        <h5 class="text-indigo-500">
            <slot name="header" />
        </h5>

        <slot />

    </div>
</template>

<style scoped>

</style>
