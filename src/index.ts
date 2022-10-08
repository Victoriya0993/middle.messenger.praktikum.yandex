import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import Router from './core/Router';
import ProfilePage from './pages/ProfilePage';
import AuthController from './controllers/AuthController';
import {EditProfilePage} from './pages/EditProfile/datauser';
import {PasswordPage} from './pages/EditProfile/password';
import {ChatPage} from './pages/ChatsPage/chats';
import store from './core/Store';
import './index.css';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/profile',
  EditProfile = '/settings',
  Password = '/editpassword',
  Chats = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.Index, LoginPage)
    .use(Routes.Register, SignUp)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.EditProfile, EditProfilePage)
    .use(Routes.Password, PasswordPage)
    .use(Routes.Chats, ChatPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
