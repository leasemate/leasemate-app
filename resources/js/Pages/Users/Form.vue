<script setup>
import {useForm, Link} from "@inertiajs/vue3";
import {onMounted, reactive, watch} from "vue";

import DefaultForm from "@/Components/DefaultForm.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";

import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Checkbox from "@/Components/Checkbox.vue";
import AutoComplete from "primevue/autocomplete";

const props = defineProps({
    user: {
        type:Object,
        default: () => {
            return {
                name: '',
                email: '',
                position: '',
            }
        }
    },
    user_roles: {
        type: Array,
        default: () => {
            return []
        }
    },
    roles: Object
});

const form = useForm({
    ...props.user,
    user_roles: props.user_roles
});

const saveUser = () => {
    if( ! form.id) {
        form.post(route('users.store'), {
            errorBag: 'createUser',
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
            },
            onError: (error) => {

                console.log(error);
            },
        });
    } else {
        form.put(route('users.update', form.id), {
            errorBag: 'updateUser',
            preserveScroll: true,
        });
    }
};
</script>

<template>

    <div class="max-w-5xl mx-auto py-10 sm:px-6 lg:px-8">

        <DefaultForm @submitted="saveUser">

        <template #form>

            <div class="col-span-6">
                <InputLabel for="name" value="Name" />
                <TextInput
                    id="name"
                    ref="nameInput"
                    v-model="form.name"
                    v-on:focus="form.clearErrors()"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <!-- :class="{ 'border-red-300 dark:border-red-600': form.errors.name }"-->
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <div class="col-span-6">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    ref="emailInput"
                    v-model="form.email"
                    v-on:focus="form.clearErrors()"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <!-- :class="{ 'border-red-300 dark:border-red-600': form.errors.name }"-->
                <InputError :message="form.errors.email" class="mt-2" />
            </div>

            <div class="col-span-6">
                <InputLabel for="position" value="Position" />
                <TextInput
                    id="position"
                    ref="positionInput"
                    v-model="form.position"
                    v-on:focus="form.clearErrors()"
                    type="text"
                    class="mt-1 block w-full"
                />
                <!-- :class="{ 'border-red-300 dark:border-red-600': form.errors.name }"-->
                <InputError :message="form.errors.position" class="mt-2" />
            </div>

            <div v-if=" ! props.user.is_super_admin && roles.length" class="col-span-6">

                <div class="block font-medium text-sm text-gray-700 dark:text-gray-300">Roles</div>

                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 p-2">

                    <div v-for="role in roles" :key="role.id" class="col-span-1">

                        <label class="flex items-center">
                            <Checkbox
                                :id="role.id"
                                v-model:checked="form.user_roles"
                                :value="role.name"
                            />
                            <span
                                class="ms-2 text-sm text-gray-600 dark:text-gray-400"
                            >{{role.name}}</span>
                        </label>
                    </div>

                </div>

                <div
                    v-if="form.errors.user_roles"
                    class="font-normal text-sm mt-2 mb-2 text-red-600 dark:text-red-400">
                    {{form.errors.user_roles}}
                </div>

            </div>

        </template>

        <template #actions>

            <Link
                :href="route('users.index')"
                class="mr-4">Cancel
            </Link>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>

        </template>

    </DefaultForm>

    </div>

</template>

<style scoped>

</style>
