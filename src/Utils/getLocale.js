const getLocale = () =>
  navigator.userLanguage ||
  navigator.languages?.[0] ||
  navigator.language ||
  navigator.browserLanguage ||
  navigator.systemLanguage ||
  'en';
export default getLocale;
