<script setup>

import {nextTick, onMounted, onUnmounted, ref, toRef, watch} from "vue";
import { Head, router, usePage } from "@inertiajs/vue3";
import axios  from "axios";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import MessageLoader from "@/Components/Chat/MessageLoader.vue";

import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import toast from "@/Stores/toast";

import socketIOClient from 'socket.io-client';

const open = ref(true)
const page = usePage();
const user = ref(page.props.auth.user);

//socket connection
const socket = socketIOClient(import.meta.env.VITE_WEBSOCKET_CHAT_API_BASE_URL);
const CHUNK_SIZE = 5;  // Set the chunk size as per your requirement
let socketIOClientId = '';
let chatSessionId = '';
let accumulatedOutput = '';
let lastMessage;

const initialTextareaHeight = 40;
const textareaHeight = ref(initialTextareaHeight);
const messageToSend = ref('');
const messageField = ref(null);
const isSending = ref(false);
const errorMessage = ref(null);
const messagesPanel = ref(null);

const { chats, chat } = defineProps({
  chat: {
    type: Object,
    default: null,
  },
  chats: {
    type: Object,
    default: () => ({})
  },
});

const defaultChatState = () => {
  return {
    chat_uuid: null,
    messages: []
  }
};

const chatList = toRef(chats, 'data');
const chatProp = toRef(chat, 'data');

const localChat = ref(defaultChatState());
const localChatList = ref(chatList);

if (chatProp.value) {
    localChat.value = chatProp.value;
}

const chatToDelete = ref(null);
const confirmingChatDeletion = ref(false);

const handleKeyDown = (event) => {

    errorMessage.value = null;

    if (event.key === 'Enter' && event.shiftKey) {
        textareaHeight.value += 30;
    }

    if (event.key === 'Enter' && !event.shiftKey && !isSending.value) {
        event.preventDefault();
        sendMessage();
    }
}

const handlePaste = (event) => {

    errorMessage.value = null;

    const content = event.target.value;
    const pastedData = event.clipboardData.getData('text/plain');
    const numberOfLines = pastedData.split('\n').length;

    if (pastedData.includes('\n')) {

        textareaHeight.value = Math.min(numberOfLines * 30, 250);
        // console.log(textareaHeight.value);
    } else {
        textareaHeight.value = initialTextareaHeight;  // Reset the height if no new lines
    }
};

const validate = () => {

  if (messageToSend.value.trim() === '') {
    errorMessage.value = 'Please enter a message';
    isSending.value = false;
    messageField.value.focus();
    return false;
  }

  return true;
};

const sendMessage = async () => {

    if(validate()) {

        errorMessage.value = null;
        textareaHeight.value = initialTextareaHeight;

        // const chat_id = (!localChat.value.chat_uuid ? localChat.value.chat_uuid : null);

        axios.post(route('chats.store', localChat.value.chat_uuid), {
            message: messageToSend.value
        })
            .then(function (response) {

                // console.log("Chat Response");
                // console.log(response);

                chatSessionId = response.data.chat.chat_uuid;

                // console.log(chatSessionId);

                localChat.value.messages.push({
                    from: 'user',
                    message: messageToSend.value
                });

                if( ! localChat.value.chat_uuid) {
                    const empty_chat = defaultChatState();
                    empty_chat.last_message = {
                        message: "New Chat"
                    };
                    localChatList.value.unshift(empty_chat);
                }

                sendQuery(messageToSend.value);

                messageToSend.value = '';
                textareaHeight.value = initialTextareaHeight;

                nextTick( () => {
                    scrollToBottom();
                });

                // socket.disconnect();
            })
            .catch(function (error) {
                console.log(error);
                toast.error(error.message);

                isSending.value = false;
                errorMessage.value = (error.response.data.error?error.response.data.error:error.message);
            });

    }
}

const sendQuery = async (question) => {

    isSending.value = true;
    errorMessage.value = '';

    // chatSessionId='eb81b6b2-b506-4646-97dc-f9dd635be818';
    // let user_id = user.value.id;
    // let user_id = 24;

    const data = {
        question: question, // Use the provided question
        socketIOClientId: socketIOClientId,
        chatSessionId: chatSessionId,
    };

    // console.log(data);

    try {

        const post_url = import.meta.env.VITE_WEBSOCKET_CHAT_API_BASE_URL + import.meta.env.VITE_WEBSOCKET_CHAT_API_CHAT_ENDPOINT;

        // console.log('jwt token');
        // console.log(user.value.jwt_token);

        if( ! user.value.jwt_token) {
            await refreshToken();
        }

        await axios.post(post_url, data, {
                headers: {
                    'Authorization': 'Bearer '+user.value.jwt_token,
                },
            })
            .then(function (response) {
               //  console.log('send query post response:');

               axios.post(route('messages.store', chatSessionId), {
                    message: response.data.text
                })
                .then(function (response) {
                    // console.log("Message Response");
                    // console.log(response);

                    if( ! localChat.value.chat_uuid) {
                        router.visit(route('chats.show', chatSessionId), {
                            preserveScroll: true,
                        });
                    }

                })
                .catch(function (error) {
                    isSending.value = false;
                    errorMessage.value = error.response.data.error;
                });

            })
            .catch(async function (error) {

                if(error.response.data.error_name == "TokenExpiredError") {

                    // console.log('TokenExpiredError.. axios POST');

                    await refreshToken();

                    sendQuery(question);

                } else {
                    isSending.value = false;
                    errorMessage.value = error.message;
                }

            });

    } catch (error) {
        isSending.value = false;
        errorMessage.value = error;
        // console.log(error);
        console.error('Error sending query:', error);
    }
}

