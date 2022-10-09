// import { LoginRequest } from '../../api_/apiLogin_';
import Block from '../../core/Block';
import AuthController from '../../controllers/AuthController';
import * as styles from './login.module.css';
import {Input} from '../../components/Input/input';
import {Button} from '../../components/Button/button';
import template from './login.hbs';
import {Link} from '../../components/Link/link';
import {SignupData} from '../../api/AuthAPI';

export class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.login = new Input({
      name: 'login',
      class: styles.block_input,
      type: 'text',
      placeholder: 'Логин',
    });

    this.children.password = new Input({
      name: 'password',
      class: styles.block_input,
      type: 'password',
      placeholder: 'Пароль',
    });

    this.children.button = new Button({
      label: 'Войти',
      class: styles.block_button,
      events: {
        click: () => this.onSubmit(),
      },
    });

    this.children.link = new Link({
      label: 'Нет аккаунта?',
      to: '/sign-up',
    });
  }
  onSubmit() {
    const values = Object.values(this.children)
        .filter((child) => child instanceof Input)
        .map((child) => [(child as Input).getName(), (child as Input).getValue()]);

    const data = Object.fromEntries(values);
    console.log(data as SignupData);

    AuthController.signin(data as SignupData);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
