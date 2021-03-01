// import authActions from "./auth/actions";
import { CHANGE_LOCALE } from './actionTypes';

export const changeLocale = (payload) => {
  return {
      type: CHANGE_LOCALE,
      payload
  };
}

// const actions = {
//   authActions,
//   changeLocale
// }

// export default actions;