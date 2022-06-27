const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '',
    defaultPath: '/',
    fontFamily: `'Poppins', sans-serif`,
    borderRadius: 12,
    theme: 'dark',
    path: {
        authentication: {
            login: '/authentication/login',
            register: '/authentication/register',
            forgotPassword: '/authentication/forgotpassword'
        },
        landing:{
            home:'/home',
            privacy: '/privacy',
            conatctUs: '/contactus'
        },
        main: {
            dashboard: '/dashboard',
            typography: '/utils/util-typography',
            color: '/utils/util-color',
            shadow: '/utils/util-shadow',
            tablerIcons: '/icons/tabler-icons',
            materialIcons: '/icons/material-icons',
            samplePage: '/sample-page',
        }
    },    
};

export default config;