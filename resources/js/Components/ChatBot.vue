<script setup>
import { ref, onMounted } from "vue";

const showChat = ref(false);
const showChatHistory = ref(true);
const chatWindow = ref(null);

const toggleChat = () => {
    showChat.value = !showChat.value;
console.log(showChat.value);
    if (showChat.value) {
        document.addEventListener('click', closeChatOnOutsideClick);
    } else {
        document.removeEventListener('click', closeChatOnOutsideClick);
    }
}

const toggleChatHistory = () => {
    showChatHistory.value = !showChatHistory.value;
};

const closeChatOnOutsideClick = (event) => {
    if (chatWindow.value && !chatWindow.value.contains(event.target)) {
        // showChat.value = false;
        document.removeEventListener('click', closeChatOnOutsideClick);
    }
};

// Cleanup the event listener when the component is unmounted
onMounted(() => {
    return () => {
        document.removeEventListener('click', closeChatOnOutsideClick);
    };
});

</script>

<template>

    <div class="dropdown">
        <button @click="toggleChat" class="fixed bottom-20 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
            Chat Bot {{ showChat }}
        </button>

    </div>

    <!-- Chat Bot Window -->

    <div v-if="showChat" ref="chatWindow" class="fixed bottom-32 right-10 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-1/2 max-w-full transition-transform duration-300 transform translate-x-0">
        <!-- Chat History Toggle Button -->

        <button @click="toggleChatHistory" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <!-- Chat History -->
        <div class="h-80 overflow-y-auto">
            <div>
                asdfasdf
            </div>
            <div>
                asdfasdf
            </div>
            <div>
                asdfasdf
            </div>
        </div>

        <div ref="messagesPanel" class="flex-1 overflow-y-auto mb-4">

            <div class="my-1 sm:my-1.5">

                <div class="flex flex-row justify-end">
                    <div class="flex flex-col break-words max-w-[90%] flex-shrink-0 items-end">
                        <div class="flex items-center px-3 py-2 whitespace-pre-wrap h-auto bg-indigo-100 text-violet-900 rounded-2xl rounded-br-none">
                            asdfasdf
                        </div>
                    </div>
                </div>

                <div class="flex flex-row justify-start">
                    <div class="flex flex-col break-words max-w-[90%] flex-shrink-0 items-start">
                        <div class="flex items-center px-3 py-2 whitespace-pre-wrap h-auto bg-indigo-100 text-violet-900 rounded-2xl rounded-br-none">
                            asdfasdf
                        </div>
                    </div>
                </div>

            </div>


        </div>

        <!-- Chat Input -->
        <div class="mt-4">
            <!-- Your chat input form goes here -->
            <!-- Example: -->
            <input type="text" placeholder="Type your message..." class="w-full border border-gray-300 rounded-md px-3 py-2">
            <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
        </div>
    </div>

</template>

<style scoped>
/* Chat window position */
/*.fixed {
    z-index: 50;
}

!* Chat window transition *!
.transition-transform {
    transition-property: transform;
}

!* Chat history initially positioned off-screen to the left *!
.translate-x-0 {
    transform: translateX(-100%);
}

!* Chat history visible when showChatHistory is true *!
.translate-x-full {
    transform: translateX(0);
}*/
</style>
