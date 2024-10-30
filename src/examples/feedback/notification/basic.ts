import { I, TypeDiv } from '@type-dom/framework';
import { TdButton, TdNotification } from '@type-dom/ui';

export class NotificationBasicExample extends TypeDiv {
  className = 'NotificationBasicExample';

  constructor() {
    super();
    const $btnStyle = {
      marginLeft: '20px'
    }
    this.addChildren(
      new TdButton({
        slot: ' Closes automatically ',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Title',
              // message: h('i', { style: 'color: teal' }, 'This is a reminder'),
              message: new I({
                text: 'This is a reminder',
                styleObj: {
                  color: 'teal'
                }
              })
            })
          }
        }
      }),
      new TdButton({
        slot: ' Won\'t close automatically ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Prompt',
              message: 'This is a message that does not automatically close',
              duration: 0,
            })
          }
        }
      }),
    );
  }
}
