<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});

</script>

<template>
    <button :type="type" class="" disabled="disabled">
        <slot />
    </button>
</template>

<style scoped>

</style>
