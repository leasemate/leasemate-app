<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import {Link, usePage, router } from "@inertiajs/vue3";
import simplebar from "simplebar-vue";
import moment from "moment";
import { fileStatusClass } from "@/Composables/fileStatusClass.js";
import axios from "axios";
import toast from "@/Stores/toast";

const page = usePage();
const user = ref(page.props.auth.user);

const currentSidebarSize = ref(document.body.getAttribute('data-sidebar-size'));
const { getFileStatusClass } = fileStatusClass();

const localNotificationCount = ref(page.props.notification_count);
const localNotifications = ref(page.props.my_notifications);

const toggleMenu = (event) => {
    event.preventDefault();
    document.body.classList.toggle('sidebar-enable');

    // console.log('toggle menu');

    if (window.innerWidth >= 992) {
        const bodyAttribute = document.body.getAttribute('data-sidebar-size');
        switch (currentSidebarSize.value) {
            case null:
                document.body.setAttribute('data-sidebar-size', bodyAttribute === "lg" ? 'sm' : 'lg');
                break;
            case 'md':
                document.body.setAttribute('data-sidebar-size', bodyAttribute === "md" ? 'sm' : 'md');
                break;
            default:
                document.body.setAttribute('data-sidebar-size', bodyAttribute === "sm" ? 'lg' : 'sm');
        }
    } else {
        // If you have the function "initMenuItemScroll", you can call it here.
        initMenuItemScroll();
    }
};

const initModeSetting = () => {
    var body = document.body;
    var lightDarkBtn = document.querySelectorAll('.light-dark-mode');
    // console.log('init mode setting');
    // console.log(body);
    // console.log(lightDarkBtn);

    if (lightDarkBtn) {
        lightDarkBtn.forEach( item => {
            item.addEventListener('click', event => {
                if (body.hasAttribute("data-mode") && body.getAttribute("data-mode") == "dark") {
                    body.setAttribute('data-mode', 'light');
                    sessionStorage.setItem("data-layout-mode", "light");
                } else {
                    body.setAttribute('data-mode', 'dark');
                    sessionStorage.setItem("data-layout-mode", "dark");
                }
            });
        });
    }

    if (sessionStorage.getItem("data-layout-mode") && sessionStorage.getItem("data-layout-mode") == "light") {
        body.setAttribute('data-mode', 'light');
    } else if (sessionStorage.getItem("data-layout-mode") == "dark") {
        body.setAttribute('data-mode', 'dark');
    }
}

const markAsRead = (notification) => {

    try {

        const response = axios.post(route('notifications.mark-as-read', notification.id))
            .then(response => {
                if (response.status === 200) {
                    notification.read_at = response.data.read_at;
                    localNotificationCount.value = response.data.total_unread_notifications;
                }
            })
            .catch(error => {
                toast.error(error.response.status+": "+error.response.data.message);
            });

    } catch(error) {
        toast.error(error);
    }

}


onMounted(() => {
    // console.log('on mount top bar');
    initModeSetting();

    // console.log("onMount");

    Echo.private(`App.Models.User.${user.value.id}`)
        .notification((notification) => {

            console.log("notification:");
            console.log(notification);

            // console.log(notification);

            axios.get(route('notifications.show', notification.id))
                .then(response => {
                    // console.log(response.data);
                    let notif = response.data.notification;

                    localNotificationCount.value = response.data.total_unread_notifications;
                    localNotifications.value.unshift(notif);

                    if(notif.data.file_status === 'Extracting') {
                        console.log("INFO:::"+notif.data.file_name + ': ' + notif.data.file_status);
                        toast.info(notif.data.file_name + ': ' + notif.data.file_status);
                    } else {
                        console.log("SUCCESS:::"+notif.data.file_name + ': ' + notif.data.file_status);
                        toast.success(notif.data.file_name + ': ' + notif.data.file_status);
                    }

                })
                .catch(error => {
                    console.log(error);
                    toast.error("error....");
                });
        });
});

onBeforeUnmount(() => {

    if(user.value) {
        console.log('LEAVE CHANNEL');
        Echo.leave(`App.Models.User.${user.value.id}`);
    }

});


</script>

