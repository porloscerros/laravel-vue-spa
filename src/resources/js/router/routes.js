import users from './routes/users';
const routes = [
    {
        path: '/',
        component: () => import('../layout/AdminPanel.vue'),
        children: [
            {
                title: 'Login',
                path: '/login',
                name: 'login',
                component: () => import('../views/Login.vue'),
                meta: {
                    guest: true,
                },
            },
            {
                path: '/reset-password/:token',
                name: 'reset-password-form',
                component: () => import('../layout/ResetPasswordForm'),
                meta: {
                    guest: true,
                }
            },
            {
                path: '/home',
                component: () => import('../views/Home.vue'),
                name: 'home',
                meta: {
                    requiresAuth: true,
                },
            },
            users,
        ]
    },
    { path: '/404', name: '404', component: () => import('../views/NotFound.vue') },
    { path: '*', redirect: '/404' },
]

export default routes;
