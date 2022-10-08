import Block from '../../core/Block';
import template from './profile.hbs';
import store, {withStore} from '../../core/Store';
import AuthController from '../../controllers/AuthController';
import {Button} from '../../components/Button';
import * as styles from './profile.module.css';
import avatar from '../../static/icons/avatar.png';
import back from '../../static/icons/back.svg';
import {Icon} from '../../components/Icon';
import router from '../../core/Router';

class ProfilePageBase extends Block {
  init() {
    this.children.back_icon = new Icon({
      url: back,
      class: styles.back_icon,
      events: {
        click: () => {
          router.go('/messenger');
        },
      },
    });

    this.children.avatar = new Icon({
      url: `https://ya-praktikum.tech/api/v2/resources${store.getState().user.avatar}` || avatar,
      class: styles.avatar,
      events: {
        click: () => {
        },
      },
    });

    this.children.button_change_data = new Button({
      label: 'Изменить данные',
      class: `${styles.footer_button} ${styles.button_prof__active}`,
      events: {
        click: () => {
          router.go('/settings');
        },
      },
    });

    this.children.button_change_password = new Button({
      label: 'Изменить пароль',
      class: `${styles.footer_button} ${styles.button_prof__active}`,
      events: {
        click: () => {
          router.go('/editpassword');
        },
      },
    });

    this.children.button_exit = new Button({
      label: 'Выйти',
      class: `${styles.footer_button} ${styles.button__red} ${styles.button_prof__active}`,
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore(state => ({...state.user, styles}));

export const ProfilePage = withUser(ProfilePageBase);
