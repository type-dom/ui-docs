import { TypeDiv } from '@type-dom/framework';
import { TdText } from '@type-dom/ui';

export class TextBasicExample extends TypeDiv {
  className: 'TextBasicExample';
  constructor() {
    super();
    this.className = 'TextBasicExample';
    this.addChildren(
      new TdText({
        text: 'Default',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Primary',
        type: 'primary',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Success',
        type: 'success',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Warning',
        type: 'warning',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Danger',
        type: 'danger',
        styleObj: {
          margin: '5px 10px',
        },
      }),
    )
  }
 }
