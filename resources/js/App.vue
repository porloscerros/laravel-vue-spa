<template>
    <div class="app">
        <router-view></router-view>

        <loading-spinner v-if="this.$store.getters.isLoading"></loading-spinner>
    </div>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner';

export default {
    name: "App",
    components: {
        LoadingSpinner
    },
}
</script>

<style scoped>

</style>
