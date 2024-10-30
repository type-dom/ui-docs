import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdNotification } from '@type-dom/ui';

export class NotificationRawHtmlExample extends TypeDiv {
  className = 'NotificationRawHtmlExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: ' Use HTML String ',
        plain: true,
        events: {
          click: () => {
            console.log('click');
            new TdNotification({
              title: 'HTML String',
              dangerouslyUseHTMLString: true,
              message: '<strong>This is <i>HTML</i> string</strong>',
              duration: 0,
            })
          }
        }
      }),
    );
  }
}
