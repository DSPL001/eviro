import { postData } from "./api-call";
import EviroConfig from "config-items";

async function login(username, password) {
  const response = await postData({ serviceName: EviroConfig.api.authenticate.login, data: { username, password } })
  const { success, data, error } = response;
  if (success) {
    const successResponse = {
      status: 'success',
      message: 'User Logged In Successfully',
      logindata: data
    }
    localStorage.setItem("user", JSON.stringify(successResponse));
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

const authService = {
  login,
  logout,
  register
}

export default authService;
