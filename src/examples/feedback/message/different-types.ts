import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessage } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class MessageDifferentTypesExample extends TypeDiv {
  className = 'MessageDifferentTypesExample';

  constructor() {
    super();
    const $itemStyle: IStyle = {
      marginLeft: '20px',
    };

    this.addChildren(
      new TdButton({
        slot:'Success',
        plain: true,
        events: {
          click: () => {
            new TdMessage({
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
              message: 'Warning, this is a warning message.',
              type: 'warning',
            })
          }
        }
      }),
      new TdButton({
        slot:'Message',
        plain: true,
        styleObj: $itemStyle,
        events: {
          click: () => {
            new TdMessage( 'This is a message.')
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
              message: 'Oops, this is a error message.',
              type: 'error',
            }) // todo TdMessage.error('Oops, this is a error message.')
          }
        }
      }),
    );
  }
}
