import LoginPage from 'pages/LoginPage';
import SignUp from 'pages/SignupPage';
import Router from 'core/Router';
import ProfilePage from 'pages/ProfilePage';
import ChatPage from 'pages/ChatsPage';
import Error404Page from 'pages/404';
import Error500Page from 'pages/500';
import {EditProfilePage} from 'pages/EditProfile/datauser';
import {PasswordPage} from 'pages/EditProfile/password';
import store from 'core/Store';
import './index.css';
import AuthController from 'controllers/AuthController';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/profile',
  EditProfile = '/settings',
  Password = '/editpassword',
  Chats = '/messenger',
  Error404 = '/404',
  Error500 = '/500',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.Index, LoginPage)
    .use(Routes.Register, SignUp)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.EditProfile, EditProfilePage)
    .use(Routes.Password, PasswordPage)
    .use(Routes.Chats, ChatPage)
    .use(Routes.Error404, Error404Page)
    .use(Routes.Error500, Error500Page);

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
      Router.go(Routes.Chats);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
