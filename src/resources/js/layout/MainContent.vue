<template>
    <!--Container-->
    <div class="container w-full mx-auto pt-20">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <router-view></router-view>
        </div>
    </div>
    <!--/container-->
</template>

<script>
export default {
    name: "MainContent",
}
</script>

<style scoped>
.content {
    background: #555;
    padding: 2px;
}
</style>
