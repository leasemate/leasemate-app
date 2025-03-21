<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Head, Link, router, usePage } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import PrimaryLink from '@/Components/PrimaryLink.vue'
import SecondaryLink from '@/Components/SecondaryLink.vue'
import Button from '@/Components/Button.vue'
import Table from '@/Components/Table.vue'
import Checkbox from 'primevue/checkbox'

import { fileStatusClass } from '@/Composables/fileStatusClass.js'
import VueFilePond, { setOptions } from 'vue-filepond'
import FilePondPluginFileValidateType
    from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js'
import 'filepond/dist/filepond.min.css'

import Hero from '@/Components/Lease/Hero.vue'
import Associates from '@/Components/Lease/Associates.vue'
import Modal from '@/Components/Modal.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import DangerButton from '@/Components/DangerButton.vue'
import toast from '@/Stores/toast.js'
import BoxIcon from '@/Components/BoxIcon.vue'
import TableDropdown from '@/Components/TableDropdown.vue'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import Pagination from '@/Components/Pagination.vue'

const page = usePage()
const user = computed(() => page.props.auth.user)
const props = defineProps({
    asset: Object,
    associates: Array,
    leases: Object,
})

const leases = ref(props.leases)
const archived = ref(false)

// Watch for changes in the local ref
watch(props.leases, (newLeases, oldLeases) => {
    // Do something when props.leases changes
    console.log('props.leases has changed:', newLeases)
}, { deep: true })

const { getFileStatusClass } = fileStatusClass()

const leaseToDelete = ref(null)
const confirmingLeaseDeletion = ref(false)

const confirmLeaseDeletion = (lease) => {
    confirmingLeaseDeletion.value = true
    leaseToDelete.value = lease
}

const closeModal = () => {
    confirmingLeaseDeletion.value = false
}

const deleteLease = () => {

    if (leaseToDelete.value) {
        closeModal()
        try {
            router.delete(route('assets.leases.destroy', [props.asset, leaseToDelete.value.id]), {
                preserveScroll: true,
            })
        } catch (error) {
            toast.error(error)
            console.log(error)
        }

    }
}

const archiveLease = (lease) => {
    try {
        router.post(route('assets.leases.archive', [props.asset, lease]), {}, {
            preserveScroll: true,
        })
    } catch (error) {
        toast.error(error)
        console.log(error)
    }
}

const restoreLease = (lease) => {
    try {
        router.post(route('assets.leases.restore', [props.asset, lease]), {}, {
            preserveScroll: true,
        })
    } catch (error) {
        toast.error(error)
        console.log(error)
    }
}

const FilePond = VueFilePond(FilePondPluginFileValidateType)
let serverResponse = ''

setOptions({
    credits: [],
    required: true,
    allowMultiple: true,
    allowRevert: false,
    acceptedFileTypes: [
        'application/pdf',
        // 'image/png',
        // 'image/jpeg',
        // 'image/jpg',
        // 'image/gif',
    ],
    // files: files,
    server: {
        process: {
            url: route('assets.leases.store', props.asset),
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': page.props.csrf,
            },
            // ondata: (formData) => {
            //     formData.append('asset_id', props.asset.id);
            //     return formData;
            // },
            onsuccess: (response) => {
                console.log('on success')
                console.log(response)
                // serverResponse = JSON.parse(response);
            },
            onerror: (response) => {
                console.log('on error')
                serverResponse = JSON.parse(response)
            },
        },
    },
    labelFileProcessingError: (error) => {
        console.log(error)
        console.log(serverResponse)
        if (serverResponse.errors && serverResponse.errors.lease_document) {
            return serverResponse.errors.lease_document.join(' ')
        }
        return serverResponse.message
    },
})

