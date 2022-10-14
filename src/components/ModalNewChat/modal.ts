import Block from 'core/Block';
import {Button} from 'components/Button/button';
import template from './modal.hbs';
import  styles from 'styles/styles.module.css';
import store from 'core/Store';
import {Input} from 'components/Input/input';
import ChatController from 'controllers/ChatController';
interface ModalProps {
  flagNewChat: boolean;
  class?: string;
  events?: {
    click: () => void;
  };
}

export class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.add = new Button({
      label: 'Добавить',
      class: styles.block_button_modal,
      events: {
        click: () => {
          store.set('flagNewChat', false);
          const nameChat: string = (this.children.title as Input).getValue() || 'Новый чат';
          const idUser: number = Number((this.children.login as Input).getValue());

          if (nameChat && idUser) ChatController.createChat(nameChat, idUser);
        },
      },
    });

    this.children.title = new Input({
      name: 'title',
      class: styles.block_input,
      type: 'text',
      placeholder: 'Название чата',
    });

    this.children.login = new Input({
      name: 'login',
      class: styles.block_input,
      type: 'number',
      placeholder: 'Id пользователя',
    });

    this.children.close = new Button({
      label: 'x',
      class: styles.button__close,
      events: {
        click: () => {
          store.set('flagNewChat', false);
        },
      },
    });
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
