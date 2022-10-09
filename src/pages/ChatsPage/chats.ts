import Block from '../../core/Block';
import router from '../../core/Router';
import {Button} from '../../components/Button_/button';
import template from './chats.hbs';
import ChatController from '../../controllers/ChatController';
import {ChatsList} from '../../components/ChatsList/chatlist';
import {Messenger} from '../../components/Messenger/messeger';
import * as styles from './chats.module.css';
import store, {withStore} from '../../core/Store';
import {Modal} from '../../components/ModalNewChat/modal';

export class ChatPageBase extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.chatsList = new ChatsList({isLoaded: false});

    // @ts-ignore
    ChatController.getChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });

    this.children.newchat = new Button({
      label: 'Новый чат',
      class: `${styles.newchat_button} ${styles.profile_button__default}`,
      events: {
        click: () => this.newChat(),
      },
    });

    this.children.profile = new Button({
      label: 'Профиль',
      class: `${styles.newchat_button} ${styles.profile_button__default}`,
      events: {
        click: () => {
          router.go('/profile');
        },
      },
    });

    this.children.modal = new Modal({
      flagNewChat: false,
    });

    this.children.messenger = new Messenger({});
  }
  newChat() {
    store.set('flagNewChat', true);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}

const withChats = withStore((state) => ({...state, styles}));

export const ChatPage = withChats(ChatPageBase);
