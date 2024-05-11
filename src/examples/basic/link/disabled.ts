import { TypeDiv } from '@type-dom/framework';
import { TdLink } from '@type-dom/ui';

export class LinkDisabledExample extends TypeDiv {
  className: 'LinkDisabledExample';
  constructor() {
    super();
    this.className = 'LinkDisabledExample';
    this.addChildren(
      // 链接
      new TdLink({
        text: 'default',
        type: 'default',
        disabled: true,
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'primary',
        type: 'primary',
        disabled: true,
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'success',
        type: 'success',
        disabled: true,
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'warning',
        type: 'warning',
        disabled: true,
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'danger',
        type: 'danger',
        disabled: true,
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
      new TdLink({
        text: 'info',
        type: 'info',
        disabled: true,
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
      }),
    )
  }
}
