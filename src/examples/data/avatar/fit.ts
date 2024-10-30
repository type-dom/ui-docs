import { Div, Span, TypeDiv } from '@type-dom/framework';
import { $textColor, TdAvatar, TdButton, TdCol, TdRow } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class AvatarFitExample extends TypeDiv {
  className = 'AvatarFitExample';
  constructor() {
    super();
    const $fit: IStyle = {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'space-between',
    };
    const $block: IStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 0,
    };
    const $title: IStyle = {
      marginBottom: '10px',
      fontSize: '14px',
      // color: var(--el-text-color-secondary),
      color: $textColor.secondary,
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
      fitList.push(
        new Div({
          name: 'block',
          styleObj: $block,
          childNodes: [
            new Span({
              name: 'title',
              text: fit,
              styleObj: $title,
            }),
            new TdAvatar({
              shape: 'square',
              size: 100,
              fit: fit,
              src: url,
            })
          ]
        })
      );
    }
    this.addChild(
      new Div({
        name: 'demo-type',
        styleObj: $fit,
        childNodes: fitList,
      })
    );
  }
}
