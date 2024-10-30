import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  RouterView, TextNode,
  TypeDiv,
  XProxy
} from '@type-dom/framework';
import { CustomBlock, Example } from '@type-dom/ui';

import { DialogBasicExample } from '../../examples/feedback/dialog/basic';
import { DialogCustomizationContentExample } from '../../examples/feedback/dialog/customization-content';
import { DialogCustomizationHeaderExample } from '../../examples/feedback/dialog/customization-header';
import { DialogNestedExample } from '../../examples/feedback/dialog/nested';

export class DialogWrapper extends TypeDiv {
  className: 'DialogWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'DialogWrapper';
    this.addChildren(
      new Div({
        text: 'Dialog 对话框',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '在保留当前页面状态的情况下，告知用户并承载相关操作。'
      }),
      new CustomBlock({
        type: 'tip',
        title: 'TIP',
        paragraphs: [
          new TextNode(`在 SSR 场景下，您需要将组件包裹在 <client-only></client-only> 之中 (如: Nuxt) 和 SSG (e.g: VitePress).`)
        ]
      })
    );
    this.sourceData = createProxy({
      alignCenter: '',
      basic: '',
      centeredContent: '',
      customizationContent: '',
      customizationHeader: '',
      destroyOnClose: '',
      draggable: '',
      nested: ''
    });

    this.createBasic();
    this.createCustomizationContent();
    this.createCustomizationHeader();
    this.createNested();
    // this.createAlignCenter();
    // this.createCenteredContent();
    // this.createDestroyOnClose();
    // this.createDraggable();
  }

  mounted() {
    fetch('./examples/feedback/dialog/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/dialog/align-center.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.alignCenter.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/dialog/centered-content.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.centeredContent.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/dialog/nested.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.nestDialog.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/dialog/customization-header.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customizationHeader.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/dialog/customization-content.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customizationContent.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/dialog/draggable.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.draggableDialog.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new P({
        text: 'Dialog 弹出一个对话框，适合需要定制性更大的场景。'
      }),
      new P({
        text: '需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 before-close 的用法。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new DialogBasicExample()],
        sourceWrapper: this.sourceData.basic
      }),
      new CustomBlock({
        type: 'tip',
        title: 'TIP',
        paragraphs: [
          new TextNode(`before-close 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 footer 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 before-close 的相关逻辑。`)
        ]
      })
    );
  }

  createCustomizationContent() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义内容'
      }),
      new P({
        text: '对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。'
      }),
      new Example({
        showcase: [new DialogCustomizationContentExample()],
        sourceWrapper: this.sourceData.custom
      })
    );
  }

  // todo 还没有实现
  createCustomizationHeader() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义头部'
      }),
      new P({
        text: 'header 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId 插槽属性来指定哪些元素应该读取为对话框标题。'
      }),
      new Example({
        showcase: [new DialogCustomizationHeaderExample()],
        sourceWrapper: this.sourceData.fallbackSource
      })
    );
  }

  createNested() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '嵌套的对话框'
      }),
      new P({
        text: '如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。'
      }),
      new P({
        text: '通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 append-to-body 设置为 true，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new DialogNestedExample()],
        sourceWrapper: this.sourceData.nested
      })
    );
  }

  // createCenteredContent() {
  //   this.addChildren(
  //     new Head({
  //       nodeName: 'h2',
  //       text: '内容居中'
  //     }),
  //     new P({
  //       text: '对话框的内容可以居中。'
  //     }),
  //     new P({
  //       text: '将center设置为true即可使标题和底部居中。 center仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。',
  //       styleObj: {
  //         fontSize: '0.875rem',
  //         lineHeight: '1.25rem'
  //       }
  //     }),
  //     new Example({
  //       showcase: [new DialoCenteredContentExample()],
  //       sourceWrapper: this.sourceData.centeredContent
  //     }),
  //     new CustomBlock({
  //       type: 'tip',
  //       title: 'TIP',
  //       paragraphs: [
  //         new TextNode(`Dialog 的内容是懒渲染的——在被第一次打开之前，传入的默认 slot 不会被立即渲染到 DOM 上。 因此，如果需要执行 DOM 操作，或通过 ref 获取相应组件，请在 open 事件回调中进行。`)
  //       ]
  //     })
  //   );
  // }
  //
  // createAlignCenter() {
  //   this.addChildren(
  //     new Head({
  //       nodeName: 'h2',
  //       text: '居中对话框'
  //     }),
  //     new P({
  //       text: '从屏幕中心打开对话框。'
  //     }),
  //     new P({
  //       text: '设置 align-center 为 true 使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以top属性将不起作用。',
  //       styleObj: {
  //         fontSize: '0.875rem',
  //         lineHeight: '1.25rem'
  //       }
  //     }),
  //     new Example({
  //       showcase: [new DialogAlignCenterExample()],
  //       sourceWrapper: this.sourceData.alignCenter
  //     })
  //   );
  // }
  //
  // createDestroyOnClose() {
  //   this.addChildren(
  //     new Head({
  //       nodeName: 'h2',
  //       text: '关闭时销毁'
  //     }),
  //     new P({
  //       text: '启用此功能时，默认栏位下的内容将使用 v-if 指令销毁。 当出现性能问题时，可以启用此功能。'
  //     }),
  //     new P({
  //       text: '需要注意的是，当这个属性被启用时，在 transition.beforeEnter 事件卸载前，除了 overlay、header (可选)与footer(可选) \b，Dialog 内不会有其它任何其它的 DOM 节点存在。',
  //       styleObj: {
  //         fontSize: '0.875rem',
  //         lineHeight: '1.25rem'
  //       }
  //     }),
  //     new Example({
  //       showcase: [new DialogDestroyOnCloseExample()],
  //       sourceWrapper: this.sourceData.destroyOnClose
  //     })
  //   );
  // }
  //
  // createDraggable() {
  //   this.addChildren(
  //     new Head({
  //       nodeName: 'h2',
  //       text: '可拖拽对话框'
  //     }),
  //     new P({
  //       text: '试着拖动一下header部分吧'
  //     }),
  //     new P({
  //       text: '设置draggable属性为true以做到拖拽 设置 overflow 2.5.4 为 true 可以让拖拽范围超出可视区。',
  //       styleObj: {
  //         fontSize: '0.875rem',
  //         lineHeight: '1.25rem'
  //       }
  //     }),
  //     new Example({
  //       showcase: [new DialogDraggableExample()],
  //       sourceWrapper: this.sourceData.draggable
  //     }),
  //     new CustomBlock({
  //       type: 'tip',
  //       title: 'TIP',
  //       paragraphs: [
  //         new TextNode(`当 modal 的值为 false 时，请一定要确保 append-to-body 属性为 true，由于 Dialog 使用 position: relative 定位，当外层的遮罩层被移除时，Dialog 则会根据当前 DOM 上的祖先节点来定位，因此可能造成定位问题。`)
  //       ]
  //     })
  //   );
  // }
}
