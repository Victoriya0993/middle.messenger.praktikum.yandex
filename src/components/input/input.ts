import Block from '../../core/Block';
import './input.css';

interface InputProps {
  className: string;
  placeholder?: string;
  type: string;
  value?: string;
  error?: string;
  disabled?: string;
  onChange?: () => void;
}

export class Input extends Block {
  constructor({className, placeholder, type, value, error, disabled, onChange}: InputProps) {
    // Создаём враппер DOM-элемент button
    super({
      className,
      placeholder,
      type,
      value,
      error,
      disabled,
      events: {input: onChange},
    });
  }

  render() {
    return `
    <div class='input'>
        <input placeholder="{{placeholder}}" type="{{type}}" value="{{value}}" class='{{className}}' error="{{error}}" {{disabled}}/>        
        <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
    </div>
    `;
  }
}
