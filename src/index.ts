import 'babel-core/register';
import renderDom from './core/renderDOM';
import {Block, registerComponent} from './core';

import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import SignUp from './pages/signup';
import ChatsPage from './pages/chats';
import Error404Page from './pages/404';
import Error500Page from './pages/500';

import Button from './components/button';
import Input from './components/input';
import Title from './components/title';
import Chat from './components/chat';

import './index.css';
import {getProfile, getChats} from './utils/getData';

document.addEventListener('DOMContentLoaded', () => {
  registerComponent(Button);
  registerComponent(Title);
  registerComponent(Input);
  registerComponent(Chat);
  const path = window.location.pathname;

  let App: Block = new LoginPage();
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
      App = new ChatsPage(getChats());
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
