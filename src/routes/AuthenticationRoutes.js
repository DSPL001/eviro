import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import EviroConfig from 'config-items';
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
            element: <AuthLogin />
        },
        {
            path: EviroConfig.path.authentication.register,
            element: <AuthRegister />
        },
        {
            path: EviroConfig.path.authentication.forgotPassword,
            element: <AuthForgotPassword />
        },

    ]
};

export default AuthenticationRoutes;
