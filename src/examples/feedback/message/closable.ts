import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class MessageClosableExample extends TypeDiv {
  className = 'MessageClosableExample';

  constructor() {
    super();
    const $itemStyle: IStyle = {
      marginLeft: '20px',
    };
    this.addChildren(
      new TdButton({
        slot:'Message',
        plain: true,
        events: {
          click: () => {
            new TdMessage({
              showClose: true,
              message: 'This is a message.',
            })
          }
        }
      }),
      new TdButton({
        slot:'Success',
        plain: true,
        styleObj: $itemStyle,
        events: {
          click: () => {
            new TdMessage({
              showClose: true,
              message: 'Congrats, this is a success message.',
              type: 'success',
            })
          }
        }
      }),
      new TdButton({
        slot:'Warning',
        plain: true,
        styleObj: $itemStyle,
        events: {
          click: () => {
            new TdMessage({
              showClose: true,
              message: 'Warning, this is a warning message.',
              type: 'warning',
            })
          }
        }
      }),
      new TdButton({
        slot:'Error',
        plain: true,
        styleObj: $itemStyle,
        events: {
          click: () => {
            new TdMessage({
              showClose: true,
              message: 'Oops, this is a error message.',
              type: 'error',
            })
          }
        }
      }),
    );
  }
}
