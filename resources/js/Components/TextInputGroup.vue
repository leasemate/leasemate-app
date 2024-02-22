<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
    groupTextSide: {
        type: String,
        default: 'left',
    },
    groupText: {
        type: String,
        default: '',
    },
    groupTextClasses: {
        type: String,
        default: '',
    },
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>

    <div class="flex items-center p-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-md shadow-sm transition-all duration-300 focus-within:border-indigo-500 dark:focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-500 dark:focus-within:ring-indigo-600">

        <div v-if="groupTextSide=='left'"
             class="input-group-text px-4 dark:text-zinc-100 border-r border-gray-100 whitespace-nowrap"
             :class="groupTextClasses"
        >{{ groupText }}</div>

        <input
            ref="input"
            type="text"
            class="w-full py-1 border-0 placeholder:text-sm dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100 dark:placeholder:text-zinc-100 focus:outline-none focus:border-transparent focus:ring-0"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >

        <div v-if="groupTextSide=='right'"
             class="input-group-text px-4 dark:text-zinc-100 border-l border-gray-100 whitespace-nowrap"
             :class="groupTextClasses"
        >{{ groupText }}</div>

    </div>

<!--    <input-->
<!--        ref="input"-->
<!--        class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"-->
<!--        :value="modelValue"-->
<!--        @input="$emit('update:modelValue', $event.target.value)"-->
<!--    >-->
</template>
