import {
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TypeDiv,
  XProxy,
  createProxy, TextNode
} from '@type-dom/framework';
import { CustomBlock, Example } from '@type-dom/ui';

import { AnchorBasicExample } from '../../examples/navigation/anchor/basic';
import { AnchorHorizontalExample } from '../../examples/navigation/anchor/horizontal';
import { AnchorScrollExample } from '../../examples/navigation/anchor/scroll';
import { AnchorLinkChangeExample } from '../../examples/navigation/anchor/link-change';
import { AnchorUnderlineExample } from '../../examples/navigation/anchor/underline';
import { AnchorAffixExample } from '../../examples/navigation/anchor/affix';

export class AnchorWrapper extends TypeDiv {
  className: 'AnchorWrapper';
  parent?: RouterView;
  private sourceCode: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'AnchorWrapper';
    this.sourceCode = createProxy({
      basic: '',
      horizontal: '',
      scroll: '',
      linkChange: '',
      underline: '',
      affix: ''
    });
    console.log('this.sourceCode is ', this.sourceCode);
    this.addChildren(
      new Div({
        text: 'Anchor 锚点',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '通过锚点，您可以很快找到当前页面上信息内容的位置。'
      })
    );

    this.createBasic();
    this.createHorizontal();
    this.createScroll();
    this.createLinkChange();
    this.createUnderline();
    this.createAffix();

  }

  mounted() {
    fetch('./examples/navigation/anchor/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.basic.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/anchor/horizontal.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.horizontal.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/anchor/scroll.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.scroll.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/anchor/link-change.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.linkChange.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/anchor/underline.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.underline.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/anchor/affix.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.affix.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法'
      }),
      new P({
        text: '最简单的用法。'
      }),
      new Example({
        showcase: [new AnchorBasicExample()],
        sourceWrapper: this.sourceCode.basic
      })
    );
  }

  createHorizontal() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '水平模式'
      }),
      new P({
        text: '水平排列的锚点'
      }),
      new CustomBlock({
        title: 'Tip',
        paragraphs: [new TextNode('水平模式不支持sub-link槽位')]
      }),
      new Example({
        showcase: [new AnchorHorizontalExample()],
        sourceWrapper: this.sourceCode.basic
      })
    );
  }

  createScroll() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '滚动的容器'
      }),
      new P({
        text: '自定义滚动区域，使用 offset props 可以设置锚点滚动偏移。 监听link-click事件并阻止浏览器的默认行为，然后它不会改变历史。'
      }),
      new Example({
        showcase: [new AnchorScrollExample()],
        sourceWrapper: this.sourceCode.scroll
      })
    );
  }

  createLinkChange() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '锚点链接变化'
      }),
      new P({
        text: '监听锚点链接变化'
      }),
      new Example({
        showcase: [new AnchorLinkChangeExample()],
        sourceWrapper: this.sourceCode.linkChange
      })
    );
  }

  createUnderline() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '下划线类型'
      }),
      new P({
        text: '设置`type="underline"更改为下划线类型'
      }),
      new Example({
        showcase: [new AnchorUnderlineExample()],
        sourceWrapper: this.sourceCode.underline
      })
    );
  }

  createAffix() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '固定模式'
      }),
      new P({
        text: '使用 affix 组件来固定住页面中的锚点。'
      }),
      new Example({
        showcase: [new AnchorAffixExample()],
        sourceWrapper: this.sourceCode.fixedPosition
      })
    );
  }
}
