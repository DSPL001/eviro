import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import EviroConfig from 'config-items';
import { PrivateRoute } from './PrivateRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [

        {
            path: EviroConfig.path.main.dashboard,
            element: <PrivateRoute>
                <DashboardDefault />
            </PrivateRoute>
        },
        {
            path: "/",
            element: <PrivateRoute>
                <DashboardDefault />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.typography,
            element: <PrivateRoute>
                <UtilsTypography />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.color,
            element: <PrivateRoute>
                <UtilsColor />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.shadow,
            element: <PrivateRoute>
                <UtilsShadow />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.tablerIcons,
            element: <PrivateRoute>
                <UtilsTablerIcons />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.materialIcons,
            element: <PrivateRoute>
                <UtilsMaterialIcons />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.samplePage,
            element: <PrivateRoute>
                <SamplePage />
            </PrivateRoute>
        },
        {
            path: '*',
            element: <Navigate to="/" />
        }
    ]
};

export default MainRoutes;
