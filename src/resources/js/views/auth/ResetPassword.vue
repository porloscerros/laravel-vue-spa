<template>
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">

        <template-card :header="false">
            <form autocomplete="off" action="#" @submit.prevent="submit">
                <div class="flex justify-center">
                    <img src="/img/logo.svg" class="object-center w-32 h-32" alt="logo">
                </div>

                <h2 class="text-xl font-bold text-center">Reset Your Password</h2>

                <text-input
                    v-model="form.email"
                    type="email"
                    label="Your Email"
                    id="email"
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

                <text-input
                    type="password"
                    v-model="form.password_confirmation"
                    label="Confirm Password"
                    id="psw_confirmation"
                    :required="true"
                ></text-input>

                <div class="px-4 py-3 text-center sm:px-6">
                    <primary-button type="submit" :disabled="submitting">
                        Submit
                    </primary-button>
                </div>
            </form>

        </template-card>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import TemplateCard from '../../components/TemplateCard';
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import CardModal from '../../components/CardModal';
import LoadingSpinner from '../../components/LoadingSpinner';

export default {
    name: "ForgotPassword",
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

</style>
