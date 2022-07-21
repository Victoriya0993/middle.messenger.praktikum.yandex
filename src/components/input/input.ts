import Block from '../../core/Block';
import './input.css';

interface InputProps {
  className: string;
  id: string;
  placeholder?: string;
  type: string;
  value?: string;
  error?: string;
  disabled?: string;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export class Input extends Block {
  constructor({className, id, placeholder, type, value, error, disabled, onChange, onBlur, onFocus}: InputProps) {
    // Создаём враппер DOM-элемент button
    super({
      className,
      id,
      placeholder,
      type,
      value,
      error,
      disabled,
      events: {
        input: onChange,
        focusin: () => {
          const divError = document.querySelectorAll(`#error_${id}`);
          divError.forEach((error: any) => (error.textContent = ''));
        },
        focusout: onBlur,
      },
    });
  }

  render() {
    return `
    <form class='input'>
        <input placeholder="{{placeholder}}" type="{{type}}" value="{{value}}" class='{{className}}' error="{{error}}" {{disabled}}/>        
        <div id="error_{{id}}" class="input__error">{{#if error}}{{error}}{{/if}}</div>
    </form>
    `;
  }
}
