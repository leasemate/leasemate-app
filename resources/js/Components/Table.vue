<script setup>

</script>

<template>

    <div class="relative overflow-x-auto rounded-lg pb-32">
        <table class="w-full text-sm text-left text-gray-500 overflow-visible">
            <thead class="text-xs text-gray-700 dark:text-gray-100 uppercase bg-gray-50/50 dark:bg-zinc-700/50">
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
