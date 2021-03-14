<template>
    <div class="w-full p-3">
        <template-card :header="false">
            <div class="flex justify-center">
                <img src="/img/portada-logo.svg" class="object-contain object-center w-full">
            </div>
            <h1 class="text-center text-gray-300" v-if="user">
                Welcome Home {{ user.name }}
            </h1>
        </template-card>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import TemplateCard from '../components/TemplateCard';

export default {
    name: 'Home',
    components: {
        TemplateCard,
    },
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
