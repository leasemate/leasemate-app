<template>

    <div class="container fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50">
        <div class="flex justify-center">
            <div class="w-full lg:w-[40%]">

                <div class="text-center mb-5">
                    <div>
                        <slot name="logo" />
                        <h2>{{  $page.props.app_name }}</h2>
                    </div>

                    <span v-if="$page.props.tenant_name" class="text-xl text-center font-medium dark:text-white mt-6">{{ $page.props.tenant_name }}</span>
                </div>

                <div class="p-8 bg-slate-50 rounded-2xl border-2 border-slate-300">
                    <slot />
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
</script>
