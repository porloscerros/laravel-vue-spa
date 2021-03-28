<template>
    <footer class="main-footer">
        <div class="made-by">
            Made with <span style="color: red">&#x2764;</span> by <a href="#">porloscerros</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "MainFooter",
}
</script>

<style scoped>
.main-footer {
    background: #555;
    color: #f2f2f2;
    padding: 8px;
}
.main-footer .made-by{
    float: right;
}
.main-footer .made-by a {
    text-decoration: none;
    color: #f3f3f3;
}
.main-footer .made-by a:hover {
    opacity: 0.8;
}
</style>
