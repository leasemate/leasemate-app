<script setup>
import { onMounted } from 'vue';
import { Link } from "@inertiajs/vue3";
import simplebar from "simplebar-vue";
import {Inertia} from "@inertiajs/inertia";
import {MetisMenu} from "metismenujs";
import SideNavLink from "@/Components/SideNavLink.vue";

const closeVerticalMenu = () => {
    // Logic to close the vertical menu
    document.body.classList.remove('sidebar-enable');
};

const initMenuItemScroll = () => {

    setTimeout(function () {
        var sidebarMenu = document.getElementById("side-menu");
        if (sidebarMenu) {
            var activeMenu = sidebarMenu.querySelector(".mm-active .active");
            var offset = activeMenu ? activeMenu.offsetTop : 0;
            if (offset > 300) {
                var verticalMenu = document.getElementsByClassName("vertical-menu") ? document.getElementsByClassName("vertical-menu")[0] : "";
                if (verticalMenu && verticalMenu.querySelector(".simplebar-content-wrapper")) {
                    setTimeout(function () {
                        offset == 330 ?
                            (verticalMenu.querySelector(".simplebar-content-wrapper").scrollTop = offset + 85) :
                            (verticalMenu.querySelector(".simplebar-content-wrapper").scrollTop = offset);
                    }, 0);
                }
            }
        }
    }, 250);
}

const initActiveMenu = () => {
    var menuItems = document.querySelectorAll("#sidebar-menu a");

    var pageUrl = window.location.href.split(/[?#]/)[0];
// console.log(pageUrl);
    menuItems && menuItems.forEach(function (item) {
        const pattern = new RegExp("^" + item.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

        let isAMatch = pattern.test(pageUrl);

        if (isAMatch) {
            item.classList.add("active");
            var parent = item.parentElement;
            if (parent && parent.id !== "side-menu") {
                parent.classList.add("mm-active");
                var parent2 = parent.parentElement; // ul .
                if (parent2 && parent2.id !== "side-menu") {
                    parent2.classList.add("mm-show"); // ul tag
                    var parent3 = parent2.parentElement; // li tag
                    if (parent3 && parent3.id !== "side-menu") {
                        parent3.classList.add("mm-active"); // li
                        var parent4 = parent3.parentElement; // ul
                        if (parent4 && parent4.id !== "side-menu") {
                            parent4.classList.add("mm-show"); // ul
                            var parent5 = parent4.parentElement;
                            if (parent5 && parent5.id !== "side-menu") {
                                parent5.classList.add("mm-active"); // li
                            }
                        }
                    }
                }
            }
        }
    });
}

onMounted(() => {
    // console.log('on mount top bar');
    initMenuItemScroll();

    Inertia.on('navigate', initActiveMenu);
    Inertia.on('navigate', closeVerticalMenu);

    if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
        document.body.setAttribute('data-sidebar-size', 'sm');
    }

    if (document.getElementById("side-menu")) {
        const menuElement = document.querySelector('#side-menu');

        const metis = new MetisMenu(menuElement);

        document.addEventListener('show.metisMenu', (event) => {
            console.log('MetisMenu show event:', event);
            // EventBus.emit('metis-menu-show', event);
        });
    }

});

</script>

<template>

    <div class="vertical-menu rtl:right-0 fixed ltr:left-0 bottom-0 top-16 h-screen border-r bg-indigo-50 border-gray-50 print:hidden dark:bg-zinc-800 dark:border-neutral-700 z-10">

        <simplebar data-simplebar class="h-full">
            <!--- Sidemenu -->
            <div
                v-if="$page.props.auth.user.email_verified_at"
                id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">

                    <li class="menu-heading px-4 py-3.5 text-xs font-medium text-gray-500 cursor-default" data-key="t-menu">Menu</li>

                    <li>

                        <SideNavLink :href="route('dashboard')">
                            <i data-feather="trending-up"></i>
                            <span data-key="t-dashboard"> Dashboard</span>
                        </SideNavLink>
                    </li>

                    <li>
                        <SideNavLink :href="route('assets.index')">
                            <i data-feather="home"></i>
                            <span data-key="t-chat"> Assets</span>
                        </SideNavLink>
                    </li>

                    <li>
                        <a href="javascript:void();" class="nav-menu pl-6 pr-4 py-3 block text-sm font-medium text-gray-700 ease-linear hover:text-indigo-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="settings"></i>
                            <span data-key="t-dashboard"> Settings</span>
                        </a>
                        <ul class="mm-collapse">
                            <li>
                                <!--                                <a href="/app-calendar.html" class="">Calendar</a>-->
                                <Link :href="route('users.index')" class="pl-14 pr-4 py-2 block text-[13.5px] font-medium text-gray-700 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
<!--                                    <i data-feather="users"></i>-->
                                    <span data-key="t-dashboard"> Users</span>
                                </Link>
                            </li>
                            <li>
                                <!--                                <a href="/app-calendar.html" class="">Calendar</a>-->
                                <Link :href="route('roles.index')" class="pl-14 pr-4 py-2 block text-[13.5px] font-medium text-gray-700 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
<!--                                    <i data-feather="lock"></i>-->
                                    <span data-key="t-dashboard"> Roles</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                </ul>

<!--                <div class="sidebar-alert text-center mx-5 my-12">-->
<!--                    <div class="card-body bg-primary rounded bg-violet-50/50 dark:bg-zinc-700/60">-->
<!--                        <img src="@/../images/giftbox.png" class="block mx-auto">-->
<!--                        <div class="mt-4">-->
<!--                            <h5 class="text-violet-500 mb-3 font-medium">Unlimited Access</h5>-->
<!--                            <p class="text-slate-600 text-13 dark:text-gray-50">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>-->
<!--                            <a href="#!" class="btn bg-violet-500 text-white border-transparent mt-6">Upgrade Now</a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <!-- Sidebar -->
        </simplebar>
    </div>

</template>
