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
  // const App = new LoginPage()
  const App = new ProfilePage(getProfile(2));
  // const App = new SignUp()
  // const App = new ChatsPage()
  // const App = new Error404Page()
  // const App = new Error500Page()

  renderDom(App);
});
