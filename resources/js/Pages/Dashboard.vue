<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import ChatBot from "@/Components/ChatBot.vue";

</script>

<template>
    <AuthenticatedLayout>
        <template #header>
<!--            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">-->
                Dashboard
<!--            </h2>-->
        </template>


        <div>
            Welcome

            <ChatBot />

        </div>

    </AuthenticatedLayout>
</template>
