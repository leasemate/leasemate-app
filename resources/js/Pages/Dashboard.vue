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
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 ltr:md:space-x-3 rtl:md:space-x-0">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 dark:text-zinc-100 dark:hover:text-white">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <a href="#" class="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-500 hover:text-gray-900 ltr:md:ml-2 rtl:md:mr-2 dark:text-gray-100 dark:hover:text-white">Dashboard</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="card dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">Under Management</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100 ">
                                    $
                                    <span class="counter-value" data-target="865.2">865.2</span>
                                    k
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    chartId="mini-chart1"
                                    :colors="['#FF0000', '--primary-color', '#00FF00']"
                                    :options="{
                                        series: [{
                                            data: [47, 15, 2, 67, 22, 20, 36, 60, 60, 30, 50, 11, 12, 3, 8, ]
                                        }],
                                        chart: {
                                            type: 'line',
                                            height: 50,
                                            sparkline: {
                                                enabled: true,
                                            },
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 2,
                                        },
                                        tooltip: {
                                            fixed: {
                                                enabled: false,
                                            },
                                            x: {
                                                show: false,
                                            },
                                            y: {
                                                title: {
                                                    formatter: function() {
                                                        return '';
                                                    },
                                                },
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
                        <span class="text-xs py-[1px] px-1 bg-green-50/60 text-green-500 rounded font-medium dark:bg-green-500/30">+ $20.9k</span>
                        <span class="ltr:ml-1.5 rtl:mr-1.5 text-gray-700 text-13 dark:text-zinc-100">Since last week</span>
                    </div>
                </div>
            </div>
            <div class="card dark:bg-zinc-800 dark:border-zinc-600">
                <div class="card-body">
                    <div>
                        <div class="grid grid-cols-12 gap-5 items-center">
                            <div class="col-span-6">
                                <span class="text-gray-700 dark:text-zinc-100">Number of Trades</span>
                                <h4 class="my-4 text-xl text-gray-800 dark:text-gray-100 ">
                                    <span class="counter-value" data-target="865.2">6258</span>
                                </h4>
                            </div>
                            <div class="col-span-6">
                                <MiniChart
                                    chartId="mini-chart2"
                                    :colors="['#5156be', '--primary-color', '#00FF00']"
                                    :options="{
                                        series: [{
                                            data: [2, 10, 18, 22, 36, 15, 47, 75, 65, 19, 14, 2, 47, 42, 15, ]
                                        }],
                                        chart: {
                                            type: 'line',
                                            height: 50,
                                            sparkline: {
                                                enabled: true,
                                            },
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 2,
                                        },
                                        tooltip: {
                                            fixed: {
                                                enabled: false,
                                            },
                                            x: {
                                                show: false,
                                            },
                                            y: {
                                                title: {
                                                    formatter: function() {
                                                        return '';
                                                    },
                                                },
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
                        <span class="text-xs py-[1px] px-1 bg-red-50/60 text-red-500 rounded font-medium dark:bg-red-500/30">- 29 Trades</span>
                        <span class="ltr:ml-1.5 rtl:mr-1.5 text-gray-700 text-13 dark:text-zinc-100">Since last week</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="grid grid-cols-1 xl:grid-cols-12 gap-5">
            <div class="col-span-12 xl:col-span-6">
                <div class="card dark:bg-zinc-800 dark:border-zinc-600 card-h-100">
                    <div class="card-body">
<!--                        <div class="flex flex-wrap items-center mb-2">-->
<!--                            <h5 class="text-15 mr-2 text-gray-800 dark:text-gray-100 ">Portfolio Composition by Square Footage</h5>-->
<!--                            <div class="ltr:ml-auto rtl:mr-auto flex gap-1">-->
<!--                                <button type="button" class="btn py-1 px-2 text-13 bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-zinc-100 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800 font-medium">ALL</button>-->
<!--                                <button type="button" class="btn py-1 px-2 text-13 bg-violet-50/50 border-transparent text-violet-500 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white dark:bg-violet-500/20 dark:text-violet-300 dark:hover:bg-violet-500 dark:hover:text-white font-medium">1M</button>-->
<!--                                <button type="button" class="btn py-1 px-2 text-13 bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-zinc-100 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800 font-medium">6M</button>-->
<!--                                <button type="button" class="btn py-1 px-2 text-13 bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 dark:text-zinc-100 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800 font-medium">1Y</button>-->
<!--                            </div>-->
<!--                        </div>-->


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
                                    chartId="wallet-balance"
                                    :colors="['#22c55e', '#0ea5e9', '#a8aada']"
                                    :options="{
                                        series: [35, 70, 15],
                                        chart: {
                                            width: 427,
                                            height: 427,
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
            <div class="col-span-12 xl:col-span-6">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12">
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

                                <div class="grid grid-cols-12 gap-5">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
