<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard!!</h2>
        </template>

        <div class="py-6">
<!--            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">-->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        You're logged in!!!!!!

<!--                      <div class="flex items-center">-->
<!--                        <input class="form-switch" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">-->
<!--                        <label class="ms-1.5" for="flexSwitchCheckChecked">Checked switch checkbox</label>-->
<!--                      </div>-->

<!--                        <select class="selectize">-->
<!--                            <option selected value="orange">Orange</option>-->
<!--                            <option value="White">White</option>-->
<!--                            <option value="Purple">Purple</option>-->
<!--                        </select>-->


<!--                        <div class="grid lg:grid-cols-3 gap-6">-->

<!--                            <div>-->
<!--                                <label for="simpleinput" class="text-gray-800 text-sm font-medium inline-block mb-2">Text</label>-->
<!--                                <input type="text" id="simpleinput" class="form-input">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-email" class="text-gray-800 text-sm font-medium inline-block mb-2">Email</label>-->
<!--                                <input type="email" id="example-email" name="example-email" class="form-input" placeholder="Email">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-password" class="text-gray-800 text-sm font-medium inline-block mb-2">Password</label>-->
<!--                                <input type="password" id="example-password" class="form-input" value="password">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-palaceholder" class="text-gray-800 text-sm font-medium inline-block mb-2">Placeholder</label>-->
<!--                                <input type="text" id="example-palaceholder" class="form-input" placeholder="placeholder">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-readonly" class="text-gray-800 text-sm font-medium inline-block mb-2">Readonly</label>-->
<!--                                <input type="text" id="example-readonly" class="form-input" readonly="" value="Readonly value">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-disable" class="text-gray-800 text-sm font-medium inline-block mb-2">Disabled</label>-->
<!--                                <input type="text" class="form-input" id="example-disable" disabled="" value="Disabled value">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-date" class="text-gray-800 text-sm font-medium inline-block mb-2">Date</label>-->
<!--                                <input class="form-input" id="example-date" type="date" name="date">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-month" class="text-gray-800 text-sm font-medium inline-block mb-2">Month</label>-->
<!--                                <input class="form-input" id="example-month" type="month" name="month">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-time" class="text-gray-800 text-sm font-medium inline-block mb-2">Time</label>-->
<!--                                <input class="form-input" id="example-time" type="time" name="time">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-week" class="text-gray-800 text-sm font-medium inline-block mb-2">Week</label>-->
<!--                                <input class="form-input" id="example-week" type="week" name="week">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-number" class="text-gray-800 text-sm font-medium inline-block mb-2">Number</label>-->
<!--                                <input class="form-input" id="example-number" type="number" name="number">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-color" class="text-gray-800 text-sm font-medium inline-block mb-2">Colors</label>-->
<!--                                <input class="form-input h-10" id="example-color" type="color" name="color" value="#1E85FF">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-select" class="text-gray-800 text-sm font-medium inline-block mb-2">Input Select</label>-->
<!--                                <select class="form-select" id="example-select">-->
<!--                                    <option>1</option>-->
<!--                                    <option>2</option>-->
<!--                                    <option>3</option>-->
<!--                                    <option>4</option>-->
<!--                                    <option>5</option>-->
<!--                                </select>-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <label for="example-multiselect" class="text-gray-800 text-sm font-medium inline-block mb-2">Multiple-->
<!--                                    Select</label>-->
<!--                                <select id="example-multiselect" multiple="" class="form-input">-->
<!--                                    <option>1</option>-->
<!--                                    <option>2</option>-->
<!--                                    <option>3</option>-->
<!--                                    <option>4</option>-->
<!--                                    <option>5</option>-->
<!--                                </select>-->
<!--                            </div>-->
<!--                        </div>-->

                    </div>

                </div>
<!--            </div>-->
        </div>
    </AuthenticatedLayout>
</template>
