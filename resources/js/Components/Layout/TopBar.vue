<script setup>
import { inject, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import { Link, router, usePage } from '@inertiajs/vue3'
import simplebar from 'simplebar-vue'

import { fileStatusClass } from '@/Composables/fileStatusClass.js'
import axios from 'axios'
import toast from '@/Stores/toast'

import { EventBus } from '@/Services/event-bus.js'
import { useNotificationStore } from '@/Stores/notificationStore.js'
import DropdownLink from '@/Components/DropdownLink.vue'
import Dropdown from '@/Components/Dropdown.vue'
import TenantTitle from '@/Components/TenantTitle.vue'

const page = usePage()
const user = ref(page.props.auth.user)
const notificationStore = useNotificationStore()

const currentSidebarSize = ref(document.body.getAttribute('data-sidebar-size'))
const { getFileStatusClass } = fileStatusClass()

const showIcon = inject('showIcon')
const navbarLogoContainer = ref()
const toggleMenu = (event) => {
    event.preventDefault()
    document.body.classList.toggle('sidebar-enable')

    handleResize()

    if (window.innerWidth >= 992) {
        const bodyAttribute = document.body.getAttribute('data-sidebar-size')
        switch (currentSidebarSize.value) {
            case null:
                document.body.setAttribute('data-sidebar-size', bodyAttribute === 'lg' ? 'sm' : 'lg')
                break
            case 'md':
                document.body.setAttribute('data-sidebar-size', bodyAttribute === 'md' ? 'sm' : 'md')
                break
            default:
                document.body.setAttribute('data-sidebar-size', bodyAttribute === 'sm' ? 'lg' : 'sm')
        }
    } else {
        // If you have the function "initMenuItemScroll", you can call it here.
        if (typeof initMenuItemScroll === 'function') {
            initMenuItemScroll()
        }
    }
}

const initModeSetting = () => {
    var body = document.body
    var lightDarkBtn = document.querySelectorAll('.light-dark-mode')
    // console.log('init mode setting');
    // console.log(body);
    // console.log(lightDarkBtn);

    if (lightDarkBtn) {
        lightDarkBtn.forEach(item => {
            item.addEventListener('click', event => {
                if (body.hasAttribute('data-mode') && body.getAttribute('data-mode') == 'dark') {
                    body.setAttribute('data-mode', 'light')
                    sessionStorage.setItem('data-layout-mode', 'light')
                } else {
                    body.setAttribute('data-mode', 'dark')
                    sessionStorage.setItem('data-layout-mode', 'dark')
                }
            })
        })
    }

    if (sessionStorage.getItem('data-layout-mode') && sessionStorage.getItem('data-layout-mode') == 'light') {
        body.setAttribute('data-mode', 'light')
    } else if (sessionStorage.getItem('data-layout-mode') == 'dark') {
        body.setAttribute('data-mode', 'dark')
    }
}

const markAsRead = (notification) => {

    try {

        const response = axios.post(route('notifications.mark-as-read', notification.id))
            .then(response => {
                if (response.status === 200) {
                    notification.read_at = response.data.read_at
                    notificationStore.count = response.data.total_unread_notifications
                }
            })
            .catch(error => {
                toast.error(error.response.status + ': ' + error.response.data.message)
            })

    } catch (error) {
        toast.error(error)
    }

}

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    })
}

const handleResize = () => {
    const sidebarMenu = document.querySelector('#sidebar-menu')
    if (sidebarMenu) {
        // Add a transitionend event listener
        setTimeout(() => {
            const boundingRect = navbarLogoContainer.value.getBoundingClientRect()
            showIcon.value = boundingRect.width < 249
        }, 0) // Adjust the delay as needed
    }
}

