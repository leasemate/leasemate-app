<script setup>
//create a classess property for css classes to be passed to the table
const props = defineProps({
    containerClasses: {
        type: String,
        default: '',
    },
    tableClasses: {
        type: String,
        default: '',
    },
})
</script>

<template>

    <div
        :class="containerClasses"
        class="relative overflow-x-auto rounded-lg"
    >
        <table
            :class="tableClasses"
            class="w-full text-sm text-left text-gray-500 overflow-visible"
        >
            <thead class="text-xs text-gray-700 dark:text-gray-100 uppercase bg-gray-50/50 dark:bg-indigo-700/50">
            <slot name="head" />
            </thead>

            <tbody>
            <slot name="body" />
            </tbody>
        </table>
    </div>

</template>

<style scoped>

</style>
