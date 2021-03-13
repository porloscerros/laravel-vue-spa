<template>
    <button
        :disabled="disabled"
        :hidden="hidden"
        :type="type"
        class="inline-flex justify-center py-2 px-4 border border-gray-500 shadow-sm text-sm font-medium rounded-md text-gray-500 hover:bg-grey-300"
        @click="callback($event)"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "SecondaryButton",
    props: {
        url: String,
        disabled: {
            type: Boolean,
            default: false
        },
        hidden: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'button'
        },
    },
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style scoped>

</style>
