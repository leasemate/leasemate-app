<script setup>

const props = defineProps({
    associates: Array,
});

</script>

<template>

    <div class="relative border rounded-lg px-4 py-4 my-10 shadow-lg">

        <div class="absolute top-0 left-0 transform -translate-y-1/2 w-full px-4">
            <h5 class="bg-white text-center mx-auto px-2 py-1 inline-block">Team Members</h5>
        </div>

        <ul class="my-4">
            <li v-for="associate in associates" :key="associate.id">
                {{ associate.display_name_with_roles }} - {{ associate.email }}
            </li>
        </ul>

    </div>

</template>

<style scoped>

</style>
