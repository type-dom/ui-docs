import { Br, createProxy, Div, Head, IJsonData, P, RouterView, TextNode, TypeDiv, XProxy } from '@type-dom/framework';
import { TdText } from '@type-dom/ui';
import { Example } from '../../components/example/example';
import { TextBasicExample } from '../../examples/basic/text/basic';
import { TextSizeExample } from '../../examples/basic/text/size';
import { TextEllipsisExample } from '../../examples/basic/text/ellipsis';
import { TextOverrideExample } from '../../examples/basic/text/override';

export class TextWrapper extends TypeDiv {
  className: 'TextWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'TextWrapper';
    this.addChildren(
      new Div({
        text: 'Text 文本',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '文本的常见操作',
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      sizeSource: '',
      ellipsisSource: '',
      overrideSource: '',
    })
    this.createBasic();
    this.createSize();
    this.createEllipsis();
    this.createOverride();
  }
  mounted() {
    fetch('./examples/basic/text/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/basic/text/size.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.sizeSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/basic/text/ellipsis.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.ellipsisSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/basic/text/override.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.overrideSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
  }
  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法',
      }),
      new P({
        text: '由 type 属性来选择 Text 的类型。',
      }),
      new Example({
        showcase: [new TextBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    )
  }
  createSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '尺寸',
      }),
      new P({
        text: '使用 size 属性配置尺寸，可选的尺寸大小有: large, default 或 small。'
      }),
      new Example({
        showcase: [new TextSizeExample()],
        sourceWrapper: this.sourceData.sizeSource,
      }),
    )
  }
  createEllipsis() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '省略',
      }),
      new P({
        text: '通过 truncated 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 line-clamp 属性控制多行的样式',
      }),
      new Example({
        showcase: [new TextEllipsisExample()],
        sourceWrapper: this.sourceData.ellipsisSource,
      }),
    )
  }
  createOverride() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '覆盖',
      }),
      new P({
        text: '使用属性 tag 覆盖元素',
      }),
      new Example({
        showcase: [new TextOverrideExample()],
        sourceWrapper: this.sourceData.overrideSource,
      }),
    )
  }
}
