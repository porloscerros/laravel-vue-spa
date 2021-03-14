import users from './routes/users';
const routes = [
    {
        path: '/',
        component: () => import('../layout/AdminPanel'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/',
                component: () => import('../views/Home'),
                name: 'home',
            },
            users,
        ]
    },
    {
        title: 'Login',
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login'),
        meta: {
            guest: true,
        },
    },
    {
        path: '/reset-password/:token',
        name: 'reset-password-form',
        component: () => import('../views/auth/ResetPassword'),
        meta: {
            guest: true,
        },
    },
    { path: '/404', name: '404', component: () => import('../views/NotFound') },
    { path: '*', redirect: '/404' },
]

export default routes;
