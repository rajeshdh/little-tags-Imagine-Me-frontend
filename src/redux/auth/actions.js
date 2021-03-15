import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
} from "./actionTypes";

import { auth } from "../../Utils/firebase"

//CHECK TOKEN AND LOAD USER
const register = ({ email, password }) => (dispatch) => {
  dispatch({ type: USER_LOADING })
  auth
    .createUserWithEmailAndPassword(email, password)
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
  dispatch({ type: USER_LOADING })
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const user = {
        email: res.user.email,
        uid: res.user.uid,
        displayName: null,
        photo: null
      }
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
  dispatch({ type: USER_LOADING })
  auth.onAuthStateChanged(function (userData) {
    if (userData) {
      // User is signed in.
      const user = {
        email: userData.email,
        uid: userData.uid,
        displayName: null,
        photo: null
      }
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
  });
}

export const logoutUser = () => dispatch => {
  auth.signOut().then(() => {
    dispatch({ type: LOGIN_FAIL })
  }).catch((error) => {
  });
}

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
  checkUserAlreadySignedIn
};

export default authActions;