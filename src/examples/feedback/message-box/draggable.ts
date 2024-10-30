import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage, TdMessageBox } from '@type-dom/ui';

export class MessageBoxDraggableExample extends TypeDiv {
  className = 'MessageBoxDraggableExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Open a draggable Message Box',
        plain: true,
        events: {
          click: () => {
            TdMessageBox.confirm(
              'proxy will permanently delete the file. Continue?',
              'Warning',
              {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
                draggable: true
              }
            )
              .then(({ action }) => {
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
      }),
      new TdButton({
        slot: 'Open a overflow draggable Message Box',
        plain: true,
        styleObj: {
          marginLeft: '12px'
        },
        events: {
          click: () => {
            TdMessageBox.confirm(
              'proxy will permanently delete the file. Continue?',
              'Warning',
              {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
                draggable: true,
                overflow: true
              }
            )
              .then(({ action }) => {
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
