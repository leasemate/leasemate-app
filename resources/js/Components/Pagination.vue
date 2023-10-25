<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    dataset: {
        type: Object,
        required: true,
    }
});

</script>

<template>

    <div>

        <div v-if="dataset.links.length > 3" class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

            <div class="flex flex-1 justify-between sm:hidden">
                <div>
                    <p class="text-sm text-gray-700">
                        Showing
                        <span class="font-medium">{{ dataset.from }}</span>
                        to
                        <span class="font-medium">{{ dataset.to }}</span>
                        of
                        <span class="font-medium">{{ dataset.total }}</span>
                        results
                    </p>
                </div>

                <div v-if="dataset.prev_page_url === null" class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 pointer-events-none">
                    Previous
                </div>
                <Link
                    v-else
                    :disabled="dataset.prev_page_url === null"
                    :href="dataset.prev_page_url"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >Previous</Link>

                <div v-if="dataset.next_page_url === null" class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 pointer-events-none">
                    Next
                </div>
                <Link
                    v-else
                    :disabled="dataset.next_page_url === null"
                    :href="dataset.next_page_url"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >Next</Link>

            </div>

            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700">
                        Showing
                        <span class="font-medium">{{ dataset.from }}</span>
                        to
                        <span class="font-medium">{{ dataset.to }}</span>
                        of
                        <span class="font-medium">{{ dataset.total }}</span>
                        results
                    </p>
                </div>
                <div>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

                        <Link
                            v-if="dataset.prev_page_url !== null"
                            :href="dataset.prev_page_url"
                            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span class="sr-only">Previous</span>
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                            </svg>
                        </Link>

                        <template v-for="(link, key) in dataset.links">
                            <div v-if="key !== 0 && key !== dataset.links.length - 1">
                                <div v-if="link.url === null" :key="key" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300" v-html="link.label" />
                                <Link
                                    v-else
                                    :key="`link-${key}`"
                                    :class="{
                                        'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0': !link.active,
                                        'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600': link.active
                                    }"
                                    :href="link.url"
                                    v-html="link.label"
                                />
                            </div>
                        </template>

                        <Link
                            v-if="dataset.next_page_url !== null"
                            :href="dataset.next_page_url"
                            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span class="sr-only">Next</span>
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>

    </div>
</template>
