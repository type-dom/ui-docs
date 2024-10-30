import { TypeDiv } from '@type-dom/framework';
import { IAction, TdButton, TdMessageBox, TdMessage } from '@type-dom/ui';

export class MessageBoxAlertExample extends TypeDiv {
  className = 'MessageBoxAlertExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Click to open the Message Box',
        plain: true,
        events: {
          click: () => {
            TdMessageBox.alert('This is a message', 'Title', {
              // if you want to disable its autofocus
              // autofocus: false,
              confirmButtonText: 'OK',
              callback: (action: IAction) => {
                new TdMessage({
                  type: 'info',
                  message: `action: ${action}`
                });
              }
            });
          }
        }
      })
    );
  }
}
