import { createProxy, Div, Head, IJsonData, P, RouterView, TypeComponent, XProxy } from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { CustomBlock } from '../../components/custom-block/custom-block';
import { LayoutBasicExample } from '../../examples/basic/layout/basic';
import { LayoutGutterExample } from '../../examples/basic/layout/gutter';
import { LayoutMixinExample } from '../../examples/basic/layout/mixin';
import { LayoutOffsetExample } from '../../examples/basic/layout/offset';
import { LayoutAlignExample } from '../../examples/basic/layout/align';
import { LayoutResponsiveExample } from '../../examples/basic/layout/responsive';

export class LayoutWrapper extends TypeComponent {
  className: 'LayoutWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'LayoutWrapper';
    this.addChildren(
      new Div({
        text: 'Layout 布局',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '通过基础的 24 分栏，迅速简便地创建布局。',
      }),
      new CustomBlock({
        title: 'Tip',
        paragraphs: [
          new P({
            text: '组件默认使用 Flex 布局，不需要手动设置 type="flex"。',
          }),
          new P({
            text: '请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。',
          }),
        ],
      })
    );

    this.sourceData = createProxy({
      basicSource: '',
      gutterSource: '',
      mixinSource: '',
      offsetSource: '',
      alignSource: '',
      responsiveSource: '',
    });
    this.createBasic();
    this.createGutter();
    this.createMixin();
    this.createOffset();
    this.createAlign();
    this.createResponsive();
  }
  mounted() {
    fetch('./examples/basic/layout/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/layout/gutter.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.gutterSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/layout/mixin.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.mixinSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/layout/offset.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.offsetSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/layout/align.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.alignSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
    fetch('./examples/basic/layout/responsive.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.responsiveSource.setValue(text);
      })
      .catch(err => {
        console.error(err);
      });
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础布局',
      }),
      new P({
        text: '使用列创建基础网格布局。',
      }),
      new P({
        text: '通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new LayoutBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    );
  }
  createGutter() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '分栏间隔',
      }),
      new P({
        text: '支持列间距。',
      }),
      new P({
        text: '行提供 gutter 属性来指定列之间的间距，其默认值为0。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new LayoutGutterExample()],
        sourceWrapper: this.sourceData.gutterSource,
      })
    );
  }
  createMixin() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '混合布局',
      }),
      new P({
        text: '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
      }),
      new Example({
        showcase: [new LayoutMixinExample()],
        sourceWrapper: this.sourceData.mixinSource,
      })
    );
  }
  createOffset() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '列偏移',
      }),
      new P({
        text: '您可以指定列偏移量。',
      }),
      new P({
        text: '通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new LayoutOffsetExample()],
        sourceWrapper: this.sourceData.offsetSource,
      })
    );
  }
  createAlign() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '对齐方式',
      }),
      new P({
        text: '默认使用 flex 布局来对分栏进行灵活的对齐。',
      }),
      new P({
        text: '您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new LayoutAlignExample()],
        sourceWrapper: this.sourceData.alignSource,
      })
    );
  }
  createResponsive() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '响应式布局',
      }),
      new P({
        text: '参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。',
      }),
      new Example({
        showcase: [new LayoutResponsiveExample()],
        sourceWrapper: this.sourceData.responsiveSource,
      })
    );
  }
}