<template>

    <nav class="border-b border-slate-100 dark:bg-zinc-800 print:hidden flex items-center fixed top-0 right-0 left-0 bg-white z-10 dark:border-zinc-700">

        <div class="flex items-center justify-between w-full">
            <div class="topbar-brand flex items-center">
                <div class="navbar-brand flex items-center justify-between shrink px-4 h-[70px] border-r bg-slate-50 border-r-gray-50 dark:border-zinc-700 dark:bg-zinc-800">
                    <a href="#" class="flex items-center font-bold text-lg  dark:text-white">
<!--                        <img src="@/../images/logo-sm.svg" class="ltr:mr-2 rtl:ml-2 inline-block mt-1 h-6" />-->
                        <i data-feather="anchor" class="h-9 w-9 mr-2"></i>
                        <span class="hidden xl:block align-middle">REAI</span>
                    </a>
                </div>
                <button @click="toggleMenu" type="button" class="text-gray-600 dark:text-white h-[70px] ltr:-ml-10 ltr:mr-6 rtl:-mr-10 rtl:ml-10 vertical-menu-btn" id="vertical-menu-btn">
                    <i class="fa fa-fw fa-bars"></i>
                </button>
                <form class="app-search hidden xl:block px-5">
                    <div class="relative inline-block">
                        <input type="text" class="bg-gray-50/30 dark:bg-zinc-700/50 border-0 rounded focus:ring-0 placeholder:text-sm px-4 dark:placeholder:text-gray-200 dark:text-gray-100 dark:border-zinc-700 " placeholder="Search...">
                        <button class="py-1.5 px-2.5 text-white bg-violet-500 inline-block absolute ltr:right-1 top-1 rounded shadow shadow-violet-100 dark:shadow-gray-900 rtl:left-1 rtl:right-auto" type="button"><i class="bx bx-search-alt align-middle"></i></button>
                    </div>
                </form>
            </div>
            <div class="flex items-center">

                <div>
                    <div class="dropdown relative sm:hidden block">
                        <button type="button" class="text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 dropdown-toggle" data-dropdown-toggle="navNotifications">
                            <i data-feather="search" class="h-5 w-5"></i>
                        </button>

                        <div class="dropdown-menu absolute px-4 -left-36 top-0 mx-4 w-72 z-50 hidden list-none border border-gray-50 rounded bg-white shadow dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300" id="navNotifications">
                            <form class="py-3 dropdown-item" aria-labelledby="navNotifications">
                                <div class="form-group m-0">
                                    <div class="flex w-full">
                                        <input type="text" class="border-gray-100 dark:border-zinc-600 dark:text-zinc-100 w-fit" placeholder="Search ..." aria-label="Search Result">
                                        <button class="btn btn-primary border-l-0 rounded-l-none bg-violet-500 border-transparent text-white" type="submit"><i class="mdi mdi-magnify"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div>
                    <button type="button" class="light-dark-mode text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 hidden sm:block ">
                        <i data-feather="moon" class="h-5 w-5 block dark:hidden"></i>
                        <i data-feather="sun" class="h-5 w-5 hidden dark:block"></i>
                    </button>
                </div>

                <div>
                    <div class="dropdown relative text-gray-600 hidden sm:block">
                        <button type="button" class="btn border-0 h-[70px] text-xl px-4 dropdown-toggle dark:text-gray-100" data-bs-toggle="dropdown" id="dropdownMenuButton1">
                            <i data-feather="grid" class="h-5 w-5"></i>
                        </button>
                        <div class="dropdown-menu absolute z-50 hidden w-72 list-none border border-gray-50 rounded bg-white shadow dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300" aria-labelledby="dropdownMenuButton1">
                            <div class="p-2">
                                <div class="grid grid-cols-3">
                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                        <img src="@/../images/brands/github.png" class="mb-2 mx-auto h-6" alt="Github">
                                        <span>GitHub</span>
                                    </a>
                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                        <img src="@/../images/brands/bitbucket.png" class="mb-2 mx-auto h-6" alt="Github">
                                        <span>Bitbucket</span>
                                    </a>
                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                        <img src="@/../images/brands/dribbble.png" class="mb-2 mx-auto h-6" alt="Github">
                                        <span>Dribbble</span>
                                    </a>
                                </div>
                                <div class="grid grid-cols-3">
                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                        <img src="@/../images/brands/dropbox.png" class="mb-2 mx-auto h-6" alt="Github">
                                        <span>Dropbox</span>
                                    </a>
                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                        <img src="@/../images/brands/mail_chimp.png" class="mb-2 mx-auto h-6" alt="Github">
                                        <span>Mail Chimp</span>
                                    </a>
                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">
                                        <img src="@/../images/brands/slack.png" class="mb-2 mx-auto h-6" alt="Github">
                                        <span>Slack</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="dropdown relative ">
                        <div class="relative">
                            <button type="button" class="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-100" aria-expanded="false" data-dropdown-toggle="notification">
                                <i data-feather="bell" class="h-5 w-5"></i>
                            </button>
                            <span
                                v-if="localNotificationCount"
                                class="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-2.5 z-40">{{ localNotificationCount }}</span>
                        </div>
                        <div class="dropdown-menu absolute z-50 hidden w-80 list-none rounded bg-white shadow dark:bg-zinc-800 " id="notification">
                            <div class="border border-gray-50 dark:border-gray-700 rounded" aria-labelledby="notification">
                                <div class="grid grid-cols-12 p-4">
                                    <div class="col-span-6">
                                        <h6 class="m-0 text-gray-700 dark:text-gray-100"> Notifications </h6>
                                    </div>
                                    <div class="col-span-6 justify-self-end">
                                        <Link :href="route('notifications.index')" class="text-xs underline dark:text-gray-400"> Unread ({{ localNotificationCount }})</Link>
                                    </div>
                                </div>
                                <simplebar class="max-h-56" data-simplebar>
                                    <div>
                                        <a
                                            v-for="notification in localNotifications"
                                            class="text-reset notification-item cursor-pointer"
                                            @click.stop="markAsRead(notification)"
                                        >
                                            <div class="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                                                <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3 mt-2"
                                                :class="notification.read_at ? 'w-2 h-2' : ''">
                                                    <div v-if="!notification.read_at" class="h-2 w-2 bg-blue-500 rounded-full text-center"></div>
                                                </div>

                                                <div class="flex-grow">
                                                    <!-- Flex container for the <h6> and the status -->
                                                    <div class="flex items-center justify-between">
                                                        <h6 class="text-gray-700 dark:text-gray-100">{{ notification.data.notification_type_name }}</h6>
                                                        <span
                                                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ml-2"
                                                            :class="getFileStatusClass(notification.data.file_status)"
                                                        >{{ notification.data.file_status }}</span>
                                                    </div>
                                                    <div class="text-13 text-gray-600">
                                                        <p class="mb-1 dark:text-gray-400">{{  notification.data.file_name }}</p>
                                                        <p class="mb-0"><i class="mdi mdi-clock-outline dark:text-gray-400"></i> <span>{{  moment(notification.data.file_updated_at).fromNow() }}</span></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </simplebar>
                                <div class="p-1 border-t grid border-gray-50 dark:border-zinc-600 justify-items-center">
                                    <Link class="btn border-0 text-violet-500" :href="route('notifications.index')">
                                        <i class="mdi mdi-arrow-right-circle mr-1"></i> <span>View More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="dropdown relative ltr:mr-4 rtl:ml-4">
                        <button type="button" class="flex items-center px-4 py-6 border-x border-gray-50 bg-gray-50/30 dropdown-toggle dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
