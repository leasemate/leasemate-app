<script setup>
import Table from "@/Components/Table.vue"
const props = defineProps({
    lease: Object
})
</script>

<template>
    <div class="p-2 bg-white">

        <Table
            class="pb-0"
            :data="lease.rent_schedule"
            :columns="['Start Date', 'End Date', 'Amount', 'Frequency']"
            containerClasses="max-h-64 overflow-y-auto"
        >

            <template #head>
                <tr>
                    <th scope="col" class="px-6 py-3">Start Date</th>
                    <th scope="col" class="px-6 py-3">End Date</th>
                    <th scope="col" class="px-6 py-3">Amount</th>
                    <th scope="col" class="px-6 py-3">per SQFT</th>
                </tr>
            </template>

            <template #body>
                <tr v-for="base_rent in lease.rent_schedule" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">
                    <th scope="row" class="px-6 py-4 space-x-2">{{ base_rent.start_date }}</th>
                    <td class="px-6 py-4 text-gray-900 ">{{ base_rent.end_date }}</td>
                    <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_total, 0) }}</td>
                    <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_per_square_foot) }}</td>
                </tr>
            </template>

        </Table>

    </div>
</template>

<style scoped>

</style>
