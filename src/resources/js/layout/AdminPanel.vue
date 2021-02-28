<template>
    <div class="wrapper">
        <main-header>Laravel Vue SPA</main-header>

        <main-nav></main-nav>

        <main-content></main-content>

        <main-footer>The footer</main-footer>
    </div>
</template>

<script>
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainNav from './MainNav';
import MainContent from './MainContent';
export default {
    name: "AdminPanel",
    components: {
        MainNav,
        MainFooter,
        MainHeader,
        MainContent,
    }
}
</script>

<style scoped>
.main-head {
    grid-area: header;
}
.content {
    grid-area: content;
}
.main-nav {
    grid-area: nav;
}
.main-footer {
    grid-area: footer;
}

.wrapper {
    background: lightgrey;
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
    "header"
    "nav"
    "content"
    "footer";
}

@media (min-width: 500px) {
    .wrapper {
        grid-template-columns: 1fr 3fr;
        grid-template-areas:
      "header  header"
      "nav     nav"
      "content content"
      "footer  footer";
    }
}

@media (min-width: 700px) {
    .wrapper {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas:
      "header header  header"
      "nav    content content"
      "nav    content content"
      "footer footer  footer"
    }
}
</style>
