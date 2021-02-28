require('./bootstrap');

import Vue from 'vue'

import router from './router/index'
import store from './store/index';
import App from './App.vue'

store.dispatch('auth/me').then(() => {
    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
});
