<template>
    <router-link
        :to="{ name: link.route }"
        v-if="link.permissions.length? link.permissions.includes(role): true"
        :class="{ 'text-blue-400': isActive, 'border-blue-400': isActive }"
        class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900 hover:border-blue-400"
    >
        <i :class="{ [link.icon]: true, 'text-blue-400': isActive }"  class="fa fa-fw mr-3"></i>
        <span class="pb-1 md:pb-0 text-sm">
            {{ link.text }}
        </span>
    </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "NavBarLink",
    props: {
        link: Object,
    },
    computed: {
        ...mapGetters({
            user: 'auth/user',
        }),
        role() {
            return this.user? this.user.role.keyname: null;
        },
        isActive() {
            return this.$route.name === this.link.route;
        }
    },
    data() {
        return {
            //
        }
    }
}
</script>

<style scoped>

</style>
