<template>
    <!--Container-->
    <div class="container w-full mx-auto pt-20">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-500 leading-normal">
            <div class="flex flex-wrap justify-center">
                <router-view></router-view>
            </div>
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

</style>
