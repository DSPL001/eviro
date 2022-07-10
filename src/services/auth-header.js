export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.logindata.token) {
    return { Authorization: `Bearer ${user.logindata.token}` };
  } else {
    return {};
  }
}