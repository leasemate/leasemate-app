<script setup>
import { onMounted, ref } from 'vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

const messages = ref([])
let eventSource = null
//
// eventSource = new EventSource('/test/stream')
//
// eventSource.onmessage = function(event) {
//     console.log('Message received: ' + event.data)
// }
//
// eventSource.close()

// async function startStream() {

// await axios.post('/test/stream', {}, {
//     // responseType: 'stream',
//     // timeout: 300000, // 5 minute timeout
// }).then(response => {
//
//     response.data.on('data', chunk => {
//         const data = JSON.parse(chunk.toString())
//         messages.value.push(data.message)
//     })
//
//     // messages.value.push(response.data.message)
//
// }).catch(error => {
//     // console.error('EventSource error:', error)
//     // eventSource.close() // Close the connection if there's an error
// })

// }

// }

// const stopStream = () => {
//     if (eventSource) {
//         eventSource.close()
//     }
// }
//

eventSource = new EventSource('/test/stream')
eventSource.addEventListener('message', (event) => {
    console.log(event)
    // const data = JSON.parse(event.data)
    // messages.value.push(data.message)
})
eventSource.onmessage = (event) => {
    console.log(event)
    // const data = JSON.parse(event.data)
    // messages.value.push(data.message)
}

eventSource.onerror = (error) => {
    console.error('EventSource error:', error)
    eventSource.close() // Close the connection if there's an error
}

eventSource.onerror = (error) => {
    console.error('EventSource error:', error)
    eventSource.close() // Close the connection if there's an error

    // Optionally try to reconnect after an error
    setTimeout(() => {
        eventSource = new EventSource('/test/stream')
    }, 5000) // Reconnect after 5 seconds
}

onMounted(() => {

    // startStream() // Start the stream when the component mounts
})
//
// onUnmounted(() => {
//     stopStream() // Stop the stream when the component is destroyed
// })

</script>

<template>

    <AuthenticatedLayout>

        <h1>{{ messages }}</h1>

    </AuthenticatedLayout>
</template>

<style scoped>

</style>
