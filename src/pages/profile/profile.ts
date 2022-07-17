import Block from '../../core/Block';

import avatar from '../../static/avatar.png';
import back from '../../static/back.png';
import './profile.css';

export class ProfilePage extends Block {
  protected getStateFromProps(props: any) {
    this.state = {
      values: props,
      disabled: 'disabled',
      buttonClass: {
        buttonSave: 'button_save__hide',
        buttonExit: 'button_prof__active',
        buttonChangePassword: 'button_prof__active',
        buttonChangeData: 'button_prof__active',
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

        this.setState(nextState);

        console.log('User profile', loginData);
      },
      changeData: () => {
        console.log('нажали');
        const nextState = {
          values: this.state.values,
          disabled: '',
          buttonSave: 'button_save__active',
          buttonExit: 'button__hide',
          buttonChangePassword: 'button__hide',
          buttonChangeData: 'button__hide',
        };

        this.setState(nextState);
        console.log(this.state.buttonClass);
      },
      changePassword: () => {
        console.log('Срочно меняем пароль');
      },
      exit: () => {
        console.log('Надо бы выйти');
      },
      save: () => {},
    };
  }

  render() {
    const {values, buttonClass, disabled} = this.state;

    return `
    <div class="layout">
    <a  href="chats" class="text"> 
      <img src=${back} class="back_icon"/>
      </a>
      <div class="profile_content">
        <div class="content_card">
            <a name="avatar" class="avatar"><img src=${avatar} class="avatar"></a>
            {{{Title className="card_title" text="${values.first_name}"}}}
            <div class="card_field">
                  <label class="card_field_name">Почта</label>
                  {{{Input value="${values.email}" type="text" name="email" id="email" refs="email" className="card_field_value" disabled="${disabled}"}}}
            </div>           
            <div class="card_field">
                  <label class="card_field_name">Логин</label>
                  {{{Input value="${values.login}" type="text" name="login" id="login" refs="login" className="card_field_value" disabled="${disabled}"}}}
            </div>           
            <div class="card_field">
                  <label class="card_field_name">Имя</label>
                  {{{Input value="${values.first_name}" type="text" name="first_name" id="first_name" refs="first_name" className="card_field_value" disabled="${disabled}"}}}
            </div>                     
            <div class="card_field">
                  <label class="card_field_name">Фамилия</label>
                  {{{Input value="${values.second_name}" type="text" name="second_name" id="second_name" refs="second_name" className="card_field_value" disabled="${disabled}"}}}
            </div>                    
            <div class="card_field">
                  <label class="card_field_name">Телефон</label>
                  {{{Input value="${values.phone}" type="text" name="phone" id="phone" refs="phone" className="card_field_value" disabled="${disabled}"}}}
            </div>
                                
            <div class="card_footer">
                  {{{ Button text="Сохранить" name="save" className="save_button ${buttonClass.buttonSave}" onClick=save}}}
                  {{{ Button text="Изменить данные" name="change_data" className="footer_button ${buttonClass.buttonChangeData}" onClick=changeData}}}
                  {{{ Button text="Изменить пароль" name="change_password" className="footer_button ${buttonClass.buttonChangePassword}" onClick=changePassword}}}
                  <a  href="chats" class="text">  
                  {{{ Button text="Выйти" name="exit" className="footer_button button__red ${buttonClass.buttonExit}" onClick=exit}}}
                  </a>
            </div>
        </div>
      </div>
  </div>
`;
  }
}
