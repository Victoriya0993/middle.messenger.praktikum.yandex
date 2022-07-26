import Block from '../../core/Block';

interface ButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

export class Button extends Block {
  static componentName='Button';
  constructor({className, text, onClick}: ButtonProps) {
    // Создаём враппер DOM-элемент button
    super({className, text, events: {click: onClick}});
  }

  render() {
    return `
    <div class="button">
      <button class='{{className}}'>{{text}}</button>
    </div>    
    `;
  }
}