const toolTipOptions = (lease) => {
    if (lease.status === 'Failed') {
        return {
            value: lease.status_msg,
            pt: {
                arrow: {
                    style: {
                        borderRightColor: 'var(--primary-color)', // Customize the arrow color
                    },
                },
                text: 'rounded-md px-2 py-1 text-xs ring-1 ring-inset bg-red-50 text-red-800 ring-red-600/20',
            },
        }
    } else {
        return null
    }

}

const handleOnProcessFile = (error, file) => {
    router.reload({ only: ['leases'] })
}

const handleInit = () => {

}

const handleArchivedFilter = (e) => {
    if (e.target.checked) {
        archived.value = true
        router.get(route('assets.show', props.asset), {
            archived: 1,
        }, {
            preserveScroll: true,
            preserveState: true,
            only: ['leases'],
        })
    } else {
        archived.value = false
        router.get(route('assets.show', props.asset), {}, {
            preserveScroll: true,
            preserveState: true,
            only: ['leases'],
        })
    }
}

onMounted(() => {

    const searchParams = new URLSearchParams(window.location.search)
    archived.value = searchParams.get('archived') === '1'

    Echo.private(`tenant-global-channel.${page.props.tenant_id}`)
        .listen('LeaseFileDeleted', (e) => {
            toast.success(e.lease_deleted.file_name + ': Deleted successfully')
            router.reload({
                'preserveScroll': true,
            })
        })
        .listen('LeaseProcessingUpdate', (e) => {
            router.reload({
                'preserveScroll': true,
            })
        })
})

onBeforeUnmount(() => {
    if (user.value) {
        Echo.leave(`tenant-global-channel.${page.props.tenant_id}`)
    }
})


</script>

