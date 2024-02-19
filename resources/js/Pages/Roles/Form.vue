<script setup>
import {useForm, Link} from "@inertiajs/vue3";
import {onMounted, reactive, watch} from "vue";

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
                name: '',
                permissions: []
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

const allPermissionsSelected = () => {
    return form.role_permissions.length === Object.keys(props.permissions).map(permissionGroup => props.permissions[permissionGroup]).flat().length;
};

// i want the selected permissions to true if all the permissions in that group are selected
// i want the selected permissions to false if all the permissions in that group are deselected
const permissionsState = reactive({
    permissions: Object.keys(props.permissions).map(permissionGroup => {

        const selected = props.role_permissions.filter(permission => {
            return props.permissions[permissionGroup].map(asset => asset.name).includes(permission)
        }).length === props.permissions[permissionGroup].length;

        return {
            name: permissionGroup,
            selected: selected
        }
    }),
    // i want this to be true if props.form.role_permissions.length === all permissions from props.permissions
    all_permissions_checked: allPermissionsSelected(),
});

const saveRole = () => {
    if( ! form.id) {
        createRole();
    } else {
        updateRole();
    }
};

const createRole = () => {
    form.post(route('roles.store', $page.props.tenant_domain), {
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

const handleCheckboxClick = (event, permissionsGroupName) => {

    permissionsState.permissions.map((permission) => {
        if(permission.name === permissionsGroupName) {
            permission.selected = props.permissions[permissionsGroupName].filter(permission => {
                return form.role_permissions.includes(permission.name);
            }).length === props.permissions[permissionsGroupName].length;
        }
    });

    permissionsState.all_permissions_checked = allPermissionsSelected();
};

const togglePermissionGroup = (permissionGroup) => {

    permissionsState.permissions.map((permission) => {
        if(permission.name === permissionGroup) {
            permission.selected = ! permission.selected;
        }
    });

    if(permissionsState.permissions.find(permission => permission.name === permissionGroup).selected) {

        props.permissions[permissionGroup].filter(permission => {
            return ! form.role_permissions.includes(permission.name);
        }).forEach(permission => {
            form.role_permissions.push(permission.name);
        });

        permissionsState.all_permissions_checked = allPermissionsSelected();

    } else {
        form.role_permissions = form.role_permissions.filter(permission => ! props.permissions[permissionGroup].map(asset => asset.name).includes(permission));
        permissionsState.all_permissions_checked = allPermissionsSelected();
    }
};

const toggleAllPermissions = () => {

    permissionsState.all_permissions_checked = ! permissionsState.all_permissions_checked;

    if(permissionsState.all_permissions_checked) {

        Object.keys(props.permissions).forEach(permissionGroup => {

            permissionsState.permissions.map((permission) => {
                if(permission.name === permissionGroup) {
                    permission.selected = true;
                }
            });

            props.permissions[permissionGroup].filter(permission => {
                return ! form.role_permissions.includes(permission.name);
            }).forEach(permission => {
                form.role_permissions.push(permission.name);
            });
        });

    } else {
        permissionsState.permissions.map(permission => {
            permission.selected = false;
        });
        form.role_permissions = [];
    }
};

watch(() => form.role_permissions, (permissions) => {
    form.clearErrors();
});

onMounted(() => {

});

</script>

<template>

    <div class="max-w-5xl mx-auto py-10 sm:px-6 lg:px-8">

        <DefaultForm @submitted="saveRole">

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

                        <div class="flex justify-start items-center space-x-4 p-1">

                            <div class="block font-medium text-sm text-gray-700 dark:text-gray-300">Permissions</div>
                            <span
                                @click="toggleAllPermissions"
                                class="font-normal text-xs text-gray-300 cursor-pointer"
                            >
                                <template v-if="permissionsState.all_permissions_checked">Deselect All</template>
                                <template v-else>Select All</template>
                            </span>
                        </div>

                        <div class="mt-1">
                            <div v-for="(permissionGroup, permissionsGroupName) in permissions" :key="permissionsGroupName" class="mb-4 space-y-2">

                                <div class="bg-slate-50 dark:bg-slate-800">
                                    <div class="flex justify-start items-center space-x-4 p-1">

                                        <div class="">{{ permissionsGroupName }}</div>
                                        <span
                                            @click="togglePermissionGroup(permissionsGroupName)"
                                            class="font-normal text-xs text-gray-300 cursor-pointer"
                                        >
                                            <template v-if="permissionsState.permissions.find(permission => permission.name === permissionsGroupName).selected">Deselect All</template>
                                            <template v-else>Select All</template>
                                        </span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 p-2">

                                    <div v-for="permission in permissionGroup" :key="permission.id" class="col-span-1">

                                        <label class="flex items-center">
                                            <Checkbox
                                                :id="permission.id"
                                                @change="handleCheckboxClick($event, permissionsGroupName)"
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
                        <div v-if="form.errors.role_permissions" class="font-normal text-sm mt-2 mb-2 text-red-600 dark:text-red-400">{{form.errors.role_permissions}}</div>

                    </div>

            </template>

            <template #actions>

                <Link
                    :href="route('roles.index', $page.props.tenant_domain)"
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
