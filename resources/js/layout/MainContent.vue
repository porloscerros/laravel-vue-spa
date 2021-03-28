<template>
    <div class="content">
        <router-view></router-view>
    </div>
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
