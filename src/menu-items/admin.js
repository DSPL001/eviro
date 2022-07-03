// assets
import { IconDiamond } from '@tabler/icons';
import EviroConfig from 'config-items';
// constant
const icons = {
    IconDiamond
};
// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //
const admin = {
    id: 'admin',
    title: 'Admin',
    caption: 'For Admin Purpose',
    type: 'group',
    children: [
        {
            id: 'tier',
            title: 'Tier',
            type: 'item',
            url: EviroConfig.path.main.tier,
            icon: icons.IconDiamond,
            breadcrumbs: false
        }
    ]
};
export default admin;