import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdNotification } from '@type-dom/ui';

export class NotificationPositioningExample extends TypeDiv {
  className = 'NotificationPositioningExample';

  constructor() {
    super();
    const $btnStyle = {
      marginLeft: '20px'
    }
    this.addChildren(
      new TdButton({
        slot: ' Top Right ',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Custom Position',
              message: "I'm at the top right corner",
            })
          }
        }
      }),
      new TdButton({
        slot: ' Bottom Right ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Custom Position',
              message: "I'm at the bottom right corner",
              position: 'bottom-right',
            })
          }
        }
      }),
      new TdButton({
        slot: ' Bottom Left ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Custom Position',
              message: "I'm at the bottom left corner",
              position: 'bottom-left',
            })
          }
        }
      }),
      new TdButton({
        slot: ' Top Left ',
        plain: true,
        styleObj: $btnStyle,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'Custom Position',
              message: "I'm at the top left corner",
              position: 'top-left',
            })
          }
        }
      }),
    );
  }
}
