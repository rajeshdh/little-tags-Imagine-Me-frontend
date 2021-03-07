import { CHANGE_LOCALE } from './actionTypes';

export const changeLocale = (payload) => {
  return {
      type: CHANGE_LOCALE,
      payload
  };
}