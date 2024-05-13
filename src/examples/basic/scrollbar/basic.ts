import { P, TypeDiv } from '@type-dom/framework';
import { $colorPrimary, $colors, TdScrollbar } from '@type-dom/ui';

export class TdScrollbarBasicExample extends TypeDiv {
  className: 'ScrollbarBasicExample';
  constructor() {
    super();
    this.className = 'ScrollbarBasicExample';
    this.addAttrName('scrollbar-basic-example');
    this.addStyleObj({
      width: '100%',
      height: '100%',
      overflow: 'auto',
    });
    const contents: P[] = [];
    for (let i = 0; i < 20; i++) {
      contents.push(new P({
          text: 'item ' + (i + 1),
          styleObj: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50px',
            margin: '10px',
            textAlign: 'center',
            borderRadius: '4px',
            // background: var(--el-color-primary-light-9),
            background: $colors.primary['light-9'],
            // color: var(--el-color-primary),
            color: $colorPrimary,
          }
        })
      );
    }
    this.addChild(new TdScrollbar({
      height: 400,
      contents: contents
    }))
  }
}
