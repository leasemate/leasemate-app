<script setup>

const props = defineProps({
    associates: Array,
});

</script>

<template>

    <div class="border rounded-lg px-4 py-4 my-8 shadow-lg">

        <h4>Associates:</h4>

        <ul>
            <li v-for="associate in associates" :key="associate.id">
                {{ associate.display_name_with_roles }} - {{ associate.email }}
            </li>
        </ul>

    </div>

</template>

<style scoped>

</style>
