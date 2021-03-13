<template>
    <div class="w-full p-3">
        <!--Template Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
                <h5 class="font-bold uppercase text-gray-600">Template</h5>
            </div>
            <div class="p-5">
                <div class="imgcontainer">
                    <img src="/img/portada-logo.svg" alt="cover" class="cover">
                </div>
                <div style="text-align: center;">
                    <h1 v-if="user">
                        Welcome Home {{ user.name }}
                    </h1>
                </div>
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
