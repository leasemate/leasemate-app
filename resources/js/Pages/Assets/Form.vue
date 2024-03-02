<script setup>

import {onMounted, ref} from "vue";
import {Link, useForm} from "@inertiajs/vue3";

import PrimaryButton from "@/Components/PrimaryButton.vue";
import AutoComplete from "primevue/autocomplete";
import InputError from "@/Components/InputError.vue";
import DefaultForm from "@/Components/DefaultForm.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";

import InputNumber from 'primevue/inputnumber';

const props = defineProps({
    asset: {
        type: Object,
        default: () => {
            return {
                name: '',
                address: '',
                gross_leasable_area: null,
            }
        }
    },
    associates: {
        type: Array,
        default: () => {
            return []
        }
    },
});

const form = useForm({
    ...props.asset,
    users: props.associates,
});

// const value = ref("");
const items = ref([]);

const search = (event) => {

    axios.get(route('users.search'), {
        params: {
            q: event.query
        }
    }).then((response) => {
        items.value = response.data.filter((user) => {
            return ! form.users.some((u) => u.id === user.id);
        });
    });
}


const submit = () => {
    if( ! form.id) {
        form.post(route('assets.store'), {
            errorBag: 'createAsset',
            preserveScroll: true,
            onSuccess: () => {
                // form.reset();
            },
            onError: (error) => {
                console.log(error);
            },
        });
    } else {
        form.put(route('assets.update', form.id), {
            errorBag: 'updateAsset',
            preserveScroll: true,
        });
    }
};

onMounted(() => {

});

</script>

<template>

    <DefaultForm @submitted="submit">

        <template #form>

            <div class="col-span-12 sm:col-span-12">
                <InputLabel for="name" value="Name" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    v-on:focus="form.clearErrors()"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <div class="col-span-12 sm:col-span-12">
                <InputLabel for="address" value="Address" />
                <TextInput
                    id="address"
                    v-model="form.address"
                    v-on:focus="form.clearErrors()"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.address" class="mt-2" />
            </div>

            <div class="col-span-12 sm:col-span-12">

                <InputLabel for="gross_leasable_area" value="Gross Leasable Area" />
                <InputNumber
                    v-model="form.gross_leasable_area"
                    inputId="integeronly"
                    suffix=" sq ft"
                    required
                />
                <InputError :message="form.errors.gross_leasable_area" class="mt-2" />
            </div>


            <div class="col-span-12 sm:col-span-12">
                <InputLabel for="users" value="Assign Users" />
                <AutoComplete
                    v-model="form.users"
                    multiple
                    :suggestions="items"
                    optionLabel="display_name_with_roles"
                    :completeOnFocus="true"
                    @complete="search"
                />
                <div class="text-sm text-gray-200 mt-0.5">Asset Managers, Property Managers, Leasing Agents</div>
                <InputError :message="form.errors.users" class="mt-2" />

<!--                <div v-for="assigned_user in form.users" class="">-->
<!--                    {{ assigned_user }}-->
<!--                </div>-->

            </div>



        </template>

        <template #actions>
            <div class="space-x-2">
                <Link :href="route('assets.index')">Cancel</Link>
                <PrimaryButton
                    type="submit"
                >Save</PrimaryButton>
            </div>

        </template>

    </DefaultForm>

</template>

<style scoped>

</style>

