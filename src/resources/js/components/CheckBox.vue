<template>
    <div class="flex items-start">
        <div class="flex items-center h-5">
            <input
                type="checkbox"
                :id="id"
                v-bind:checked="checked"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                v-on:change="$emit('change', $event.target.checked)"
            >
        </div>
        <div class="ml-3 text-sm">
            <label
                :for="id"
                class="font-medium text-gray-500">
                {{label}}
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckBox",
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean,
            id: String,
            label: String,
        },
    }
</script>

<style scoped>

</style>
