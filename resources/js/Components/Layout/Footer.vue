<template>

    <footer
        class="footer absolute bottom-0 right-0 left-0 border-t border-gray-50 py-5 px-5 bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200">
        <div class="flex justify-between items-center">
            <div class="grow">
                &copy; {{ currentYear }} Leasemate, LLC
            </div>
            <div class=" md:inline-block text-end">

                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a class="mr-4 hover:underline md:mr-6" href="https://leasemate.ai/privacy/" target="_blank">Privacy
                            Policy</a>
                    </li>
                    <li>
                        <a class="mr-4 hover:underline md:mr-6" href="https://leasemate.ai/legal" target="_blank">Legal
                            & Security</a>
                    </li>
                    <li>
                        <a class="hover:underline" href="mailto:connect@leasemate.ai">Support</a>
                    </li>
                </ul>

            </div>

        </div>
    </footer>

</template>
<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

</script>
