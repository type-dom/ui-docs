import { Div, Img, TypeDiv } from '@type-dom/framework';
import { TdAvatar } from '@type-dom/ui';

export class AvatarFallbackExample extends TypeDiv {
  className = 'AvatarFallbackExample';
  constructor() {
    super();
    this.addChild(new Div({
      name: 'demo-type',
      styleObj: {
        display: 'flex'
      },
      childNodes: [
        new TdAvatar({
          size: 60,
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
