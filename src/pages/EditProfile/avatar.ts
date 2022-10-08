import Block from '../../core/Block';
import * as styles from './styles.module.css';
import {Input} from '../../components/Input';
import template from './avatar.hbs';
import UserController from '../../controllers/UserController';
import {Link} from '../../components/Link';

export class AvatarPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.file = new Input({
      name: 'file',
      type: 'file',
      placeholder: 'Выберите аватарку',
      events: {
        change: () => this.onSubmit(),
      },
    });
    this.children.input = new Input({
      name: 'file',
      type: 'submit',
      placeholder: 'Выберите аватарку',
      events: {
        click: () => this.onSubmit(),
      },
    });

    this.children.exit = new Link({
      label: 'Назад',
      to: '/profile',
    });
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter(child => child instanceof Input)
      .map(child => [(child as Input).getName(), (child as Input).getValue()]);

    const data = Object.fromEntries(values);

    UserController.setavatar();
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
