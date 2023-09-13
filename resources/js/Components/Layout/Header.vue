<script setup>
import DropdownLink from "@/Components/DropdownLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Link } from "@inertiajs/vue3";

const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];
</script>

<template>
    <!--  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">-->
    <!--    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">-->
    <!--      <div class="relative flex h-16 items-center justify-between">-->
    <!--        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">-->
    <!--          &lt;!&ndash; Mobile menu button&ndash;&gt;-->
    <!--          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">-->
    <!--            <span class="absolute -inset-0.5" />-->
    <!--            <span class="sr-only">Open main menu</span>-->
    <!--            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />-->
    <!--            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />-->
    <!--          </DisclosureButton>-->
    <!--        </div>-->
    <!--        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">-->
    <!--          <div class="flex flex-shrink-0 items-center">-->
    <!--            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />-->
    <!--          </div>-->
    <!--          <div class="hidden sm:ml-6 sm:block">-->
    <!--            <div class="flex space-x-4">-->
    <!--              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">-->
    <!--          <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">-->
    <!--            <span class="absolute -inset-1.5" />-->
    <!--            <span class="sr-only">View notifications</span>-->
    <!--            <BellIcon class="h-6 w-6" aria-hidden="true" />-->
    <!--          </button>-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <DisclosurePanel class="sm:hidden">-->
    <!--      <div class="space-y-1 px-2 pb-3 pt-2">-->
    <!--        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>-->
    <!--      </div>-->
    <!--    </DisclosurePanel>-->
    <!--  </Disclosure>-->

    <header class="app-header flex items-center px-4 gap-3">
        <!-- Sidenav Menu Toggle Button -->
        <button id="button-toggle-menu" class="nav-link p-2">
            <span class="sr-only">Menu Toggle Button</span>
            <span class="flex items-center justify-center h-6 w-6">
                <i class="mgc_menu_line text-xl"></i>
            </span>
        </button>

        <!-- Topbar Brand Logo -->
        <a href="{{ route('any', 'index') }}" class="logo-box">
            <!-- Light Brand Logo -->
            <div class="logo-light">
                <img
                    src="/images/logo-light.png"
                    class="logo-lg h-6"
                    alt="Light logo"
                />
                <img
                    src="/images/logo-sm.png"
                    class="logo-sm"
                    alt="Small logo"
                />
            </div>

            <!-- Dark Brand Logo -->
            <div class="logo-dark">
                <img
                    src="/images/logo-dark.png"
                    class="logo-lg h-6"
                    alt="Dark logo"
                />
                <img
                    src="/images/logo-sm.png"
                    class="logo-sm"
                    alt="Small logo"
                />
            </div>
        </a>

        <!-- Topbar Search Modal Button -->
        <button
            type="button"
            data-fc-type="modal"
            data-fc-target="topbar-search-modal"
            class="nav-link p-2 me-auto"
        >
            <span class="sr-only">Search</span>
            <span class="flex items-center justify-center h-6 w-6">
                <i class="mgc_search_line text-2xl"></i>
            </span>
        </button>

        <!-- Language Dropdown Button -->
        <!--    <div class="relative">-->
        <!--      <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link p-2 fc-dropdown">-->
        <!--            <span class="flex items-center justify-center h-6 w-6">-->
        <!--                <img src="/images/flags/us.jpg" alt="user-image" class="h-4 w-6">-->
        <!--            </span>-->
        <!--      </button>-->
        <!--      <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">-->
        <!--        &lt;!&ndash; item&ndash;&gt;-->
        <!--        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">-->
        <!--          <img src="/images/flags/germany.jpg" alt="user-image" class="h-4">-->
        <!--          <span class="align-middle">German</span>-->
        <!--        </a>-->

        <!--        &lt;!&ndash; item&ndash;&gt;-->
        <!--        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">-->
        <!--          <img src="/images/flags/italy.jpg" alt="user-image" class="h-4">-->
        <!--          <span class="align-middle">Italian</span>-->
        <!--        </a>-->

        <!--        &lt;!&ndash; item&ndash;&gt;-->
        <!--        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">-->
        <!--          <img src="/images/flags/spain.jpg" alt="user-image" class="h-4">-->
        <!--          <span class="align-middle">Spanish</span>-->
        <!--        </a>-->

        <!--        &lt;!&ndash; item&ndash;&gt;-->
        <!--        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">-->
        <!--          <img src="/images/flags/russia.jpg" alt="user-image" class="h-4">-->
        <!--          <span class="align-middle">Russian</span>-->
        <!--        </a>-->
        <!--      </div>-->
        <!--    </div>-->

        <!-- Fullscreen Toggle Button -->
        <!--        <div class="md:flex hidden">-->
        <!--            <button data-toggle="fullscreen" type="button" class="nav-link p-2">-->
        <!--                <span class="sr-only">Fullscreen Mode</span>-->
        <!--                <span class="flex items-center justify-center h-6 w-6">-->
        <!--                    <i class="mgc_fullscreen_line text-2xl"></i>-->
        <!--                </span>-->
        <!--            </button>-->
        <!--        </div>-->

        <!--        &lt;!&ndash; Notification Bell Button &ndash;&gt;-->
        <!--        <div class="relative md:flex hidden">-->
        <!--            <button-->
        <!--                data-fc-type="dropdown"-->
        <!--                data-fc-placement="bottom-end"-->
        <!--                type="button"-->
        <!--                class="nav-link p-2"-->
        <!--            >-->
        <!--                <span class="sr-only">View notifications</span>-->
        <!--                <span class="flex items-center justify-center h-6 w-6">-->
        <!--                    <i class="mgc_notification_line text-2xl"></i>-->
        <!--                </span>-->
        <!--            </button>-->
        <!--            <div-->
        <!--                class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-80 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg"-->
        <!--            >-->
        <!--                <div-->
        <!--                    class="p-2 border-b border-dashed border-gray-200 dark:border-gray-700"-->
        <!--                >-->
        <!--                    <div class="flex items-center justify-between">-->
        <!--                        <h6 class="text-sm">Notification</h6>-->
        <!--                        <a-->
        <!--                            href="javascript: void(0);"-->
        <!--                            class="text-gray-500 underline"-->
        <!--                        >-->
        <!--                            <small>Clear All</small>-->
        <!--                        </a>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--                <div class="p-4 h-80" data-simplebar>-->
        <!--                    <h5 class="text-xs text-gray-500 mb-2">Today</h5>-->

        <!--                    <a href="javascript:void(0);" class="block mb-4">-->
        <!--                        <div class="card-body">-->
        <!--                            <div class="flex items-center">-->
        <!--                                <div class="flex-shrink-0">-->
        <!--                                    <div-->
        <!--                                        class="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary"-->
        <!--                                    >-->
        <!--                                        <i-->
        <!--                                            class="mgc_message_3_line text-lg"-->
        <!--                                        ></i>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="flex-grow truncate ms-2">-->
        <!--                                    <h5 class="text-sm font-semibold mb-1">-->
        <!--                                        Datacorp-->
        <!--                                        <small-->
        <!--                                            class="font-normal text-gray-500 ms-1"-->
        <!--                                            >1 min ago</small-->
        <!--                                        >-->
        <!--                                    </h5>-->
        <!--                                    <small class="noti-item-subtitle text-muted"-->
        <!--                                        >Caleb Flakelar commented on-->
        <!--                                        Admin</small-->
        <!--                                    >-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </a>-->

        <!--                    <a href="javascript:void(0);" class="block mb-4">-->
        <!--                        <div class="card-body">-->
        <!--                            <div class="flex items-center">-->
        <!--                                <div class="flex-shrink-0">-->
        <!--                                    <div-->
        <!--                                        class="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white"-->
        <!--                                    >-->
        <!--                                        <i-->
        <!--                                            class="mgc_user_add_line text-lg"-->
        <!--                                        ></i>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="flex-grow truncate ms-2">-->
        <!--                                    <h5 class="text-sm font-semibold mb-1">-->
        <!--                                        Admin-->
        <!--                                        <small-->
        <!--                                            class="font-normal text-gray-500 ms-1"-->
        <!--                                            >1 hr ago</small-->
        <!--                                        >-->
        <!--                                    </h5>-->
        <!--                                    <small class="noti-item-subtitle text-muted"-->
        <!--                                        >New user registered</small-->
        <!--                                    >-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </a>-->

        <!--                    <a href="javascript:void(0);" class="block mb-4">-->
        <!--                        <div class="card-body">-->
        <!--                            <div class="flex items-center">-->
        <!--                                <div class="flex-shrink-0">-->
        <!--                                    <img-->
        <!--                                        src="/images/users/avatar-2.jpg"-->
        <!--                                        class="rounded-full h-9 w-9"-->
        <!--                                        alt=""-->
        <!--                                    />-->
        <!--                                </div>-->
        <!--                                <div class="flex-grow truncate ms-2">-->
        <!--                                    <h5 class="text-sm font-semibold mb-1">-->
        <!--                                        Cristina Pride-->
        <!--                                        <small-->
        <!--                                            class="font-normal text-gray-500 ms-1"-->
        <!--                                            >1 day ago</small-->
        <!--                                        >-->
        <!--                                    </h5>-->
        <!--                                    <small class="noti-item-subtitle text-muted"-->
        <!--                                        >Hi, How are you? What about our next-->
        <!--                                        meeting</small-->
        <!--                                    >-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </a>-->

        <!--                    <h5 class="text-xs text-gray-500 mb-2">Yesterday</h5>-->

        <!--                    <a href="javascript:void(0);" class="block mb-4">-->
        <!--                        <div class="card-body">-->
        <!--                            <div class="flex items-center">-->
        <!--                                <div class="flex-shrink-0">-->
        <!--                                    <div-->
        <!--                                        class="flex justify-center items-center h-9 w-9 rounded-full bg-primary text-white"-->
        <!--                                    >-->
        <!--                                        <i-->
        <!--                                            class="mgc_message_1_line text-lg"-->
        <!--                                        ></i>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="flex-grow truncate ms-2">-->
        <!--                                    <h5 class="text-sm font-semibold mb-1">-->
        <!--                                        Datacorp-->
        <!--                                    </h5>-->
        <!--                                    <small class="noti-item-subtitle text-muted"-->
        <!--                                        >Caleb Flakelar commented on-->
        <!--                                        Admin</small-->
        <!--                                    >-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </a>-->

        <!--                    <a href="javascript:void(0);" class="block">-->
        <!--                        <div class="card-body">-->
        <!--                            <div class="flex items-center">-->
        <!--                                <div class="flex-shrink-0">-->
        <!--                                    <img-->
        <!--                                        src="/images/users/avatar-4.jpg"-->
        <!--                                        class="rounded-full h-9 w-9"-->
        <!--                                        alt=""-->
        <!--                                    />-->
        <!--                                </div>-->
        <!--                                <div class="flex-grow truncate ms-2">-->
        <!--                                    <h5 class="text-sm font-semibold mb-1">-->
        <!--                                        Karen Robinson-->
        <!--                                    </h5>-->
        <!--                                    <small class="noti-item-subtitle text-muted"-->
        <!--                                        >Wow ! this admin looks good and awesome-->
        <!--                                        design</small-->
        <!--                                    >-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </a>-->
        <!--                </div>-->

        <!--                <a-->
        <!--                    href="javascript:void(0);"-->
        <!--                    class="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold"-->
        <!--                >-->
        <!--                    View All-->
        <!--                </a>-->
        <!--            </div>-->
        <!--        </div>-->

        <!-- Light/Dark Toggle Button -->
        <!--        <div class="flex">-->
        <!--            <button id="light-dark-mode" type="button" class="nav-link p-2">-->
        <!--                <span class="sr-only">Light/Dark Mode</span>-->
        <!--                <span class="flex items-center justify-center h-6 w-6">-->
        <!--                    <i class="mgc_moon_line text-2xl"></i>-->
        <!--                </span>-->
        <!--            </button>-->
        <!--        </div>-->

        <!-- Profile Dropdown Button -->
        <div class="relative">
            <!--      <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link">-->
            <!--        <img src="/images/users/user-6.jpg" alt="user-image" class="rounded-full h-10">-->
            <!--      </button>-->
            <!--      <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-44 z-50 transition-[margin,opacity] duration-300 mt-2 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">-->
            <!--&lt;!&ndash;        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="pages-gallery.html">&ndash;&gt;-->
            <!--&lt;!&ndash;          <i class="mgc_user_2_fill  me-2"></i>&ndash;&gt;-->

            <!--&lt;!&ndash;          <span>My Profile</span>&ndash;&gt;-->
            <!--&lt;!&ndash;        </a>&ndash;&gt;-->
            <!--        <DropdownLink :href="route('profile.edit')">-->
            <!--          <i class="mgc_user_2_fill me-2"></i>Profile-->
            <!--        </DropdownLink>-->

            <!--&lt;!&ndash;        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="apps-kanban.html">&ndash;&gt;-->
            <!--&lt;!&ndash;          <i class="mgc_task_2_line  me-2"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;          <span>Kanban</span>&ndash;&gt;-->
            <!--&lt;!&ndash;        </a>&ndash;&gt;-->
            <!--&lt;!&ndash;        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="{{ route('second', ['auth', 'login']) }}">&ndash;&gt;-->
            <!--&lt;!&ndash;          <i class="mgc_lock_line  me-2"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;          <span>Lock Screen</span>&ndash;&gt;-->
            <!--&lt;!&ndash;        </a>&ndash;&gt;-->
            <!--        <hr class="my-2 -mx-2 border-gray-200 dark:border-gray-700">-->
            <!--&lt;!&ndash;        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="{{ route('second', ['auth', 'login']) }}">&ndash;&gt;-->
            <!--&lt;!&ndash;          <i class="mgc_exit_line  me-2"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;          <span>Log Out</span>&ndash;&gt;-->
            <!--&lt;!&ndash;        </a>&ndash;&gt;-->

            <!--        <DropdownLink :href="route('logout')" method="post" as="button">-->
            <!--          <i class=""></i>-->
            <!--          Log Out-->
            <!--        </DropdownLink>-->

            <!--      </div>-->

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
                <div>
                    <MenuButton
                        class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">Open user menu</span>
                        <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </MenuButton>
                </div>
                <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                    <MenuItems
                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <MenuItem v-slot="{ active }">
                            <Link
                                :href="route('profile.edit')"
                                :class="[
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                ]"
                                >Your Profile</Link
                            >
                        </MenuItem>

                        <MenuItem v-slot="{ active }">
                            <Link
                                :href="route('logout')"
                                :class="[
                                    active ? 'bg-gray-100' : '',
                                    'w-full px-4 py-2 text-sm text-gray-700 text-left',
                                ]"
                                method="post"
                                as="button"
                            >
                                Sign out
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </header>

    <!-- Topbar Search Modal -->
    <div>
        <div
            id="topbar-search-modal"
            class="fc-modal hidden w-full h-full fixed top-0 start-0 z-50"
        >
            <div
                class="fc-modal-open:opacity-100 fc-modal-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-12 sm:mx-auto"
            >
                <div
                    class="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl transition-all dark:bg-slate-800"
                >
                    <div class="relative">
                        <div
                            class="pointer-events-none absolute top-3.5 start-4 text-gray-900 text-opacity-40 dark:text-gray-200"
                        >
                            <i class="mgc_search_line text-xl"></i>
                        </div>
                        <input
                            type="search"
                            class="h-12 w-full border-0 bg-transparent ps-11 pe-4 text-gray-900 placeholder-gray-500 dark:placeholder-gray-300 dark:text-gray-200 focus:ring-0 sm:text-sm"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
