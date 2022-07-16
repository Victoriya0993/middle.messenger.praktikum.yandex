import Block from '../../core/Block';

import './500.css';

export class Error500Page extends Block {
  render() {
    return `
    <main class="layout">
    <div class="error">
        {{{ Title className="error_name" text="500"}}}
        {{{ Title className="error_comment" text="Мы уже фиксим"}}}
        {{{ Button className="block_button button__default" text="Назад к чатам"}}}
    </div>
    </main>
    `;
  }
}
