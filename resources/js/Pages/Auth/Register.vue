<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3'
import { watch } from 'vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import AuthenticationCard from '@/Components/AuthenticationCard.vue'
import Checkbox from '@/Components/Checkbox.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'

import toast from '@/Stores/toast'
import TextInputGroup from '@/Components/TextInputGroup.vue'

defineProps({
    recentlyRegistered: Boolean,
})

const form = useForm({
    company_name: '',
    domain: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
})

//watch the form company name for changes and then update the domain name field with the same value, lower case, remove spaces
watch(() => form.company_name, (value) => {
    form.domain = value.toLowerCase().replace(/[^a-z0-9]/g, '')
})

const submit = () => {
    form.post(route('register.store'), {
        onSuccess: (visit) => {
            form.reset('password', 'password_confirmation')
            // console.log(visit)
            if (visit.props.recentlyRegistered) {
                toast.success('Thank you for registering. You will receive an email shortly once your account has been setup.')
            }
        },
        onError: (errors) => {
            // console.log(errors);
            toast.error('There was an error creating your account.')
        },
        onFinish: (visit) => {
            // console.log('on finish')
            // console.log(visit)
            form.reset('password', 'password_confirmation')
        },
    })
}

</script>

<template>
    <Head title="Register" />

    <GuestLayout>

        <AuthenticationCard>

            <form v-if=" ! recentlyRegistered" @submit.prevent="submit">
                <div>
                    <InputLabel for="company_name" value="Company Name" />
                    <TextInput
                        id="company_name"
                        v-model="form.company_name"
                        class="mt-1 block w-full"
                        required
                        type="text"
                    />
                    <InputError :message="form.errors.company_name" class="mt-2" />
                </div>

                <div class="mt-4">
                    <InputLabel for="domain_name" value="Domain" />
                    <div class="flex items-baseline">
                        <TextInputGroup
                            id="domain_name"
                            v-model="form.domain"
                            :groupText="`.${usePage().props.central_domain}`"
                            :groupTextClasses="'border-transparent text-slate-400'"
                            class="mt-1 block w-full"
                            groupTextSide="right"
                            required
                            type="text"
                        />
                    </div>
                    <InputError :message="form.errors.domain" class="mt-2" />
                </div>

                <div class="mt-4">
                    <InputLabel for="name" value="Name" />
                    <TextInput
                        id="name"
                        v-model="form.name"
                        class="mt-1 block w-full"
                        required
                        type="text"
                    />
                    <InputError :message="form.errors.name" class="mt-2" />
                </div>

                <div class="mt-4">
                    <InputLabel for="email" value="Email" />
                    <TextInput
                        id="email"
                        v-model="form.email"
                        autocomplete="username"
                        class="mt-1 block w-full"
                        required
                        type="email"
                    />
                    <InputError :message="form.errors.email" class="mt-2" />
                </div>

                <div class="mt-4">
                    <InputLabel for="password" value="Password" />
                    <TextInput
                        id="password"
                        v-model="form.password"
                        autocomplete="new-password"
                        class="mt-1 block w-full"
                        required
                        type="password"
                    />
                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-4">
                    <InputLabel for="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        autocomplete="new-password"
                        class="mt-1 block w-full"
                        required
                        type="password"
                    />
                    <InputError :message="form.errors.password_confirmation" class="mt-2" />
                </div>

                <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                    <InputLabel for="terms">
                        <div class="flex items-center">
                            <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />

                            <div class="ms-2">
                                I agree to the
                                <a
                                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    href="https://leasemate.ai/legal/"
                                    target="_blank">Terms of Service</a>
                                and <a
                                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                href="https://leasemate.ai/privacy/"
                                target="_blank">Privacy Policy</a>
                            </div>
                        </div>
                        <InputError :message="form.errors.terms" class="mt-2" />
                    </InputLabel>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Link :href="route('login')"
                          class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                        Already registered?
                    </Link>

                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ms-4">
                        Register
                    </PrimaryButton>
                </div>
            </form>

            <div v-else>

                <p>Thank you for registering. You will receive an email shortly once your account has been setup.</p>

            </div>

        </AuthenticationCard>

    </GuestLayout>
</template>
