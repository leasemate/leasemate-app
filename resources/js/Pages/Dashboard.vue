<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"

import MiniChart from "@/Components/MiniChart.vue"

import { onMounted } from "vue"

onMounted(function() {

})
</script>

<template>
    <AuthenticatedLayout>
        <template #header>
            <div class="grid grid-cols-1 mb-5">
                <div class="flex items-center justify-between">
                    <h4 class="mb-sm-0 text-lg font-semibold grow text-gray-800 dark:text-gray-100">Dashboard</h4>
<!--                    <nav class="flex" aria-label="Breadcrumb">-->
<!--                        <ol class="inline-flex items-center space-x-1 ltr:md:space-x-3 rtl:md:space-x-0">-->
<!--                            <li class="inline-flex items-center">-->
<!--                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 dark:text-zinc-100 dark:hover:text-white">-->
<!--                                    Dashboard-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <div class="flex items-center">-->
<!--                                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>-->
<!--                                    </svg>-->
<!--                                    <a href="#" class="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-500 hover:text-gray-900 ltr:md:ml-2 rtl:md:mr-2 dark:text-gray-100 dark:hover:text-white">Dashboard</a>-->
<!--                                </div>-->
<!--                            </li>-->
<!--                        </ol>-->
<!--                    </nav>-->
                </div>
            </div>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">



            <div class="card flex flex-col justify-center dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">Total GLA</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100 ">
                                    <span class="counter-value" data-target="95">243,896</span>
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    chartId="mini-chart1"
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
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ 43,967</span>
                        <span class="ltr:ml-1.5 rtl:mr-1.5 text-gray-700 text-13 dark:text-zinc-100">Since last month</span>
                    </div>
                </div>
            </div>

            <div class="card flex flex-col justify-center dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">% Leased</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100 ">
                                    <span class="counter-value" data-target="95">95</span>%
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    chartId="mini-chart2"
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
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ 2%</span>
                        <span class="ltr:ml-1.5 rtl:mr-1.5 text-gray-700 text-13 dark:text-zinc-100">Since last month</span>
                    </div>
                </div>
            </div>

            <div class="card dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">Base Rental Income</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100 ">
                                    $<span class="counter-value" data-target="1.28">1.28</span>M
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    chartId="mini-chart3"
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
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ $380k</span>
                        <span class="ltr:ml-1.5 rtl:mr-1.5 text-gray-700 text-13 dark:text-zinc-100">Since last month</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="grid grid-cols-1 xl:grid-cols-12 gap-5">

            <div class="col-span-12 xl:col-span-4">

                <div class="card dark:bg-zinc-800 dark:border-zinc-600 card-h-100">
                    <div class="card-body">
                        <div class="flex flex-wrap items-center mb-2">
                            <h5 class="text-15 mr-2 text-gray-800 dark:text-gray-100 ">Portfolio Composition</h5>
                            <div class="ltr:ml-auto rtl:mr-auto">
                                <select class="form-select form-select-sm py-0 ltr:pl-4 rtl:pr-4 border-gray-50 bg-gray-50/20 dark:border-zinc-600 dark:text-gray-100 dark:bg-zinc-700">
                                    <option value="AP">by Square Feet</option>
                                    <option value="MA">by Quantity</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-5 justify-items-stretch">
                            <div class="col-span-12 justify-self-center">
                                <MiniChart
                                    class="mt-8"
                                    chartId="portoflio-composition"
                                    :colors="['#22c55e', '#0ea5e9', '#6366f1']"
                                    :options="{
                                        series: [25, 70, 15],
                                        chart: {
                                            width: 400,
                                            height: 400,
                                            type: 'pie',
                                        },
                                        labels: ['Industrial', 'Office', 'Retail'],
                                        stroke: {
                                            width: 1,
                                        },
                                        legend: {
                                            show: true,
                                            fontSize: '14px'
                                        },
                                        dataLabels: {
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-8">

                <div class="card dark:bg-zinc-800 dark:border-zinc-600 card-h-100">
                    <div class="card-body pb-0">
                        <h6 class="mb-1 text-15 text-gray-700 dark:text-gray-100">Upcoming Lease Expiration</h6>
                    </div>
                    <div class="card-body">
                        <div class="relative overflow-x-auto">
                            <table class="text-sm text-left text-gray-500 w-full dark:bg-zinc-700 dark:border-zinc-600">
                                <thead class="text-sm text-gray-700 dark:text-gray-100 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Tenant
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Property
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        RSF
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Expiring Rent
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Expiration
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        AOK Logistics
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Elysian Valley Logistic
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
                                    <th scope="row" class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Antec Lighting
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Elysian Valley Logistic
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
                                    <th scope="row" class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Duck Logistics
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        1940 Denby
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
                                    <th scope="row" class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        JB Hunt
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        SEC Government Building
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
                                    <th scope="row" class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        ICC Cabling
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Frogtown Spectrum
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
                                    <th scope="row" class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        LA Slot Machine
                                    </th>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        Frogtown Spectrum
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

                <div class="card dark:bg-zinc-800 dark:border-zinc-600 card-h-100">
                    <div class="card-body pb-0">
                        <h6 class="mb-1 text-15 text-gray-700 dark:text-gray-100">In-Place Rent Table</h6>
                    </div>
                    <div class="card-body">
                        <div class="relative overflow-x-auto">
                            <table class="text-sm text-left text-gray-500 w-full dark:bg-zinc-700 dark:border-zinc-600">
                                <thead class="text-sm text-gray-700 dark:text-gray-100 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Property
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        GLA
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Avg. Rent
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        WALT
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Elysian Valley Logistic
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
                                        1940 Denby
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
                                        SEC Government Building
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
                                <tr class="bg-white dark:bg-zinc-700 dark:border-zinc-600">
                                    <td class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap dark:text-zinc-100">
                                        Frogtown Spectrum
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        425,001
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        $0.75
                                    </td>
                                    <td class="px-6 py-3.5 dark:text-zinc-100">
                                        4.45
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 xl:col-span-5">
                <div class="card dark:bg-zinc-800 dark:border-zinc-600 card-h-100">
                    <div class="card-body">
                        <div class="flex flex-wrap items-center mb-2">
                            <h5 class="text-15 mr-2 text-gray-800 dark:text-gray-100 ">Leases Expiring</h5>
                            <div class="ltr:ml-auto rtl:mr-auto">
                                <select class="form-select form-select-sm py-0 ltr:pl-4 rtl:pr-4 border-gray-50 bg-gray-50/20 dark:border-zinc-600 dark:text-gray-100 dark:bg-zinc-700">
                                    <option value="AP">by Square Feet</option>
                                    <option value="MA">by Quantity</option>
                                </select>
                            </div>
                        </div>

                        <MiniChart
                            class="mt-8"
                            chartId="wallet-balance1"
                            :colors="['#22c55e', '#0ea5e9', '#a8aada']"
                            :options="{
                              chart: {
                                type: 'bar'
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
                                  y: 3502,
                                  fillColor: '#6366f1',
                                }, {
                                  x: '90 Days',
                                  y: 25929,
                                  fillColor: '#6366f1',
                                }]
                              }]
                            }"
                        />

                    </div>
                </div>

            </div>
        </div>



    </AuthenticatedLayout>
</template>
