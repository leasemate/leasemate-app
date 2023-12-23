<script setup>

import { onMounted, ref } from "vue";
import {Head, Link, useForm} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import DefaultForm from "@/Components/DefaultForm.vue";

import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";

import AutoComplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";

const form = useForm({
    name: '',
    address: '',
    gross_leasable_area: '',
});

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => {
        return {'name':event.query + '-' + item, 'id':  '2'};
    });
}

const submit = () => {
    form.post(route('assets.store'), {

    });
};


onMounted(() => {

});

</script>

<template>

    <Head title="Assets" />

    <AuthenticatedLayout>

        <template #header> Create Asset </template>
{{ items }}<br>
        {{ value}}

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
                    <TextInput
                        id="gross_leasable_area"
                        v-model="form.gross_leasable_area"
                        v-on:focus="form.clearErrors()"
                        type="text"
                        class="mt-1 block w-full"
                        required
                    />
                    <InputError :message="form.errors.gross_leasable_area" class="mt-2" />
                </div>


                <div class="col-span-12 sm:col-span-12">
                    <InputLabel for="users" value="Users" />
                    <AutoComplete
                        v-model="value"
                        multiple
                        :suggestions="items"
                        modelValue="id"
                        optionLabel="name"
                        @complete="search"
                    />

                </div>



            </template>

            <template #actions>
                <div class="space-x-2">
                    <Link :href="route('assets.index')">Cancel</Link>
                    <PrimaryButton
                        type="submit"
                    >Create</PrimaryButton>
                </div>

            </template>

        </DefaultForm>

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
