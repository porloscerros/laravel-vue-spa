export default {
    namespaced: true,

    state: {
        user: null,
    },

    getters: {
        user (state) {
            return state.user;
        },
    },

    mutations: {
        SET_USER (state, value) {
            state.user = value;
        },
    },

    actions: {
        setUser ({ commit }, data) {
            commit('SET_USER', data);
        },
    }
}
