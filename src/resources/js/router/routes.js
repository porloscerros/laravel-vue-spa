import users from './routes/users';
const routes = [
    {
        title: 'Login',
        path: '/login',
        name: 'login',
        component: () => import('../layout/Login.vue'),
        meta: {
            guest: true,
        },
    },
    {
        path: '/',
        component: () => import('../layout/AdminPanel.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/home',
                component: () => import('../views/Home.vue'),
                name: 'home',
            },
            users,
        ]
    },
    { path: '/404', name: '404', component: () => import('../views/NotFound.vue') },
    { path: '*', redirect: '/404' },
]

export default routes;
