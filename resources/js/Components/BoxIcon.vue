<script setup>
const props = defineProps({
    class: {
        type: String,
        default: 'button',
    },
})
</script>

<template>
    <i
        class="bx text-[20px]"
        :class="props.class"
    />
</template>
