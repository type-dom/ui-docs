import { TypeDiv } from '@type-dom/framework';
import { IAction, TdButton, TdMessage, TdMessageBox } from '@type-dom/ui';

export class MessageBoxDistinguishableCloseCenterExample extends TypeDiv {
  className = 'MessageBoxDistinguishableCloseCenterExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Click to open the Message Box',
        plain: true,
        events: {
          click: () => {
            TdMessageBox.confirm(
              'You have unsaved changes, save and proceed?',
              'Confirm',
              {
                distinguishCancelAndClose: true,
                confirmButtonText: 'Save',
                cancelButtonText: 'Discard Changes',
              }
            )
              .then(({ action }) => {
                if (action === 'confirm') {
                  // Save changes
                  new TdMessage({
                    type: 'info',
                    message: 'Changes saved. Proceeding to a new route.',
                  });
                } else if (action === 'cancel') {
                  // Discard changes
                  new TdMessage({
                    type: 'info',
                    message: 'Changes discarded. Proceeding to a new route.',
                  });
                } else {
                  new TdMessage({
                    type: 'info',
                    message: 'Stay in the current route',
                  });
                }
              })
              // .catch(({ action }) => {
              //   new TdMessage({
              //     type: 'info',
              //     message:
              //       action === 'cancel'
              //         ? 'Changes discarded. Proceeding to a new route.'
              //         : 'Stay in the current route',
              //   });
              // });
          },
        },
      })
    );
  }
}
