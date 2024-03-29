import Block from 'core/Block';
import template from './button.hbs';

interface ButtonProps {
  type?: string;
  label: string;
  class?: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({type: 'button', ...props});
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
