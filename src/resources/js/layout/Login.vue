<template>
    <div class="wrapper">
        <main-header>Laravel Vue SPA</main-header>

        <div class="content">

            <form autocomplete="off" action="#" @submit.prevent="submit">
                <div class="imgcontainer">
                    <img src="/img/logo.svg" alt="logo" class="logo">
                </div>

                <div class="container">
                    <label for="uname"><b>Username / Email</b></label>
                    <input type="text" v-model="form.username" autocomplete="off" autofocus placeholder="Enter Username" id="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" v-model="form.password" autocomplete="current-password" placeholder="Enter Password" id="psw" required>

                    <button type="submit" :disabled="submitting">Login</button>
                    <label>
                        <input type="checkbox" v-model="form.remember" id="remember"> Remember me
                    </label>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <span class="psw">Forgot <a @click="showModal" href="#">password?</a></span>
                </div>
            </form>
        </div>

        <modal v-show="isModalVisible" @close="closeModal">
            <h3 slot="header">Forgot Password</h3>
            <div slot="body">
                <label for="email"><b>Your Email</b></label>
                <input type="email" v-model="forgotPasswordForm.email" autocomplete="off" autofocus placeholder="Enter Email" id="email" required>
            </div>
            <div slot="footer" style="display: flex;">
                <button @click="closeModal" style="background-color: lightgrey;color: #555">Cancel</button>
                <button @click="forgotPasswordSubmit" :disabled="submitting">Submit</button>
            </div>
        </modal>

        <loading-spinner v-if="this.$store.getters.isLoading"></loading-spinner>

        <main-footer>The footer</main-footer>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import LoadingSpinner from '../components/LoadingSpinner';
    import Modal from '../components/Modal.vue';
    export default {
        name: "Login",
        components: {
            MainFooter,
            MainHeader,
            LoadingSpinner,
            Modal
        },
        data() {
            return{
                submitting: false,
                form: {
                    username: '',
                    email: '',
                    password: '',
                    remember: false
                },
                isModalVisible: false,
                forgotPasswordForm: {
                    email: '',
                }
            }
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn',
                forgotPassword: 'auth/forgotPassword'
            }),
            async submit () {
                this.submitting = true;
                try {
                    await this.signIn(this.form);
                    this.$router.replace({ name: 'home' })
                } catch (error) {
                    console.log(error);
                    this.submitting = false;
                }
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            async forgotPasswordSubmit () {
                this.submitting = true;
                try {
                    let response = await this.forgotPassword(this.forgotPasswordForm);
                    this.closeModal();
                    alert(response.data.message)
                } catch (error) {
                    alert(error)
                }
                this.submitting = false;
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

input[type=text], input[type=password], input[type=email] {
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
