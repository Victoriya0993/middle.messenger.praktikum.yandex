import Block from 'core/Block';
import template from './datauser.hbs';
import store, {withStore} from 'core/Store';
import AuthController from 'controllers/AuthController';
import UserController from 'controllers/UserController';
import {Button} from 'components/Button/button';
import avatar from 'static/icons/avatar.png';
import back from 'static/icons/back.svg';
import {Icon} from 'components/Icon/icon';
import {Input} from 'components/Input/input';
import  styles from 'styles/styles.module.css';

class EditProfileBase extends Block {
  init() {
    this.children.back_icon = new Icon({
      url: back,
      class: styles.back_icon,
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });

    this.children.avatar = new Icon({
      url: `https://ya-praktikum.tech/api/v2/resources${store.getState().user.avatar}` || avatar,
      class: styles.avatar,
      events: {
        click: () => {},
      },
    });

    this.children.editemail = new Input({
      name: 'email',
      class: styles.card_field_value,
      type: 'text',
      placeholder: '',
    });
    (this.children.editemail as Input).setValue(store.getState().user.email);

    this.children.editlogin = new Input({
      name: 'login',
      class: styles.card_field_value,
      type: 'text',
      placeholder: '',
    });
    (this.children.editlogin as Input).setValue(store.getState().user.login);

    this.children.editfirst_name = new Input({
      name: 'first_name',
      class: styles.card_field_value,
      type: 'text',
      placeholder: '',
    });
    (this.children.editfirst_name as Input).setValue(store.getState().user.first_name);

    this.children.editsecond_name = new Input({
      name: 'second_name',
      class: styles.card_field_value,
      type: 'text',
      placeholder: '',
    });
    (this.children.editsecond_name as Input).setValue(store.getState().user.second_name);

    this.children.editphone = new Input({
      name: 'phone',
      class: styles.card_field_value,
      type: 'text',
      placeholder: '',
    });
    (this.children.editphone as Input).setValue(store.getState().user.phone);

    this.children.button_exit = new Button({
      label: 'Сохранить',
      class: `${styles.button_save__active} ${styles.save_button}`,
      events: {
        click: () => this.onSubmit(),
      },
    });
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter(child => child instanceof Input)
      .map(child => [(child as Input).getName(), (child as Input).getValue()]);

    const data = Object.fromEntries(values);

    console.log(data);

    const newdata = {
      first_name: data.first_name,
      second_name: data.second_name,
      display_name: store.getState().user.display_name || data.first_name,
      login: data.login,
      email: data.email,
      phone: data.phone,
    };

    console.log(newdata);
    UserController.setdata(newdata);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore(state => ({...state.user, styles}));

export const EditProfilePage = withUser(EditProfileBase);
