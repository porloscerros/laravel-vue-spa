<template>
    <nav class="main-nav">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'users' }" v-if="['admin'].includes(role)">
            Users
        </router-link>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "MainNav",
    computed: {
        ...mapGetters({
            user: 'auth/user'
        }),
        role() {
            return this.user? this.user.role.keyname: null
        }
    },
}
</script>

<style scoped>
.main-nav {
    height: 100%;
    background: #555;
}
.main-nav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #f3f3f3;
    display: block;
    transition: 0.3s;
}
.main-nav a:hover {
    color: #f1f1f1;
    background: #333;
}
.main-nav a.active {
    color: #f1f1f1;
    background: #333;
    /*border-bottom: 3px solid red;*/
}

@media (min-width: 500px) {
    nav ul {
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 700px) {
    nav ul {
        flex-direction: column;
    }
}
</style>
