import { Div, Span, TypeDiv } from '@type-dom/framework';
import { $borderColor, $textColor, TdImage } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class ImageBasicExample extends TypeDiv {
  className = 'ImageBasicExample';
  constructor() {
    super();
    let $block: IStyle = {
      padding: '30px 0',
      textAlign: 'center',
      // borderRight: solid 1px var(--el-border-color),
      borderRight: 'solid 1px ' + $borderColor.base,
      display: 'inline-block',
      width: '20%',
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
    const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
    const fits =  [
      'fill',
      'contain',
      'cover',
      'none',
      'scale-down',
    ] as const;
    const fitList: Div[] = [];
    for (let i = 0; i < fits.length; i++) {
      const fit = fits[i];
      if (i === fits.length - 1) {
        $block = Object.assign({}, $block, { borderRight: 'none' })
      }
      fitList.push(
        new Div({
          name: 'block',
          styleObj: $block,
          childNodes: [
            new Span({
              name: 'demonstration',
              text: fit,
              styleObj: $demonstration,
            }),
            new TdImage({
              fit: fit,
              src: url,
              styleObj: {
                width: '100px',
                height: '100px',
              }
            })
          ]
        })
      );
    }
    this.addChild(
      new Div({
        name: 'demo-type',
        childNodes: fitList,
      })
    );
  }
}
