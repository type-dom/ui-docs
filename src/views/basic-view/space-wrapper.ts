import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  TypeDiv, XProxy
} from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { SpaceBasicExample } from '../../examples/basic/space/basic';
import { SpaceVerticalExample } from '../../examples/basic/space/vertical';
import { SpaceSizeExample } from '../../examples/basic/space/size';

export class SpaceWrapper extends TypeDiv {
  className: 'SpaceWrapper';
  private sourceData: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'SpaceWrapper';
    this.addStyleObj({
      width: '100%',
    });
    this.addChildren(
      new Div({
        text: 'Space 间距',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件 分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。',
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      verticalSource: '',
      sizeSource: '',
    })
    this.createBasic();
    this.createVertical();
    this.createSize();
  }
  mounted() {
    fetch('./examples/basic/space/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/space/vertical.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.verticalSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/space/size.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.sizeSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
  }
  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法',
      }),
      new P({
        text: '最基础的用法，通过这个组件来给组件之间提供统一的间距。',
      }),
      new P({
        text: '通过间距组件来给多个组件之间提供间距',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new SpaceBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    )
  }
  createVertical() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '垂直布局',
      }),
      new P({
        text: '使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.',
      }),
      new P({
        text: '我们也提供垂直布局方式。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new SpaceVerticalExample()],
        sourceWrapper: this.sourceData.verticalSource,
      })
    )
  }
  createSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '控制间距的大小',
      }),
      new P({
        text: '通过调整 size 的值来控制间距的大小',
      }),
      new P({
        text: '使用内置的 small、default、large 来设置间距大小，分别对应 8px、12px 和 16px 的间距。 默认的间距大小为 small，也就是 8px。',
      }),
      new P({
        text: '您也可以通过自定义的 size 来控制大小， 参见下一个部分。',
      }),
      new Example({
        showcase: [new SpaceSizeExample()],
        sourceWrapper: this.sourceData.sizeSource,
      })
    )
  }
}
