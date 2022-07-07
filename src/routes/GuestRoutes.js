import { lazy } from 'react';

// project imports
import { PublicRoute } from './PublicRoute';
import Loadable from 'ui-component/Loadable';
import GuestLayout from 'layout/GuestLayout';
import EviroConfig from 'config-items';

// login option 3 routing
const Landing = Loadable(lazy(() => import('views/landing')));
const AuthConfirmEmail = Loadable(lazy(() => import('views/pages/authentication/authentication/ConfirmEmail')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const GuestRoutes = {
    path: '/',
    element: <GuestLayout />,
    children: [
        {
            path: EviroConfig.path.landing.home,
            element: <PublicRoute>
                <Landing />
            </PublicRoute>
        },
        {
            path: EviroConfig.path.authentication.confirmEmail,
            element: <PublicRoute>
                <AuthConfirmEmail />
            </PublicRoute>
        },
    ]
};

export default GuestRoutes;
