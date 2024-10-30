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

import { MessageBoxAlertExample } from '../../examples/feedback/message-box/alert';
import { MessageBoxCenteredContentExample } from '../../examples/feedback/message-box/centered-content';
import { MessageBoxConfirmExample } from '../../examples/feedback/message-box/confirm';
import { MessageBoxCustomizationExample } from '../../examples/feedback/message-box/customization';
import { MessageBoxCustomizedIconExample } from '../../examples/feedback/message-box/customized-icon';
import { MessageBoxDistinguishableCloseCenterExample } from '../../examples/feedback/message-box/distinguishable-close-cancel';
import { MessageBoxDraggableExample } from '../../examples/feedback/message-box/draggable';
import { MessageBoxPromptExample } from '../../examples/feedback/message-box/prompt';
import { MessageBoxUseHtmlExample } from '../../examples/feedback/message-box/use-html';
import { MessageBoxUseVNodeExample } from '../../examples/feedback/message-box/use-vnode';

export class MessageBoxWrapper extends TypeDiv {
  className: 'MessageBoxWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'MessageBoxWrapper';
    this.addChildren(
      new Div({
        text: 'MessageBox 消息弹框',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。'
      }),
      new CustomBlock({
        type: 'tip',
        title: 'TIP',
        paragraphs: [
          new TextNode(`从设计上来说，MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 Dialog。`)
        ]
      })
    );
    this.sourceData = createProxy({
      alert: '',
      centeredContent: '',
      confirm: '',
      customization: '',
      customizedIcon: '',
      distinguishableCloseCenter: '',
      draggable: '',
      prompt: '',
      useHtml: '',
      useVNode: ''
    });

    this.createAlert();
    this.createConfirm();
    this.createPrompt();
    this.createUseVNode();
    this.createCustomization();
    this.createUseHtml();
    this.createDistinguishableCloseCenter();
    this.createCenteredContent();
    this.createCustomizedIcon();
    this.createDraggable();
  }

  mounted() {
    fetch('./examples/feedback/message-box/alert.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.alert.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/centered-content.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.centeredContent.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/confirm.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.confirm.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/customization.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customization.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/customized-icon.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customizedIcon.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/distinguishable-close-cancel.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.distinguishableCloseCenter.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/draggable.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.draggable.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/prompt.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.prompt.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/use-html.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.useHtml.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message-box/use-vnode.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.useVNode.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createAlert() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '消息提示'
      }),
      new P({
        text: '当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。'
      }),
      new P({
        text: '调用 ElMessageBox.alert 方法以打开 alert 框。 它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，message和title。 值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。 若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxAlertExample()],
        sourceWrapper: this.sourceData.alert
      }),
    );
  }

  createCenteredContent() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '内容居中'
      }),
      new P({
        text: '消息弹框支持使用居中布局。'
      }),
      new P({
        text: '将 center 属性设置为 true 可将内容居中显示。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxCenteredContentExample()],
        sourceWrapper: this.sourceData.centeredContent
      })
    );
  }

  createConfirm() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '确认消息'
      }),
      new P({
        text: '提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。'
      }),
      new P({
        text: '调用 ElMessageBox.confirm 方法以打开 confirm 框。它模拟了系统的 confirm。 Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。 type 字段表明消息类型，可以为success，error，info和 warning，无效的设置将会被忽略。 需要注意的是，第二个参数 title 必须定义为 String 类型，如果是 Object，会被当做为 options使用。 在这里我们返回了一个 Promise 来处理后续响应。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxConfirmExample()],
        sourceWrapper: this.sourceData.confirm
      })
    );
  }

  createCustomization() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '个性化'
      }),
      new P({
        text: '消息弹框可以被定制来展示各种内容。'
      }),
      new P({
        text: '上面提到的三个方法都是对 ElMessageBox 方法的二次包装。 本例直接调用 ElMessageBox 方法，使用了 showCancelButton 字段，用于显示取消按钮。 另外可使用 cancelButtonClass 为其添加自定义样式，使用 cancelButtonText 来自定义取消按钮文本（Confirm 按钮也具有相同的字段，在文末的 API 说明中有完整的字段列表）。 此例还使用了 beforeClose 属性， 当 beforeClose 被赋值且被赋值为一个回调函数时，在消息弹框被关闭之前将会被调用，并且可以通过该方法来阻止弹框被关闭。 它是一个接收三个参数：action、instance 和done 的方法。 使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加 loading 状态等；此时若需要关闭实例，可以调用 done 方法（若在 beforeClose 中没有调用 done，则弹框便不会关闭）。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxCustomizationExample()],
        sourceWrapper: this.sourceData.customization
      })
    );
  }

  createCustomizedIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义图标'
      }),
      new P({
        text: '图标可以使用任意 组件或 渲染函数 (JSX)来自定义。'
      }),
      new Example({
        showcase: [new MessageBoxCustomizedIconExample()],
        sourceWrapper: this.sourceData.customizedIcon
      })
    );
  }

  createDistinguishableCloseCenter() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '区分取消操作与关闭操作'
      }),
      new P({
        text: '有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。'
      }),
      new P({
        text: '默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和 callback 回调的参数均为 \'cancel\'。 如果将distinguishCancelAndClose属性设置为 true，则上述两种行为的参数分别为 \'cancel\' 和 \'close\'。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxDistinguishableCloseCenterExample()],
        sourceWrapper: this.sourceData.distinguishableCloseCenter
      })
    );
  }

  createDraggable() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '可拖放'
      }),
      new P({
        text: '设置 MessageBox 可以拖拽。'
      }),
      new P({
        text: '设置draggable属性为true来开启拖拽弹窗能力。 设置 overflow 2.5.4 为 true 可以让拖拽范围超出可视区。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxDraggableExample()],
        sourceWrapper: this.sourceData.draggable
      }),
    );
  }

  createPrompt() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '提交内容'
      }),
      new P({
        text: '当需要用户输入内容时，可以使用 Prompt 类型的消息框。'
      }),
      new P({
        text: '调用 ElMessageBox.prompt 方法以打开 prompt 框。它模拟了系统的 prompt。 可以用 inputPattern 字段自己规定匹配模式， 使用 inputValidator 来指定验证方法，它应该返回 Boolean 或 String。 返回 false 或 String 表示验证失败， 返回的字符串将用作 inputErrorMessage，用来提示用户错误原因。 此外，可以用 inputPlaceholder 字段来定义输入框的占位符。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxPromptExample()],
        sourceWrapper: this.sourceData.prompt
      })
    );
  }

  createUseHtml() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '使用 HTML 片段'
      }),
      new P({
        text: 'message 支持传入 HTML 字符串来作为正文内容。'
      }),
      new P({
        text: '将 dangerouslyUseHTMLString 属性设置为 true，message 属性就会被当作 HTML 片段处理。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBoxUseHtmlExample()],
        sourceWrapper: this.sourceData.useHtml
      }),
      new CustomBlock({
        type: 'warning',
        title: 'WARNING',
        paragraphs: [
          new TextNode(`message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。 因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。`)
        ]
      })
    );
  }

  createUseVNode() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '使用 VNode'
      }),
      new P({
        text: 'message 可以是 VNode。'
      }),
      new Example({
        showcase: [new MessageBoxUseVNodeExample()],
        sourceWrapper: this.sourceData.useVNode
      }),
    );
  }
}
