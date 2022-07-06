// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import EviroConfig from 'config-items';
// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const features = {
    id: 'features',
    title: 'Features',
    caption: 'For Stocks and Options',
    type: 'group',
    children: [
        {
            id: 'watchlistgroup',
            title: 'Watchlist',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'watchlist',
                    title: 'Watchlist',
                    type: 'item',
                    url: EviroConfig.path.main.watchlist,
                    breadcrumbs: false
                },
                {
                    id: 'watchlistCollection',
                    title: 'Collection',
                    type: 'item',
                    url: EviroConfig.path.main.watchlistCollection,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default features;
