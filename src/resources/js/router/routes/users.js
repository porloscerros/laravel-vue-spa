const routes = {
    path: '/users',
    component: () => import('../../layout/MainContent'),
    meta: {
        requiresAuth: true,
        requiredPermissions: ['admin'],
    },
    children: [
        {
            path: '/',
            name: 'users',
            component: () => import('../../views/users/List'),
        },
        // {
        //     path: 'create',
        //     name: 'users.create',
        //     component: () => import('../../views/users/Create'),
        // },
        // {
        //     path: ':id/edit',
        //     name: 'users.edit',
        //     component: () => import('../../views/users/Edit'),
        // },
    ]
};

export default routes;
