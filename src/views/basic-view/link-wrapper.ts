import { createProxy, Div, Head, IJsonData, P, RouterView, TypeDiv, XProxy } from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { LinkBasicExample } from '../../examples/basic/link/basic';
import { LinkDisabledExample } from '../../examples/basic/link/disabled';
import { LinkUnderlineExample } from '../../examples/basic/link/underline';
import { LinkIconExample } from '../../examples/basic/link/icon';
import { CustomBlock } from '../../components/custom-block/custom-block';

export class LinkWrapper extends TypeDiv {
  className: 'LinkWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'LinkWrapper';
    this.addChildren(
      new Div({
        text: 'Link 链接',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '文字超链接。',
      }),
    )
    this.sourceData = createProxy({
      basicSource: '',
      disabledSource: '',
      underlineSource: '',
      iconSource: '',
    });
    this.createBasic();
    this.createDisabled();
    this.createUnderline();
    this.createIcon();
  }
  mounted() {
    console.log('LinkWrapper mounted');
    fetch('./examples/basic/link/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/link/disabled.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.disabledSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/link/underline.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.underlineSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/link/icon.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.iconSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
  }
  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法'
      }),
      new P({
        text: '文字超链接。'
      }),
      new Example({
        showcase: [new LinkBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    )
  }
  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态'
      }),
      new P({
        text: '文字链接不可用状态。'
      }),
      new Example({
        showcase: [new LinkDisabledExample()],
        sourceWrapper: this.sourceData.disabledSource,
      })
    )
  }
  createUnderline() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '下划线'
      }),
      new P({
        text: '文字链接下划线。'
      }),
      new Example({
        showcase: [new LinkUnderlineExample()],
        sourceWrapper: this.sourceData.underlineSource,
      }),
    )
  }
  createIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '图标'
      }),
      new P({
        text: '带图标的链接。'
      }),
      new CustomBlock({
        title: 'Tip',
        paragraphs: [
          new P({
            text: '使用 icon 属性来为按钮添加图标。 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 Element Plus 提供了一组图标，您可以在 icon component'
          })
        ]
      }),
      new Example({
        showcase: [new LinkIconExample()],
        sourceWrapper: this.sourceData.iconSource,
      }),
    )
  }
}
