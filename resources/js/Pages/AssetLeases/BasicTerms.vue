<script setup>
const props = defineProps({
    lease: Object,
})
</script>

<template>
    <div class="p-2 bg-white dark:bg-transparent">

        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
                <div class="font-bold text-gray-900 dark:text-gray-400">Tenant</div>
                <div class="text-sm text-gray-600 dark:text-gray-200">{{ lease.tenant ?? '--' }}</div>
            </div>
            <div>
                <div class="font-bold text-gray-900 dark:text-gray-400">Landlord</div>
                <div class="text-sm text-gray-600 dark:text-gray-200">{{ lease.landlord ?? '--' }}</div>
            </div>

            <div>
                <div class="font-bold text-gray-600 dark:text-gray-400">Premise Address</div>
                <div class="text-sm text-gray-600 dark:text-gray-200">{{ lease.premise_address ?? '--' }}</div>
            </div>

            <div>
                <div class="font-bold text-gray-600 dark:text-gray-400">Building Address</div>
                <div class="text-sm text-gray-600 dark:text-gray-200">{{ lease.building_address ?? '--' }}</div>
            </div>

            <div>
                <div class="font-bold text-gray-600 dark:text-gray-400">Rentable Sq. Ft.</div>
                <div class="text-sm text-gray-600 dark:text-gray-200">
                    {{ filters.formatNumber(lease.rentable_sqft) ?? '--' }}
                </div>
            </div>

            <div>
                <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <div class="font-bold text-gray-600 dark:text-gray-400">Term</div>
                        <div class="text-sm text-gray-600 dark:text-gray-200">
                            {{ lease.term ? lease.term + ' Months' : '--' }}
                        </div>
                    </div>
                    <div>
                        <div class="font-bold text-gray-600 dark:text-gray-400">Abatement</div>
                        <div class="text-sm text-gray-600 dark:text-gray-200">
                            {{ lease.abatement ? lease.abatement + ' Months' : '--' }}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="font-bold text-gray-600 dark:text-gray-400">Pro Rata Share</div>
                <div class="text-sm text-gray-600 dark:text-gray-200">{{ lease.pro_rata_share ?? '--' }}</div>
            </div>
            <div>
                <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <div class="font-bold text-gray-600 dark:text-gray-400">Exp. Date</div>
                        <div class="text-sm text-gray-600 dark:text-gray-200">{{ lease.end_date ?? '--' }}</div>
                    </div>
                    <div>
                        <div class="font-bold text-gray-600 dark:text-gray-400">Sec. Deposit</div>
                        <div class="text-sm text-gray-600 dark:text-gray-200">
                            {{ filters.formatMoney(lease.security_deposit) ?? '--' }}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>
