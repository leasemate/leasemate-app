<script setup>
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"
import { computed, onMounted } from "vue"

const leaseDetails = computed(() => {
    return [
        { label: "Option to Extend", value: props.lease_detail.option_to_extend },
        { label: "Right of First Offer", value: props.lease_detail.right_of_first_offer },
        { label: "Right of First Refusal", value: props.lease_detail.right_of_first_refusal },
        { label: "TI Allowance", value: props.lease_detail.tenant_improvement_allowance },
        { label: "Insurance Requirements", value: props.lease_detail.tenant_insurance_requirements },
        { label: "Tenant Maintenance", value: props.lease_detail.tenant_maintenance_obligations },
        { label: "Landlord Maintenance", value: props.lease_detail.landlord_maintenance_obligations },
        { label: "Assignment & Subletting", value: props.lease_detail.assignment_subletting },
        { label: "Holding Over", value: props.lease_detail.holding_over },
    ]
});

const props = defineProps({
    lease_detail: Object,
})

// onMounted(() => {
//     console.log("Lease Detail");
//     console.log(props.lease_detail)
// });

</script>

<template>

    <div class="mt-6 p-4 rounded-lg shadow-md border">

        <div v-for="(detail, index) in leaseDetails" :key="index">
            <h5 class="text-indigo-600">{{ detail.label }}</h5>
            <p class="ml-2 my-7 mt-2">{{ detail.value ?? "Not Available" }}</p>
            <hr
                :class="{ 'hidden': index === leaseDetails.length - 1 }"
                class="my-4">
        </div>

<!--        <Accordion :multiple="true" :activeIndex="[0]">-->

<!--            <AccordionTab v-for="(detail, index) in leaseDetails" :key="index">-->
<!--                <template #header>-->
<!--                    <h5 class="text-indigo-600">{{ detail.label }}</h5>-->
<!--                </template>-->
<!--                <p class="ml-2">-->
<!--                    {{ detail.value ?? "Not Available" }}-->
<!--                </p>-->
<!--            </AccordionTab>-->
<!--            -->
<!--        </Accordion>-->

    </div>

</template>

<style scoped>

</style>
