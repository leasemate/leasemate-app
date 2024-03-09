<script setup>
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"

defineProps({
    lease_detail: Object,
})

</script>

<template>

    <div class="mt-6 p-4 pt-0 rounded-lg shadow-md border">

        <Accordion :multiple="true" :activeIndex="[0]">

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Option to Extend</h5>
                </template>
                <p class="ml-2">
                    {{ lease_detail.option_to_extend ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Right of First Offer</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.right_of_first_offer ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Right of First Refusal</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.right_of_first_refusal ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">TI Allowance</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.tenant_improvement_allowance ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Insurance Requirements</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.tenant_insurance_requirements ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Tenant Maintenance</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.tenant_maintenance_obligations ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Landlord Maintenance</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.landlord_maintenance_obligations ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Assignment &amp; Subletting</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.assignment_subletting ?? "Not Available" }}
                </p>
            </AccordionTab>

            <AccordionTab>
                <template #header>
                    <h5 class="text-indigo-600">Holding Over</h5>
                </template>
                <p class="m-2">
                    {{ lease_detail.holding_over ?? "Not Available" }}
                </p>
            </AccordionTab>

        </Accordion>

    </div>

</template>

<style scoped>

</style>
