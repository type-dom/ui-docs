import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  TypeDiv,
  XProxy,
} from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { TdScrollbarBasicExample } from '../../examples/basic/scrollbar/basic';

export class ScrollbarWrapper extends TypeDiv {
  className: 'ScrollbarWrapper';
  private sourceData: XProxy<IJsonData>;

  mounted() {
    this.sourceData = createProxy({
      basicSource: '',
      // verticalSource: '',
      // sizeSource: '',
    });
    this.addChildren(
      new Div({
        text: 'Scrollbar 滚动条',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '用于替换浏览器原生滚动条。',
      })
    );
    this.createBasic();
    // this.createVertical();
    // this.createSize();
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法',
      }),
      new P({
        text: '最简单的用法。',
      }),
      new Example({
        showcase: [new TdScrollbarBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    );
  }
}
