import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
} from './actionTypes';

import { auth } from '../../Utils/firebase';

// CHECK TOKEN AND LOAD USER
const register = ({ email, password }) => (dispatch) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert('Registered Succesfully');
      dispatch(login({ email, password }));
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

const login = ({ email, password }) => (dispatch) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.email,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

const logoutUser = () => ({
  type: LOGOUT_SUCCESS,
});

export const tokenConfig = (getState) => {
  // GEt token from localstorage
  const { token } = getState().auth;

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) {
    config.headers['auth-token'] = token;
  }

  return config;
};

const authActions = {
  register,
  login,
  logoutUser,
};

export default authActions;
