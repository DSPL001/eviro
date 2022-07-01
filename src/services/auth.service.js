import { postData } from "./api-call";
import EviroConfig from "config-items";

async function login(username, password) {
  const response = await postData({ serviceName: EviroConfig.api.authenticate.login, data: { username, password } })
  const { success, data, error } = response;
  if (success) {
    localStorage.setItem("user", JSON.stringify(data));
    return Promise.resolve(data);
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
