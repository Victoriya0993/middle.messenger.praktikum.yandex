import Block from 'core/Block';
import template from './input.hbs';

interface InputProps {
  name: string;
  id?: string;
  class?: string;
  error?: string;
  type: string;
  placeholder: string;
  events?: {
    blur: () => void;
    click: () => void;
    change: () => void;
  };
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  public setValue(value: string) {
    (this.element as HTMLInputElement).value = value;
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