const refreshToken = async () => {

    await axios.post(route('refresh-token'))
        .then(function (response) {
            // console.log('axios post response:', response.data);
            user.value.jwt_token = response.data.token;
        })
        .catch(function (error) {
            console.log(error);
            // console.log('TokenExpiredError');
        })
}

const addNewChat = () => {
  router.visit(route('chats.index'));
};

const scrollToBottom = () => {
  const container = messagesPanel.value;
  container.scrollTop = container.scrollHeight;
};

const selectChat = async (conv_obj) => {
    if(conv_obj.chat_uuid) {
        router.visit(route('chats.show', conv_obj.chat_uuid), {
            preserveScroll: true,
        });
        scrollToBottom();
    }
};

const deleteChat = () => {

  if(chatToDelete.value) {
      router.delete(route('chats.destroy', chatToDelete.value.chat_uuid), {
        preserveScroll: true,
        onSuccess: (page) => {
            if(page.props.flash.error) {
                closeModal();
            } else {
                localChat.value = defaultChatState();
                initEmptyChat();
                localChatList.value = page.props.chats.data;
                chatToDelete.value = null;
                closeModal();
                toast.success('Chat deleted successfully!');
            }
        }
      });
  }
}

const confirmChatDeletion = (chat_obj) => {
    confirmingChatDeletion.value = true;
    chatToDelete.value = chat_obj;
};

const closeModal = () => {
    confirmingChatDeletion.value = false;
    chatToDelete.value = null;
};

const truncatedMessage = (message) => {
  if (!message) return null;
  const maxLength = 38;
  return message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
}

const initEmptyChat = () => {
    localChat.value.messages.unshift({
        from: 'bot',
        message: "Hello! I am your personal assistant. How can I help you today?",
    });
};

