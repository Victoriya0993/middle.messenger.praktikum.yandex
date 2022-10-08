import {ChatInfo} from '../../api/ChatAPI';
import Block from '../../core/Block';
import {withStore} from '../../core/Store';
import template from './chat.hbs';
import styles from './styles.module.css';
import img from '../../static/icons/icon.png';

interface ChatProps {
  img: string;
  id: number;
  title: any;
  time?: any;
  unread_count: number;
  selectedChat: ChatInfo;
  last_message: any;
  class?: string;
  events?: {
    click: () => void;
  };
}

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      ...this.props,
      img,
      isSelected: this.props.id === this.props.selectedChat?.id,
      styles,
    });
  }
}

export const withSelectedChat = withStore(state => ({
  selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat),
}));

export const Chat = withSelectedChat(ChatBase);
