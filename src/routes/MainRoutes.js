import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import EviroConfig from 'config-items';

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
            element: <DashboardDefault />
        },
        {
            path: EviroConfig.path.main.typography,
            element: <UtilsTypography />
        },
        {
            path: EviroConfig.path.main.color,
            element: <UtilsColor />
        },
        {
            path: EviroConfig.path.main.shadow,
            element: <UtilsShadow />
        },
        {
            path: EviroConfig.path.main.tablerIcons,
            element: <UtilsTablerIcons />
        },
        {
            path: EviroConfig.path.main.materialIcons,
            element: <UtilsMaterialIcons />
        },
        {
            path: EviroConfig.path.main.samplePage,
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
