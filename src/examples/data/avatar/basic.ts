import { Div, TypeDiv } from '@type-dom/framework';
import { $textColor, TdAvatar, TdCol, TdRow } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class AvatarBasicExample extends TypeDiv {
  className = 'AvatarBasicExample';
  constructor() {
    super();
    const $subTitle: IStyle = {
      marginBottom: '10px',
      fontSize: '14px',
      // color: var(--el-text-color-secondary),
      color: $textColor.secondary,
    };
    const $circleSquare: IStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
    };
    const circleUrl =
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
    const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';
    const sizeList = ['small', '', 'large'] as const;
    const circleSizeList: Div[] = [];
    const squareSizeList: Div[] = [];
    for (let i = 0; i < sizeList.length; i++) {
      const size = sizeList[i];
      circleSizeList.push(
        new Div({
          name: 'block',
          childNodes: [
            new TdAvatar({
              size: size || 'default',
              src: circleUrl,
            })
          ]
        })
      );
      squareSizeList.push(
        new Div({
          name: 'block',
          childNodes: [
            new TdAvatar({
              shape: 'square',
              size: size || 'default',
              src: squareUrl,
            })
          ]
        })
      );
    }
    this.addChild(
      new TdRow({
        styleObj: {
          textAlign: 'center',
        },
        slot: [
          new TdCol({
            span: 12,
            slot: [
              new Div({
                name: 'title',
                styleObj: $subTitle,
                text: 'circle'
              }),
              new Div({
                name: 'circle',
                styleObj: $circleSquare,
                childNodes: [
                  new Div({
                    name: 'block',
                    childNodes: [
                      new TdAvatar({
                        size: 50,
                        src: circleUrl,
                      })
                    ]
                  }),
                  ...circleSizeList,
                ]
              })
            ]
          }),
          new TdCol({
            span: 12,
            slot: [
              new Div({
                name: 'title',
                text: 'square',
                styleObj: $subTitle,
              }),
              new Div({
                name: 'square',
                styleObj: $circleSquare,
                childNodes: [
                  new Div({
                    name: 'block',
                    childNodes: [
                      new TdAvatar({
                        size: 50,
                        shape: 'square',
                        src: squareUrl,
                      })
                    ]
                  }),
                  ...squareSizeList,
                ]
              })
            ]
          }),
        ],
      })
    );
  }
}
