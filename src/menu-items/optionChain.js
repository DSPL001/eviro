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

const optionChain = {
    id: 'optionChain',
    title: 'Option Chain',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Stock Chart',
            type: 'item',
            url: EviroConfig.path.optionChain.stockChart,
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: EviroConfig.path.main.color,
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: EviroConfig.path.main.shadow,
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: EviroConfig.path.main.tablerIcons,
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: EviroConfig.path.main.materialIcons,
                    breadcrumbs: false 
                }
            ]
        }
    ]
};

export default optionChain;
