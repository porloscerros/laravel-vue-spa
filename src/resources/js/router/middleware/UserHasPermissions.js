/**
 * This is where all the authorization login is stored
 */
import store from '../../store/index';

export default function UserHasPermissions (router) {
    /**
     * Before each route we will see if the current user is authorized
     * to access the given route
     */
    router.beforeEach((to, from, next) => {
        if(to.matched.some(record => record.meta.requiresAuth)) {
            if (!store.getters['auth/authenticated']) {
                next({
                    name: 'login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                let role = store.getters['auth/user'].role.keyname;
                if(to.matched.some(record => record.meta.requiredPermissions)) {
                    to.matched.some(record => {
                        if (record.meta.requiredPermissions) {
                            let canGoNext = false;
                            for (const [index, element] of record.meta.requiredPermissions.entries()) {
                                if(role === element) {
                                    canGoNext = true;
                                    break;
                                }
                            }
                            if(canGoNext) {
                                next();
                            } else {
                                next({ name: 'dashboard'});
                            }
                        }
                    });
                } else {
                    next()
                }
            }
        } else if (to.matched.some(record => record.meta.guest)) {
            if(!store.getters['auth/authenticated']){
                next();
            } else {
                next({ name: 'dashboard'});
            }
        } else {
            next();
        }
    });
}
