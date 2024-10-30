import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdNotification } from '@type-dom/ui';

export class NotificationDifferentTypesExample extends TypeDiv {
  className = 'NotificationDifferentTypesExample';

  constructor() {
    super();
    const $btnStyle = {
      marginLeft: '20px'
    }
    this.addChildren(
      new TdButton({
        slot: ' Success ',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Success',
              message: 'This is a success message',
              type: 'success',
              duration: 0,
            })
          }
        }
      }),
      new TdButton({
        slot: ' Warning ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Warning',
              message: 'This is a warning message',
              type: 'warning',
            })
          }
        }
      }),
      new TdButton({
        slot: ' Info ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Info',
              message: 'This is an info message',
              type: 'info',
            })
          }
        }
      }),
      new TdButton({
        slot: ' Error ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Error',
              message: 'This is an error message',
              type: 'error',
            })
          }
        }
      }),
    );
  }
}
