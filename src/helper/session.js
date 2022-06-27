class SessionHelper {
 set = (key, value) => {
    sessionStorage.setItem(key, value);
 }
 get = (key) =>{
    sessionStorage.getItem(key);
 }
}

export default new SessionHelper();