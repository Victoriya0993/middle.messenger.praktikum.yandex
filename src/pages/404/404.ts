import Block from 'core/Block';
import template from './404.hbs';
import {Link} from 'components/Link/link';
import * as styles from 'styles/styles.module.css';

export class Error404Page extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.link = new Link({
      label: 'Назад к чатам',
      to: '/messenger',
    });
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
