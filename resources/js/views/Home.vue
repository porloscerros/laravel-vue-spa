<template>
    <div class="home">
        <div class="imgcontainer">
            <img src="/img/portada-logo.svg" alt="cover" class="cover">
        </div>
        <div style="text-align: center;">
            <h1 v-if="user">
                Welcome Home {{ user.name }}
            </h1>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'Home',
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
.home {
    color: lightgrey;
}
.imgcontainer {
    text-align: center;
}
img.cover {
    max-width: 100%;
}
</style>
