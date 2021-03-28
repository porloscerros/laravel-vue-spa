import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        users
    },
    state: {
        loadingCount: 0,
    },
    mutations: {
        INCREMENT_LOADING (state) {
            state.loadingCount ++;
        },
        DECREMENT_LOADING (state) {
            state.loadingCount --;
        },
    },
    actions: {
        incrementLoading (context) {
            context.commit('INCREMENT_LOADING');
        },
        decrementLoading (context) {
            context.commit('DECREMENT_LOADING');
        },
    },
    getters: {
        isLoading: state => {
            return state.loadingCount > 0;
        }
    }
})

export default store;

