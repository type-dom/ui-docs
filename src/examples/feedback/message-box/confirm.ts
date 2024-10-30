import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage, TdMessageBox } from '@type-dom/ui';

export class MessageBoxConfirmExample extends TypeDiv {
  className = 'MessageBoxConfirmExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Click to open the Message Box',
        plain: true,
        events: {
          click: () => {
            TdMessageBox.confirm(
              'proxy will permanently delete the file. Continue?',
              'Warning',
              {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
              }
            )
              .then(({ action }) => {
                console.log('action is ', action);
                if (action === 'confirm') {
                  new TdMessage({
                    type: 'success',
                    message: 'Delete completed'
                  });
                } else if (action === 'cancel') {
                  new TdMessage({
                    type: 'info',
                    message: 'Delete canceled'
                  });
                }
              });
          }
        }
      })
    );
  }
}
