<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import MiniChart from '@/Components/MiniChart.vue'
import { Head, usePage } from '@inertiajs/vue3'
</script>

<template>
    <AuthenticatedLayout>

        <Head title="Dashboard" />

        <template #header>
            <span class="capitalize">Hello, {{ usePage().props.auth.user.name }}</span>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

            <div class="card flex rounded-lg flex-col justify-center dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body flex-1 rounded-lg shadow-md hover:shadow-xl transition">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <h5 class="text-15 mr-2 text-indigo-600 dark:text-gray-100 ">Total GLA</h5>
                                <h4 class="my-4 text-2xl text-gray-500 dark:text-gray-100 ">
                                    <span class="counter-value" data-target="95">243,896</span>
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    :colors="['#6366f1']"
                                    :options="{
                                        series: [{
                                            data: [
                                                220876,
                                                235473,
                                                232279,
                                                229976,
                                                265476,
                                                ],
                                        }],
                                        chart: {
                                            type: 'line',
                                            height: 50,
                                            sparkline: {
                                                enabled: true,
                                            },
                                        },
                                        markers: {
                                            size: 2,
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 4,
                                        },
                                        tooltip: {
                                            fixed: {
                                                enabled: false,
                                            },
                                            x: {
                                                show: false,
                                            },
                                            y: {
                                                formatter: function(val) {
                                                    return val.toLocaleString();
                                                },
                                                title: {
                                                    formatter: function() {
                                                        return '';
                                                    }
                                                }
                                            },
                                            marker: {
                                                show: false,
                                            },
                                        },
                                    }"
                                    chartId="mini-chart1"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ 43,967</span>
                        <span
                            class="ltr:ml-1.5 rtl:mr-1.5 text-gray-400 text-13 dark:text-zinc-100">Since last month</span>
                    </div>
                </div>
            </div>

            <div class="card flex rounded-lg flex-col justify-center dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body flex-1 rounded-lg shadow-md hover:shadow-xl transition">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <h5 class="text-15 mr-2 text-indigo-600 dark:text-gray-100 ">% Leased</h5>
                                <h4 class="my-4 text-2xl text-gray-500 dark:text-gray-100 ">
                                    <span class="counter-value" data-target="95">95</span>%
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    :colors="['#6366f1']"
                                    :options="{
                                        series: [{
                                            data: [70,85,82,87,94],
                                        }],
                                        chart: {
                                            type: 'line',
                                            height: 50,
                                            sparkline: {
                                                enabled: true,
                                            },
                                        },
                                        markers: {
                                            size: 2,
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 4,
                                        },
                                        dataLabels: {
                                            formatter: function(val) {
                                                return val + '%';
                                            },
                                        },
                                        tooltip: {
                                            fixed: {
                                                enabled: false,
                                            },
                                            x: {
                                                show: false,
                                            },
                                            y: {
                                                formatter: function(val) {
                                                    return '$' + val + 'M';
                                                },
                                                title: {
                                                    formatter: function() {
                                                        return '';
                                                    }
                                                }
                                            },
                                            marker: {
                                                show: false,
                                            },
                                        },
                                    }"
                                    chartId="mini-chart2"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ 2%</span>
                        <span
                            class="ltr:ml-1.5 rtl:mr-1.5 text-gray-400 text-13 dark:text-zinc-100">Since last month</span>
                    </div>
                </div>
            </div>

            <div class="card flex rounded-lg dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body flex-1 rounded-lg shadow-md hover:shadow-xl transition">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <h5 class="text-15 mr-2 text-indigo-600 dark:text-gray-100 ">Base Rental Income</h5>
                                <h3 class="my-4 text-2xl text-gray-500 dark:text-gray-100 ">
                                    $<span class="counter-value" data-target="1.28">1.28</span>M
                                </h3>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    :colors="['#6366f1']"
                                    :options="{
                                        series: [{
                                            data: [0.7, 0.8, 0.6, 0.9, 1.28],
                                        }],
                                        chart: {
                                            type: 'line',
                                            height: 50,
                                            sparkline: {
                                                enabled: true,
                                            },
                                        },
                                        markers: {
                                            size: 2,
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 4,
                                        },
                                        dataLabels: {
                                            formatter: function(val) {
                                                return '$' + val + 'M';
                                            },
                                        },
                                        tooltip: {
                                            fixed: {
                                                enabled: false,
                                            },
                                            x: {
                                                show: false,
                                            },
                                            y: {
                                                formatter: function(val) {
                                                    return '$' + val + 'M';
                                                },
                                                title: {
                                                    formatter: function() {
                                                        return '';
                                                    }
                                                }
                                            },
                                            marker: {
                                                show: false,
                                            },
                                        },
                                    }"
                                    chartId="mini-chart3"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ $380k</span>
                        <span
                            class="ltr:ml-1.5 rtl:mr-1.5 text-gray-400 text-13 dark:text-zinc-100">Since last month</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="grid grid-cols-1 xl:grid-cols-12 gap-5">
            <div class="col-span-12 xl:col-span-4">
                <div class="card rounded-lg dark:bg-zinc-800 dark:border-zinc-600 card-h-100 shadow-md">
                    <div
                        class="card-header border-b border-gray-50 p-5 bg-indigo-50 dark:bg-gray-700 dark:border-gray-900">
                        <div class="flex flex-wrap items-center">
                            <h5 class="text-15 mr-2 text-indigo-600 dark:text-gray-100 ">Portfolio Composition</h5>
                            <div class="ltr:ml-auto rtl:mr-auto">
                                <select
                                    class="form-select form-select-sm py-0 ltr:pl-2 rtl:pr-4 border-gray-50 bg-indigo-200 rounded-lg dark:border-zinc-600 dark:text-gray-100 dark:bg-zinc-700">
                                    <option value="AP">by Square Feet</option>
                                    <option value="MA">by Quantity</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="grid grid-cols-12 gap-5 justify-items-stretch">
                            <div class="col-span-12 justify-self-center">
                                <MiniChart
                                    :colors="['#22c55e', '#0ea5e9', '#6366f1']"
                                    :options="{
                                        series: [25, 70, 15],
                                        chart: {
                                            width: 350,
                                            height: 350,
                                            type: 'pie',
                                        },
                                        labels: ['Industrial', 'Office', 'Retail'],
                                        stroke: {
                                            width: 1,
                                        },
                                        legend: {
                                            show: false,
                                            fontSize: '14px'
                                        },
                                        dataLabels: {
                                            formatter: function (val, opts) {
                                              return val.toFixed() + '% '+opts.w.config.labels[opts.seriesIndex]
                                            },
                                            style: {
                                              fontSize: '14px',
                                              fontWeight: 'bold',
                                              colors: ['#fff', '#fff', '#fff']
                                            },
                                            dropShadow: {
                                              enabled: true,
                                              top: 1,
                                              left: 1,
                                              blur: 1,
                                              color: '#000',
                                              opacity: 0.45
                                            }
                                        },
                                        markers: {
                                           colors: ['#F44336', '#E91E63', '#9C27B0']
                                        },
                                        responsive: [{
                                            breakpoint: 480,
                                            options: {
                                                chart: {
                                                    width: 200
                                                },
                                            }
                                        }]
                                    }"
                                    chartId="portoflio-composition"
                                    class="mt-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-8">

                <div class="card rounded-lg dark:bg-zinc-800 dark:border-zinc-600 card-h-100 shadow-md">
                    <div
                        class="card-header border-b border-gray-50 p-5 bg-indigo-50 dark:bg-gray-700 dark:border-gray-900">
                        <h6 class="mb-1 text-15 text-indigo-600 dark:text-gray-100">Upcoming Lease Expiration</h6>
                    </div>
                    <div class="card-body">
                        <div class="relative overflow-x-auto">
                            <table class="text-sm text-left text-gray-500 w-full dark:bg-zinc-700 dark:border-zinc-600">
                                <thead class="text-sm text-gray-700 dark:text-gray-100 ">
                                <tr class="bg-gray-50 dark:bg-gray-700">
                                    <th class="px-6 py-3" scope="col">
                                        Tenant
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        Property
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        RSF
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        Expiring Rent
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        Expiration
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Apex Solutions Inc.
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Lakeside Logistics Center
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        2,102
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $2.10
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        3/31/24
                                    </td>
                                </tr>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <th class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100"
                                        scope="row">
                                        Stellar Innovations Ltd.
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Oceanfront Plaza
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        5,234
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $1,30
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        3/31/24
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-zinc-700 dark:border-zinc-600">
                                    <th class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100"
                                        scope="row">
                                        Horizon Ventures Group
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Oceanfront Plaza
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        10,020
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $3.20
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        4/30/24
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-zinc-700 dark:border-zinc-600">
                                    <th class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100"
                                        scope="row">
                                        Evergreen Enterprises Co.
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Riverview Marketplace
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        40,302
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $0.75
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        6/30/24
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-zinc-700 dark:border-zinc-600">
                                    <th class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100"
                                        scope="row">
                                        BlueSky Technologies
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Lakeside Logistics Center
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        1,200
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $2.12
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        6/30/24
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-zinc-700 dark:border-zinc-600">
                                    <th class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100"
                                        scope="row">
                                        FusionWorks Corp.
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Riverview Marketplace
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        140,010
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $1.78
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        6/30/24
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-12 gap-5">

            <div class="col-span-12 xl:col-span-7">

                <div class="card rounded-lg dark:bg-zinc-800 dark:border-zinc-600 card-h-100 shadow-md">
                    <div
                        class="card-header border-b border-gray-50 p-5 bg-indigo-50 dark:bg-gray-700 dark:border-gray-900">
                        <h6 class="mb-1 text-15 text-indigo-600 dark:text-gray-100">In-Place Rent Table</h6>
                    </div>
                    <div class="card-body">
                        <div class="relative overflow-x-auto">
                            <table class="text-sm text-left text-gray-500 w-full dark:bg-zinc-700 dark:border-zinc-600">
                                <thead class="text-sm text-gray-700 dark:text-gray-100 ">
                                <tr class="bg-gray-50 dark:bg-gray-700">
                                    <th class="px-6 py-3" scope="col">
                                        Property
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        GLA
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        Avg. Rent
                                    </th>
                                    <th class="px-6 py-3" scope="col">
                                        WALT
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Riverview Marketplace
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        1,002,919
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $2.10
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        3.23
                                    </td>
                                </tr>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Oceanfront Plaza
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        203,010
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $1.30
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        2.42
                                    </td>
                                </tr>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Lakeside Logistics Center
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        745,092
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $3.20
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        5.02
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 xl:col-span-5">
                <div class="card rounded-lg dark:bg-zinc-800 dark:border-zinc-600 card-h-100 shadow-md">

                    <div
                        class="card-header border-b border-gray-50 p-5 bg-indigo-50 dark:bg-gray-700 dark:border-gray-900">
                        <div class="flex flex-wrap items-center">
                            <h5 class="text-15 mr-2 text-indigo-600 dark:text-gray-100 ">Leases Expiring</h5>
                            <div class="ltr:ml-auto rtl:mr-auto">
                                <select
                                    class="form-select form-select-sm py-0 ltr:pl-2 rtl:pr-4 border-gray-50 bg-indigo-200 rounded-lg dark:border-zinc-600 dark:text-gray-100 dark:bg-zinc-700">
                                    <option value="AP">by Square Feet</option>
                                    <option value="MA">by Quantity</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <MiniChart
                            :colors="['#22c55e', '#0ea5e9', '#a8aada']"
                            :options="{
                              chart: {
                                type: 'bar'
                              },
                              plotOptions: {
                                  bar: {
                                    horizontal: false,
                                    dataLabels: {
                                      position: 'top'
                                    }
                                  }
                                },
                              dataLabels: {
                                formatter: function(val) {
                                    return val.toLocaleString(); // Converts the number to a string with commas
                                  }
                              },
                              yaxis: {
                                labels: {
                                  formatter: function(val) {
                                    return val.toLocaleString(); // Converts the number to a string with commas
                                  }
                                }
                              },
                              tooltip: {
                                y: {
                                  formatter: function(val) {
                                    return val.toLocaleString(); // Converts the number to a string with commas for the tooltip as well
                                  }
                                }
                              },
                              series: [{
                                data: [{
                                  x: 'Expired',
                                  y: 4520,
                                  fillColor: '#6366f1',
                                }, {
                                  x: '30 Days',
                                  y: 15029,
                                  fillColor: '#6366f1',
                                }, {
                                  x: '60 Days',
                                  y: 2502,
                                  fillColor: '#6366f1',
                                }, {
                                  x: '90 Days',
                                  y: 25929,
                                  fillColor: '#6366f1',
                                }]
                              }]
                            }"
                            chartId="wallet-balance1"
                            class="mt-8"
                        />

                    </div>
                </div>

            </div>
        </div>


    </AuthenticatedLayout>
</template>
