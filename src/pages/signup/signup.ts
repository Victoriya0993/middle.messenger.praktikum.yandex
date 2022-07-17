import Block from '../../core/Block';

import './signup.css';

export class SignUp extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        email: '',
        login: '',
        password: '',
        repeat_password: '',
        first_name: '',
        second_name: '',
        phone: '',
      },
      errors: {
        email: '',
        login: '',
        password: '',
        repeat_password: '',
        first_name: '',
        second_name: '',
        phone: '',
      },
      onSignUp: () => {
        const loginData = {
          email: (this.refs.email.firstElementChild as HTMLInputElement).value,
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement).value,
          first_name: (this.refs.first_name.firstElementChild as HTMLInputElement).value,
          second_name: (this.refs.second_name.firstElementChild as HTMLInputElement).value,
          phone: (this.refs.phone.firstElementChild as HTMLInputElement).value,
          repeat_password: (this.refs.repeat_password.firstElementChild as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            email: '',
            login: '',
            password: '',
            repeat_password: '',
            first_name: '',
            second_name: '',
            phone: '',
          },
          values: {...loginData},
        };

        if (!loginData.email) {
          nextState.errors.email = 'Email не задан';
        }

        if (!loginData.first_name) {
          nextState.errors.first_name = 'Имя не задано';
        }

        if (!loginData.second_name) {
          nextState.errors.second_name = 'Фамилия не задана';
        }

        if (!loginData.phone) {
          nextState.errors.phone = 'Введите номер телефона';
        }

        if (!loginData.login) {
          nextState.errors.login = 'Логин не задан';
        } else if (loginData.login.length < 4) {
          nextState.errors.login = 'Логин должен содержать более 3 символов';
        }

        if (!loginData.password) {
          nextState.errors.password = 'Пароль не задан';
        }

        if (!loginData.repeat_password) {
          nextState.errors.repeat_password = 'Повторите пароль';
        }

        if (loginData.password != loginData.repeat_password) {
          nextState.errors.repeat_password = 'Пароли не совпадают';
          nextState.errors.password = 'Пароли не совпадают';
        }

        this.setState(nextState);

        console.log('login/password', loginData);
      },
      onLogin: () => {
        console.log('Надо бы на страницу авторизации перекинуть');
      },
    };
  }

  render() {
    const {errors, values} = this.state;

    return `
    <div class="layout">
      <div class="block">
          {{{ Title className="block_title" text="Регистрация"}}}
          <div class="block_body">
              {{{Input placeholder="Почта" type="text" className="block_input" name="email" value="${values.email}" error="${errors.email}"  id="email" ref="email"}}}
              {{{Input placeholder="Логин" type="text" className="block_input" name="login" value="${values.login}" error="${errors.login}"  id="login" ref="login"}}}
              {{{Input placeholder="Имя" type="text" className="block_input" name="first_name" value="${values.first_name}" error="${errors.first_name}"  id="first_name" ref="first_name"}}}
              {{{Input placeholder="Фамилия" type="text" className="block_input" name="second_name" value="${values.second_name}" error="${errors.second_name}"  id="second_name" ref="second_name"}}}
              {{{Input placeholder="Телефон" type="tel" className="block_input" name="phone" value="${values.phone}" error="${errors.phone}"  id="phone" ref="phone"}}}
              {{{Input placeholder="Пароль" type="password" className="block_input" name="password" value="${values.password}" error="${errors.password}"  id="password" ref="password"}}}
              {{{Input placeholder="Пароль (еще раз)" type="password" className="block_input" name="repeat_password" value="${values.repeat_password}" error="${errors.repeat_password}"  id="repeat_password" ref="repeat_password"}}}
          </div>
          <div class="block_footer">
          <a  class="text">  
              {{{Button className="block_button button__active" text="Зарегистрироваться" name="Sign up" onClick=onSignUp}}}
              </a>
              <a  href="chats" class="text">  
              {{{Button className="block_button button__default" text="Войти" name="Sign in" onClick=onLogin}}}
              </a>
          </div>
      </div>
    </div>
    `;
  }
}
