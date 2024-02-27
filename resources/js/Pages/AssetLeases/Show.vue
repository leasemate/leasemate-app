<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, toRef} from "vue";
import {usePage, Head, Link, router} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Button from "@/Components/Button.vue";
import Table from "@/Components/Table.vue";

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Panel from 'primevue/panel';

import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css';

import { fileStatusClass } from "@/Composables/fileStatusClass.js";

import VueFilePond, { setOptions } from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import "filepond/dist/filepond.min.css";

import moment from "moment";
import Hero from "@/Components/Lease/Hero.vue";
import Associates from "@/Components/Lease/Associates.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import MessageLoader from "@/Components/Chat/MessageLoader.vue";

import axios from "axios";
import toast from "@/Stores/toast.js";
import socketIOClient from 'socket.io-client';

import Modal from "@/Components/Modal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import BoxIcon from "@/Components/BoxIcon.vue"

const page = usePage();
const user = computed(() => page.props.auth.user);

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

const props = defineProps({
    asset: Object,
    associates: Array,
    lease: Object,
    chat: {
        type: Object,
        default: null,
    },
    chats: {
        type: Object,
        default: () => ({})
    },
});

// const defaultChatState = () => {
//     return {
//         chat_uuid: null,
//         messages: []
//     }
// };
//
// const chatList = toRef(props.chats);
// const chatProp = toRef(props.chat);
//
// const localChat = ref(defaultChatState());
// const localChatList = ref(chatList);
//
// if (chatProp.value) {
//     localChat.value = chatProp.value;
// }
//
// const chatToDelete = ref(null);
// const confirmingChatDeletion = ref(false);
//
// const handleKeyDown = (event) => {
//
//     errorMessage.value = null;
//
//     if (event.key === 'Enter' && event.shiftKey) {
//         textareaHeight.value += 30;
//     }
//
//     if (event.key === 'Enter' && !event.shiftKey && !isSending.value) {
//         event.preventDefault();
//         sendMessage();
//     }
// }

// const handlePaste = (event) => {
//
//     errorMessage.value = null;
//
//     const content = event.target.value;
//     const pastedData = event.clipboardData.getData('text/plain');
//     const numberOfLines = pastedData.split('\n').length;
//
//     if (pastedData.includes('\n')) {
//
//         textareaHeight.value = Math.min(numberOfLines * 30, 250);
//         // console.log(textareaHeight.value);
//     } else {
//         textareaHeight.value = initialTextareaHeight;  // Reset the height if no new lines
//     }
// };

// const addNewChat = () => {
//   router.visit(route('assets.leases.show', [props.asset.id, props.lease.id]));
// };
//
// const scrollToBottom = () => {
//   const container = messagesPanel.value;
//   container.scrollTop = container.scrollHeight;
// };
//
// const selectChat = async (conv_obj) => {
//   if(conv_obj.chat_uuid) {
//     router.visit(route('assets.leases.chats.show', [props.asset, props.lease, conv_obj.chat_uuid]), {
//       preserveScroll: true,
//       // preserveState: true,
//       only: ['chats', 'chat'],
//     });
//     scrollToBottom();
//   }
// };
//
// const deleteChat = () => {
//
//   if(chatToDelete.value) {
//     router.delete(route('assets.leases.chats.destroy-chat', [props.asset, props.lease, chatToDelete.value.chat_uuid]), {
//       preserveScroll: true,
//       onSuccess: (page) => {
//         if(page.props.flash.error) {
//           closeModal();
//         } else {
//           localChat.value = defaultChatState();
//           initEmptyChat();
//           localChatList.value = page.props.chats;
//           chatToDelete.value = null;
//           closeModal();
//           toast.success('Chat deleted successfully!');
//         }
//       }
//     });
//   }
// }
//
// const confirmChatDeletion = (chat_obj) => {
//   confirmingChatDeletion.value = true;
//   chatToDelete.value = chat_obj;
// };
//
// const closeModal = () => {
//   confirmingChatDeletion.value = false;
//   chatToDelete.value = null;
// };
//
// const truncatedMessage = (message) => {
//     if (!message) return null;
//     const maxLength = 38;
//     return message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
// }
//
// const initEmptyChat = () => {
//   localChat.value.messages.unshift({
//     from: 'bot',
//     message: "Hello! I am your personal assistant. How can I help you today?",
//   });
// };

