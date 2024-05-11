import { Div, TypeDiv } from '@type-dom/framework';
import { TdCol, TdRow } from '@type-dom/ui';

export class LayoutOffsetExample extends TypeDiv {
  className = 'LayoutOffsetExample';
  constructor() {
    super();
    const $purple = '#d3dce6';
    const $purpleDark = '#99a9bf';
    const $purpleLight = '#e5e9f2';
    this.addChildren(
      new TdRow({
        gutter: 20,
        styleObj: {
          marginBottom: '20px',
        },
        childNodes: [
          new TdCol({
            span: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purple,
                },
              }),
            ],
          }),
          new TdCol({
            span: 6,
            offset: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purple,
                }
              })
            ]
          })
        ]
      }),
      new TdRow({
        gutter: 20,
        styleObj: {
          marginBottom: '20px',
        },
        childNodes: [
          new TdCol({
            span: 6,
            offset: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purple,
                },
              }),
            ],
          }),
          new TdCol({
            span: 6,
            offset: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purple,
                }
              })
            ]
          })
        ]
      }),
      new TdRow({
        gutter: 20,
        styleObj: {
          marginBottom: '20px',
        },
        childNodes: [
          new TdCol({
            span: 12,
            offset: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purple,
                },
              }),
            ],
          }),
        ]
      }),
    )
  }
}
