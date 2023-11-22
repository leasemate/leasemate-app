<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

import socketIOClient from 'socket.io-client';
import axios from "axios";
import {router, usePage} from "@inertiajs/vue3";

const page = usePage();
const user = ref(page.props.auth.user);

const socketStatus = ref('Connecting...'); // Initial status
const bot_msg = ref('');
const inputValue = ref('');

const socket = socketIOClient("https://reai-node-lgfv.onrender.com");

const CHUNK_SIZE = 5;  // Set the chunk size as per your requirement
let socketIOClientId = '';
let chatSessionId = '46af2d48-8ed8-48ee-9f21-2c88c40bb876';
let accumulatedOutput = '';
let lastMessage;

async function query() {

    bot_msg.value = '';

    const data = {
        question: inputValue.value, // Use the provided question
        socketIOClientId: socketIOClientId,
        chatSessionId: chatSessionId,
    };

    console.log(data);

    try {

        // const post_url = 'https://reai-node-lgfv.onrender.com/api/v1/chat';
        const post_url = 'http://localhost:3000/api/v1/chat';
        const headers = {
            'Authorization': 'Bearer '+user.value.jwt_token,
        };
        const options = {
            headers: headers,
        };

        await axios.post(post_url, data, options)
            .then(function (response) {

                 console.log('axios post response:', response.data);

            })
            .catch(async function (error) {
                console.log(error);
                if(error.response.data.error_type == "TokenExpiredError") {

                    await axios.post(route('refreshToken'))
                        .then(function (response) {
                            console.log('axios post response:', response.data);
                            user.value.jwt_token = response.data.token;
                            query();
                        })
                        .catch(function (error) {
                            console.log(error);
                            console.log('TokenExpiredError');

                        })
                        .then(function () {
                            // always executed
                        });

                }
                // isSending.value = false;
                // errorMessage.value = error.message;
            });

    } catch (error) {
        // isSending.value = false;
        // errorMessage.value = error;
        // console.log(error);
        // console.error('Error sending query:', error);
    }
}

onMounted(async () => {

    console.log(user.value);

    // jwt.sign(user.value, import.meta.env.JWT_SECRET, (err, token) => {
    //     console.log(token);
    //     const auth_token = token;
    // });

    socket.on('connect', () => {
        socketIOClientId = socket.id;
        console.log('Connected with id:', socketIOClientId);
        // startAskingQuestions();

    });

    socket.on('start', () => {
        console.log('START!!!');
    });

    socket.on('token', (token) => {

        // lastMessage = localChat.value.messages[localChat.value.messages.length - 1];

        accumulatedOutput += token; // Accumulate the tokens
        // Check if the accumulated output is at least as long as CHUNK_SIZE
        if (accumulatedOutput.length >= CHUNK_SIZE) {

            // isSending.value = false;

            // Find the last space to keep words intact
            let lastSpaceIndex = accumulatedOutput.lastIndexOf(' ', CHUNK_SIZE);
            if (lastSpaceIndex === -1) lastSpaceIndex = CHUNK_SIZE; // If no space found, just cut at CHUNK_SIZE
            // Print up to the last complete word
            const partToPrint = accumulatedOutput.slice(0, lastSpaceIndex + 1);

            bot_msg.value += partToPrint;

            // Keep the remaining part
            accumulatedOutput = accumulatedOutput.slice(lastSpaceIndex + 1);
        }
    });

    socket.on('end', () => {

        console.log("END!!!");
        console.log(accumulatedOutput);

        // Print any remaining output when the stream ends
        if (accumulatedOutput.trim().length > 0) {
            bot_msg.value += accumulatedOutput;
        }
        // Reset the state for the next query
        accumulatedOutput = '';
    });
});

onUnmounted(() => {
    // console.log('UN MOUNT');
    // console.log('Disconnected websocket: '+ socket.id);

    socket.disconnect();

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
