import * as data from '../static/chats.json';
import * as profile from '../static/profile.json';

export const getData = () => data;

export const getProfile = (id?: Number) => {
  if (id) return profile;

  return profile;
};
