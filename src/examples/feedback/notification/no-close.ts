import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdNotification } from '@type-dom/ui';

export class NotificationNoCloseExample extends TypeDiv {
  className = 'NotificationNoCloseExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: ' Hide close button ',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            TdNotification.success({
              title: 'Info',
              message: 'This is a message without close button',
              showClose: false,
            })
          }
        }
      }),
    );
  }
}
