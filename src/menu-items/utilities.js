// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import config from 'config';
// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: config.path.main.typography,
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: config.path.main.color,
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: config.path.main.shadow,
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
                    url: config.path.main.tablerIcons,
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: config.path.main.materialIcons,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