onMounted(() => {
    messageField.value.focus();

    scrollToBottom();

    // console.log('ON MOUNT');
    // console.log(localChatList.value);
    // console.log(localChat.value);
    // console.log(chatProp);


    initEmptyChat();

    socket.on('connect', () => {
        socketIOClientId = socket.id;
        // console.log('Connected with id:', socketIOClientId);
        // startAskingQuestions();

    });

    socket.on('start', () => {
        // console.log('START!!!');
    });

    socket.on('token', (token) => {

        lastMessage = localChat.value.messages[localChat.value.messages.length - 1];

        accumulatedOutput += token; // Accumulate the tokens
        // Check if the accumulated output is at least as long as CHUNK_SIZE
        if (accumulatedOutput.length >= CHUNK_SIZE) {

            isSending.value = false;

            // Find the last space to keep words intact
            let lastSpaceIndex = accumulatedOutput.lastIndexOf(' ', CHUNK_SIZE);
            if (lastSpaceIndex === -1) lastSpaceIndex = CHUNK_SIZE; // If no space found, just cut at CHUNK_SIZE
            // Print up to the last complete word
            const partToPrint = accumulatedOutput.slice(0, lastSpaceIndex + 1);

            if (lastMessage) {
                if(lastMessage.from == 'user') {
                    localChat.value.messages.push({
                        from: 'bot',
                        message: partToPrint,
                    });
                } else {
                    lastMessage.message += partToPrint;
                }
            }

            scrollToBottom();

            // Keep the remaining part
            accumulatedOutput = accumulatedOutput.slice(lastSpaceIndex + 1);
        }
    });

    socket.on('sourceDocuments', (sourceDocuments) => {
        // console.log('sourceDocuments:', sourceDocuments);
    });

    socket.on('end', () => {

        // console.log("END!!!");

        // Print any remaining output when the stream ends
        if (accumulatedOutput.trim().length > 0) {
            lastMessage.message += accumulatedOutput;
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

    <Head title="Chat" />

    <AuthenticatedLayout>

        <template #header>
            Chats
        </template>

        <div class="card">
<!--            h-[52rem]-->
            <div class="flex max-h-[42rem] min-h-[32rem] mt-auto mb-auto rounded-lg">

            <!-- Left column for list of chats -->
            <div class=" w-1/3 p-4">

<!--                <button-->
<!--                    @click="addNewChat"-->
<!--                    class="flex items-center mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">-->
<!--                    <i class="mgc_add_line text-base mr-2"></i>-->
<!--                    <span class="font-bold">Chat</span>-->
<!--                </button>-->

                <button
                    @click="addNewChat"
                    type="button"
                    class="mb-4 btn text-white bg-violet-500 border-violet-500 hover:bg-violet-600 hover:border-violet-600 focus:bg-violet-600 focus:border-violet-600 focus:ring focus:ring-violet-500/30 active:bg-violet-600 active:border-violet-600"
                >
                    <i class="bx bx-plus text-16 align-middle ltr:mr-1 rtl:ml-1 "></i>
                    Chat
                </button>

<!--                <hr class="mb-4" />-->

                <div class="max-h-[36rem] overflow-y-auto">

                    <div
                        v-for="(conv_obj, index) in localChatList"
                        :key="conv_obj.id"
                        :class="{ 'bg-slate-50': localChat && localChat.chat_uuid === conv_obj.chat_uuid }"
                        @click="selectChat(conv_obj)"
                        class="transition duration-300 flex justify-between  items-center mb-4 p-4 hover:bg-slate-100 rounded-lg cursor-pointer border-b shadow"
                    >

                        <!-- Favicon or User Icon -->
                        <i class="mgc_chat_2_line text-2xl mr-3 text-gray-400" />
                        <!-- Conversation details -->
                        <div class="flex-1 mr-3">
                            <p class="text-sm text-gray-500">{{ truncatedMessage(conv_obj?.last_message?.message) || null }}</p>
                        </div>

                        <!-- Date/Time -->
                        <div class="text-xs text-gray-400 mr-3 whitespace-nowrap">
                          {{ conv_obj.updated_at }}
                        </div>

                        <i
                            @click.stop="confirmChatDeletion(conv_obj)"
                            class="mdi mdi-trash-can text-sm text-gray-400 hover:text-red-500 cursor-pointer"
                        ></i>

                    </div>

                </div>

            </div>

            <!-- Right column for the chat prompt and conversation -->
            <div class="flex flex-col w-2/3 p-4 border-l">
                <!-- Chat content area -->
                <div ref="messagesPanel" class="flex-1 overflow-y-auto mb-4">
                    <!-- Example of a message item -->
                  <div v-if="localChat && localChat.messages">
                    <div v-for="(entry, index) in localChat.messages" :key="index" class="my-1 sm:my-1.5">

                        <div
                            class="flex flex-row"
                            :class="{ 'justify-start ': entry.from === 'bot', 'justify-end': entry.from === 'user' }"
                        >

                        <div class="flex flex-col break-words max-w-[90%] flex-shrink-0"
                             :class="{ 'items-start ': entry.from === 'bot', 'items-end': entry.from === 'user' }">
                            <div
                                class="flex items-center px-3 py-2 whitespace-pre-wrap"
                                :class="{
                                'bg-neutral-50 text-neutral-900 rounded-2xl rounded-bl-none': entry.from === 'bot',
                                'bg-violet-500 text-white rounded-2xl rounded-br-none': entry.from === 'user'
                            }">
                                {{ entry.message }}
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>

                    <div class="my-1 sm:my-1.5" v-if="isSending">
                        <div class="flex flex-col items-start">
                            <MessageLoader />
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
                                autocomplete="off"
                                rows="1"
                                ref="messageField"
                                @keydown="handleKeyDown"
                                @paste="handlePaste"></textarea>

                             <button :disabled="isSending" @click="sendMessage">
                                 <svg
                                     v-show="!isSending"
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="24"
                                     height="24"
                                     viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor"
                                     stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80">

                                     <path d="M12 5l0 14"></path>
                                     <path d="M18 11l-6 -6"></path>
                                     <path d="M6 11l6 -6"></path>
                                 </svg>

                               <svg v-show="isSending" aria-hidden="true" role="status"
                                    class="absolute text-white animate-spin right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                               </svg>

                             </button>


                         </div>
                </div>

                <div v-if="errorMessage" class="text-red-700" role="alert">
                    <span class="block sm:inline">{{ errorMessage }}</span>
                </div>

            </div>

        </div>
        </div>

        <Modal :show="confirmingChatDeletion" @close="closeModal">
          <div class="p-6">
            <h2 class="text-lg font-medium text-gray-900">
              Are you sure you want to delete this chat?
            </h2>

                  <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        @click="deleteChat(localChat)"
                    >
                      Delete Chat
                    </DangerButton>
                  </div>
          </div>
        </Modal>

    </AuthenticatedLayout>



</template>

<style scoped>

</style>
