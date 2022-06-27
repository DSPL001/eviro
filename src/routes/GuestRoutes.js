import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import GuestLayout from 'layout/GuestLayout';

// login option 3 routing
const Landing = Loadable(lazy(() => import('views/landing/Home')))

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const GuestRoutes = {
    path: '/',
    element: <GuestLayout />,
    children: [          
        {
            path: '/home',
            element: <Landing />
        },
    ]
};

export default GuestRoutes;