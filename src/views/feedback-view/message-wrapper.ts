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

import { MessageBasicExample } from '../../examples/feedback/message/basic';
import { MessageCenterContentExample } from '../../examples/feedback/message/center-content';
import { MessageClosableExample } from '../../examples/feedback/message/closable';
import { MessageDifferentTypesExample } from '../../examples/feedback/message/different-types';
import { MessageGroupingExample } from '../../examples/feedback/message/grouping';
import { MessagePlainExample } from '../../examples/feedback/message/plain';
import { MessageRawHtmlExample } from '../../examples/feedback/message/raw-html';

export class MessageWrapper extends TypeDiv {
  className: 'MessageWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'MessageWrapper';
    this.addChildren(
      new Div({
        text: 'Message 消息提示',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。'
      }),
    );
    this.sourceData = createProxy({
      basic: '',
      centerContent: '',
      closable: '',
      differentTypes: '',
      grouping: '',
      plain: '',
      rawHtml: ''
    });

    this.createBasic();
    this.createDifferentTypes();
    this.createPlain();
    this.createClosable();
    this.createCenterContent();
    this.createRawHtml();
    this.createGrouping();
  }

  mounted() {
    fetch('./examples/feedback/message/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message/center-content.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.centerContent.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message/closable.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.closable.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message/different-types.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.differentTypes.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message/grouping.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.grouping.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message/plain.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.plain.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/message/raw-html.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.rawHtml.setValue(text);
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
        text: '从顶部出现，3 秒后自动消失。'
      }),
      new P({
        text: 'Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。 Element Plus 注册了一个全局的 $message方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageBasicExample()],
        sourceWrapper: this.sourceData.basic
      }),
    );
  }

  createCenterContent() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '文字居中'
      }),
      new P({
        text: '使用 center 属性让文字水平居中。'
      }),
      new Example({
        showcase: [new MessageCenterContentExample()],
        sourceWrapper: this.sourceData.centerContent
      })
    );
  }

  // todo 还没有实现
  createClosable() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '可关闭的消息提示'
      }),
      new P({
        text: '可以添加关闭按钮。'
      }),
      new P({
        text: '默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true 此外，和 Notification 一样，Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageClosableExample()],
        sourceWrapper: this.sourceData.closable
      })
    );
  }

  createDifferentTypes() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '不同状态'
      }),
      new P({
        text: '用来显示「成功、警告、消息、错误」类的操作反馈。'
      }),
      new P({
        text: '当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为info。 此时正文内容以 message 的值传入。 同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageDifferentTypesExample()],
        sourceWrapper: this.sourceData.differentTypes
      })
    );
  }

  createGrouping() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '分组消息合并'
      }),
      new P({
        text: '合并相同内容的消息。'
      }),
      new P({
        text: '设置 grouping 为 true，内容相同的 message 将被合并。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageGroupingExample()],
        sourceWrapper: this.sourceData.grouping
      }),
    );
  }

  createPlain() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: 'Plain'
      }),
      new P({
        text: '设置 plain 为 plain 背景。'
      }),
      new Example({
        showcase: [new MessagePlainExample()],
        sourceWrapper: this.sourceData.plain
      })
    );
  }

  createRawHtml() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '使用 HTML 片段作为正文内容'
      }),
      new P({
        text: 'message 还支持使用 HTML 字符串作为正文内容。'
      }),
      new P({
        text: '将dangerouslyUseHTMLString属性设置为 true,message 就会被当作 HTML 片段处理。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new MessageRawHtmlExample()],
        sourceWrapper: this.sourceData.rawHtml
      }),
      new CustomBlock({
        type: 'warning',
        title: 'WARNING',
        paragraphs: [
          new TextNode('message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。 因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。')
        ]
      })
    )
  }
}
