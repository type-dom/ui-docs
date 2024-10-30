import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage } from '@type-dom/ui';

export class MessageCenterContentExample extends TypeDiv {
  className = 'MessageCenterContentExample';

  constructor() {
    super();

    this.addChild(
      new TdButton({
        slot:'Centered text',
        plain: true,
        events: {
          click: () => {
            new TdMessage({
              message: 'Centered Text',
              showClose: true,
              center: true
            });
          }
        }
      })
    );
  }
}
