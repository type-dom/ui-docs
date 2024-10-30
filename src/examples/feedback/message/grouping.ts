import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage } from '@type-dom/ui';

export class MessageGroupingExample extends TypeDiv {
  className = 'MessageGroupingExample';

  constructor() {
    super();

    this.addChild(
      new TdButton({
        slot:'Show message',
        plain: true,
        events: {
          click: () => {
            console.warn('MessageGroupingExample');
            new TdMessage({
              message: 'This is a message.',
              grouping: true,
              type: 'success',
              // duration: 0,
            })
          }
        }
      }),
    );
  }
}
