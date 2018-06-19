import Vue from 'vue';

export const getLocale = () => {
  let locale = window.localStorage.getItem('locale');
  if (locale !== null) {
    return locale;
  }
  return null;
};
