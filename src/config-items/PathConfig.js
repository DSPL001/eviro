export const Path = {
    defaultPath: '/',
    authentication: {
        login: '/authentication/login',
        register: '/authentication/register',
        forgotPassword: '/authentication/forgotpassword',
        confirmEmail: '/ConfirmEmail/api/authenticate/register',
        resetpassword: '/ResetPassword/api/Authenticate/ForgotPassword',
        resendEmail: '/authentication/resendEmail',
        confirmResendEmail : '/ConfirmEmail/api/authenticate/resendEmail'

    },
    landing: {
        home: '/home',
        privacy: '/privacy',
        conatctUs: '/contactus'
    },
    main: {
        dashboard: '/dashboard',
        watchlist: '/watchlist',
        watchlistCollection: '/watchlist/collection',
        typography: '/utils/util-typography',
        color: '/utils/util-color',
        shadow: '/utils/util-shadow',
        tablerIcons: '/icons/tabler-icons',
        materialIcons: '/icons/material-icons',
        samplePage: '/sample-page',        
    },
    admin:{
        tier: 'admin/tier'
    },
    user:{
        profile: 'user/profile',
        account: 'user/account'
    },
    optionChain:{
        stockChart : '/optionChain/stockChart'
         
    }
}