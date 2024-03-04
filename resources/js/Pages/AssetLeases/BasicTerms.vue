<script setup>
const props = defineProps({
    lease: Object
})
</script>

<template>
    <div class="p-2 bg-white">

        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
                <div class="font-bold text-gray-900">Tenant</div>
                <div class="text-sm text-gray-600">{{ lease.tenant ?? "--" }}</div>
            </div>
            <div>
                <div class="font-bold text-gray-900">Landlord</div>
                <div class="text-sm text-gray-600">{{ lease.landlord ?? "--" }}</div>
            </div>

            <div>
                <div class="font-bold text-gray-600">Premise Address</div>
                <div class="text-sm text-gray-600">{{ lease.premise_address ?? "--" }}</div>
            </div>

            <div>
                <div class="font-bold text-gray-600">Building Address</div>
                <div class="text-sm text-gray-600">{{ lease.building_address ?? "--" }}</div>
            </div>

            <div>
                <div class="font-bold text-gray-600">Rentable Sq. Ft.</div>
                <div class="text-sm text-gray-600">{{ filters.formatNumber(lease.rentable_sqft) ?? "--" }}</div>
            </div>

            <div>
                <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <div class="font-bold text-gray-600">Term</div>
                        <div class="text-sm text-gray-600">{{ lease.term ? lease.term+" Months" : "--" }}</div>
                    </div>
                    <div>
                        <div class="font-bold text-gray-600">Abatement</div>
                        <div class="text-sm text-gray-600">{{ lease.abatement ? lease.abatement+" Months" : "--" }}</div>
                    </div>
                </div>
            </div>

            <div>
                <div class="font-bold text-gray-600">Pro Rata Share</div>
                <div class="text-sm text-gray-600">{{ lease.pro_rata_share ?? "--" }}</div>
            </div>
            <div>
                <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <div class="font-bold text-gray-600">Exp. Date</div>
                        <div class="text-sm text-gray-600">{{ lease.end_date ?? "--" }}</div>
                    </div>
                    <div>
                        <div class="font-bold text-gray-600">Sec. Deposit</div>
                        <div class="text-sm text-gray-600">{{ filters.formatMoney(lease.security_deposit) ?? "--" }}</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>
