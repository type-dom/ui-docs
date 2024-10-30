import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage, TdMessageBox } from '@type-dom/ui';

export class MessageBoxPromptExample extends TypeDiv {
  className = 'MessageBoxPromptExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Click to open the Message Box',
        plain: true,
        events: {
          click: () => {
            TdMessageBox.prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern:
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            })
              .then(({ action, input }) => {
                if (action === 'confirm') {
                  const value = input.value;
                  new TdMessage({
                    type: 'success',
                    message: `Your email is:${value}`
                  });
                } else if (action === 'cancel') {
                  new TdMessage({
                    type: 'info',
                    message: 'Input canceled'
                  });
                }
              })
          }
        }
      })
    );
  }
}
