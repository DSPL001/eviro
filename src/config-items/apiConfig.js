import { expiredData } from "slices/optionChain";

export const apiConfiguration = {
    apiBaseURL: 'http://192.168.1.18:8065/',
    //apiBaseURL:  'https://localhost:7065/',
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
        stockCodes: 'api/Basic/StockCodes',
        quotemaster: 'api/Derivative/quotemaster',
        expirydates:'api/Derivative/ExpiryDates',
        getStockData:'api/Derivative/GetStockData',
    },
    watchlist:{
        getCollections: 'api/Watchlist/GetCollections/',
        addCollection :'api/Watchlist/AddCollection/',
        editCollection :'api/Watchlist/EditCollection/',
        deleteCollection :'api/Watchlist/DeleteCollection/',
    }    
}