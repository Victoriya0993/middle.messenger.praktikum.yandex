import Block from 'core/Block';
import {Button} from 'components/Button/button';
import template from './modal.hbs';
import styles from 'styles/styles.module.css';
import {Input} from 'components/Input/input';
import store from 'core/Store';
import UserController from 'controllers/UserController';

interface ModalAvatarProps {
  flagNewAvatar: boolean;
  class?: string;
  events?: {
    click: () => void;
  };
}

export class ModalAvatar extends Block<ModalAvatarProps> {
  constructor(props: ModalAvatarProps) {
    super(props);
  }

  init() {
    this.children.add = new Button({
      label: 'Загрузить',
      class: styles.block_button_modal,
      events: {
        click: () => {
          store.set('flagNewAvatar', false);

          // @ts-ignore
          const file = (this.children.file.element as HTMLInputElement).files[0];
          if (file) UserController.setavatar(file);
        },
      },
    });

    this.children.file = new Input({
      name: 'file',
      id: 'load_avatar',
      class: styles.block_input,
      type: 'file',
      placeholder: 'выбрать',
    });

    this.children.close = new Button({
      label: 'x',
      class: styles.button__close,
      events: {
        click: () => {
          store.set('flagNewAvatar', false);
        },
      },
    });
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
