<script setup>

import ToastList from "@/Components/ToastList.vue";
import GlobalValidation from "@/Components/Layout/GlobalValidation.vue";
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
</script>

<template>

    <ToastList />

    <div class="flex min-h-screen bg-gradient-to-br from-white to-violet-800 via-purple-100">
        <div class="relative w-full">


            <div class="container fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50">
                <div class="flex justify-center">
                    <div class="w-full lg:w-[40%]">

                        <div class="text-center">
                            <a :href="$page.props.app_website">
                                <img src="/images/logo.svg" alt="logo" class="w-1/2 mx-auto mb-8" />
                            </a>
                            <span v-if="$page.props.tenant_name" class="text-xl text-center font-medium dark:text-white mb-8">{{ $page.props.tenant_name }}</span>
                        </div>

                        <GlobalValidation />

                        <slot />

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
