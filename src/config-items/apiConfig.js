export const apiConfiguration = {
    apiBaseURL: 'https://localhost:7065/',
    authenticate: {
        login: 'api/Authenticate/login/',
        register: 'api/Authenticate/register/',
        registerAdmin: 'api/Authenticate/register-admin/',
        confirmEmail: 'api/Authenticate/confirmEmail/',
        forgotPassword: 'api/Authenticate/ForgotPassword/',
        resetPassword: 'api/Authenticate/ResetPassword/',
        resendEmail: 'api/Authenticate/ResendEmail/'
    },
    tier: {
        getAll : 'api/Tier/GetAll/',
        getIndividual : 'api/Tier/Get/',
        Add: 'api/Tier/Add/',
        Update: 'api/Tier/Update/',
        Delete: 'api/Tier/Delete/'
    }    
}