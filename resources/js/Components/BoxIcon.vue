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
        :class="props.class"
        class="bx text-[18px]"
    />
</template>
