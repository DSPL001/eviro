import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import EviroConfig from 'config-items';
import { PublicRoute } from './PublicRoute';
// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));
const AuthForgotPassword = Loadable(lazy(() => import('views/pages/authentication/authentication/ForgotPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: EviroConfig.path.authentication.login,
            element: <PublicRoute>
                <AuthLogin />
            </PublicRoute>
        },
        {
            path: EviroConfig.path.authentication.register,
            element: <PublicRoute>
                <AuthRegister />
            </PublicRoute>
        },
        {
            path: EviroConfig.path.authentication.forgotPassword,
            element: <PublicRoute>
                <AuthForgotPassword />
            </PublicRoute>
        },

    ]
};

export default AuthenticationRoutes;
