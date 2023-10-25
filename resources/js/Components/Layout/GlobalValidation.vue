<script setup>

</script>

<template>

    <div class="mb-4">

        <div v-if="$page.props.flash.success" class="relative px-5 py-3 border-2 bg-green-50 text-green-700 border-green-100 rounded mb-3">
            <p>{{ $page.props.flash.success }}</p>
        </div>

        <div v-if="$page.props.flash.warning" class="relative px-5 py-3 border-2 bg-yellow-50 text-yellow-700 border-yellow-100 rounded mb-3">
            <p>{{ $page.props.flash.warning }}</p>
        </div>

        <div v-if="$page.props.flash.error" class="relative px-5 py-3 border-2 bg-red-50 text-red-700 border-red-100 rounded">
            <p>{{ $page.props.flash.error }}</p>
        </div>

        <div v-if="$page.props.errors.field_name" class="relative px-5 py-3 border-2 bg-red-50 text-red-700 border-red-100 rounded">
            {{ $page.props.errors.field_name[0] }}
        </div>

    </div>

</template>

<style scoped>

</style>
