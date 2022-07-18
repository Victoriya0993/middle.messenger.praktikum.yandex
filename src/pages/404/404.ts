import Block from '../../core/Block';

import './404.css';

export class Error404Page extends Block {
  render() {
    return `
    <main class="layout">
    <div class="error">
        {{{ Title className="error_name" text="404"}}}
        {{{ Title className="error_comment" text="Не туда попали"}}}
        {{{ Button className="block_button button__default" text="Назад к чатам"}}}
    </div>
    </main>
    `;
  }
}