<!--                            <img class="h-8 w-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2" src="@/../images/users/avatar-1.jpg" alt="Header Avatar">-->
                            <span class="fw-medium hidden xl:block">{{ $page.props.auth.user.name }} {{ $page.props.auth.user.id}}</span>
                            <i class="mdi mdi-chevron-down align-bottom hidden xl:block"></i>
                        </button>
                        <div class="dropdown-menu absolute top-0 ltr:-left-3 rtl:-right-3 z-50 hidden w-40 list-none rounded bg-white shadow dark:bg-zinc-800" id="profile/log">
                            <div class="border border-gray-50 dark:border-zinc-600" aria-labelledby="navNotifications">
                                <div class="dropdown-item dark:text-gray-100">
                                    <Link
                                        :href="route('profile.edit')"
                                        class="px-3 py-2 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50">

                                        <i class="mdi mdi-shield-account-outline text-16 align-middle mr-1"></i> Profile
                                    </Link>

                                </div>

                                <hr class="border-gray-50 dark:border-gray-700">
                                <div class="dropdown-item dark:text-gray-100">
                                    <Link
                                        :href="route('logout')"
                                        class=" w-full flex p-3 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                                        method="post"
                                        as="button"
                                    >
                                        <i class="mdi mdi-logout text-16 align-middle mr-1"></i> Logout
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
