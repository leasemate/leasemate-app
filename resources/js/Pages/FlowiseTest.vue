<script setup>
import {onMounted, ref } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

import socketIOClient from 'socket.io-client';

const socket = socketIOClient("https://flowise-3n4j.onrender.com") //flowise url

const socketIOClientId = ref('');

const socketStatus = ref('Connecting...'); // Initial status
const bot_msg = ref('');
const inputValue = ref('');

socket.on('connect', () => {
    socketIOClientId.value = socket.id;
    socketStatus.value = 'Connected!';
});

socket.on('start', () => {
    socketStatus.value = 'Started!';
    console.log('start');
});

socket.on('token', (token, res) => {

    console.log(res);
    bot_msg.value += token;
    console.log('token:', token);
});

socket.on('sourceDocuments', (sourceDocuments) => {
    console.log('sourceDocuments:', sourceDocuments);
});

socket.on('end', () => {
    socketStatus.value = 'Disconnected!';
    console.log('end');
});

// Replace 'ws://localhost:8080' with the URL of your WebSocket server
// const socket = new WebSocket('ws://reai.test:8080');

// WebSocket event handlers
// socket.onopen = () => {
//     socketStatus.value = 'Connected';
//     console.log('Connected to: ');
//     // You can perform actions when the connection is established
// };
//
// socket.onmessage = (event) => {
//     // Handle incoming WebSocket messages here
//     socketStatus.value = 'message received';
//
//     bot_msg.value += event.data;
//
//     console.log('Received message:', event.data);
// };
//
// socket.onclose = () => {
//     socketStatus.value = 'Disconnected';
//     // You can handle reconnection or other logic here
// };

async function query(data) {

    bot_msg.value = '';

    // console.log(inputValue.value);
    //
    const post_data = JSON.stringify({
        question: inputValue.value,
        socketIOClientId: socketIOClientId.value,
        overrideConfig: {
            session_id:"0feefc5efd8c438a9bab1f11a372883c",
            system_message:"You are a helpful assistant. You search for information contained in various sources using your available tools. If you do not know the answer, tell them. Do not guess. Pass the user_id 2 to all custom tools."
        }
    });

    console.log(post_data);

    try {
        console.log('socketIOClientId:', socketIOClientId.value);
        console.log('query function called');

        const response = await fetch(
            "https://flowise-3n4j.onrender.com/api/v1/prediction/62937235-a175-45e9-9e93-ea9d72a5f01c",
            {
                method: "POST",
                body: post_data,
                headers: {
                    // Authorization: "Bearer 7YchbbnxFj0VG+eUySUiYQTI+OeQqrmVReZ2XeeIqeg=",
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

    // socket.on('start', () => {
    //     console.log('start');
    // });
    //
    // socket.on('token', (token) => {
    //     console.log('token:', token);
    // });
    //
    // socket.on('sourceDocuments', (sourceDocuments) => {
    //     console.log('sourceDocuments:', sourceDocuments);
    // });
    //
    // socket.on('end', () => {
    //     console.log('end');
    // });

});


</script>

<template>

    <AuthenticatedLayout>

        <h1>Flowise test</h1>

        <p>WebSocket Status: {{ socketStatus }}</p>

        <div class="p-4">
            <input
                v-model="inputValue"
                class="w-full px-3 py-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Type something..."
            />
            <p class="mt-2">You typed: {{ inputValue }}</p>
        </div>

        <button @click="query" class="btn">Get message</button>

        <p>{{ bot_msg }}</p>

    </AuthenticatedLayout>



</template>

<style scoped>

</style>
