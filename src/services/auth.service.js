import axios from "axios";

const API_URL = "https://localhost:7065/api/Authenticate/";



class AuthService {
  login(username, password) {
    var user = JSON.stringify({
      "username": username,
      "password": password
    });
    
    const config = {
      method: 'post',
      url: API_URL + "/login",
      headers: {
        'Content-Type': 'application/json'        
      },
      data: user
    };    
    return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // res = JSON.stringify(response.data);
        // if (res.token) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        // return response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
