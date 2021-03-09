import { combineReducers } from 'redux';
import auth from './auth/reducer';
import product from './product/reducer';
import getLocale from '../Utils/getLocale';

const availableLanguages = ['en', 'hi'];
const userPreferredLanguage = getLocale();

const locale = availableLanguages.includes(userPreferredLanguage)
  ? userPreferredLanguage
  : 'en';

const initialState = {
  locale,
};

const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return {
        ...state,
        locale: action.payload.value,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth,
  localeReducer,
  product,
});

export default rootReducer;
