import Block from 'core/Block';
import {validation} from 'core/validation';
import AuthController from 'controllers/AuthController';
import * as styles from 'styles/styles.module.css';
import {Input} from 'components/Input/input';
import {Button} from 'components/Button/button';
import template from './signup.hbs';
import {Link} from 'components/Link/link';
import {SignupData} from 'api/AuthAPI';
import store, {withStore} from 'core/Store';

let errors;

export class SignUpBase extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.email = new Input({
      name: 'email',
      class: styles.signup_block_input,
      type: 'text',
      placeholder: 'Email',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.login = new Input({
      name: 'login',
      class: styles.signup_block_input,
      type: 'text',
      placeholder: 'Логин',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.first_name = new Input({
      name: 'first_name',
      class: styles.signup_block_input,
      type: 'text',
      placeholder: 'Имя',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.second_name = new Input({
      name: 'second_name',
      class: styles.signup_block_input,
      type: 'text',
      placeholder: 'Фамилия',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.phone = new Input({
      name: 'phone',
      class: styles.signup_block_input,
      type: 'text',
      placeholder: 'Телефон',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.password = new Input({
      name: 'password',
      class: styles.signup_block_input,
      type: 'password',
      placeholder: 'Пароль',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.repeat_password = new Input({
      name: 'repeat_password',
      class: styles.signup_block_input,
      type: 'password',
      placeholder: 'Повторите пароль',
      events: {
        blur: () => this.blur(),
      },
    });

    this.children.signup = new Button({
      label: 'Зарегистрироваться',
      class: `${styles.block_button} ${styles.button__active} `,
      events: {
        click: () => this.onSubmit(),
      },
    });

    this.children.signin = new Link({
      label: 'Войти',
      to: '/',
    });
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter(child => child instanceof Input)
      .map(child => [(child as Input).getName(), (child as Input).getValue()]);

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

    if (resultValidation) {
      AuthController.signup(registationData as SignupData);
    }
  }

  blur() {
    const values = Object.values(this.children)
      .filter(child => child instanceof Input)
      .map(child => [(child as Input).getName(), (child as Input).getValue()]);

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

const withUser = withStore(state => ({...state.errors, styles}));

export const SignUp = withUser(SignUpBase);
