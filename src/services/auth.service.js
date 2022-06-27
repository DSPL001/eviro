import { postData } from "./api-call";
import EviroConfig from "config-items";

class AuthService {
  // login(username, password) {
  //   var user = JSON.stringify({
  //     "username": username,
  //     "password": password
  //   });

  //   const config = {
  //     method: 'post',
  //     url: API_URL + "/login",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: user
  //   };
  //   return axios(config)
  //     .then(function (response) {
  //       const res = JSON.stringify(response.data);
  //       console.log(res);
  //       if (res.token) {
  //         localStorage.setItem("user", res);
  //       }
  //       return response.data;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  async login(username, password) {    
    debugger
    const response =await postData({ serviceName: EviroConfig.api.authenticate.login, data: { username, password } })
    const {success, data, error} = response;
    if (success){      
      return Promise.resolve(data);
    }
    else{
      return Promise.reject(error);
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {    
    const response =await postData({ serviceName: EviroConfig.api.authenticate.register, data: { username, email, password } })
    const {success, data, error} = response;
    if (success){
      return Promise.resolve(data);
    }
    else{
      return Promise.reject(error);
    }
  }


}

export default new AuthService();
