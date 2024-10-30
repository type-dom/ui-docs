import { Div, Span, TypeDiv } from '@type-dom/framework';
import { $borderColor, $fillColor, $textColor, TdImage } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class ImagePlaceholderExample extends TypeDiv {
  className = 'ImagePlaceholderExample';
  constructor() {
    super();
    const $block: IStyle = {
      padding: '30px 0',
      textAlign: 'center',
      // borderRight: solid 1px var(--el-border-color),
      borderRight: 'solid 1px ' + $borderColor.base,
      display: 'inline-block',
      width: '49%',
      boxSizing: 'border-box',
      verticalAlign: 'top',
    };
    const $demonstration: IStyle = {
      display: 'block',
      // color: var(--el-text-color-secondary),
      color: $textColor.secondary,
      fontSize: '14px',
      marginBottom: '20px',
    };
    const $tdImage = {
      padding: '0 5px',
      maxWidth: '300px',
      maxHeight: '200px',
    };
    const $imageSlot = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      // background: var(--el-fill-color-light),
      background: $fillColor.light,
      // color: var(--el-text-color-secondary),
      color: $textColor.secondary,
      fontSize: '14px',
    };

    const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';

    this.addChild(
      new Div({
        name: 'demo-type',
        childNodes: [
          new Div({
            name: 'block',
            styleObj: $block,
            childNodes: [
              new Span({
                name: 'title',
                text: 'Default',
                styleObj: $demonstration,
              }),
              new TdImage({
                src: url,
                styleObj: $tdImage,
              })
            ]
          }),
          new Div({
            name: 'block',
            styleObj: $block,
            childNodes: [
              new Span({
                name: 'title',
                text: 'Custom',
                styleObj: $demonstration,
              }),
              new TdImage({
                src: url,
                styleObj: $tdImage,
                slots: {
                  placeholder: new Div({
                    name: 'image-slot',
                    text: 'Loading',
                    styleObj: $imageSlot,
                    childNodes: [
                      new Span({
                        name: 'dot',
                        text: '...',
                        styleObj: {
                          animation: 'dot 2s infinite steps(3, start)',
                          overflow: 'hidden',
                        }
                      })
                    ]
                  })
                }
              })
            ]
          }),
        ],
      })
    );
  }
}
