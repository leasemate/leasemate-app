<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";
import Pagination from "@/Components/Pagination.vue";
import {fileStatusClass} from "@/Composables/fileStatusClass.js";

import { EventBus } from "@/Services/event-bus.js";
import { useNotificationStore } from "@/Stores/notificationStore.js";

const { getFileStatusClass } = fileStatusClass();

const page = usePage();
const user = ref(page.props.auth.user);

const { notifications } = defineProps({
    notifications: {
        type: Object,
    },
});

const notificationStore = useNotificationStore();
const handleNewNotification = (notification) => {
    router.reload({
        only: ['notifications'],
        onSuccess: (page) => {
            notificationStore.count = page.props.notification_count;
        }
    });
}

onMounted(() => {
   EventBus.on('new-notification', handleNewNotification);
});

onBeforeUnmount(() => {
    EventBus.off('new-notification', handleNewNotification);
});

</script>

<template>


    <Head title="Notifications" />

    <AuthenticatedLayout>
        <template #header> Notifications </template>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-sm text-gray-700 dark:text-gray-100 bg-gray-50 dark:bg-zinc-600">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        File
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="notification in notifications.data"
                    :key="notification.id"
                    class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">

                    <td class="px-6 py-3.5 dark:text-zinc-100">
                        {{ notification.data.notification_type_name }}
                    </td>
                    <td class="px-6 py-3.5 dark:text-zinc-100">
                        {{ notification.data.file_name }}
                    </td>
                    <td class="px-6 py-3.5 dark:text-zinc-100">
                        <span
                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            :class="getFileStatusClass(notification.data.file_status)"
                        >{{ notification.data.file_status }}</span>
                    </td>
                    <td>
                        <p>{{ dayjs(notification.created_at).format("MMM DD, YYYY h:mma") }}</p>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>

        <Pagination
            :dataset="notifications"
            class="mt-4"
        />

    </AuthenticatedLayout>


</template>

<style scoped>

</style>
