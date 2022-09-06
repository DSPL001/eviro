export const apiConfiguration = {
    apiBaseURL: 'http://192.168.1.11:8065/',
    authenticate: {
        login: 'api/Authenticate/login/',
        register: 'api/Authenticate/register/',
        registerAdmin: 'api/Authenticate/register-admin/',
        confirmEmail: 'api/Authenticate/confirmEmail/',
        forgotPassword: 'api/Authenticate/ForgotPassword/',
        resetPassword: 'api/Authenticate/ResetPassword/',
        resendEmail: 'api/Authenticate/ResendEmail/',
        updateProfilePicture: 'api/Authenticate/UpdateProfilePicture/'
    },
    tier: {
        getAll : 'api/Tier/GetAll/',
        getIndividual : 'api/Tier/Get/',
        Add: 'api/Tier/Add/',
        Update: 'api/Tier/Update/',
        Delete: 'api/Tier/Delete/'
    },
    seBasic:{
        marketStatus: 'api/Basic/Marketstatus',
        stockCodes: 'api/Basic/StockCodes'
    },
    watchlist:{
        getCollections: 'api/Watchlist/GetCollections/',
        addCollection :'api/Watchlist/AddCollection/',
        editCollection :'api/Watchlist/EditCollection/',
        deleteCollection :'api/Watchlist/DeleteCollection/',
    }    
}