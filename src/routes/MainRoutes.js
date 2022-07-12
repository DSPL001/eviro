import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import EviroConfig from 'config-items';
import { PrivateRoute } from './PrivateRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// Watchlist routing
const Watchlist = Loadable(lazy(() => import('views/pages/watchlist')));
const WatchlistCollection = Loadable(lazy(() => import('views/pages/watchlist/collection')));
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const UtilsTier = Loadable(lazy(() => import('views/pages/tier')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
//User Profile routing
const UserProfile = Loadable(lazy(() => import('views/profile')));
const UserAccount = Loadable(lazy(() => import('views/pages/account')));
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
            path: EviroConfig.path.defaultPath,
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
            path: EviroConfig.path.admin.tier,
            element: <PrivateRoute>
                <UtilsTier />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.user.profile,
            element: <PrivateRoute>
                <UserProfile />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.user.account,
            element: <PrivateRoute>
                <UserAccount />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.watchlist,
            element: <PrivateRoute>
                <Watchlist />
            </PrivateRoute>
        },
        {
            path: EviroConfig.path.main.watchlistCollection,
            element: <PrivateRoute>
                <WatchlistCollection />
            </PrivateRoute>
        },
        {
            path: '*',
            element: <Navigate to="/" />
        }
    ]
};

export default MainRoutes;
