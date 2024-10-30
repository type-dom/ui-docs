import { Div, Span, TypeDiv } from '@type-dom/framework';
import { TdButton, TdDialog } from '@type-dom/ui';

export class LoadingBasicExample extends TypeDiv {
  className = 'DialogBasicExample';

  constructor() {
    super();
    // const $item = {
    //   marginTop: '10px',
    //   marginRight: '30px'
    // };
    this.addChildren(
      new TdButton({
        slot: 'Click to open the Dialog',
        // styleObj: $item,
        events: {
          click: (evt, element) => {
            (element.nextSibling as TdDialog).show();
          }
        }
      }),
      new TdDialog({
        title: 'Tips',
        modelValue: false,
        width: 500,
        slot: new Span({
          text: 'This is a message'
        }),
        slots: {
          footer: new Div({
            childNodes: [
              new TdButton({
                slot: 'Cancel',
                events: {
                  click: (evt, element) => {
                    element.up<TdDialog>('TdDialog').handleClose();
                  }
                }
              }),
              new TdButton({
                type: 'primary',
                slot: 'Confirm',
                styleObj: {
                  marginLeft: '12px'
                },
                events: {
                  click: (evt, element) => {
                    element.up<TdDialog>('TdDialog').handleClose();
                  }
                }
              })
            ]
          })
        }
      }),
    );
  }
}
