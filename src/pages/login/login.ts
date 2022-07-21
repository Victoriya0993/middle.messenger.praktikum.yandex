import Block from '../../core/Block';
import {validation} from '../../utils/validation';

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

        validation(loginData, nextState.errors);

        this.setState(nextState);

        console.log('login/password', loginData);
      },
      onSignUp: () => {
        console.log('Надо бы на страницу регистрации перекинуть');
      },
      blur: () => {
        const loginData = {
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement).value,
        };
        this.state.onLogin();
        const nextState = {
          errors: {
            login: '',
            password: '',
          },
          values: {...loginData},
        };

        validation(loginData, nextState.errors);

        this.setState(nextState);
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
              {{{Input className="block_input" placeholder="Логин" type="text" value="${values.login}" error="${errors.login}" id="login" ref="login" onChange=input onBlur=blur}}}
              {{{Input className="block_input" placeholder="Пароль" type="password" value="${values.password}" error="${errors.password}" id="password" ref="password" onChange=input onBlur=blur}}}
          </div>
          <div class="block_footer"> 
          <a  href="chats" class="text">       
              {{{Button className="block_button button__active" text="Авторизация" onClick=onLogin }}} 
          </a>  
          <a  href="signup" class="text">        
              {{{Button className="block_button button__default" text="Нет аккаунта?" onClick=onSignUp}}}
          </a>    
          </div>
      </div>
    </main>
    `;
  }
}
