const routes = {
    path: '/users',
    component: () => import('../../layout/MainContent'),
    meta: {
        requiredPermissions: ['admin'],
    },
    children: [
        {
            path: '/',
            name: 'users',
            component: () => import('../../views/users/List'),
        },
        // {
        //     path: 'crear',
        //     name: 'users.create',
        //     component: BookingCreate,
        // },
        // {
        //     path: ':id/editar',
        //     name: 'users.edit',
        //     component: BookingEdit,
        // },
    ]
};

export default routes;
