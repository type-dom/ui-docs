import { Div, TypeDiv } from '@type-dom/framework';
import { TdBadge, TdButton, TdTag } from '@type-dom/ui';

export class TagSizesExample extends TypeDiv {
  className = 'TagSizesExample';

  constructor() {
    super();
    const $item = {
      marginTop: '10px',
      marginRight: '30px'
    };

    this.addChild(new Div({
      name: 'basic',
      styleObj: {
        display: 'flex',
      },
      childNodes: [
        new TdTag({
          size: 'large',
          slot: 'Large'
        }),
        new TdTag({
          slot: 'Default'
        }),
        new TdTag({
          size: 'small',
          slot: 'Small'
        }),
      ]
    }));
  }
}
