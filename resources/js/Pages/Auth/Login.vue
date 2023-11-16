<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div class="text-center">
            <h5 class="text-gray-600 dark:text-gray-100">Welcome Back !</h5>
            <p class="text-gray-500 dark:text-gray-100/60 mt-1">Sign in to continue to REAI.</p>
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    tabindex="1"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <div class="flex">
                    <div class="flex-grow-1">
                        <InputLabel for="password" value="Password" />
                    </div>
                    <div class="ltr:ml-auto rtl:mr-auto">
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="text-sm text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-100"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    tabindex="2"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" tabindex="3">
                    Log in
                </PrimaryButton>
            </div>
        </form>

<!--        <div class="mt-4 pt-2 text-center">-->
<!--            <div>-->
<!--                <h6 class="text-14 mb-3 text-gray-500 dark:text-gray-100 font-medium">- Sign in with -</h6>-->
<!--            </div>-->

<!--            <div class="flex justify-center gap-3">-->
<!--                <a href="" class="h-9 w-9 bg-violet-500 leading-[2.9] rounded-full">-->
<!--                    <i class="mdi mdi-facebook text-lg text-white"></i>-->
<!--                </a>-->
<!--                <a href="" class="h-9 w-9 bg-sky-500 leading-[2.9] rounded-full">-->
<!--                    <i class="mdi mdi-twitter text-lg text-white"></i>-->
<!--                </a>-->
<!--                <a href="" class="h-9 w-9 bg-red-400 leading-[2.9] rounded-full">-->
<!--                    <i class="mdi mdi-google text-lg text-white"></i>-->
<!--                </a>-->
<!--            </div>-->
<!--        </div>-->

        <div class="mt-12 text-center">
            <p class="text-gray-500 dark:text-gray-100">Don't have an account ? <Link :href="route('register')" class="text-violet-500 font-semibold"> Signup now </Link> </p>
        </div>

    </GuestLayout>
</template>
