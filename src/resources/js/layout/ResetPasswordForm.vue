<template>
    <div class="wrapper">
        <main-header>Laravel Vue SPA</main-header>

        <div class="content">

            <form autocomplete="off" action="#" @submit.prevent="submit">
                <div class="imgcontainer">
                    <img src="/img/logo.svg" alt="logo" class="logo">
                    <h3>Reset Your Password</h3>
                </div>

                <div class="container">
                    <label for="email"><b>Your Email</b></label>
                    <input type="email" v-model="form.email" autocomplete="off" autofocus placeholder="Enter Email" id="email" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" v-model="form.password" autocomplete="current-password" placeholder="Enter Password" id="psw" required>

                    <label for="psw_confirmation"><b>Password</b></label>
                    <input type="password" v-model="form.password_confirmation" autocomplete="current-password" placeholder="Confirm Password" id="psw_confirmation" required>

                    <button type="submit" :disabled="submitting">Submit</button>
                </div>
            </form>
        </div>

        <loading-spinner v-if="this.$store.getters.isLoading"></loading-spinner>

        <main-footer>The footer</main-footer>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import LoadingSpinner from '../components/LoadingSpinner';
export default {
    name: "ForgotPassword",
    components: {
        MainFooter,
        MainHeader,
        LoadingSpinner
    },
    data() {
        return{
            submitting: false,
            form: {
                email: '',
                password: '',
                password_confirmation: '',
                token: this.$route.params.token
            }
        }
    },
    methods: {
        ...mapActions({
            resetPassword: 'auth/resetPassword'
        }),
        async submit () {
            this.submitting = true;
            try {
                await this.resetPassword(this.form);
                this.$router.replace({ name: 'login' })
            } catch (error) {
                console.log(error);
                this.submitting = false;
            }
        }
    },
}
</script>

<style scoped>
.main-head {
    grid-area: header;
}
.content {
    grid-area: content;
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
    "content"
    "footer";
}


form {
    border: 3px solid #f1f1f1;
    background: #f1f1f1;
    margin: auto;
}

.container {
    padding: 16px;
    margin: auto;
}

input[type=email], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #555;
    color: #f2f2f2;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.imgcontainer {
    text-align: center;
}

img.logo {
    width: 96px;
    height: 96px;
    /*border-radius: 50%;*/
}

span.psw {
    float: right;
    padding-top: 16px;
}

@media (min-width: 500px) {
    .wrapper {
        grid-template-columns: 1fr 3fr;
        grid-template-areas:
      "header  header"
      "content content"
      "footer  footer";
    }
    form {
        max-width: 75%;
    }
    .container {
        max-width: 75%;
    }
}

@media (min-width: 700px) {
    .wrapper {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas:
      "header header  header"
      "content content content"
      "content content content"
      "footer footer  footer"
    }
    form {
        max-width: 50%;
    }
    .container {
        max-width: 50%;
    }
}

@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }
}
</style>
