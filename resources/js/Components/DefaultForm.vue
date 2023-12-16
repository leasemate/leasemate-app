<script setup>

import {computed, useSlots} from "vue";

defineEmits(['submitted']);

const hasActions = computed(() => !! useSlots().actions);

</script>

<template>

    <div class="mt-5 md:mt-0 md:col-span-2">

        <form @submit.prevent="$emit('submitted')">

            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6 dark:bg-zinc-700 dark:border-zinc-600">
                    <div class="grid grid-cols-6 gap-6">

                        <slot name="form" />

                    </div>

                </div>

                <div v-if="hasActions" class="px-4 py-3 bg-slate-50 text-right sm:px-6 dark:bg-slate-50 dark:border-zinc-600">

                    <slot name="actions" />

                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>
