// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';
import config from 'config';
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
            url: config.path.main.samplePage,
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
