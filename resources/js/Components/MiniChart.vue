<script setup>

import { onMounted, ref, computed } from 'vue';
import ApexCharts from 'apexcharts';

// Props
const props = defineProps({
    chartId: String,
    colors: Array,
    options: Object,
});

// Computed property for JSON string of colors
const colorsJson = computed(() => JSON.stringify(props.colors));

// Ref for the chart instance
const chart = ref(null);

// Method to parse and adjust colors
function getChartColorsArray(chartId) {
    var colors = JSON.parse(document.getElementById(chartId).getAttribute('data-colors'));
    return colors.map((value) => {
        var newValue = value.replace(' ', '');
        if (newValue.indexOf('--') !== -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            return color || newValue;
        } else {
            return newValue;
        }
    });
}

// Method to initialize the chart
function initializeChart() {
    // Use the method to get colors
    var chartColors = getChartColorsArray(props.chartId);
    var options = {
        ...props.options,
        colors: chartColors,
    }

    // Assuming you're using ApexCharts or a similar library
    chart.value = new ApexCharts(document.querySelector(`#${props.chartId}`), options);
    chart.value.render();
}

// Mounted lifecycle hook
onMounted(() => {
    initializeChart();
});

</script>

<template>
    <div :id="chartId" :data-colors="colorsJson" class="apex-charts mb-2"></div>
</template>

<style scoped>

</style>
