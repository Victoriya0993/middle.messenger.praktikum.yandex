import 'babel-core/register';
import renderDom from './core/renderDOM';
import {registerComponent} from './core';

import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import SignUp from './pages/signup';
import ChatsPage from './pages/chats';
import Error404Page from './pages/404';
import Error500Page from './pages/500';

import Button from './components/button';
import Input from './components/input';
import Title from './components/title';

import './index.css';
import {getProfile} from './utils/getData';

registerComponent(Button);
registerComponent(Title);
registerComponent(Input);
// registerComponent(Layout);

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  let App: Block;
  switch (path) {
    case '/':
      App = new LoginPage();
      break;
    case '/login':
      App = new LoginPage();
      break;
    case '/signup':
      App = new SignUp();
      break;
    case '/profile':
      App = new ProfilePage(getProfile(2));
      break;
    case '/chats':
      App = new ChatsPage();
      break;
    case '/404':
      App = new Error404Page();
      break;
    case '/500':
      App = new Error500Page();
      break;
    default:
      App = new LoginPage();
      break;
  }

  renderDom(App);
});
