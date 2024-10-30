import { Div, TypeDiv } from '@type-dom/framework';
import { TdAvatar, TdIcon } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';
import { ElUserFilledSvg } from '@type-dom/svgs';

export class ImagePreviewExample extends TypeDiv {
  className = 'ImagePreviewExample';
  constructor() {
    super();
    const $div: IStyle = {
      flex: 1,
      textAlign: 'center',
    };
    this.addChild(new Div({
      name: 'demo-type',
      styleObj: {
        display: 'flex'
      },
      childNodes: [
        new Div({
          styleObj: $div,
          childNodes: [
            new TdAvatar({
              icon: new TdIcon({
                svgObj: new ElUserFilledSvg(),
              }),
            })
          ]
        }),
        new Div({
          styleObj: $div,
          childNodes: [
            new TdAvatar({
              src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
            }),
          ]
        }),
        new Div({
          styleObj: $div,
          childNodes: [
            new TdAvatar({
              text: 'user',
            })
          ]
        })
      ]
    }))
  }
}
