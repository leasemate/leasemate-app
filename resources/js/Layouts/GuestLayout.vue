<script setup>

import ToastList from "@/Components/ToastList.vue";
</script>

<template>

    <ToastList />

<!--    <div class="container-fluid">-->
<!--        <div class="max-h-screen">-->

<!--            <img src="/images/bg-1.jpg" alt="">-->
<!--            <div class="bg-overlay bg-gray-500/60 inset-0 absolute"></div>-->
<!--        </div>-->

<!--        <slot />-->
<!--    </div>-->

    <div class="flex min-h-screen">
        <div class="relative w-full">
            <!-- Background image container -->
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/bg-1.jpg');">
                <!-- Overlay -->
                <div class="bg-overlay bg-gray-500/60 inset-0 absolute"></div>
            </div>

            <!-- Content (slot) -->
            <div class="relative z-10">
                <slot />
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
