<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from "@inertiajs/vue3";
import TextInput from "@/Components/TextInput.vue";
import Checkbox from "@/Components/Checkbox.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import toast from "@/Stores/toast.js";

const form = useForm({
    company_name: '',
    domain: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('tenants.store'), {
        onError: (errors) => {
            console.log(errors);
            // toast.error('There was an error creating your account.');
        },
        onFinish: (visit) => {
            console.log(visit);
            form.reset('password', 'password_confirmation');

        }
    });
    console.log('form...');
    console.log(form);
};

</script>

<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Tenants
            </h2>
        </template>

        <div class="py-12">

            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">

                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">

                    <div class="container p-4">

                        <form @submit.prevent="submit" class="w-1/3 mx-auto">
                            <div>
                                <InputLabel for="company_name" value="Company Name" />
                                <TextInput
                                    id="company_name"
                                    v-model="form.company_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                />
                                <InputError class="mt-2" :message="form.errors.company_name" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="domain_name" value="Domain" />
                                <div class="flex items-baseline">


                                    <TextInput
                                        id="domain_name"
                                        v-model="form.domain"
                                        type="text"
                                        class="mt-1 block w-full mr-2"
                                        required
                                    />
                                    <span class="text-19">.reai.test</span>
                                </div>
                                <InputError class="mt-2" :message="form.errors.domain" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="name" value="Name" />
                                <TextInput
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="username"
                                />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="password" value="Password" />
                                <TextInput
                                    id="password"
                                    v-model="form.password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError class="mt-2" :message="form.errors.password" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="password_confirmation" value="Confirm Password" />
                                <TextInput
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError class="mt-2" :message="form.errors.password_confirmation" />
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <!--                <Link :href="route('login')" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">-->
                                <!--                    Already registered?-->
                                <!--                </Link>-->

                                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>

    </AppLayout>
</template>
