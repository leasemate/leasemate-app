<template>


    <div class="text-center mb-5">
        <div>
            <slot name="tenant_logo" />
        </div>
    </div>

    <div class="p-8 bg-violet-50 rounded-xl border-2 border-slate-300">
        <slot />
    </div>

</template>
<script setup>
</script>
