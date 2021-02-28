import { CHANGE_LOCALE } from './actionTypes';

export function changeLocale(payload) {
  return {
      type: CHANGE_LOCALE,
      payload
  };
}