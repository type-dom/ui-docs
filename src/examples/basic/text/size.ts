import { TypeDiv } from '@type-dom/framework';
import { TdText } from '@type-dom/ui';

export class TextSizeExample extends TypeDiv {
  className: 'TextSizeExample';
  constructor() {
    super();
    this.className = 'TextSizeExample';
    this.addChildren(
      new TdText({
        text: 'Large',
        size: 'large',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Default',
        size: 'default',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Small',
        size: 'small',
        styleObj: {
          margin: '5px 10px',
        },
      }),
    )
  }
}
