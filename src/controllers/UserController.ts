import API, {UserAPI} from '../api/UserAPI';
import store from '../core/Store';
import router from '../core/Router';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async setavatar() {
    try {
      await this.api.update_avatar();

      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async setdata(data: any) {
    try {
      await this.api.update(data);

      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async setpassword(data: any) {
    try {
      await this.api.update_password(data);

      router.go('/profile');
    } catch (e: any) {
      store.getState().errors.error_password = 'пароль введен неверно';
      console.error(e);
    }
  }
}

export default new UserController();
