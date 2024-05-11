import { Div, Head, P, TypeDiv } from '@type-dom/framework';
import { TdCol, TdRow } from '@type-dom/ui';

export class LayoutBasicExample extends TypeDiv {
  className = 'LayoutBasicExample';
  constructor() {
    super();
    const $purple = '#d3dce6';
    const $purpleDark = '#99a9bf';
    const $purpleLight = '#e5e9f2';
    this.addChildren(
      new TdRow({
        styleObj: {
          marginBottom: '20px',
        },
        childNodes: [
          new TdCol({
            span: 24,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purpleDark,
                },
              }),
            ],
          }),
        ],
      }),
      new TdRow({
        styleObj: {
          marginBottom: '20px',
        },
        childNodes: [
          new TdCol({
            span: 12,
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
            span: 12,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purpleLight,
                },
              }),
            ],
          }),
        ]
      }),
      new TdRow({
        styleObj: {
          marginBottom: '20px',
        },
        childNodes: [
          new TdCol({
            span: 8,
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
            span: 8,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purpleLight,
                },
              }),
            ],
          }),
          new TdCol({
            span: 8,
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
      new TdRow({
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
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purpleLight,
                }
              })
            ]
          }),
          new TdCol({
            span: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purple,
                }
              })
            ]
          }),
          new TdCol({
            span: 6,
            childNodes: [
              new Div({
                styleObj: {
                  borderRadius: '4px',
                  minHeight: '36px',
                  background: $purpleLight,
                }
              })
            ]
          })
        ]
      }),
    )
  }
}
