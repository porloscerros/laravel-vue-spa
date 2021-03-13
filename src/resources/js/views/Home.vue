<template>
    <div class="w-full p-3">
        <!--Template Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="p-5">
                <div class="flex justify-center">
                    <img src="/img/portada-logo.svg" class="object-contain object-center w-full">
                </div>
                <h1 class="text-center text-gray-300" v-if="user">
                    Welcome Home {{ user.name }}
                </h1>
            </div>
        </div>
        <!--/Template Card-->
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
.imgcontainer {
    text-align: center;
}
img.cover {
    max-width: 100%;
}
</style>
