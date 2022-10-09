import Block from '../../core/Block';
import * as styles from './404.module.css';
import template from './404.hbs';
import {Link} from '../../components/link/link';

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
