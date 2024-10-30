import { I, P, Span, TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage } from '@type-dom/ui';

export class MessageBasicExample extends TypeDiv {
  className = 'MessageBasicExample';

  constructor() {
    super();
    const $btnStyle = {
      marginLeft: '20px'
    }
    this.addChildren(
      new TdButton({
        slot:'Show message',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            new TdMessage('This is a message.')
          }
        }
      }),
      new TdButton({
        slot:'VNode',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdMessage({
              message: new P({
                styleObj: {
                  lineHeight: 1,
                  fontSize: '14px'
                },
                childNodes: [
                  new Span({
                    text: 'Message can be '
                  }),
                  new I({
                    text: 'VNode',
                    styleObj: {
                      color: 'teal',
                    }
                  })
                ]
              }),
              duration: 0,
            })
          }
        }
      }),
    );
  }
}
