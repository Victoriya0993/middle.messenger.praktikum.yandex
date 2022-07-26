import Block from '../../core/Block';
import './chat.css';

interface ButtonProps {
  img?: string;
  name: string;
  new_message: string;
  time: string;
  count_message: number;
  onClick: () => void;
}

export class Chat extends Block {
  static componentName='Chat';
  constructor({img, name, new_message, time, count_message, onClick}: ButtonProps) {
    // Создаём враппер DOM-элемент button
    super({img, name, new_message, time, count_message, events: {click: onClick}});
    console.log(onClick);
  }

  render() {
    return `
      <div class='list_component'>
      <a href='#' class='text'>
        <div class='component'>
          <img src={{img}} class='component_img'/>
          <div class='component_main'>
            <div class='component_main_name'>{{name}}</div>
            <div class='component_main_message'>{{new_message}}</div>
          </div>
          <div class='component_info'>
            <div class='component_info_time'>{{time}}</div>
            <div class='component_info_count'>{{count_message}}</div>
          </div>
        </div>
      </a>
      </div>   
    `;
  }
}
