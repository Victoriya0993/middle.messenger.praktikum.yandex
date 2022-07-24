import Block from '../../core/Block';

import './chats.css';
import avatar from '../../static/icons/avatar.png';
import clip from '../../static/icons/clip.svg';
import to from '../../static/icons/to.svg';
import {getContentChat} from '../../utils/getData';

export class ChatsPage extends Block {
  protected getStateFromProps(chats: any) {
    this.state = {
      list_chats: chats[0],
      chat_id: '',
      content_chat: 'Выберите чат, чтобы отправить сообщение',
      message: '',
      openChat: (e: any) => {
        const id = 1;
        const content = getContentChat(id);
        const nextState = {
          chats: this.state.list_chats,
          content_chat: content,
          chat_id: id,
        };

        this.setState(nextState);
      },
    };
  }

  render() {
    const {list_chats, content_chat, message, chat_id} = this.state;

    let className = 'content_message__hide';
    if (chat_id != '') className = 'content_message';

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
        <div class="navigation_list">
            {{{Chat img="${avatar}" name="${list_chats.name}" new_message="${list_chats.new_message}" time="${list_chats.time}" count_message="${list_chats.count_message}" onClick=openChat id="chat" ref="chat"}}}
        </div>
      </div>
      <div class="chats_content">
        <div class="content_text content_text__default">
            ${content_chat}
        </div>
        <div class="${className}">
          <img src='${clip}' class='content_message_img'/>
          {{{Input className="content_message_input" type="text" placeholder="Сообщение" value="${message}" id="message" ref="message"}}}
          <img src='${to}' class='content_message_img'/>
        </div>
      </div>
    </div>
    `;
  }
}
