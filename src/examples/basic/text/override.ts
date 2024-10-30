import { TypeDiv } from '@type-dom/framework';
import { TdText } from '@type-dom/ui';

export class TextOverrideExample extends TypeDiv {
  className: 'TextOverrideExample';

  constructor() {
    super();
    this.className = 'TextOverrideExample';
    this.addChildren(
      new TdText({
        slot: 'Span',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new TdText({
        slot: 'This is a paragraph.',
        tag: 'p',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new TdText({
        slot: 'Bold',
        tag: 'b',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new TdText({
        slot: 'Italic',
        tag: 'i',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new TdText({
        styleObj: {
          margin: '5px 10px'
        },
        slot: [
          'This is ',
            new TdText({
            slot: 'subscript',
            tag: 'sub',
            size: 'small'
          })
        ]
      }),
      new TdText({
        styleObj: {
          margin: '5px 10px'
        },
        slot: [
          'This is ',
          new TdText({
            slot: 'superscript',
            tag: 'sup',
            size: 'small'
          })
        ]
      }),
      new TdText({
        slot: 'Inserted',
        tag: 'ins',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new TdText({
        slot: 'Deleted',
        tag: 'del',
        styleObj: {
          margin: '5px 10px'
        }
      }),
      new TdText({
        slot: 'Marked',
        tag: 'mark',
        styleObj: {
          margin: '5px 10px'
        }
      })
    );
  }
}
