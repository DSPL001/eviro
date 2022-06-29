export const apiConfiguration = {
    apiBaseURL: 'https://192.168.1.10:5000/',
    authenticate: {
        login: 'api/Authenticate/login/',
        register: 'api/Authenticate/register/',
        registerAdmin: 'api/Authenticate/register-admin/',
    },
    tier: {
        getAll : 'api/Tier/GetAll/',
        getIndividual : 'api/Tier/Get/',
        Add: 'api/Tier/Add/',
        Update: 'api/Tier/Update/',
        Delete: 'api/Tier/Delete/'
    }    
}