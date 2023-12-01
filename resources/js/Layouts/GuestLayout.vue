<script setup>
import { onMounted } from 'vue';
import feather from "feather-icons";

onMounted(() => {
    feather.replace();
});

</script>

<template>

    <div class="container-fluid">
        <div class="h-screen md:overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-12 ">
                <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 relative z-50">
                    <div class="w-full bg-white xl:p-12 p-10 dark:bg-zinc-800">
                        <div class="flex h-[90vh] flex-col">
                            <div class="mx-auto">
                                <a href="/" class="">
                                    <i data-feather="anchor" class="h-9 w-9 mr-2 inline"></i>
                                    <span class="text-xl align-middle font-medium ltr:ml-2 rtl:mr-2 dark:text-white">REAI</span>
                                </a>
                            </div>

                            <div class="my-auto">

                                <slot />

                            </div>

                            <div class=" text-center">
                                <p class="text-gray-500 dark:text-gray-100 relative mb-5"> REAI. Crafted with <i class="mdi mdi-heart text-red-400"></i></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">

                    <div class="h-screen bg-cover relative p-5">
                        <div class="absolute inset-0 bg-violet-500/90"></div>

                        <ul class="bg-bubbles absolute top-0 left-0 w-full h-full overflow-hidden animate-square">
                            <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%] "></li>
                            <li class="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
                            <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
                            <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
                            <li class="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
                            <li class="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
                            <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
                            <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
                            <li class="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
                            <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
