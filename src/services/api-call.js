import Axios from "axios";
import store from "store";
import EviroConfig from "config-items";
import authHeader from "./auth-header";


const BASE_URL = EviroConfig.api.apiBaseURL;
const headerObj = { headers: authHeader() }

export async function getData({ serviceName, apiBaseUrl = BASE_URL }) {
    return await Axios.get(
        `${apiBaseUrl}` + serviceName, headerObj)
        .then(response => {
            const { status, data, errors } = response;
            if (status === 200) {
                return { success: true, data };
            } else {
                return {
                    success: false,
                    error: errors.toString()
                };
            }
        })
        .catch(error => {
            let errorMessage = ''
            if (error.response) {
                const { statusText, status } = error.response
                if (status === 401) {
                    store.dispatch({ type: 'SESSION_EXPIRED', payload: { msg: "Sorry, your session has expired. Please refresh the page to continue.", showSessionExpired: true } })
                } else {
                    errorMessage = `There was an HTTP error. ${statusText}, Status code:${status}.`
                }
            }
            return {
                success: false,
                error: errorMessage
            };
        });
}

export async function postData({ serviceName, apiBaseUrl = BASE_URL, data }) {
    const posturl = apiBaseUrl + serviceName
    return await Axios.post(posturl, data, headerObj)
        .then(function (response) {
            let respData = response.data
            if (response.status === 200) {
                return Promise.resolve({ success: true, data: respData });
            } else {
                return Promise.reject({
                    success: false,
                    error: response.errors.title
                });
            }
        })
        .catch(error => {
            return Promise.reject({
                success: false,
                error: error.response.data
            });
        });
}

export async function deleteData({ serviceName, apiBaseUrl = BASE_URL, data }) {
    return await Axios.delete(
        `${apiBaseUrl}` + serviceName,
        { headerObj, data: data }
    )
        .then(response => {
            const { status, errors } = response;
            const respData = response.data
            if (status === 200) {
                return { success: true, data: respData };
            } else {
                return {
                    success: false,
                    error: errors.toString()
                };
            }
        })
        .catch(error => {
            let errorMessage = ''
            if (error.response) {
                const { statusText, status } = error.response
                if (status === 401) {
                    store.dispatch({ type: 'SESSION_EXPIRED', payload: { msg: "Sorry, your session has expired. Please refresh the page to continue.", showSessionExpired: true } })
                } else {
                    errorMessage = `There was an HTTP error. ${statusText}, Status code:${status}.`
                }
            }
            return {
                success: false,
                error: errorMessage
            };
        });
}

export async function patchData({ serviceName, apiBaseUrl = BASE_URL, data }) {
    return await Axios.patch(
        `${apiBaseUrl}` + serviceName, data, headerObj)
        .then(response => {
            const { status, errors } = response;
            const respData = response.data
            if (status === 200) {
                return { success: true, data: respData };
            } else {
                return {
                    success: false,
                    error: errors.toString()
                };
            }
        })
        .catch(error => {
            let errorMessage = ''
            if (error.response) {
                const { statusText, status } = error.response
                if (status === 401) {
                    store.dispatch({ type: 'SESSION_EXPIRED', payload: { msg: "Sorry, your session has expired. Please refresh the page to continue.", showSessionExpired: true } })
                } else {
                    errorMessage = `There was an HTTP error. ${statusText}, Status code:${status}.`
                }
            }
            return {
                success: false,
                error: errorMessage
            };
        });
}