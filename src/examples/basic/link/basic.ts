import { TypeDiv } from '@type-dom/framework';
import { TdLink } from '@type-dom/ui';

export class LinkBasicExample extends TypeDiv {
  className: 'LinkBasicExample';
  constructor() {
    super();
    this.className = 'LinkBasicExample';
    this.addChildren(
      // 链接
      new TdLink({
        text: 'default',
        type: 'default',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'primary',
        type: 'primary',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'success',
        type: 'success',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'warning',
        type: 'warning',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'danger',
        type: 'danger',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'info',
        type: 'info',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
    )
 }
}
