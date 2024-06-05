<script setup>
import {ref, computed, onMounted, onBeforeUnmount, nextTick, onBeforeMount} from 'vue';
import {router, usePage} from '@inertiajs/vue3'

import TopBar from "@/Components/Layout/TopBar.vue";
import Nav from "@/Components/Layout/Nav.vue";
import SubHeader from "@/Components/Layout/SubHeader.vue";
import Footer from "@/Components/Layout/Footer.vue";

import feather from "feather-icons";
import {createPopper} from "@popperjs/core";
import GlobalValidation from "@/Components/Layout/GlobalValidation.vue";
import ToastList from "@/Components/ToastList.vue";

import { useNotificationStore } from "@/Stores/notificationStore.js";

const page = usePage();
const user = computed(() => page.props.auth.user);

const isShowDropMenu = ref(false);
const isMenuInside = ref(false);

const dropdownEvent = (elem, place) => {
    const items = document.querySelectorAll(elem);

    Array.from(items).forEach(item => {
        item.querySelectorAll(".dropdown-toggle").forEach( subitem => {
            subitem.addEventListener("click", event => {
                subitem.classList.toggle("show");

                var popper = createPopper(subitem, item.querySelector(".dropdown-menu"), {
                    placement: place
                });

                if (subitem.classList.contains("show") != true) {
                    if(item.querySelector(".dropdown-menu")) {
                        item.querySelector(".dropdown-menu").classList.remove("block")
                        item.querySelector(".dropdown-menu").classList.add("hidden")
                    }
                } else {
                    dismissDropdownMenu()
                    if(item.querySelector(".dropdown-menu")) {
                        item.querySelector(".dropdown-menu").classList.add("block")
                        item.querySelector(".dropdown-menu").classList.remove("hidden")
                    }
                    if (item.querySelector(".dropdown-menu") && item.querySelector(".dropdown-menu").classList.contains("block")) {
                        subitem.classList.add("show")
                    } else {
                        subitem.classList.remove("show")
                    }
                    event.stopPropagation();
                }

                isMenuInside.value = false;
            });
        });
    });
}

const dismissDropdownMenu = () => {
    // console.log('dismiss dropdown');
    Array.from(document.querySelectorAll(".dropdown-menu")).forEach( item => {
        item.classList.remove("block")
        item.classList.add("hidden")
    });
    Array.from(document.querySelectorAll(".dropdown-toggle")).forEach( item => {
        item.classList.remove("show")
    });
    isShowDropMenu.value = false;
}

const closeDropdownOutsideClick = (event) => {
    if (!isShowDropMenu.value && !isMenuInside.value) {
        dismissDropdownMenu();
    }
    isShowDropMenu.value = false;
}

Array.from(document.querySelectorAll(".dropdown-menu")).forEach( item => {
    if (item.querySelectorAll("form")) {
        Array.from(item.querySelectorAll("form")).forEach( subitem => {
            subitem.addEventListener("click", event => {
                if (!isShowDropMenu.value) {
                    isShowDropMenu.value = true;
                }
            })
        });
    }
});

// data-tw-auto-close
Array.from(document.querySelectorAll(".dropdown-toggle")).forEach( item => {
    var elem = item.parentElement
    if (item.getAttribute('data-tw-auto-close') == 'outside') {
        elem.querySelector(".dropdown-menu").addEventListener("click",  () => {
            if (!isShowDropMenu.value) {
                isShowDropMenu.value = true;
            }
        });
    } else if (item.getAttribute('data-tw-auto-close') == 'inside') {
        item.addEventListener("click", () => {
            isShowDropMenu.value = true;
            isMenuInside.value = true;
        });
        elem.querySelector(".dropdown-menu").addEventListener("click", () => {
            isShowDropMenu.value = false;
            isMenuInside.value = true;
        });
    }
});

const notificationStore = useNotificationStore();

onBeforeMount(() => {
    notificationStore.setInitialData(page.props.my_notifications, page.props.notification_count);
});

onMounted(() => {

    dropdownEvent('.dropdown', 'bottom-start');
    dropdownEvent('.dropup', 'top-start');
    dropdownEvent('.dropstart', 'left-start');
    dropdownEvent('.dropend', 'right-start');

    window.addEventListener('click', closeDropdownOutsideClick);

    feather.replace();
});


onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropdownOutsideClick);
});

</script>

<template>

    <ToastList />

    <TopBar />

    <Nav />

    <div class="main-content">
        <div class="page-content dark:bg-zinc-700 min-h-screen dark:text-gray-50">

            <div class="container-fluid px-[0.625rem]">

                <div class="max-w-screen-2xl mx-auto">

                    <div class="mt-6 mb-6">

                        <div class="grid grid-cols-1 mb-5">
                            <div class="flex items-center justify-between">
                                <h4 class="mb-sm-0 text-lg font-semibold uppercase grow text-gray-800 dark:text-gray-100">
                                    <slot name="header" />
                                </h4>
                            </div>
                        </div>

                        <div v-if="$page.props.flash.success" class="relative px-5 py-3 border-2 bg-green-50 text-green-700 border-green-100 rounded-lg">
                            <p>{{ $page.props.flash.success }}</p>
                        </div>

                        <div v-if="$page.props.flash.error" class="relative px-5 py-3 border-2 bg-red-50 text-red-700 border-red-100 rounded-lg">
                            <p>{{ $page.props.flash.error }}</p>
                        </div>

                        <div v-if="$page.props.flash.message" class="relative px-5 py-3 border-2 bg-yellow-50 text-yellow-700 border-yellow-100 rounded-lg">
                            <p>{{ $page.props.flash.message }}</p>
                        </div>
                    </div>

                    <slot />
                </div>

                <Footer />

            </div>
        </div>
    </div>


</template>
