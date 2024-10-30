import { Div, Img, TypeDiv } from '@type-dom/framework';
import { TdImage } from '@type-dom/ui';

export class ImageLoadFailedExample extends TypeDiv {
  className = 'ImageLoadFailedExample';
  constructor() {
    super();
    this.addChild(new Div({
      name: 'demo-type',
      styleObj: {
        display: 'flex'
      },
      childNodes: [
        new TdImage({
          // src: 'https://empty',
          slot: new Img({
            attrObj: {
              src: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
            }
          })
        })
      ]
    }))
  }
}
