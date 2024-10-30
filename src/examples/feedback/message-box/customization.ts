import { P, I, Span, TypeDiv } from '@type-dom/framework';
import { TdButton, TdDialog, TdMessage, TdMessageBox } from '@type-dom/ui';

export class MessageBoxCustomizationExample extends TypeDiv {
  className = 'MessageBoxCustomizationExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Click to open the Message Box',
        plain: true,
        events: {
          click: () => {
            new TdMessageBox({
              title: 'Message',
              // message: h('p', null, [
              //   h('span', null, 'Message can be '),
              //   h('i', { style: 'color: teal' }, 'VNode'),
              // ]),
              message: new P({
                childNodes: [
                  new Span({ text: 'Message can be ' }),
                  new I({
                    text: 'VNode',
                    styleObj: {
                      color: 'teal',
                    },
                  }),
                ],
              }),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
                  setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              },
            })
              .then(({ action }) => {
                new TdMessage({
                  type: 'info',
                  message: `action: ${action}`,
                });
              });
          },
        },
      })
    );
  }
}
