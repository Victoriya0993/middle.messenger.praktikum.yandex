import Block from '../../core/Block';

import './chats.css';

export class ChatsPage extends Block {
  render() {
    // const { errors, values } = this.state;

    return `
    <div class="layout">
      <div class="chats_navigation">
        <div class="navigation_profile">      
        <a  href="profile" class="text">      
            {{{ Button className="profile_button profile_button__default" name="profile" text="Профиль"}}}
            </a>
        </div>
        <div class="navigation_search">
            <div class="search_text">Поиск</div>
        </div>
        <nav class="navigation_list">
           Здесь будет список чатов
        </nav>
      </div>
        <div class="chats_content">
        <div class="content_text content_text__default">
            Выберите чат чтобы отправить сообщение
        </div>
      </div>
    </div>
    `;
  }
}
