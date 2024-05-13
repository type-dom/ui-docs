import { TypeDiv } from '@type-dom/framework';
import { TdLink } from '@type-dom/ui';

export class LinkUnderlineExample extends TypeDiv {
  className: 'LinkUnderlineExample';
  constructor() {
    super();
    this.className = 'LinkUnderlineExample';
    this.addChildren(
      new TdLink({
        text: 'Without Underline',
        underline: false,
      }),
      new TdLink({
        text: 'With Underline',
      }),
    )
  }
}
