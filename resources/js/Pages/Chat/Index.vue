<script setup>
import { onMounted, ref, watch } from "vue";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import ChatLoader from "@/Components/Chat/MessageLoader.vue";

const fullText = "This is the complete message.lakjsdflk jaslkflksdajf lksadjlfk sdlkf lkds lkds jlkf";
const displayedText = ref("");

const initialTextareaHeight = 40;
const textareaHeight = ref(initialTextareaHeight);
const messageToSend = ref('');
const messageField = ref(null);
const isSending = ref(false);

const conversations = ref([
    {
        id: 1,
        last_message: "Last message for id 1",
        messages: [
            { type: 'bot', message: "Hi there!!! How can i help?" },
        ]
    },
    {
        id: 4,
        last_message: "Last message for id 4",
        messages: [
            { type: 'bot', message: "What can i do for ya?" },
            { type: 'user', message: "Whats the rent?" },
            { type: 'bot', message: "base rent at that location is $25,000" },
        ]
    }
]);
// const conversation = ref(conversations.value[0]);
const conversation = ref(null);

// const selectedIndex = ref(0); // Will store the index of the selected chat

const handleKeyDown = (event) => {

    if (event.key === 'Enter' && event.shiftKey) {
        textareaHeight.value += 30;
    }

    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

const handlePaste = (event) => {
    const content = event.target.value;

    const pastedData = event.clipboardData.getData('text/plain');
    const numberOfLines = pastedData.split('\n').length;

    console.log(pastedData);
    console.log(numberOfLines);

    if (pastedData.includes('\n')) {
        console.log('New line detected');
        console.log(numberOfLines);

        textareaHeight.value = Math.min(numberOfLines * 30, 250);
        console.log(textareaHeight.value);
    } else {
        textareaHeight.value = initialTextareaHeight;  // Reset the height if no new lines
    }
};

const sendMessage = async () => {

    isSending.value = true;
    textareaHeight.value = initialTextareaHeight;

    // console.log(messageToSend.value);
    if(conversation.value === null) {
      conversation.value = {
        id: Math.random(),
        last_message: "",
        messages: []
      };
      conversations.value.unshift(conversation.value);
    }

    const messages = conversation.value.messages;

    messages.push({ type: 'user', message: messageToSend.value });

    // messages.value = [
    //     ...messages.value,
    //     { type: 'user', message: messageToSend.value }
    // ];

    try {

        //api call
        await sleep(2000);

        messages.push({ type: 'bot', message: "base rent at that location is $25,000" });
        conversation.value.last_message = truncatedMessage(messageToSend.value);
        messageToSend.value = '';

    } catch(error) {
        console.log(error);
    } finally {
        isSending.value = false;
    }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


const addNewChat = () => {

    // const empty_convo = {
    //   id: null,
    //   last_message: "",
    //   messages: [
    //     { type: 'bot', message: "What can i do for ya?" },
    //   ]
    // };
    //
    // console.log(conversations.value);
    //
    // const exists = conversations.value.some(convo => convo.id === null);
    //
    // console.log("exists:",exists);
    //
    // if(!exists) {
    //   conversations.value.unshift(empty_convo);
    // }
    //
    // selectChat(empty_convo);

    conversation.value = null;

    messageField.value.focus();
};

const selectChat = (conv_obj) => {

  // console.log(conv_obj.messages);

  conversation.value = conv_obj;

  // selectConversationById(conversation_id);

};

const deleteChat = (index) => {
    conversations.value.splice(index, 1);

    if(conversations.value.length === 0) {
      // addNewChat();
    }
}

const truncatedMessage = (message) => {
  const maxLength = 38;
  return message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
}


const startTyping = () => {
    let index = 0;

    const typeCharacter = () => {
        if (index < fullText.length) {
            displayedText.value += fullText[index];
            index = index+1;
            setTimeout(typeCharacter, 100);  // Adjust the 100ms delay to speed up/slow down
        }
    }

    typeCharacter();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// const selectConversationById = (id) => {
//   const selectedConversation = conversations.value.find(conv => conv.id === id);
//
//   if (selectedConversation) {
//     conversation.value = selectedConversation;
//   }
// };



onMounted(() => {
    messageField.value.focus();

    // conversation.value = conversations.value[0];
    //
    // console.log(conversation);
    //
    // selectChat(conversation.value.id);
    // selectConversationById(conversation.value.id);

    // console.log(conversation.value.messages);

});

</script>

<template>

    <Head title="Chat" />

    <AuthenticatedLayout>
        <template #header> Chat </template>

<!--        <div>{{ displayedText }}</div>-->
<!--        <button @click="startTyping">Start Typing</button>-->

        <div class="flex h-[52rem] mt-auto mb-auto bg-gray-100 rounded-lg border border-neutral-300 bg-white">

            <!-- Left column for list of conversations -->
            <div class=" w-1/3 p-4 overflow-y-auto">
                <button
                    @click="addNewChat"
                    class="flex items-center mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    <i class="mgc_add_line text-base mr-2"></i>
                    <span class="font-bold">Chat</span>
                </button>


                <hr class="mb-4" />

                <div
                    v-for="(conv_obj, index) in conversations"
                    :key="conv_obj.id"
                    :class="{ 'bg-gray-50': conversation && conversation.id === conv_obj.id }"
                    @click="selectChat(conv_obj)"
                    class="transition duration-300 flex justify-between  items-center mb-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                    <!-- Favicon or User Icon -->
                    <i class="mgc_chat_2_line text-2xl mr-3 text-gray-400" />
                    <!-- Conversation details -->
                    <div class="flex-1 mr-3">
                        <p class="text-sm text-gray-500">{{ conv_obj.last_message }}</p>
                    </div>

                    <!-- Date/Time -->
                    <div class="text-xs text-gray-400 mr-3 whitespace-nowrap">
                        Jan 25, 10:15 AM
                    </div>

                    <i
                        @click="deleteChat(index)"
                        class="mgc_close_fill text-sm text-gray-400 hover:text-red-500 cursor-pointer"
                    ></i>

                </div>

            </div>

            <!-- Right column for the chat prompt and conversation -->
            <div class="flex flex-col w-2/3 p-4 border-l">
                <!-- Chat content area -->
                <div class="flex-1 overflow-y-auto mb-4">
                    <!-- Example of a message item -->
                  <div v-if="conversation && conversation.messages">
                    <div v-for="(entry, index) in conversation.messages" :key="index" class="my-1 sm:my-1.5">

                        <div
                            class="flex flex-row"
                            :class="{ 'justify-start ': entry.type === 'bot', 'justify-end': entry.type === 'user' }"
                        >

                        <div class="flex flex-col break-words max-w-[90%] flex-shrink-0"
                             :class="{ 'items-start ': entry.type === 'bot', 'items-end': entry.type === 'user' }">
                            <div
                                class="flex items-center px-3 py-2 whitespace-pre-wrap"
                                :class="{
                                'bg-neutral-200 text-neutral-900 rounded-2xl rounded-bl-none': entry.type === 'bot',
                                'bg-blue-500 text-white rounded-2xl rounded-br-none': entry.type === 'user'
                            }">
                                {{ entry.message }}
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>

                    <div class="my-1 sm:my-1.5" v-if="isSending">
                        <div class="flex flex-col items-start">
                            <ChatLoader />
                        </div>
                    </div>

                    <!-- ... add more messages ... -->
                </div>

                <!-- Chat input area -->
                <div class="border-t pt-4">

                        <div class="relative">

                            <textarea
                                v-model="messageToSend"
                                class="min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200"
                                style="resize: none;"
                                :style="{ height: textareaHeight + 'px'}"
                                placeholder="Type a message..."
                                rows="1"
                                ref="messageField"
                                @keydown="handleKeyDown"
                                @paste="handlePaste"></textarea>

                             <button @click="sendMessage">
                                 <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="24"
                                     height="24"
                                     viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor"
                                     stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80">

                                     <path d="M12 5l0 14"></path>
                                     <path d="M18 11l-6 -6"></path>
                                     <path d="M6 11l6 -6"></path>
                                 </svg>
                             </button>
                         </div>
                </div>
            </div>

        </div>



    </AuthenticatedLayout>

</template>

<style scoped>

</style>
