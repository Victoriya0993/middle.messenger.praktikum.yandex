import Block from '../../core/Block';
import template from './messenger.hbs';
import {Message} from '../Message/massage';
import {Input} from '../Input_/input';
import {Button} from '../Button_/button';
import MessagesController, {Message as MessageInfo} from '../../controllers/MessagesController';
import {withStore} from '../../core/Store';
import * as styles from '../../styles/styles.module.css';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
}

class MessengerBase extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }
  protected init() {
    this.children.messages = this.createMessages(this.props);

    this.children.input = new Input({
      type: 'text',
      placeholder: 'Сообщение',
      name: 'message',
      class: styles.content_messenger_input,
    });

    this.children.button = new Button({
      label: 'Отправить',
      type: 'button',
      class: styles.block_button_messenger,
      events: {
        click: () => {
          const input = this.children.input as Input;
          const message = input.getValue();

          input.setValue('');

          MessagesController.sendMessage(this.props.selectedChat!, message);
        },
      },
    });
  }

  protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map((data) => {
      return new Message({...data, isMine: props.userId === data.user_id});
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props, styles});
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);
