<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium text-gray-500">{{label}}</label>
        <input
            :id="id"
            :name="id"
            :type="type"
            :value="value"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :autocomplete="autofocus"
            autocomplete="off"
            class="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal"
            @input="handleInput"
        >
    </div>
</template>

<script>
export default {
    name: "TextInput",
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        maxlength: {
            type: String,
            default: '191',
        },
        required: {
            type: Boolean,
            default: false,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleInput(event) {
            this.$emit("input", event.target.value);
        }
    }
}
</script>

<style scoped>

</style>
