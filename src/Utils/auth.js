import axios from "axios";
import { localStorageService } from "./localStorageService";

const accessToken = localStorageService.getAccessToken();
const refreshToken = localStorageService.getRefreshToken();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (request) => {
    if (request.url === "auth/me") {
      request.headers["Authorization"] = "Bearer " + accessToken;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  async (response) => {
    const originalRequest = response.config;
    if (
      response.statusText.toLocaleLowerCase() === "ok" &&
      originalRequest.url === "auth/me"
    ) {
      return response;
    } else if (
      ((response.status === 401) &&
        originalRequest.url === "auth/me") ||
      !accessToken.length
    ) {
      let res = await authAPI.refresh();
      if (res.data.statusCode === 200) {
        localStorageService.setToken(res.data.tokens);
        instance.defaults.headers.common["Authorization"] =
          "Bearer " + localStorageService.getAccessToken();

        return response;
      }
    } else {
      return response
    }
},
  (error) => {
    console.log(error)
    return  Promise.reject(error)
  }
);

export const authAPI = {
  register(email, password, name) {
    return axios.post(`${instance.defaults.baseURL}/auth/register`, {
      name,
      email,
      password,
    });
  },
  login(email, password) {
    return axios.post(`${instance.defaults.baseURL}/auth/login`, {
      email,
      password,
    });
  },
  authMe() {
    return instance.get(`auth/me`);
  },
  refresh() {
    return axios.post(`${instance.defaults.baseURL}/auth/refresh-tokens`, {
      refreshToken,
    },{headers: {'Authorization': 'Bearer ' + accessToken}});
  },
  logout() {
    return axios.post(`${instance.defaults.baseURL}/auth/logout`, {
      refreshToken,
    });
  },
};
