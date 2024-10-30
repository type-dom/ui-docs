import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdNotification } from '@type-dom/ui';

export class NotificationOffsettingExample extends TypeDiv {
  className = 'NotificationOffsettingExample';

  constructor() {
    super();

    this.addChildren(
      new TdButton({
        slot: ' Notification with offset ',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            TdNotification.success({
              title: 'Success',
              message: 'This is a success message',
              offset: 100,
            })
          }
        }
      }),
    );
  }
}