onMounted(() => {

    window.addEventListener('resize', handleResize)

    requestAnimationFrame(handleResize)

    initModeSetting()

    Echo.private(`${page.props.tenant_id}.App.Model.User.${user.value.id}`)
        .notification((notification) => {

            console.log(notification)

            axios.get(route('notifications.show', notification.id))
                .then(response => {

                    const notif = response.data.notification

                    notificationStore.count = response.data.total_unread_notifications
                    notificationStore.add(notif)

                    if (notif.data.file_status === 'Ready') {
                        toast.success(notif.data.file_name + ': ' + notif.data.file_status)
                    } else if (notif.data.file_status === 'Failed') {
                        toast.error(notif.data.file_name + ': ' + notif.data.file_status)
                    } else {
                        // toast.info(notif.data.file_name + ': ' + notif.data.file_status);
                    }

                })
                .catch(error => {
                    toast.error('Error: ' + error)
                })

            EventBus.emit('new-notification', notification)

        })
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    if (user.value) {
        Echo.leave(`${page.props.tenant_id}.App.Model.User.${user.value.id}`)
    }
})

</script>

<template>

    <nav
        class="border-b border-slate-100 dark:bg-zinc-800 print:hidden flex items-center fixed top-0 right-0 left-0 bg-white z-10 dark:border-zinc-700 shadow-md">

        <div class="flex items-center justify-between w-full">

            <div class="topbar-brand flex items-center">
                <div ref="navbarLogoContainer"
                     class="navbar-brand flex items-center justify-center shrink px-4 h-[70px] border-r bg-indigo-50 border-r-gray-50 dark:border-zinc-700 dark:bg-zinc-800">
                    <a class="flex items-center font-bold text-lg  dark:text-white" href="/">
                        <span v-if="!showIcon" class="hidden xl:block align-middle">
                            <img alt="logo" class="ml-2 h-8 w-[80%]" src="/images/logo.svg" />
                        </span>

                        <img v-else-if="showIcon" alt="logo" class="h-[26px]" src="/images/leasemate-icon.svg" />
                    </a>
                </div>
                <button id="vertical-menu-btn"
                        class="text-gray-600 dark:text-white h-[70px] ltr:-ml-10 ltr:mr-6 rtl:-mr-10 rtl:ml-10 vertical-menu-btn"
                        type="button"
                        @click="toggleMenu">
                    <i class="fa fa-fw fa-bars"></i>
                </button>

                <TenantTitle v-if="showIcon" />

                <!--                <form class="app-search hidden md:block px-5">
                                    <div class="relative inline-block">
                                        <input
                                            class="bg-gray-50/30 dark:bg-zinc-700/50 border-0 rounded focus:ring-0 placeholder:text-sm px-4 dark:placeholder:text-gray-200 dark:text-gray-100 dark:border-zinc-700 "
                                            placeholder="Search..."
                                            type="text">
                                        <button
                                            class="py-1.5 px-2.5 text-white bg-violet-500 inline-block absolute ltr:right-1 top-1 rounded shadow shadow-violet-100 dark:shadow-gray-900 rtl:left-1 rtl:right-auto"
                                            type="button"><i class="bx bx-search-alt align-middle"></i></button>
                                    </div>
                                </form>-->

            </div>

            <div class="flex items-center">
                <!--                <div>-->
                <!--                    <div class="dropdown relative md:hidden block">-->
                <!--                        <button type="button" class="text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 dropdown-toggle" data-dropdown-toggle="navNotifications">-->
                <!--                            <i data-feather="search" class="h-5 w-5"></i>-->
                <!--                        </button>-->

                <!--                        <div class="dropdown-menu absolute px-4 -left-36 top-0 mx-4 w-72 z-50 hidden list-none border border-gray-50 rounded bg-white shadow dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300" id="navNotifications">-->
                <!--                            <form class="py-3 dropdown-item" aria-labelledby="navNotifications">-->
                <!--                                <div class="form-group m-0">-->
                <!--                                    <div class="flex w-full">-->
                <!--                                        <input type="text" class="border-gray-100 dark:border-zinc-600 dark:text-zinc-100 w-fit" placeholder="Search ..." aria-label="Search Result">-->
                <!--                                        <button class="btn btn-primary border-l-0 rounded-l-none bg-violet-500 border-transparent text-white" type="submit"><i class="mdi mdi-magnify"></i></button>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                            </form>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->

                <!--                <div>-->
                <!--                    <button-->
                <!--                        class="light-dark-mode text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 hidden sm:block "-->
                <!--                        type="button">-->
                <!--                        <i class="h-5 w-5 block dark:hidden" data-feather="moon"></i>-->
                <!--                        <i class="h-5 w-5 hidden dark:block" data-feather="sun"></i>-->
                <!--                    </button>-->
                <!--                </div>-->

                <!--                <div>-->
                <!--                    <div class="dropdown relative text-gray-600 hidden sm:block">-->
                <!--                        <button type="button" class="btn border-0 h-[70px] text-xl px-4 dropdown-toggle dark:text-gray-100" data-bs-toggle="dropdown" id="dropdownMenuButton1">-->
                <!--                            <i data-feather="grid" class="h-5 w-5"></i>-->
                <!--                        </button>-->
                <!--                        <div class="dropdown-menu absolute z-50 hidden w-72 list-none border border-gray-50 rounded bg-white shadow dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300" aria-labelledby="dropdownMenuButton1">-->
                <!--                            <div class="p-2">-->
                <!--                                <div class="grid grid-cols-3">-->
                <!--                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">-->
                <!--                                        <img src="@/../images/brands/github.png" class="mb-2 mx-auto h-6" alt="Github">-->
                <!--                                        <span>GitHub</span>-->
                <!--                                    </a>-->
                <!--                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">-->
                <!--                                        <img src="@/../images/brands/bitbucket.png" class="mb-2 mx-auto h-6" alt="Github">-->
                <!--                                        <span>Bitbucket</span>-->
                <!--                                    </a>-->
                <!--                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">-->
                <!--                                        <img src="@/../images/brands/dribbble.png" class="mb-2 mx-auto h-6" alt="Github">-->
                <!--                                        <span>Dribbble</span>-->
                <!--                                    </a>-->
                <!--                                </div>-->
                <!--                                <div class="grid grid-cols-3">-->
                <!--                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">-->
                <!--                                        <img src="@/../images/brands/dropbox.png" class="mb-2 mx-auto h-6" alt="Github">-->
                <!--                                        <span>Dropbox</span>-->
                <!--                                    </a>-->
                <!--                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">-->
                <!--                                        <img src="@/../images/brands/mail_chimp.png" class="mb-2 mx-auto h-6" alt="Github">-->
                <!--                                        <span>Mail Chimp</span>-->
                <!--                                    </a>-->
                <!--                                    <a class="dropdown-item hover:bg-gray-50/50 py-4 text-center dark:hover:bg-zinc-700/50 dark:hover:text-gray-50" href="#">-->
                <!--                                        <img src="@/../images/brands/slack.png" class="mb-2 mx-auto h-6" alt="Github">-->
                <!--                                        <span>Slack</span>-->
                <!--                                    </a>-->
                <!--                                </div>-->

                <!--                            </div>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->

                <div>
                    <div class="dropdown relative ">
                        <div class="relative">
                            <button aria-expanded="false" class="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-400

                                        focus:bg-gray-50
                                        dark:focus:bg-gray-700
                            active:bg-gray-50
                                        dark:active:bg-gray-700 " data-dropdown-toggle="notification"
                                    type="button">
                                <i class="h-5 w-5" data-feather="bell"></i>
                            </button>
                            <span
                                v-if="notificationStore.count"
                                class="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-2.5 z-40">{{ notificationStore.count
                                }}</span>
                        </div>
                        <div
                            id="notification"
                            class="dropdown-menu absolute z-50 hidden w-80 list-none rounded bg-white shadow dark:bg-gray-700">
                            <div aria-labelledby="notification"
                                 class="border border-gray-50 dark:border-gray-700 rounded">
                                <div class="grid grid-cols-12 p-4">
                                    <div class="col-span-6">
                                        <h6 class="m-0 text-gray-700 dark:text-gray-100"> Notifications </h6>
                                    </div>
                                    <div class="col-span-6 justify-self-end">
                                        <Link :href="route('notifications.index')"
                                              class="text-xs underline dark:text-gray-400"> Unread
                                            ({{ notificationStore.count }})
                                        </Link>
                                    </div>
                                </div>
                                <simplebar class="max-h-56" data-simplebar>
                                    <div v-if="notificationStore.notifications.length">
                                        <a
                                            v-for="notification in notificationStore.notifications"
                                            class="text-reset notification-item cursor-pointer"
                                            @click.stop="markAsRead(notification)"
                                        >
                                            <div class="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                                                <div :class="notification.read_at ? 'w-2 h-2' : ''"
                                                     class="flex-shrink-0 ltr:mr-3 rtl:ml-3 mt-2">
                                                    <div v-if="!notification.read_at"
                                                         class="h-2 w-2 bg-blue-500 rounded-full text-center"></div>
                                                </div>

                                                <div class="flex-grow">
                                                    <!-- Flex container for the <h6> and the status -->
                                                    <div class="flex items-center justify-between">
                                                        <h6 class="text-gray-700 dark:text-gray-100">
                                                            {{ notification.data.notification_type_name }}</h6>
                                                        <span
                                                            :class="getFileStatusClass(notification.data.file_status)"
                                                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ml-2"
                                                        >{{ notification.data.file_status }}</span>
                                                    </div>
                                                    <div class="text-13 text-gray-600">
                                                        <p class="mb-1 dark:text-gray-400">
                                                            {{ notification.data.file_name }}</p>
                                                        <p class="mb-0"><i
                                                            class="mdi mdi-clock-outline dark:text-gray-400"></i> <span>{{ dayjs(notification.data.file_updated_at).fromNow()
                                                            }}</span></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </a>

                                    </div>

                                    <div v-else>
                                        <div class="text-center mt-2 mb-4 dark:text-gray-100">- No New Notifications -
                                        </div>
                                    </div>

                                </simplebar>
                                <div class="p-1 border-t grid border-gray-50 dark:border-gray-600 justify-items-center">
                                    <Link :href="route('notifications.index')" class="btn border-0 text-violet-500">
                                        <i class="mdi mdi-arrow-right-circle mr-1 dark:text-gray-100"></i> <span
                                        class="dark:text-gray-100">View More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="$page.props.jetstream.hasTeamFeatures" class="hidden sm:flex sm:items-center">
                    <div class="ms-3 relative mr-4">
                        <!-- Teams Dropdown -->
                        <Dropdown align="right" width="60">
                            <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-100 bg-violet-50 dark:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150 bg-violet-50"
                                                type="button"
                                            >
                                                {{ $page.props.auth.user.current_team.name }}
                                                <!--                                                My Team-->

                                                <svg class="ms-2 -me-0.5 h-4 w-4" fill="none"
                                                     stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </span>
                            </template>

                            <template #content>
                                <div class="w-60">
                                    <!-- Team Management -->
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Manage Team
                                    </div>

                                    <!-- Team Settings -->
                                    <DropdownLink :href="route('teams.show', $page.props.auth.user.current_team)">
                                        Team Settings
                                    </DropdownLink>

                                    <DropdownLink v-if="$page.props.jetstream.canCreateTeams"
                                                  :href="route('teams.create')">
                                        Create New Team
                                    </DropdownLink>

                                    <!-- Team Switcher -->
                                    <template v-if="$page.props.auth.user.all_teams.length > 1">
                                        <div class="border-t border-gray-200 dark:border-gray-600" />

                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Switch Teams
                                        </div>
                                        <template v-for="team in $page.props.auth.user.all_teams" :key="team.id">
                                            <form @submit.prevent="switchToTeam(team)">
                                                <DropdownLink as="button">
                                                    <div class="flex items-center">
                                                        <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                                             class="me-2 h-5 w-5 text-green-400"
                                                             fill="none" stroke="currentColor"
                                                             stroke-width="1.5" viewBox="0 0 24 24"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>

                                                        <div>{{ team.name }}</div>
                                                    </div>
                                                </DropdownLink>
                                            </form>
                                        </template>
                                    </template>
                                </div>
                            </template>
                        </Dropdown>
                    </div>

                    <!-- Settings Dropdown -->
                    <div class="ms-3 relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button v-if="$page.props.jetstream.managesProfilePhotos"
                                        class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                    <img :alt="$page.props.auth.user.name"
                                         :src="$page.props.auth.user.profile_photo_url"
                                         class="h-8 w-8 rounded-full object-cover">
                                </button>

                                <span v-else class="inline-flex rounded-md">
                                            <button
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                                                type="button">
                                                {{ $page.props.auth.user.name }}

                                                <svg class="ms-2 -me-0.5 h-4 w-4" fill="none"
                                                     stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </span>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Manage Account
                                </div>

                                <DropdownLink :href="route('profile.show')">
                                    Profile
                                </DropdownLink>

                                <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"
                                              :href="route('api-tokens.index')">
                                    API Tokens
                                </DropdownLink>

                                <div class="border-t border-gray-200 dark:border-gray-600" />

                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <DropdownLink as="button">
                                        Log Out
                                    </DropdownLink>
                                </form>
                            </template>
                        </Dropdown>
                    </div>
                </div>

                <div>
                    <div class="dropdown relative rtl:ml-4">
                        <button id="page-header-user-dropdown"
                                aria-expanded="true"
                                aria-haspopup="true"
                                class="flex items-center px-4 py-5 border-x border-gray-50 bg-gray-50/30 dropdown-toggle dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100"
                                data-bs-toggle="dropdown"
                                type="button">

                            <img
                                v-if="$page.props.jetstream.managesProfilePhotos"
                                :alt="$page.props.auth.user.name"
                                :src="$page.props.auth.user.profile_photo_url"
                                class="h-8 w-8 rounded-full object-cover ltr:xl:mr-4 rtl:xl:ml-2">

                            <span class="fw-medium hidden xl:block">{{ $page.props.auth.user.name }}
                                <span v-if="$page.props.env != 'production'">
                                    [ID: {{ $page.props.auth.user.id }}]
                                </span>
                            </span>
                            <i class="mdi mdi-chevron-down align-bottom hidden xl:block"></i>
                        </button>
                        <div
                            id="profile/log"
                            class="dropdown-menu absolute top-0 ltr:-left-3 rtl:-right-3 z-50 hidden w-40 list-none rounded bg-white shadow dark:bg-zinc-800">
                            <div aria-labelledby="navNotifications" class="border border-gray-50 dark:border-zinc-600">
                                <div class="dropdown-item dark:text-gray-100">
                                    <Link
                                        :href="route('profile.show')"
                                        class="px-3 py-2 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50">

                                        <i class="mdi mdi-shield-account-outline text-16 align-middle mr-1"></i> Profile
                                    </Link>
                                </div>

                                <div v-if="$page.props.jetstream.hasApiFeatures"
                                     class="dropdown-item dark:text-gray-100">
                                    <Link
                                        :href="route('api-tokens.index')"
                                        class="px-3 py-2 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50">
                                        <!--                                        <i class="mdi mdi-shield-account-outline text-16 align-middle mr-1"></i>-->
                                        API Tokens
                                    </Link>
                                </div>

                                <hr class="border-gray-50 dark:border-gray-700">
                                <div class="dropdown-item dark:text-gray-100">
                                    <Link
                                        :href="route('logout')"
                                        as="button"
                                        class=" w-full flex p-3 hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                                        method="post"
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
