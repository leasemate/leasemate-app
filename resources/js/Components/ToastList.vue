<script setup>
import ToastListItem from "@/Components/ToastListItem.vue";
import {onUnmounted, ref} from "vue";
import toast from "@/Stores/toast"
import {Inertia} from "@inertiajs/inertia";
import { usePage } from '@inertiajs/vue3';

const page = usePage();

let removeFinishEventListener = Inertia.on('finish', (message) => {
    if(page.props.flash.success) {
        toast.success(page.props.flash.success, 4000);
    }
    if(page.props.flash.warning) {
        toast.warning(page.props.flash.warning, 4000);
    }
    if(page.props.flash.error) {
        toast.error(page.props.flash.error, 4000);
    }
    if(page.props.flash.message) {
        toast.add(page.props.flash.message, 4000);
    }
});

onUnmounted(() => {
    removeFinishEventListener();
});

const remove = (index) => {
    toast.remove(index);
}

const add = (message) => {
    toast.add({message: message});
}

</script>

<template>

    <TransitionGroup
        tag="div"
        enter-from-class="translate-x-full opacity-0"
        enter-active-class="duration-500"
        leave-active-class="duration-500"
        leave-to-class="translate-x-full opacity-0"
        class="fixed top-4 right-8 z-50 space-y-4 w-full max-w-xs ">

        <ToastListItem v-for="(item, index) in toast.items"
                        :key="item.key"
                        :message="item.message"
                        :type="item.type"
                        :duration="item.duration"
                        @remove="remove(index)"/>

    </TransitionGroup>

</template>

<style scoped>

</style>
