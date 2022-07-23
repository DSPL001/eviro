import { objectDecrypt } from "services/encryption";

export default function authHeader(contentType) {
  const user = objectDecrypt(localStorage.getItem("user"));
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