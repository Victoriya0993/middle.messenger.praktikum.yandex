import Block from '../../core/Block';
import * as styles from './500.module.css';
import template from './500.hbs';
import {Link} from '../../components/Link/link';

export class Error500Page extends Block {
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
