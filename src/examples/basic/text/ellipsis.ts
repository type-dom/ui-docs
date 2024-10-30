import { Br, TextNode, TypeDiv } from '@type-dom/framework';
import { TdText } from '@type-dom/ui';

export class TextEllipsisExample extends TypeDiv {
  className: 'TextEllipsisExample';

  constructor() {
    super();
    this.className = 'TextEllipsisExample';
    this.addChildren(
      new TdText({
        slot: 'Self element set width 100px',
        truncated: true,
        width: '150px',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new Br(),
      new TdText({
        lineClamp: 2,
        styleObj: {
          margin: '5px 10px'
        },
        slot: [
          ' The -webkit-line-clamp CSS property',
          new Br(),
          '    allows limiting of the contents of',
          new Br(),
          '    a block to the specified number of lines.'
        ]
      })
    );
  }
}
