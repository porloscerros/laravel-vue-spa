import store from "../../store";

export default function RedirectIfAuthenticated (router) {
    /**
     * If the user is not authenticated, should be redirected
     * login page
     *
     * If the user is already authenticated, shouldn't be able to visit
     * login page
     */

    router.beforeEach((to, from, next) => {
        if(to.matched.some(route => route.meta.requiresAuth)) {
            if (!store.getters['auth/authenticated'] && to.name !== 'login') {
                next({
                    name: 'login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                next();
            }
        } else if(to.matched.some(route => route.meta.guest)) {
            if(!store.getters['auth/authenticated']){
                next()
            } else{
                next({ name: 'home'})
            }
        } else {
            next()
        }
    });
}
