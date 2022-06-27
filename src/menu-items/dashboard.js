// assets
import { IconDashboard } from '@tabler/icons';
import EviroConfig from 'config-items';
// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: EviroConfig.path.main.dashboard,
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
