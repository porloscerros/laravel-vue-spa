<template>
    <header class="main-head">
        <div class="brand"><router-link :to="{ name: 'home' }">Laravel Vue SPA</router-link></div>
        <div class="auth" v-if="user">
            {{ user.name }} |
            <a href="#" @click.prevent="logout" class="">
                Logout
            </a>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "MainHeader",
    computed: {
        ...mapGetters({
            user: 'auth/user',
        })
    },
    methods: {
        ...mapActions({
            signOut: 'auth/signOut'
        }),
        async logout () {
            await this.signOut();
            await this.$router.replace({ name: 'login' });
        },
    }
}
</script>

<style scoped>
.main-head {
    background: #555;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    font-size: 17px;
}
.main-head .brand {
    float: left;
}
.main-head a {
    text-decoration: none;
    color: #f2f2f2;
}
.main-head .auth {
    float: right;
}
.main-head .auth a:hover {
    opacity: 0.8;
}
</style>
