import Block from '../../core/Block';

import './login.css';

export class LoginPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      onLogin: () => {
        const loginData = {
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement).value,
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
          },
          values: {...loginData},
        };

        if (!loginData.login) {
          nextState.errors.login = 'Логин не задан';
        } else if (loginData.login.length < 4) {
          nextState.errors.login = 'Логин должен содержать более 3 символов';
        }

        if (!loginData.password) {
          nextState.errors.password = 'Пароль не задан';
        }

        this.setState(nextState);

        console.log('login/password', loginData);
      },
      onSignUp: () => {
        console.log('Надо бы на страницу регистрации перекинуть');
      },
    };
  }

  render() {
    const {errors, values} = this.state;

    return `
    <main class="layout">
      <div class="block">
          {{{ Title className="block_title" text="Вход"}}}
          <div class="block_body">              
              {{{Input className="block_input" placeholder="Логин" type="text" value="${values.login}" error="${errors.login}"  id="login" ref="login"}}}
              {{{Input className="block_input" placeholder="Пароль" type="password" value="${values.password}" error="${errors.password}" id="password" ref="password"}}}
          </div>
          <div class="block_footer">           
              {{{Button className="block_button button__active" text="Авторизация" onClick=onLogin }}}         
              {{{Button className="block_button button__default" text="Нет аккаунта?" onClick=onSignUp}}}
          </div>
      </div>
    </main>
    `;
  }
}
