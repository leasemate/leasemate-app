<script setup>
import {useForm, Link} from "@inertiajs/vue3";
import {watch} from "vue";

import PrimaryButton from "@/Components/PrimaryButton.vue";
import DefaultForm from "@/Components/DefaultForm.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

const props = defineProps({
    role: {
        type:Object,
        default: () => {
            return {
                name: ''
            }
        }
    },
    role_permissions: {
        type: Array,
        default: () => {
            return []
        }
    },
    permissions: Object
});

const form = useForm({
    ...props.role,
    role_permissions: props.role_permissions
});

const saveRole = () => {

    if( ! form.id) {
        createRole();
    } else {
        updateRole();
    }
};

const createRole = () => {
    form.post(route('roles.store'), {
        errorBag: 'roleCreate',
        preserveScroll: true,
    });
};

const updateRole = () => {
    form.put(route('roles.update', props.role), {
        errorBag: 'roleUpdate',
        preserveScroll: true,
    });
};

watch(() => form.role_permissions, (permissions) => {
    form.clearErrors();
});

</script>

<template>

    <div class="max-w-5xl mx-auto py-10 sm:px-6 lg:px-8">
<!--        {{ form }}-->
        <DefaultForm @submitted="saveRole">

            <template #form>

                <div class="col-span-6 sm:col-span-4">
                    <div class="col-span-6 sm:col-span-4">
                        <InputLabel for="name" value="Name" />
                        <TextInput
                            id="name"
                            ref="nameInput"
                            v-model="form.name"
                            v-on:focus="form.clearErrors()"
                            type="text"
                            class="mt-1 block w-full"
                            :class="{ 'border-red-300 dark:border-red-600': form.errors.name }"

                            autocomplete="current-password"
                        />
                        <InputError :message="form.errors.name" class="mt-2" />
                    </div>
                </div>

                <div class="col-span-6">
                    <div class="col-span-6 sm:col-span-4">

                        <p class="mb-4 font-bold">
                            Permissions
                            <span v-if="form.errors.role_permissions" class="font-normal text-sm text-red-600 dark:text-red-400"> - {{form.errors.role_permissions}}</span>
                        </p>

                        <div v-for="(permissionGroup, permissionsName) in permissions" :key="permissionsName" class="mb-4 space-y-2">

                            <div class="font-bold bg-slate-50">
                                <div class="p-1">{{ permissionsName }}</div>
                            </div>

                            <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 p-2">

                                <div v-for="permission in permissionGroup" :key="permission.id" class="col-span-1">

                                    <label class="flex items-center">
                                        <Checkbox
                                            :id="permission.id"
                                            v-model:checked="form.role_permissions"
                                            :value="permission.name"
                                        />
                                        <span
                                            class="ms-2 text-sm text-gray-600 dark:text-gray-400"
                                        >{{permission.name}}</span>
                                    </label>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </template>

            <template #actions>

                <Link
                    :href="route('roles.index')"
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