<template>

    <Head title="Asset" />

    <AuthenticatedLayout>

        <div class="flex justify-end">
            <SecondaryLink
                :href="route('assets.edit', asset)"
                icon-left="edit"
            ></SecondaryLink>
        </div>

        <Hero :asset="asset" />

        <Associates :associates="associates" />

        <FilePond
            ref="pond"
            class-name="my-file-upload"
            label-idle="Lease Drop or <span class='filepond--label-action'>Browse</span>"
            name="lease_document"
            @init="handleInit"
            @processfile="handleOnProcessFile"
        />

        <Table v-if="props.leases.data.length" containerClasses="pb-28">

            <template #head>
                <tr>
                    <!--                    <th scope="col" class="pl-4 pr-2 py-3">-->
                    <!--                    </th>-->
                    <th class="px-6 py-3" scope="col">
                    </th>
                    <th class="px-6 py-3" scope="col">
                        Name
                    </th>
                    <th class="px-6 py-3" scope="col">
                        Premise
                    </th>
                    <th class="px-6 py-3 whitespace-nowrap" scope="col">
                        GLA (SQFT)
                    </th>
                    <th class="px-6 py-3" scope="col">
                        Start Date
                    </th>
                    <th class="px-6 py-3" scope="col">
                        End Date
                    </th>
                    <th class="px-6 py-3 whitespace-nowrap" scope="col">
                        Rent (SQFT)
                    </th>
                    <th class="py-3" scope="col">
                    </th>
                    <th class="px-3 py-3 font-normal normal-case" scope="col">
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    <BoxIcon class="bx-filter-alt text-[20px] text-gray-500" />
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                        <MenuItem v-slot="{ active }" disabled>
                                            <div
                                                :class="'flex items-center block px-4 py-2 text-sm space-x-2'"
                                            >
                                                <Checkbox
                                                    v-model="archived"
                                                    :binary="true"
                                                    inputId="archived-checkbox"
                                                    @change="handleArchivedFilter"
                                                />
                                                <label class="font-bold uppercase cursor-pointer"
                                                       for="archived-checkbox">Archived</label>
                                            </div>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </th>
                </tr>
            </template>


            <template #body>
                <tr v-for="(lease, index) in props.leases.data" :key="lease.id"
                    class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">

                    <!--                    <td class="pl-4 pr-2 py-4 space-x-2">-->
                    <!--                        <Checkbox />-->
                    <!--                    </td>-->
                    <th class="px-6 py-4" scope="row">

                        <div class="inline-block">
                            <span
                                :class="getFileStatusClass(lease.lease_document.status)"
                                class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">

                                  <span class="relative mr-1.5 flex h-2.5 w-2.5">

                                      <template
                                          v-if="!['Ready', 'Failed', 'Archived'].includes(lease.lease_document.status)">
                                          <span
                                              :class="getFileStatusClass(lease.lease_document.status, 'PROCESS_CLASSES')"
                                              class="absolute inline-flex h-full w-full animate-ping rounded-full"></span>
                                          <span
                                              :class="getFileStatusClass(lease.lease_document.status, 'PROCESS_CLASSES')"
                                              class="relative inline-flex h-2.5 w-2.5 rounded-full"></span>
                                      </template>

                                      <span v-else
                                            :class="getFileStatusClass(lease.lease_document.status, 'PROCESS_CLASSES')"
                                            class="relative inline-flex h-2.5 w-2.5 rounded-full"></span>

                                  </span>

                                  <span class="whitespace-nowrap">{{ lease.lease_document.status
                                      }} {{ lease.lease_document.status_progress }}</span>

                            </span>
                            <div
                                v-if="!['Ready', 'Failed', 'Archived'].includes(lease.lease_document.status) && lease.lease_document.status_progress"
                                class="mt-2 px-2"
                            >
                                <div
                                    class="progress h-2.5 w-full bg-gray-200 rounded-full relative dark:bg-zinc-600 mt-2">
                                    <div
                                        :style="`width: ${lease.lease_document.status_progress};`"
                                        class="progress-bar h-2.5 bg-violet-500 rounded-full ltr:rounded-r-none rtl:rounded-l-none progress-bar-striped animate-strip"
                                        role="progressbar">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </th>
                    <td class="px-6 py-4 text-gray-900 ">

                        <Link
                            v-if="lease.lease_document.status === 'Ready'"
                            :href="route('assets.leases.show', [lease.asset_id, lease.id])"
                        >
                            <div class="flex items-center">
                                <BoxIcon v-if="!lease.tenant" class="bx-error mr-1 text-yellow-500" />

                                <strong v-if="lease.tenant">{{ lease.tenant }}</strong>
                                <span v-else
                                      class="italic text-gray-500"
                                >{{ lease.lease_document.name }}</span>
                            </div>
                        </Link>

                        <a
                            v-else
                            :href="lease.lease_document.file_name"
                            class="text-gray-500"
                            target="_blank"
                            type="external"
                        >
                            {{ lease.lease_document.name }}
                        </a>

                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">

                        <Link
                            v-if="lease.premise_address"
                            :href="route('assets.leases.show', [lease.asset_id, lease.id])"
                        >
                            {{ lease.premise_address }}
                        </Link>

                        <template v-else>
                            <span class="text-gray-500">--</span>
                        </template>
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ lease.rentable_sqft ? filters.formatNumber(lease.rentable_sqft) : '--' }}
                    </td>
                    <td class="px-6 py-4 dark:text-zinc-100/80">
                        {{ lease.start_date ?? '--' }}
                    </td>
                    <td
                        :class="lease.expired ? 'text-red-500' : 'text-green-600'"
                        class="px-6 py-4 space-x-2"
                    >
                        {{ lease.end_date ?? '--' }}
                    </td>
                    <td class="px-6 py-4 space-x-2">
                        {{ lease.rent_per_sqft ? filters.formatMoney(lease.rent_per_sqft) : '--' }}
                    </td>
                    <td class="py-4 ">
                        <PrimaryLink
                            v-if="lease.lease_document.status == 'Ready'"
                            :href="route('assets.leases.chats.index', [asset, lease])"
                            icon-left="chat"
                        ></PrimaryLink>
                    </td>
                    <td class="px-3 py-4 ">

                        <TableDropdown
                            :index="index"
                            :length="leases.length"
                            width="32"
                        >

                            <template #trigger>
                                <BoxIcon class="bx-dots-vertical-rounded text-gray-500" />
                            </template>

                            <template #content>

                                <MenuItem v-if="lease.tenant">

                                    <Link
                                        v-if="lease.tenant"
                                        :class="['text-gray-700', 'flex', 'items-center', 'justify-start', 'block', 'px-4', 'py-2', 'space-x-2', 'text-sm', 'w-full', 'hover:bg-gray-100', 'hover:text-gray-900', 'text-left']"
                                        :href="route('assets.leases.show', [lease.asset_id, lease.id])"
                                    >
                                        <BoxIcon class="bx-search text-gray-500" />
                                        <span>View</span>
                                    </Link>

                                </MenuItem>

                                <MenuItem>
                                    <a
                                        :class="['text-gray-700', 'flex', 'items-center', 'justify-start', 'block', 'px-4', 'py-2', 'space-x-2', 'text-sm', 'w-full', 'hover:bg-gray-100', 'hover:text-gray-900', 'text-left']"
                                        :href="lease.lease_document.file_name"
                                        target="_blank"
                                    >
                                        <BoxIcon class="bx-cloud-download text-gray-500" />
                                        <span>Download</span>
                                    </a>
                                </MenuItem>

                                <MenuItem v-if="lease.is_archived">
                                    <a :class="['text-gray-700', 'flex', 'items-center', 'justify-start', 'block', 'px-4', 'py-2', 'space-x-2', 'text-sm', 'w-full', 'hover:bg-gray-100', 'hover:text-gray-900', 'text-left']"
                                       href="#"
                                       @click="restoreLease(lease)"
                                    >
                                        <BoxIcon class="bx-box text-gray-500" />
                                        <span>Restore</span>
                                    </a>
                                </MenuItem>

                                <MenuItem v-else-if="lease.lease_document.status == 'Ready'">
                                    <Button
                                        :class="['text-gray-700', 'flex', 'items-center', 'justify-start', 'block', 'px-4', 'py-2', 'space-x-2', 'text-sm', 'w-full', 'hover:bg-gray-100', 'hover:text-gray-900', 'text-left']"
                                        @click="archiveLease(lease)"
                                    >
                                        <BoxIcon class="bx-box text-gray-500" />
                                        <span>Archive</span>
                                    </Button>
                                </MenuItem>

                                <MenuItem
                                    :disabled="lease.lease_document.is_deleting"
                                >

                                    <Button
                                        :class="[
                                            'flex', 'items-center', 'justify-start', 'block', 'px-4', 'py-2', 'space-x-2', 'text-sm', 'w-full','text-left',
                                            (lease.lease_document.is_deleting ? 'text-red-200 cursor-default':'text-red-700 hover:bg-gray-100'),
                                            ]"
                                        @click="confirmLeaseDeletion(lease)"
                                    >
                                        <BoxIcon
                                            :class="(lease.lease_document.is_deleting ? 'text-red-200':'text-red-500')"
                                            class="bx-trash"
                                        />
                                        <span>{{ (lease.lease_document.is_deleting ? 'Deleting...' : 'Delete') }}</span>
                                    </Button>

                                </MenuItem>

                            </template>

                        </TableDropdown>

                    </td>

                </tr>
            </template>
        </Table>

        <div v-else class="my-10 py-48 bg-gray-50 rounded-lg shadow-md">
            <h2 class="text-center text-gray-300">No Leases</h2>
        </div>

        <Pagination
            :dataset="props.leases"
        />


        <Modal :show="confirmingLeaseDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this lease?
                </h2>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel</SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        @click="deleteLease()"
                    >
                        Delete
                    </DangerButton>
                </div>
            </div>
        </Modal>

    </AuthenticatedLayout>

</template>

<style scoped>

</style>
