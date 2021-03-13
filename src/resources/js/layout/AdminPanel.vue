<template>
    <div @click="check" class="bg-black-alt">
        <main-header></main-header>

        <main-content></main-content>

        <main-footer></main-footer>
    </div>
</template>

<script>
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainContent from './MainContent';
export default {
    name: "AdminPanel",
    components: {
        MainFooter,
        MainHeader,
        MainContent,
    },
    methods: {
        check(e) {
            console.log(e.target)
            var target = (e && e.target) || (event && event.srcElement);

            var userMenuDiv = document.getElementById("userMenu");
            var userMenu = document.getElementById("userButton");

            var navMenuDiv = document.getElementById("nav-content");
            var navMenu = document.getElementById("nav-toggle");
            //User Menu
            if (!this.checkParent(target, userMenuDiv)) {
                // click NOT on the menu
                if (this.checkParent(target, userMenu)) {
                    // click on the link
                    if (userMenuDiv.classList.contains("invisible")) {
                        userMenuDiv.classList.remove("invisible");
                    } else {userMenuDiv.classList.add("invisible");}
                } else {
                    // click both outside link and outside menu, hide menu
                    userMenuDiv.classList.add("invisible");
                }
            }

            //Nav Menu
            if (!this.checkParent(target, navMenuDiv)) {
                // click NOT on the menu
                if (this.checkParent(target, navMenu)) {
                    // click on the link
                    if (navMenuDiv.classList.contains("hidden")) {
                        navMenuDiv.classList.remove("hidden");
                    } else {navMenuDiv.classList.add("hidden");}
                } else {
                    // click both outside link and outside menu, hide menu
                    navMenuDiv.classList.add("hidden");
                }
            }
        },
        checkParent(t, elm) {
            while(t.parentNode) {
                if( t == elm ) {return true;}
                t = t.parentNode;
            }
            return false;
        }
    }
}
</script>

<style scoped>
.bg-black-alt  {
    background:#191919;
}
.text-black-alt  {
    color:#191919;
}
.border-black-alt {
    border-color: #191919;
}
</style>
