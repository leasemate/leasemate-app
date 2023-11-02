<script setup>
import {nextTick, onMounted, ref, toRef } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

import socketIOClient from 'socket.io-client';

const socket = socketIOClient("https://flowise-3n4j.onrender.com") //flowise url

const socketIOClientId = ref('');

socket.on('connect', () => {
    socketIOClientId.value = socket.id;
});

async function query(data) {
    try {
        console.log('socketIOClientId:', socketIOClientId.value);
        console.log('query function called');

        const response = await fetch(
            // "http://localhost:3000/api/v1/prediction/ba8e6d4e-3d79-467b-8e07-3eb9a4f59efb",
            "https://flowise-3n4j.onrender.com/api/v1/prediction/fa5c2558-1fff-447f-8e1e-446871c3d5e8",
            {
                method: "POST",
                body: JSON.stringify({
                    question: "Hey, how are you?",
                    socketIOClientId: socketIOClientId.value,
                }),
                headers: {
                    Authorization: "Bearer 7YchbbnxFj0VG+eUySUiYQTI+OeQqrmVReZ2XeeIqeg=",

                    // Authorization: "Bearer I08QpuKxZW7rJ16OYUQ50i2I9mmH1BEoNE1DcDeTsgg=",
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


onMounted(async () => {

    console.log(socket);
    // console.log(page.props);

    // try {
    //     const response = await query({
    //         question: "Hey, how are you?",
    //         socketIOClientId: socketIOClientId.value,
    //     });
    //     console.log(response);
    // } catch (error) {
    //     console.error(error);
    // }

    socket.on('start', () => {
        console.log('start');
    });

    socket.on('token', (token) => {
        console.log('token:', token);
    });

    socket.on('sourceDocuments', (sourceDocuments) => {
        console.log('sourceDocuments:', sourceDocuments);
    });

    socket.on('end', () => {
        console.log('end');
    });

});


</script>

<template>

    <AuthenticatedLayout>

        <h1>Flowise test</h1>

        <button @click="query" class="btn">Get message</button>


    </AuthenticatedLayout>



</template>

<style scoped>

</style>
