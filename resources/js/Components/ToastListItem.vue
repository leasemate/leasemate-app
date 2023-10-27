<script setup>
import {onMounted} from "vue";

const props = defineProps({
    message: String,
    type: {
        type: String,
        default: 'success'
    },
    duration: {
        type: Number,
        default: 5000
    }
})

onMounted(() => {
console.log(props.duration);
    setTimeout(() => {
        emit('remove')
    }, props.duration);

});

const emit = defineEmits(['remove'])

</script>

<template>

    <div class="flex items-center p-4 text-gray-500 dark:text-zinc-100/80 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-zinc-700 dark:shadow-zinc-600" role="alert">

        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"
             :class="{
                'text-green-500 bg-green-50 dark:bg-green-500/20 dark:text-green-200': props.type === 'success',
                'text-yellow-500 bg-yellow-50 dark:bg-yellow-500/20 dark:text-yellow-200': props.type === 'warning',
                'text-blue-500 bg-blue-50 dark:bg-blue-500/20 dark:text-blue-200': props.type === 'info',
                'text-red-500 bg-red-50 dark:bg-red-500/20 dark:text-red-200': props.type === 'error',
             }"
        >
            <div class="p-5 text-center">
                <i class="text-lg bx"
                :class="{
                    'bx-check': props.type === 'success',
                    'bx-error': props.type === 'warning',
                    'bx-bell': props.type === 'info',
                    'bx-error-alt': props.type === 'error',
                }"></i>
            </div>
        </div>

        <div class="ltr:ml-3 rtl:mr-3 text-sm font-normal">{{ props.message }}</div>

        <button @click="emit('remove')" type="button" class="ltr:ml-auto rtl:mr-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-50/50 py-[5px] hover:bg-gray-50/50 text-center h-8 w-8 dark:bg-zinc-800 dark:text-gray-100 dark:focus:ring-zinc-500/50" data-dismiss-target="#toast-default" aria-label="Close">
            <i class="bx bx-x text-2xl -mt-1 text-center" data-tw-dismiss="toast"></i>
        </button>

    </div>

</template>

<style scoped>

</style>
