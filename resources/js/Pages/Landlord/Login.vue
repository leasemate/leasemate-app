<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import GuestLayout from "@/Layouts/GuestLayout.vue";
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route((usePage().props.tenant_id ? 'tenant.login': 'landlord.login')), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in" />

    <GuestLayout>

        <AuthenticationCard>

                    <div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                        {{ status }}
                    </div>

                    <form @submit.prevent="submit">
                        <div>
                            <InputLabel for="email" value="Email" />
                            <TextInput
                                id="email"
                                v-model="form.email"
                                type="email"
                                class="mt-1 block w-full"
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
                                        :href="route('password.request', $page.props.tenant_domain)"
                                        class="text-sm text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-100"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <TextInput
                                id="password"
                                v-model="form.password"
                                type="password"
                                class="mt-1 block w-full"
                                required
                                autocomplete="current-password"
                                tabindex="2"
                            />
                            <InputError class="mt-2" :message="form.errors.password" />
                        </div>

                        <div class="block mt-4">
                            <label class="flex items-center">
                                <Checkbox v-model:checked="form.remember" name="remember" />
                                <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" tabindex="3">
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>

        </AuthenticationCard>

    </GuestLayout>
</template>
