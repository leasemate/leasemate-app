<script setup>
import Table from '@/Components/Table.vue'

const props = defineProps({
    lease: Object,
})
</script>

<template>
    <div class="p-2 bg-white">

        <Table
            :columns="['Start Date', 'End Date', 'Amount', 'Frequency']"
            :data="lease.rent_schedule"
            class="pb-0"
            containerClasses="max-h-64 overflow-y-auto"
        >

            <template #head>
                <tr>
                    <th class="px-6 py-2" scope="col">Start Date</th>
                    <th class="px-6 py-2" scope="col">End Date</th>
                    <th class="px-6 py-2" scope="col">Amount</th>
                    <th class="px-6 py-2" scope="col">per SQFT</th>
                </tr>
            </template>

            <template #body>
                <tr
                    v-for="base_rent in lease.rent_schedule"
                    class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"

                >
                    <th
                        :class="base_rent.current ? 'font-semibold text-green-600' : 'text-gray-600'"
                        class="row px-6 py-2 space-x-2"
                    >
                        {{ base_rent.start_date }}
                    </th>

                    <td
                        :class="base_rent.current ? 'font-semibold text-green-600' : 'text-gray-600'"
                        class="px-6 py-2"
                    >
                        {{ base_rent.end_date }}
                    </td>

                    <td
                        :class="base_rent.current ? 'font-semibold text-green-600' : 'text-gray-600'"
                        class="px-6 py-2"
                    >
                        {{ filters.formatMoney(base_rent.amount_total) }}
                    </td>
                    <td
                        :class="base_rent.current ? 'font-semibold text-green-600' : 'text-gray-600'"
                        class="px-6 py-2"
                    >
                        {{ filters.formatMoney(base_rent.amount_per_square_foot) }}
                    </td>
                </tr>
            </template>

        </Table>

    </div>
</template>

<style scoped>

</style>
