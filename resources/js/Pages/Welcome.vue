<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from "@/Layouts/GuestLayout.vue";
import AppLayout from "@/Layouts/AppLayout.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div class="flex min-h-screen bg-gradient-to-br from-white to-violet-800 via-purple-100">
        <div class="relative w-full">
<!--    <GuestLayout>-->

<!--        <div class="relative">-->
<!--            <div class="sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10">-->
<!--                &lt;!&ndash;            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>&ndash;&gt;-->

<!--&lt;!&ndash;                            <template>&ndash;&gt;-->

<!--&lt;!&ndash;                            </template>&ndash;&gt;-->
<!--            </div>-->

            <nav class="bg-white shadow">
                <div class="container mx-auto px-4 py-2">
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-lg font-semibold text-gray-800">Leasemate</a>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">Features</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">Pricing</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
                            <li><Link :href="route('login')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link></li>
                            <li><Link v-if="canRegister" :href="route('register')" class="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <header class="bg-gradient-to-r from-blue-500 to-indigo-500">
                <div class="container mx-auto px-4 py-24 text-center">
                    <h1 class="text-4xl font-bold text-white mb-6">Welcome to Your SaaS Platform</h1>
                    <p class="text-lg text-white">The best solution for your business needs</p>
                    <button class="bg-white text-blue-500 font-semibold px-6 py-3 mt-8 rounded-full hover:bg-blue-400 hover:text-white">Get Started</button>
                </div>
            </header>

            <!-- Features Section -->
            <section class="py-16">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Key Features</h2>
                    <div class="flex flex-wrap -mx-4">
                        <!-- Feature Card -->
                        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <!-- Add more feature cards here -->
                    </div>
                </div>
            </section>

            <!-- Pricing Section -->
            <section class="py-16 bg-gray-100">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Pricing Plans</h2>
                    <div class="flex flex-wrap -mx-4">
                        <!-- Pricing Card -->
                        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Starter</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="mt-4 text-center">
                                    <span class="text-2xl font-bold">$19</span>
                                    <span class="text-gray-600">/ month</span>
                                </div>
                                <button class="block w-full bg-blue-500 text-white font-semibold px-6 py-3 mt-6 rounded-full hover:bg-blue-600">Select Plan</button>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Starter</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="mt-4 text-center">
                                    <span class="text-2xl font-bold">$19</span>
                                    <span class="text-gray-600">/ month</span>
                                </div>
                                <button class="block w-full bg-blue-500 text-white font-semibold px-6 py-3 mt-6 rounded-full hover:bg-blue-600">Select Plan</button>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div class="bg-white shadow-md rounded-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Starter</h3>
                                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="mt-4 text-center">
                                    <span class="text-2xl font-bold">$19</span>
                                    <span class="text-gray-600">/ month</span>
                                </div>
                                <button class="block w-full bg-blue-500 text-white font-semibold px-6 py-3 mt-6 rounded-full hover:bg-blue-600">Select Plan</button>
                            </div>
                        </div>
                        <!-- Add more pricing cards here -->
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section class="py-16">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">About Us</h2>
                    <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum velit vitae augue pulvinar venenatis. Integer nec justo libero.</p>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="py-16 bg-gray-100">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Contact Us</h2>
                    <!-- Add your contact form or contact details here -->
                </div>
            </section>

        </div>
    </div>
<!--    </GuestLayout>-->


</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