// const validate = () => {
//
//     if (messageToSend.value.trim() === '') {
//         errorMessage.value = 'Please enter a message';
//         isSending.value = false;
//         messageField.value.focus();
//         return false;
//     }
//
//     return true;
// };

const sendMessage = async () => {

    if(validate()) {

        errorMessage.value = null;
        textareaHeight.value = initialTextareaHeight;

        // const chat_id = (!localChat.value.chat_uuid ? localChat.value.chat_uuid : null);

        axios.post(route('assets.leases.chats.send-message', [
                props.asset.id,
                props.lease.id,
                localChat.value.chat_uuid??null
            ]), {
                from: 'user',
                message: messageToSend.value,
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
                errorMessage.value = (error.response?error.response.data.error:error.message);
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
        tenant_domain: page.props.tenant_domain,
        asset_id: props.asset.id,
        lease_id: props.lease.id,
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

                /*
                *
                * */

                axios.post(route('assets.leases.chats.send-message', [
                        props.asset.id,
                        props.lease.id,
                        chatSessionId
                    ]), {
                        from: 'bot',
                        message: response.data.text,
                    })
                    .then(function (response) {
                        // console.log("Message Response");
                        // console.log(response);

                        if( ! localChat.value.chat_uuid) {
                            router.visit(route('assets.leases.chats.show', [
                                props.asset.id,
                                props.lease.id,
                                chatSessionId
                            ]), {
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

                    await sendQuery(question);

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

const FilePond = VueFilePond(FilePondPluginFileValidateType);

setOptions({
  credits: [],
  required: true,
  allowMultiple: true,
  allowRevert: false,
  acceptedFileTypes: [
    'application/pdf',
    // 'image/png',
    // 'image/jpeg',
    // 'image/jpg',
    // 'image/gif',
  ],
  // files: files,
  // server: {
  //   process: {
  //     url: route('assets.leases.store', props.asset),
  //     headers: {
  //       'Accept': 'application/json',
  //       'X-CSRF-TOKEN': page.props.csrf,
  //     },
  //     // ondata: (formData) => {
  //     //     formData.append('asset_id', props.asset.id);
  //     //     return formData;
  //     // },
  //     onsuccess: (response) => {
  //       console.log("on success");
  //       console.log(response);
  //       // serverResponse = JSON.parse(response);
  //     },
  //     onerror: (response) => {
  //       console.log("on error");
  //       serverResponse = JSON.parse(response);
  //     },
  //   },
  // },
  // labelFileProcessingError: (error) => {
  //   console.log(error);
  //   console.log(serverResponse);
  //   if (serverResponse.errors && serverResponse.errors.lease_document) {
  //     return serverResponse.errors.lease_document.join(' ');
  //   }
  //   return serverResponse.message;
  // },
});

onMounted(() => {

    // messageField.value.focus();

    Echo.private(`tenant-global-channel.${page.props.tenant_id}`)
        .listen('FileStatusUpdate', (e) => {
            router.reload({ only: ['leases'] });
        });

      // nextTick( () => {
      //   scrollToBottom();
      // });

      // initEmptyChat();

    // socket.on('connect', () => {
    //     socketIOClientId = socket.id;
    //     // console.log('Connected with id:', socketIOClientId);
    //     // startAskingQuestions();
    //
    // });
    //
    // socket.on('start', () => {
    //     // console.log('START!!!');
    // });
    //
    // socket.on('token', (token) => {
    //
    //     lastMessage = localChat.value.messages[localChat.value.messages.length - 1];
    //
    //     accumulatedOutput += token; // Accumulate the tokens
    //     // Check if the accumulated output is at least as long as CHUNK_SIZE
    //     if (accumulatedOutput.length >= CHUNK_SIZE) {
    //
    //         isSending.value = false;
    //
    //         // Find the last space to keep words intact
    //         let lastSpaceIndex = accumulatedOutput.lastIndexOf(' ', CHUNK_SIZE);
    //         if (lastSpaceIndex === -1) lastSpaceIndex = CHUNK_SIZE; // If no space found, just cut at CHUNK_SIZE
    //         // Print up to the last complete word
    //         const partToPrint = accumulatedOutput.slice(0, lastSpaceIndex + 1);
    //
    //         if (lastMessage) {
    //             if(lastMessage.from == 'user') {
    //                 localChat.value.messages.push({
    //                     from: 'bot',
    //                     message: partToPrint,
    //                 });
    //             } else {
    //                 lastMessage.message += partToPrint;
    //             }
    //         }
    //
    //         scrollToBottom();
    //
    //         // Keep the remaining part
    //         accumulatedOutput = accumulatedOutput.slice(lastSpaceIndex + 1);
    //     }
    // });
    //
    // socket.on('sourceDocuments', (sourceDocuments) => {
    //     // console.log('sourceDocuments:', sourceDocuments);
    // });
    //
    // socket.on('end', () => {
    //
    //     // console.log("END!!!");
    //
    //     // Print any remaining output when the stream ends
    //     if (accumulatedOutput.trim().length > 0) {
    //         lastMessage.message += accumulatedOutput;
    //     }
    //     // Reset the state for the next query
    //     accumulatedOutput = '';
    // });

});

onBeforeUnmount(() => {
    if(user.value) {
        Echo.leave(`tenant-global-channel.${page.props.tenant_id}`);
    }
});

</script>

<template>

    <Head title="Asset" />

    <AuthenticatedLayout>

        <template #header> Asset - {{ asset.name }} </template>

        <Hero :asset="asset" />

        <Associates :associates="associates" />

        <div class="flex justify-start mb-4 space-x-4">

            <PrimaryLink :href="route('assets.show', asset)">
                <BoxIcon class="bx-arrow-back mr-2" />Leases
            </PrimaryLink>

            <PrimaryLink :href="route('assets.leases.chats', [asset, lease])">
                Chat Bot<BoxIcon class="bx-bot ml-2" />
            </PrimaryLink>

        </div>

        <div class="mb-4">
            <h3>{{ lease.tenant_name }}</h3>
            <h4>{{ lease.address }}</h4>
        </div>

        <FilePond
            name="lease_amendment"
            ref="pond"
            class-name="my-file-upload"
            label-idle="Amendment Drop or <span class='filepond--label-action'>Browse</span>"
        />

<!--        <div class="grid grid-cols-12 gap-4">-->
<!--            <div class="col-span-6">-->
<!--                <div class="card">-->
<!--&lt;!&ndash;                    <Panel header="Upload Amendments" toggleable :collapsed="true">&ndash;&gt;-->
<!--&lt;!&ndash;                        <p class="m-0">&ndash;&gt;-->

<!--&lt;!&ndash;                        </p>&ndash;&gt;-->
<!--&lt;!&ndash;                    </Panel>&ndash;&gt;-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->



            <div class="col-span-6">

                <TabView :scrollable="true">
                    <TabPanel header="Current Lease Terms">

                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-6">
                                <h5>Basic Terms</h5>

                                <div class="p-4 bg-white">

                                    <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <div>
                                            <div class="font-bold text-gray-900">Tenant</div>
                                            <div class="text-sm text-gray-600">{{ lease.extracted_data.lessee_tenant??"--" }}</div>
                                        </div>
                                        <div>
                                            <div class="font-bold text-gray-900">Landlord</div>
                                            <div class="text-xs text-gray-600">{{ lease.extracted_data.lessor_landlord??"--" }}</div>
                                        </div>

                                        <div>
                                            <div class="font-bold text-gray-600">Premises Address</div>
                                            <div class="text-xs text-gray-600">{{ lease.extracted_data.premises_address??"--" }}</div>
                                        </div>

                                        <div>
                                            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                                <div>
                                                    <div class="font-bold text-gray-600">Lease Term</div>
                                                    <div class="text-xs text-gray-600">{{ lease.extracted_data.lease_term ? lease.extracted_data.lease_term+" Months" : "--" }}</div>
                                                </div>
                                                <div>
                                                    <div class="font-bold text-gray-600">Expiration Date</div>
                                                    <div class="text-xs text-gray-600">{{ lease.extracted_data.expiration_date??"--" }}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="font-bold text-gray-600">Rentable Sq. Ft.</div>
                                            <div class="text-xs text-gray-600">{{ filters.formatNumber(lease.extracted_data.rentable_square_feet)??"--" }}</div>
                                        </div>

                                    </div>

                                </div>

                                <h5>Rent</h5>
                                <div class="p-4 bg-white">

                                    <Table class="mt-8" :data="lease.extracted_data.rent_schedule" :columns="['Start Date', 'End Date', 'Amount', 'Frequency']">

                                        <template #head>
                                            <tr>
                                                <th scope="col" class="px-6 py-3">Start Date</th>
                                                <th scope="col" class="px-6 py-3">End Date</th>
                                                <th scope="col" class="px-6 py-3">Amount</th>
                                                <th scope="col" class="px-6 py-3">per SQFT</th>
                                            </tr>

                                        </template>

                                        <template #body>

                                            <tr v-for="base_rent in lease.monthly_base_rent" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">
                                                <th scope="row" class="px-6 py-4 space-x-2">{{ base_rent.start_date }}</th>
                                                <td class="px-6 py-4 text-gray-900 ">{{ base_rent.end_date }}</td>
                                                <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_total) }}</td>
                                                <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_per_square_foot) }}</td>
                                            </tr>
                                        </template>

                                    </Table>

                                    <h6>Abatement</h6>
                                    <h6>Base Year</h6>

                                    <!--                            <div class="grid grid-cols-2 gap-x-4 gap-y-2">-->
                                    <!--                                <div v-for="(value, key) in lease.extracted_data" :key="key">-->
                                    <!--                                    <div class="font-mediumtext-gray-600">{{ key }}</div>-->
                                    <!--                                    <div class="text-xs">{{ value }}</div>-->
                                    <!--                                </div>-->
                                    <!--                            </div>-->
                                </div>

                            </div>

                            <div class="col-span-6">
                                <h5>Condition</h5>
                                <div class="p-4 bg-white space-y-4">
                                    <div>
                                        <h6>Condition</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>
                                    </div>

                                    <div>
                                        <h6>TI Allowance</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>
                                    </div>
                                    <div>
                                        <h6>Landlord Work</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="json-container">

                            <h3>Raw Extracted Data</h3>
                            <h4>Basic Extracted Data</h4>
                                <pre>{{ lease.extracted_data??"--" }}</pre>
                            <h4>Detailed Extracted Data</h4>
                                <pre>{{ lease.detailed_extracted_data??"--" }}</pre>

                        </div>

                    </TabPanel>
                    <TabPanel header="Original Lease Abstract">

                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-6">
                                <h5>Basic Terms</h5>

                                <div class="p-4 bg-white">

                                    <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <div>
                                            <div class="font-bold text-gray-900">Tenant</div>
                                            <div class="text-sm text-gray-600">{{ lease.extracted_data.lessee_tenant??"--" }}</div>
                                        </div>
                                        <div>
                                            <div class="font-bold text-gray-900">Landlord</div>
                                            <div class="text-xs text-gray-600">{{ lease.extracted_data.lessor_landlord??"--" }}</div>
                                        </div>

                                        <div>
                                            <div class="font-bold text-gray-600">Premises Address</div>
                                            <div class="text-xs text-gray-600">{{ lease.extracted_data.premises_address??"--" }}</div>
                                        </div>

                                        <div>
                                            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                                <div>
                                                    <div class="font-bold text-gray-600">Lease Term</div>
                                                    <div class="text-xs text-gray-600">{{ lease.extracted_data.lease_term ? lease.extracted_data.lease_term+" Months" : "--" }}</div>
                                                </div>
                                                <div>
                                                    <div class="font-bold text-gray-600">Expiration Date</div>
                                                    <div class="text-xs text-gray-600">{{ lease.extracted_data.expiration_date??"--" }}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="font-bold text-gray-600">Rentable Sq. Ft.</div>
                                            <div class="text-xs text-gray-600">{{ filters.formatNumber(lease.extracted_data.rentable_square_feet)??"--" }}</div>
                                        </div>

                                    </div>

                                </div>

                                <h5>Rent</h5>
                                <div class="p-4 bg-white">

                                    <Table class="mt-8" :data="lease.extracted_data.rent_schedule" :columns="['Start Date', 'End Date', 'Amount', 'Frequency']">

                                        <template #head>
                                            <tr>
                                                <th scope="col" class="px-6 py-3">Start Date</th>
                                                <th scope="col" class="px-6 py-3">End Date</th>
                                                <th scope="col" class="px-6 py-3">Amount</th>
                                                <th scope="col" class="px-6 py-3">per SQFT</th>
                                            </tr>

                                        </template>

                                        <template #body>

                                            <tr v-for="base_rent in lease.monthly_base_rent" class="bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600">
                                                <th scope="row" class="px-6 py-4 space-x-2">{{ base_rent.start_date }}</th>
                                                <td class="px-6 py-4 text-gray-900 ">{{ base_rent.end_date }}</td>
                                                <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_total) }}</td>
                                                <td class="px-6 py-4 text-gray-900 ">{{ filters.formatMoney(base_rent.amount_per_square_foot) }}</td>
                                            </tr>
                                        </template>

                                    </Table>

                                    <h6>Abatement</h6>
                                    <h6>Base Year</h6>

        <!--                            <div class="grid grid-cols-2 gap-x-4 gap-y-2">-->
        <!--                                <div v-for="(value, key) in lease.extracted_data" :key="key">-->
        <!--                                    <div class="font-mediumtext-gray-600">{{ key }}</div>-->
        <!--                                    <div class="text-xs">{{ value }}</div>-->
        <!--                                </div>-->
        <!--                            </div>-->
                                </div>

                            </div>

                            <div class="col-span-6">
                                <h5>Condition</h5>
                                <div class="p-4 bg-white space-y-4">
                                    <div>
                                        <h6>Condition</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>
                                    </div>

                                    <div>
                                        <h6>TI Allowance</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>
                                    </div>
                                    <div>
                                        <h6>Landlord Work</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem metus, accumsan a dolor eget, posuere porttitor enim. Suspendisse varius porta semper. Quisque tincidunt ultrices metus, nec pretium lorem ultricies a. Sed tempus arcu gravida ligula mollis congue. Nulla vel egestas lorem. Sed ligula enim, mollis eget congue ut, molestie maximus ligula. Vestibulum tincidunt velit ut felis vestibulum, in lacinia nisi blandit. Vestibulum fermentum mi a ipsum ultricies vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel header="Amendment #1 - 5/25/23">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Amendment #2 - 9/17/23">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </div>

    </AuthenticatedLayout>

</template>



<style scoped>
.json-container pre {
    white-space: pre-wrap;
}
</style>

