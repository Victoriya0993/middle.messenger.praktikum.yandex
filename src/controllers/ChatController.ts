import API from '../api/ChatAPI';
import {ChatsAPI} from '../api/ChatAPI';
import store from '../core/Store';
import MessagesController from './MessagesController';

export class ChatController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async getChats() {
    try {
      const chats = await this.api.read();

      chats.map(async chat => {
        const token = await this.getToken(chat.id);

        await MessagesController.connect(chat.id, token);
      });

      chats.forEach(chat => {
        if (chat.last_message) {
          chat.last_message.time = chat.last_message.time.split('T')[1].slice(0, 5);
        }
      });

      store.set('chats', chats);
    } catch (e: any) {
      console.error(e);
    }
  }

  async createChat(title: string) {
    try {
      const response = await this.api.create(title);
      await this.getChats();

      if (store.getState().user.id != 96685) {
        if (response.id) this.addUserToChat(response.id, 96685);
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  async delete(id: string) {
    await this.api.delete(id);

    this.getChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

export default new ChatController();
