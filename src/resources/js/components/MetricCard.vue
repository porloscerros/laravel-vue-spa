<template>
    <!--Metric Card-->
    <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
        <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-red-600"><i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
            </div>
            <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Issues</h5>
                <h3 class="font-bold text-3xl text-gray-600">3 <span class="text-red-500"><i class="fas fa-caret-up"></i></span></h3>
            </div>
        </div>
    </div>
    <!--/Metric Card-->
</template>

<script>
export default {
    name: "MetricCard"
}
</script>

<style scoped>

</style>
