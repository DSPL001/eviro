import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password)
    .then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data,
        });

        return Promise.resolve(response);
      },
    )
    .catch(
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject(error);
      }
    );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password)
    .then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        const successResponse = {
          status: 'success',
          message: 'User Logged In Successfully',
          logindata: data
        }
        return Promise.resolve(successResponse);
      }
    )
    .catch(
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        const errorResponse = {
          status: 'error',
          message: 'User Logged In Failure',
          logindata: error
        }
        return Promise.reject(errorResponse);
      }

    );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
