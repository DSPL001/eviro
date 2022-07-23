import { postData, putData } from "./api";
import EviroConfig from "config-items";
import { objectEncrypt } from "./encryption";

async function login(username, password) {
  const response = await postData({ serviceName: EviroConfig.api.authenticate.login, data: { username, password } })
  const { success, data, error } = response;
  if (success) {
    const successResponse = {
      status: 'success',
      message: 'User Logged In Successfully',
      logindata: data
    }     
    localStorage.setItem("user", objectEncrypt(successResponse));
    return Promise.resolve(successResponse);
  }
  else {    
    return Promise.reject(error);
  }
}

async function logout() {
  localStorage.removeItem("user");
}

async function register(firstname, lastname, username, email, password) {
  const response = await postData({ serviceName: EviroConfig.api.authenticate.register, data: { firstname, lastname, username, email, password } })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}

async function confirmEmail(userId, code) {  
  const response = await postData({ serviceName: EviroConfig.api.authenticate.confirmEmail, data: { userId, code } })
  const { success, data, error } = response;
  if (success) {       
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}

async function forgotPassword(email) {  
  const response = await postData({ serviceName: EviroConfig.api.authenticate.forgotPassword, data: { email } })
  const { success, data, error } = response;
  if (success) {       
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}

async function resetPassword(userId, code, password) {  
  debugger
  const response = await postData({ serviceName: EviroConfig.api.authenticate.resetPassword, data: { userId, code, password } })
  const { success, data, error } = response;
  if (success) {       
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}

async function resendEmail(email) {  
  debugger
  const response = await postData({ serviceName: EviroConfig.api.authenticate.resendEmail, data: { email } })
  const { success, data, error } = response;
  if (success) {       
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}
async function updateProfilePicture(id, ProfilePhoto) {    
  const response = await putData({ serviceName: EviroConfig.api.authenticate.updateProfilePicture, params:id, data: ProfilePhoto, contentType: true})
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}


const authService = {
  login,
  logout,
  register,
  confirmEmail,
  forgotPassword,
  resetPassword,
  resendEmail,
  updateProfilePicture
}

export default authService;
