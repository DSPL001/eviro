export default function authHeader(contentType) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.logindata.token) {
    if (contentType) {
      return {
        Authorization: `Bearer ${user.logindata.token}`,
        'content-Type': 'multipart/form-data',
      };
    }
    else {
      return { Authorization: `Bearer ${user.logindata.token}` };
    }

  } else {
    return {};
  }
}