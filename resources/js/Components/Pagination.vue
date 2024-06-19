<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    dataset: {
        type: Object,
        required: true,
    },
})

</script>

<template>

    <div>

        <div v-if="dataset.meta.total > 0"
             class="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-gray-900 px-4 py-3 sm:px-6">

            <div class="flex flex-1 justify-between sm:hidden">
                <div>
                    <p class="text-sm text-gray-700 dark:text-gray-400">
                        Showing
                        <span class="font-medium">{{ dataset.meta.from }}</span>
                        to
                        <span class="font-medium">{{ dataset.meta.to }}</span>
                        of
                        <span class="font-medium">{{ dataset.meta.total }}</span>
                        results
                    </p>
                </div>

                <div v-if="dataset.links.prev === null"
                     class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 pointer-events-none">
                    Previous
                </div>
                <Link
                    v-else
                    :disabled="dataset.links.prev === null"
                    :href="dataset.links.prev"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >Previous
                </Link>

                <div v-if="dataset.links.next === null"
                     class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 pointer-events-none">
                    Next
                </div>
                <Link
                    v-else
                    :disabled="dataset.links.next === null"
                    :href="dataset.links.next"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >Next
                </Link>

            </div>

            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700 dark:text-gray-300">
                        Showing
                        <span class="font-medium">{{ dataset.meta.from }}</span>
                        to
                        <span class="font-medium">{{ dataset.meta.to }}</span>
                        of
                        <span class="font-medium">{{ dataset.meta.total }}</span>
                        results
                    </p>
                </div>
                <div v-if="dataset.meta.links.length > 3">
                    <nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">

                        <Link
                            v-if="dataset.links.prev !== null"
                            :href="dataset.links.prev"
                            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path clip-rule="evenodd"
                                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                      fill-rule="evenodd" />
                            </svg>
                        </Link>

                        <template v-for="(link, key) in dataset.meta.links">
                            <div v-if="key !== 0 && key !== dataset.meta.links.length - 1">
                                <div v-if="link.url === null" :key="key"
                                     class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300"
                                     v-html="link.label" />
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
                            v-if="dataset.links.next !== null"
                            :href="dataset.links.next"
                            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path clip-rule="evenodd"
                                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                      fill-rule="evenodd" />
                            </svg>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>

    </div>
</template>
