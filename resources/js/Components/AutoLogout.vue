<script setup>

import { onMounted, onBeforeUnmount, ref } from "vue";
import { Inertia} from "@inertiajs/inertia";
import VueBasicAlert from "vue-basic-alert";

const props = defineProps({
    active: {
        type: String,
        default: 'HELLO!',
    },
    warningTime: {
        type: Number,
        default: 10 * 60 * 1000
    },
    logoutTime: {
        type: Number,
        default: 11 * 60 * 1000
    },
    data: {
        type: Array,
        default: () => ['click', 'scroll', 'keypress']
    }
});

const alert = ref(null);
const warningTimer = ref(null);
const logoutTimer = ref(null);
const warningZone = ref(false);

const startTimer = () => {
    warningTimer.value = setTimeout(warningMessage, props.warningTime); // Assuming `time` is another prop you forgot to mention
    logoutTimer.value = setTimeout(logoutUser, props.logoutTime); // Assuming `time` is another prop you forgot to mention
}

const warningMessage = () => {

    alert.value.showAlert(
        'warning',
        'You will be logged out automatically in 1 minute',
        'Warning',
    );
}

const logoutUser = async () => {
    await Inertia.post(route('logout'));
}

const resetTimer = () => {
    console.log('reset timer');
    clearTimeout(warningTimer.value);
    clearTimeout(logoutTimer.value);
    warningZone.value = false;
    startTimer();
}

onMounted(() => {
    props.data.forEach(event => {
        console.log(event);
        window.addEventListener(event, resetTimer);
    });
    startTimer();
});

onBeforeUnmount(() => {
    props.data.forEach(event => {
        window.removeEventListener(event, resetTimer);
    });
    clearTimeout(warningTimer.value);
    clearTimeout(logoutTimer.value);
});

</script>


<template>

    <vue-basic-alert
        :duration="300"
        @close="resetTimer"
        ref="alert" />

</template>
