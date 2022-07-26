import Block from '../../core/Block';

interface TitleProps {
  className: string;
  text: string;
}

export class Title extends Block {
  static componentName='Title';
  constructor({className, text}: TitleProps) {
    // Создаём враппер DOM-элемент button
    super({className, text});
  }

  render() {
    return `
    <label class={{className}}>
      {{text}}
    </label>   
    `;
  }
}
