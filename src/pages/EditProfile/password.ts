import Block from '../../core/Block';
import {validation} from '../../core/validation';
import * as styles from './styles.module.css';
import {Input} from '../../components/Input_/input';
import {Button} from '../../components/Button_/button';
import template from './password.hbs';
import store, {withStore} from '../../core/Store';
import {Link} from '../../components/Link/link';
import UserController from '../../controllers/UserController';

let errors;

export class PasswordPageBase extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.old_password = new Input({
      name: 'old_password',
      class: styles.block_input,
      type: 'password',
      placeholder: 'Введите старый пароль',
    });

    this.children.new_password = new Input({
      name: 'password',
      class: styles.block_input,
      type: 'password',
      placeholder: 'Введите новый пароль',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.repeat_new_password = new Input({
      name: 'repeat_password',
      class: styles.block_input,
      type: 'password',
      placeholder: 'Повторите пароль',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.save = new Button({
      label: 'Сохранить',
      class: styles.block_button,
      events: {
        click: () => this.onSubmit(),
      },
    });

    this.children.link = new Link({
      label: 'Отменить',
      to: '/profile',
    });
  }

  onSubmit() {
    const values = Object.values(this.children)
        .filter((child) => child instanceof Input)
        .map((child) => [(child as Input).getName(), (child as Input).getValue()]);

    const data = Object.fromEntries(values);
    console.log(data);

    errors = {
      error_email: '',
      error_login: '',
      error_password: '',
      error_repeat_password: '',
      error_first_name: '',
      error_second_name: '',
      error_phone: '',
    };

    const resultValidation = validation(data, errors);

    store.set('errors', errors);

    if (resultValidation) {
      UserController.setpassword({
        oldPassword: data.old_password,
        newPassword: data.password,
      });
    }
  }

  blur() {
    const values = Object.values(this.children)
        .filter((child) => child instanceof Input)
        .map((child) => [(child as Input).getName(), (child as Input).getValue()]);

    const registationData = Object.fromEntries(values);

    errors = {
      error_email: '',
      error_login: '',
      error_password: '',
      error_repeat_password: '',
      error_first_name: '',
      error_second_name: '',
      error_phone: '',
    };

    const resultValidation = validation(registationData, errors);

    store.set('errors', errors);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}

const withUser = withStore((state) => ({...state.errors, styles}));

export const PasswordPage = withUser(PasswordPageBase);
