<template>
    <!--Template Card-->
    <div class="bg-gray-900 border border-gray-800 rounded shadow">
        <div v-if="header" class="border-b border-gray-800 p-3">
            <h5 class="font-bold uppercase text-gray-600">
                <slot name="header"></slot>
            </h5>
        </div>
        <div class="p-5">
            <slot></slot>
        </div>
    </div>
    <!--/Template Card-->
</template>

<script>
export default {
    name: "TemplateCard",
    props: {
        header: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>

</style>
