<script setup>

import {onMounted, ref, computed} from "vue";
import {Link, useForm, usePage } from "@inertiajs/vue3";

import PrimaryButton from "@/Components/PrimaryButton.vue";
import AutoComplete from "primevue/autocomplete";
import InputError from "@/Components/InputError.vue";
import DefaultForm from "@/Components/DefaultForm.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";

import InputNumber from 'primevue/inputnumber';
import vueFilePond, { setOptions } from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const props = defineProps({
    asset: {
        type: Object,
        default: () => {
            return {
                name: '',
                address: '',
                gross_leasable_area: null,
                asset_photo: null,
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

const pond = ref(null);
let serverResponse = '';
// const preloadedFiles = computed(() => {
//
//     console.log('preloadedFiles')
//     console.log(form.id, [form.asset_photo])
//     console.log(form.processing)
//
//     if (form.id && form.asset_photo) {
//         return [
//             {
//                 source: form.asset_photo,
//                 options: {
//                     type: 'local'
//                 }
//             }
//         ];
//     } else {
//         return [];
//     }
// });

setOptions({
    server: {
        load: (source, load, error, progress, abort, headers) => {

            console.log('load source:', source)

            if(props.asset.asset_photo) {
                fetch(route('assets.load-photo', props.asset))
                    .then(response => {
                        if (response.ok) {
                            return response.blob();
                        }
                        throw new Error('Network response was not ok.');
                    })
                    .then(blob => {
                        load(blob);
                    })
                    .catch(err => {
                        error(err.message);
                    });

                // Optionally, return an abort function to stop the fetch operation
                return {
                    abort: () => {
                        // This function is entered if the user cancels the load
                    }
                };
            }
        },
        process: {
            url: route('assets.photo-upload'),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': usePage().props.csrf
            },
            onload: (response) => {
                console.log("!!!!!!! ON LOAD !!!!!");

                serverResponse = JSON.parse(response)

                console.log(serverResponse)
                // debugger
                form.asset_photo = serverResponse.asset_photo_path;
            },
            ondata: (formData) => {
                console.log("on data");
                formData.append('asset_id', form.id);
                return formData;
            },
            onerror: (response) => {
                console.log("on error");
                serverResponse = JSON.parse(response);
            },
        },
    },
    labelFileProcessingError: (error) => {
        console.log("labelFileProcessingError");
        console.log(error);
        console.log(serverResponse);
        if (serverResponse.errors && serverResponse.errors.asset_photo) {
            return serverResponse.errors.asset_photo.join(' ');
        }
        return serverResponse.message;
    },
});

const submit = () => {

    form.processing = true;

    pond.value.processFiles().then( (files) => {

        if( !form.id) {

            form.post(route('assets.store'), {
                errorBag: 'createAsset',
                preserveScroll: true,
                onSuccess: () => {},
                onError: (error) => {
                    form.processing = false;
                    console.log(error);
                },
            });

        } else {
            form.put(route('assets.update', form.id), {
                errorBag: 'updateAsset',
                preserveScroll: true,
            });
        }

    }).catch((error) => {
        form.processing = false;
        console.log('File processing error', error)
    });

};

const preloadFiles = ref([]);

onMounted(() => {
    if(props.asset.asset_photo) {
        preloadFiles.value = [
            {
                source: props.asset.asset_photo,
                options: {
                    type: 'local'
                }
            }
        ];
    }
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
                <InputLabel for="users" value="Team Members" />
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
            </div>

            <div class="col-span-12 sm:col-span-12">
                <InputLabel for="property_photo" value="Photo" />
                <file-pond
                    name="asset_photo"
                    ref="pond"
                    class-name="my-pond"
                    class="mt-1"
                    label-idle="Drop property photo here..."
                    :allow-multiple="false"
                    :allow-replace="true"
                    :maxFiles="1"
                    :instantUpload="false"
                    :allowProcess="false"
                    :accepted-file-types="['image/jpg', 'image/jpeg', 'image/png']"
                    :credits="[]"
                    :files="preloadFiles"
                    :required="false"
                    v-on:removefile="(error, file) => form.asset_photo = null"
                />
                <InputError :message="form.errors.asset_photo" class="mt-2" />
            </div>


        </template>

        <template #actions>
            <div class="space-x-3">
                <Link :href="route('assets.index')">Cancel</Link>
                <PrimaryButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    type="submit"
                >Save</PrimaryButton>
            </div>

        </template>

    </DefaultForm>

</template>

<style>
.filepond--root {
    margin: 0;
}
</style>

