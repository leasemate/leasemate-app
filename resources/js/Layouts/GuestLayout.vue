<script setup>

import ToastList from "@/Components/ToastList.vue";
</script>

<template>

    <ToastList />

    <div class="container-fluid">
        <div class="max-h-screen">
<!--            <div class="swiper-wrapper">-->
<!--                <div class="swiper-slide">-->
                    <img src="/images/bg-1.jpg" alt="">
                    <div class="bg-overlay bg-gray-500/60 inset-0 absolute"></div>
<!--                </div>-->
<!--            </div>-->
<!--            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">-->
<!--                <div class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">-->
<!--                </div>-->
<!--                <div class="swiper-pagination-bullet" tabindex="1">2</div>-->
<!--                <div class="swiper-pagination-bullet" tabindex="2">3</div>-->
<!--            </div>-->
        </div>

        <slot />
    </div>

</template>

<style scoped>

</style>
