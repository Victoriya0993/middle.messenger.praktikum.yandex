import Block from '../../core/Block';

import avatar from '../../static/icons/avatar.png';
import back from '../../static/icons/back.svg';
import {validation} from '../../utils/validation';
import './profile.css';

export class ProfilePage extends Block {
  protected getStateFromProps(props: any) {
    this.state = {
      values: props,
      errors: {
        login: '',
        email: '',
        first_name: '',
        second_name: '',
        phone: '',
      },
      disabled: 'disabled',
      buttonClass: {
        buttonSave: 'button_save__hide',
        buttonExit: 'button_prof__active',
        buttonChangePassword: 'button_prof__active',
        buttonChangeData: 'button_prof__active',
      },
      blur: () => {
        const profileData = {
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          email: (this.refs.email.firstElementChild as HTMLInputElement).value,
          first_name: (this.refs.first_name.firstElementChild as HTMLInputElement).value,
          second_name: (this.refs.second_name.firstElementChild as HTMLInputElement).value,
          phone: (this.refs.phone.firstElementChild as HTMLInputElement).value,
        };
        const nextState = {
          errors: {
            login: '',
            email: '',
            first_name: '',
            second_name: '',
            phone: '',
          },
          values: {...profileData},
        };

        validation(profileData, nextState.errors);

        this.setState(nextState);
      },
      save: () => {
        const profileData = {
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          email: (this.refs.email.firstElementChild as HTMLInputElement).value,
          first_name: (this.refs.first_name.firstElementChild as HTMLInputElement).value,
          second_name: (this.refs.second_name.firstElementChild as HTMLInputElement).value,
          phone: (this.refs.phone.firstElementChild as HTMLInputElement).value,
        };

        let nextState = {
          errors: {
            login: '',
            email: '',
            first_name: '',
            second_name: '',
            phone: '',
          },
          values: {...profileData},
        };

        validation(profileData, nextState.errors);

        this.setState(nextState);

        if (
          nextState.errors.login === '' &&
          nextState.errors.first_name === '' &&
          nextState.errors.second_name === '' &&
          nextState.errors.email === '' &&
          nextState.errors.phone === ''
        ) {
          nextState = {
            errors: {
              login: '',
              email: '',
              first_name: '',
              second_name: '',
              phone: '',
            },
            values: {...profileData},
            disabled: 'disabled',
            buttonClass: {
              buttonSave: 'button_save__hide',
              buttonExit: 'button_prof__active',
              buttonChangePassword: 'button_prof__active',
              buttonChangeData: 'button_prof__active',
            },
          };

          this.setState(nextState);
        }

        console.log('User profile', profileData);
      },
      changeData: () => {
        const nextState = {
          values: this.state.values,
          disabled: '',
          buttonClass: {
            buttonSave: 'button_save__active',
            buttonExit: 'button__hide',
            buttonChangePassword: 'button__hide',
            buttonChangeData: 'button__hide',
          },
        };

        this.setState(nextState);
      },
      changePassword: () => {
        console.log('Меняем пароль');
      },
      exit: () => {
        console.log('Надо бы выйти');
      },
    };
  }

  render() {
    const {errors, values, buttonClass, disabled} = this.state;

    return `
    <div class="layout">
        <a href="chats" class="text"> 
            <img src=${back} class="back_icon"/>
        </a>
        <div class="content_card">
            <a name="avatar" class="avatar"><img src=${avatar} class="avatar"></a>
            {{{Title className="card_title" text="${values.first_name}"}}}
            <div class="card_field">
                  <label class="card_field_name">Почта</label>              
                  {{{Input className="card_field_value" type="text" disabled="${disabled}" value="${values.email}" error="${errors.email}" id="email" ref="email" onBlur=blur}}}
            </div>           
            <div class="card_field">
                  <label class="card_field_name">Логин</label>
                  {{{Input type="text" name="login" className="card_field_value" value="${values.login}" error="${errors.login}" disabled="${disabled}" id="login" ref="login" onBlur=blur}}}
            </div>           
            <div class="card_field">
                  <label class="card_field_name">Имя</label>
                  {{{Input value="${values.first_name}" type="text" name="first_name" className="card_field_value" disabled="${disabled}" error="${errors.first_name}" id="first_name" ref="first_name" onBlur=blur}}}
            </div>                     
            <div class="card_field">
                  <label class="card_field_name">Фамилия</label>
                  {{{Input value="${values.second_name}" type="text" name="second_name" className="card_field_value" disabled="${disabled}" error="${errors.second_name}" id="second_name" ref="second_name" onBlur=blur}}}
            </div>                    
            <div class="card_field">
                  <label class="card_field_name">Телефон</label>
                  {{{Input value="${values.phone}" type="text" name="phone" className="card_field_value" disabled="${disabled}" error="${errors.phone}" id="phone" ref="phone" onBlur=blur}}}
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
`;
  }
}
