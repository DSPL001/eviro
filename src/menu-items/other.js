// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';
import EviroConfig from 'config-items';
// constant
const icons = { IconBrandChrome, IconHelp };
// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: EviroConfig.path.main.samplePage,
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://demeter-systems.com/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
