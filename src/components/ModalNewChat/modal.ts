import Block from '../../core/Block';
import {Button} from '../button/button';
import template from './modal.hbs';
import * as styles from './styles.module.css';
import store from '../../core/Store';
import {Input} from '../input/input';
import ChatController from '../../controllers/ChatController';

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
    this.children.close = new Button({
      label: 'Добавить',
      class: styles.block_button,
      events: {
        click: () => {
          store.set('flagNewChat', false);
          const nameChat: string = (this.children.login as Input).getValue() || 'Новый чат';

          ChatController.createChat(nameChat);
        },
      },
    });

    this.children.login = new Input({
      name: 'login',
      class: styles.block_input,
      type: 'text',
      placeholder: 'Логин',
    });
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
