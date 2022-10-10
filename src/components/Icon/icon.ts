import Block from 'core/Block';
import template from './icon.hbs';

interface IconProps {
  type?: string;
  class?: string;
  url: string;
  events: {
    click: () => void;
  };
}

export class Icon extends Block<IconProps> {
  constructor(props: IconProps) {
    super({type: 'icon', ...props});
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
