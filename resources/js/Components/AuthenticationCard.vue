<template>

    <div class="grid grid-cols-12 justify-center">
        <div class="col-span-4 col-start-5">

            <div class="text-center mb-5">
                <div>
                    <slot name="logo" />
                    <h2>REAI</h2>
                </div>

                <span v-if="$page.props.tenant_name" class="text-xl text-center font-medium dark:text-white mt-6">{{ $page.props.tenant_name }}</span>
            </div>

            <div class="p-8 bg-slate-50 rounded-2xl border-2 border-slate-300">

                <slot />

            </div>
        </div>
    </div>

</template>
