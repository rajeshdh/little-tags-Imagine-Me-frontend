import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
} from "./actionTypes";

import { authAPI } from "../../Utils/auth";
import { localStorageService } from "../../Utils/localStorageService";

//CHECK TOKEN AND LOAD USER
const register = ({ email, password, name = "test" }) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  authAPI
    .register(email, password, name)
    .then((res) => {
      dispatch(login({ email, password }));
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  authAPI
    .login(email, password)
    .then((res) => {
      const user = {
        email: res.data.user.email,
        uid: res.data.user.id,
        displayName: null,
        photo: null,
      };
      localStorageService.setToken(res.data.tokens);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const checkUserAlreadySignedIn = () => (dispatch) => {
  dispatch({ type: USER_LOADING });
  authAPI
    .authMe()
    .then((userData) => {
      if (userData) {
        // User is signed in.
        const user = {
          email: userData.data.user.email,
          uid: userData.data.user.id,
          displayName: null,
          photo: null,
        };
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user,
        });
      } else {
        // No user is signed in.
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  authAPI
    .signOut()
    .then(() => {
      dispatch({ type: LOGIN_FAIL });
    })
    .catch((error) => {});
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["auth-token"] = token;
  }

  return config;
};

const authActions = {
  register,
  login,
  logoutUser,
  checkUserAlreadySignedIn,
};

export default authActions;
