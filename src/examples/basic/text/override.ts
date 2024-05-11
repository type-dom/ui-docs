import { TypeDiv } from '@type-dom/framework';
import { TdText } from '@type-dom/ui';

export class TextOverrideExample extends TypeDiv {
  className: 'TextOverrideExample';
  constructor() {
    super();
    this.className = 'TextOverrideExample';
    this.addChildren(
      new TdText({
        text: 'Span',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'This is a paragraph.',
        tag: 'p',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Bold',
        tag: 'b',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Italic',
        tag: 'i',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'This is ',
        styleObj: {
          margin: '5px 10px',
        },
        childNodes: [
          new TdText({
            text: 'subscript',
            tag: 'sub',
            size: 'small',
          }),
        ],
      }),
      new TdText({
        text: 'This is ',
        styleObj: {
          margin: '5px 10px',
        },
        childNodes: [
          new TdText({
            text: 'superscript',
            tag: 'sup',
            size: 'small',
          }),
        ],
      }),
      new TdText({
        text: 'Inserted',
        tag: 'ins',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Deleted',
        tag: 'del',
        styleObj: {
          margin: '5px 10px',
        },
      }),
      new TdText({
        text: 'Marked',
        tag: 'mark',
        styleObj: {
          margin: '5px 10px',
        },
      }),
    )
  }
}
