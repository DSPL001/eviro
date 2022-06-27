import { postData } from "./api-call";
import EviroConfig from "config-items";

class AuthService {
    
  async login(username, password) {    
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

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {
    const response = await postData({ serviceName: EviroConfig.api.authenticate.register, data: { username, email, password } })
    const { success, data, error } = response;
    if (success) {
      return Promise.resolve(data);
    }
    else {
      return Promise.reject(error);
    }
  }


}

export default new AuthService();
