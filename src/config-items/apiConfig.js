export const apiConfiguration = {
   // apiBaseURL: 'http://192.168.1.18:8065/',
    apiBaseURL: 'https://localhost:7065/',
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
       // marketStatus: 'api/Basic/Marketstatus',

        marketStatus: 'api/StockExchange/Marketstatus',
        // stockCodes: 'api/Basic/StockCodes',

        stockCodes:'api/StockExchange/StockCodes',
       // quotemaster: 'api/Derivative/quotemaster',

        quotemaster: 'api/StockExchange/quotemaster',

        //expirydates:'api/Derivative/ExpiryDates',
        expirydates:'api/StockExchange/ExpiryDates',

        // getStockData:'api/Derivative/GetStockData',
        getStockData:'api/StockExchange/GetStockData',
        optionChain:'api/StockExchange/GetOptionchain',
    },
    watchlist:{
        getCollections: 'api/Watchlist/GetCollections/',
        addCollection :'api/Watchlist/AddCollection/',
        editCollection :'api/Watchlist/EditCollection/',
        deleteCollection :'api/Watchlist/DeleteCollection/',
    }    
}