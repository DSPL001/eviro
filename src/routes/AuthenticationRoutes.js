import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import config from 'config';
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
            path: config.path.authentication.login,
            element: <AuthLogin />
        },
        {
            path: config.path.authentication.register,
            element: <AuthRegister />
        },
        {
            path: config.path.authentication.forgotPassword,
            element: <AuthForgotPassword />
        },

    ]
};

export default AuthenticationRoutes;
