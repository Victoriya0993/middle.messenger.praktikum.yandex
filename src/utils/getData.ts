import * as list_chats from '../static/data/list_chats.json';
import * as profile from '../static/data/profile.json';
import * as content_chat from '../static/data/content_chat.json';

export const getChats = () => list_chats;

export const getProfile = (id?: Number) => {
  if (id) return profile;

  return profile;
};

export const getContentChat = (id: Number) => {
  for (const chat of content_chat) {
    if (chat.id === id) return chat.last_message;
  }

  return '';
};
