import { I, P, Span, TypeDiv } from '@type-dom/framework';
import { TdButton, TdMessageBox, TdSwitch, UPDATE_MODEL_EVENT } from '@type-dom/ui';

export class MessageBoxUseVNodeExample extends TypeDiv {
  className = 'MessageBoxUseVNodeExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Common VNode',
        plain: true,
        events: {
          click: () => {
            new TdMessageBox({
              title: 'Message',
              message: new P({
                childNodes: [
                  new Span({ text: 'Message can be ' }),
                  new I({ text: 'VNode', styleObj: { color: 'teal' }})
                ]
              })
            });
          }
        }
      }),
      new TdButton({
        slot: 'Dynamic props',
        plain: true,
        styleObj: {
          marginLeft: '12px'
        },
        events: {
          click: () => {
            let checked: boolean | string | number = false;
            new TdMessageBox({
              title: 'Message',
              message: new TdSwitch({
                modelValue: checked,
                // 'onUpdate:modelValue': (val: boolean | string | number) => {
                //   checked = val
                // },
                emits: {
                  // 'onUpdate:modelValue': (val: boolean | string | number) => {
                  //   checked = val
                  // }
                  [UPDATE_MODEL_EVENT]: (val: boolean | string | number) => {
                    console.log('UPDATE_MODEL_EVENT . val is ', val);
                    checked = val
                  }
                }
              })
            });
          }
        }
      })
    );
  }
}
