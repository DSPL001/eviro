// assets
import { IconKey } from '@tabler/icons';
import EviroConfig from 'config-items';
// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login',
                    title: 'Login',
                    type: 'item',
                    url: EviroConfig.path.authentication.login,
                    target: true
                },
                {
                    id: 'register',
                    title: 'Register',
                    type: 'item',
                    url: EviroConfig.path.authentication.register,
                    target: true
                }
            ]
        }
    ]
};

export default pages;
