import { Div, Head, Span, TextNode, TypeDiv } from '@type-dom/framework';
import { TdButton, TdDialog, TdIcon } from '@type-dom/ui';
import { ElCircleCloseSvg } from '@type-dom/svgs';
import { $dialogTitleStyle } from '../../../../../../libs/ui/src/components/feedback/td-dialog/td-dialog.style';

export class LoadingCustomizationExample extends TypeDiv {
  className = 'LoadingCustomizationExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Open Dialog with customized header',
        plain: true,
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
        showClose: false,
        slot: new TextNode('This is dialog content.'),
        slots: {
          header: new Div({
            name: 'my-header',
            styleObj: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '16px',
            },
            childNodes: [
              new Head({
                nodeName: 'h4',
                text: 'This is a custom header!',
                styleObj: {
                  ...$dialogTitleStyle,
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                },
              }),
              new TdButton({
                type: 'danger',
                events: {
                  click: (evt, element) => {
                    element.up<TdDialog>('TdDialog').handleClose();
                  }
                },
                slot: [
                  new TdIcon({
                    svgObj: new ElCircleCloseSvg(),
                    styleObj: {
                      marginRight: '5px',
                    }
                  }),
                  new TextNode('Close')
                ]
              })
            ]
          })
        }
      }),
    );
  }
}
