<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { usePage } from '@inertiajs/vue3'

import TopBar from "@/Components/Layout/TopBar.vue";
import Nav from "@/Components/Layout/Nav.vue";
import SubHeader from "@/Components/Layout/SubHeader.vue";
import Footer from "@/Components/Layout/Footer.vue";

import feather from "feather-icons";
import {createPopper} from "@popperjs/core";
import GlobalValidation from "@/Components/Layout/GlobalValidation.vue";

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
                    item.querySelector(".dropdown-menu").classList.remove("block")
                    item.querySelector(".dropdown-menu").classList.add("hidden")
                } else {
                    dismissDropdownMenu()
                    item.querySelector(".dropdown-menu").classList.add("block")
                    item.querySelector(".dropdown-menu").classList.remove("hidden")
                    if (item.querySelector(".dropdown-menu").classList.contains("block")) {
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

    <!---- top bar ---->

    <TopBar />

    <Nav />

    <div class="main-content">
        <div class="page-content dark:bg-zinc-700 min-h-screen">

            <div class="container-fluid px-[0.625rem]">

                <GlobalValidation />

                <!--- page title --->
                <SubHeader>
                    <template #header>
                        <slot name="header" />
                    </template>
                </SubHeader>

                <slot />

                <Footer />

            </div>
        </div>
    </div>


</template>
