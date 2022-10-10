import Block from 'core/Block';
import template from './message.hbs';
import * as styles from 'styles/styles.module.css';

interface MessageProps {
  content: string;
  isMine: boolean;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props, styles});
  }
}
