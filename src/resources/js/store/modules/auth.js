import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },

    getters: {
        authenticated (state) {
            return state.authenticated
        },
        user (state) {
            return state.user
        },
    },

    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },

        SET_USER (state, value) {
            state.user = value
        }
    },

    actions: {
        async signIn ({ dispatch }, credentials) {
            dispatch('incrementLoading', null, {root: true});
            try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/login', credentials);
                dispatch('decrementLoading', null, {root: true});
                return dispatch('me');
            } catch (error) {
                let messageData = Object.create(null);
                messageData.title = 'ocurrió un error en la solicitud!';
                messageData.content = '';
                if (error.response) {
                    if(error.response.status === 401) {
                        messageData.title = 'no autorizado';
                    }
                    if(error.response.status === 404) {
                        messageData.title = 'dirección no encontrada!';
                    }
                    if(error.response.status === 422) {
                        messageData.title = 'revisa los siguientes datos!';
                        messageData.content = error.response.data.errors;
                    }
                } else if (error.request) {
                    messageData.title = 'sin respuesta del servidor!';
                }
                // swal.error(messageData.title, messageData.content);
                console.log(messageData.title, messageData.content)
                dispatch('decrementLoading', null, {root: true});
                return Promise.reject(new Error(error.response.status));
            }
        },
        async signOut ({ dispatch }) {
            await axios.post('/logout');
            return dispatch('me');
        },
        me ({ commit, dispatch }) {
            dispatch('incrementLoading', null, {root: true});
            return axios.get('/api/v1/users/me').then((response) => {
                commit('SET_AUTHENTICATED', true);
                commit('SET_USER', response.data.data);
                dispatch('decrementLoading', null, {root: true});
            }).catch(() => {
                commit('SET_AUTHENTICATED', false);
                commit('SET_USER', null);
                dispatch('decrementLoading', null, {root: true});
            })
        }
    }
}
