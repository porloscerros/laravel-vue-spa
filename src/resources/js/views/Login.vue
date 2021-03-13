<template>
    <div class="w-full md:w-1/2 xl:w-1/3 p-3 justify-center">

        <template-card :header="false">
            <form autocomplete="off" action="#" @submit.prevent="submit">
                <div class="flex justify-center">
                    <img src="/img/logo.svg" class="object-center w-32 h-32" alt="logo">
                </div>

                <div>
                    <text-input
                        v-model="form.username"
                        label="Username / Email"
                        id="uname"
                        :autofocus="true"
                        :required="true"
                    ></text-input>

                    <text-input
                        type="password"
                        v-model="form.password"
                        label="Password"
                        id="psw"
                        :required="true"
                    ></text-input>

                    <div class="flex justify-center">
                        <div class="w-full md:w-1/2 px-4 py-3">
                            <check-box v-model="form.remember" label="Remember me" id="remember"></check-box>
                        </div>
                    </div>

                    <div class="px-4 py-3 text-center sm:px-6">
                        <primary-button type="submit" :disabled="submitting">
                            Login
                        </primary-button>
                    </div>
                </div>

                <div class="px-4 text-center sm:px-6 text-gray-500">
                    <span>Forgot <a @click="showForgotPasswordForm = true" href="#" class="hover:text-blue-400">password?</a></span>
                </div>
            </form>
        </template-card>

        <card-modal :showing="showForgotPasswordForm" @close="showForgotPasswordForm = false">
            <h2 class="text-xl font-bold text-center">Forgot Password?</h2>
            <p class="mb-6 text-center">We will send the instructions to your email.</p>

            <div class="flex justify-center">
                <div class="w-full md:w-1/2 px-4 py-3">
                    <text-input
                        type="email"
                        v-model="forgotPasswordForm.email"
                        placeholder="Enter your email address"
                        id="email"
                        :required="true"
                    ></text-input>
                </div>
            </div>

            <div class="px-4 py-3 text-center sm:px-6">
                <secondary-button @click="showForgotPasswordForm = false">
                    Close
                </secondary-button>
                <primary-button type="submit"  @click="forgotPasswordSubmit" :disabled="submitting">
                    Submit
                </primary-button>
            </div>
        </card-modal>

        <loading-spinner v-if="this.$store.getters.isLoading"></loading-spinner>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import TemplateCard from '../components/TemplateCard';
import TextInput from '../components/TextInput';
import CheckBox from '../components/CheckBox';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import CardModal from '../components/CardModal';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
    name: "Login",
    components: {
        TemplateCard,
        TextInput,
        CheckBox,
        PrimaryButton,
        SecondaryButton,
        CardModal,
        LoadingSpinner,
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
            showForgotPasswordForm: false,
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
        async forgotPasswordSubmit () {
            this.submitting = true;
            try {
                let response = await this.forgotPassword(this.forgotPasswordForm);
                this.closeModal();
                alert(response.data.message)
            } catch (error) {
                console.log(error);
                alert(error)
            }
            this.submitting = false;
        }
    },
}
</script>

<style scoped>

</style>
