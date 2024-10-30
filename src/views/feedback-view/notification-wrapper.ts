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

import { NotificationBasicExample } from '../../examples/feedback/notification/basic';
import { NotificationDifferentTypesExample } from '../../examples/feedback/notification/different-types';
import { NotificationNoCloseExample } from '../../examples/feedback/notification/no-close';
import { NotificationOffsettingExample } from '../../examples/feedback/notification/offsetting';
import { NotificationPositioningExample } from '../../examples/feedback/notification/positioning';
import { NotificationRawHtmlExample } from '../../examples/feedback/notification/raw-html';

export class NotificationWrapper extends TypeDiv {
  className: 'NotificationWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'NotificationWrapper';
    this.addChildren(
      new Div({
        text: 'Notification 通知',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '悬浮出现在页面角落，显示全局的通知提醒消息。'
      }),
    );
    this.sourceData = createProxy({
      basic: '',
      differentTypes: '',
      noClose: '',
      offsetting: '',
      positioning: '',
      rawHtml: '',
    });

    this.createBasic();
    this.createDifferentTypes();
    this.createPositioning();
    this.createOffsetting();
    this.createRawHtml();
    this.createNoClose();
  }

  mounted() {
    fetch('./examples/feedback/notification/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/notification/different-types.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.differentTypes.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/notification/no-close.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.noClose.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/notification/offsetting.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.offsetting.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/notification/positioning.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.positioning.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/notification/raw-html.ts')
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
        text: 'Element Plus 注册了 $notify 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。'
      }),
      new Example({
        showcase: [new NotificationBasicExample()],
        sourceWrapper: this.sourceData.basic
      }),
    );
  }

  createDifferentTypes() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '不同类型的通知'
      }),
      new P({
        text: '我们提供了四种不同类型的提醒框：success、warning、info 和error。'
      }),
      new P({
        text: 'Element Plus 为 Notification 组件准备了四种通知类型：success, warning, info, error。 他们可以设置 type 字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 Notification 的各种 type 注册了单独的方法，可以在不传入 type 字段的情况下像 open3 和 open4 那样直接调用。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new NotificationDifferentTypesExample()],
        sourceWrapper: this.sourceData.differentTypes
      })
    );
  }

  createNoClose() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '隐藏关闭按钮'
      }),
      new P({
        text: '通知的关闭按钮可以被设置为隐藏。'
      }),
      new P({
        text: '将 showClose 属性设置为 false 即可隐藏关闭按钮。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new NotificationNoCloseExample()],
        sourceWrapper: this.sourceData.noClose
      })
    );
  }

  createOffsetting() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '有位置偏移的通知栏'
      }),
      new P({
        text: '能够设置偏移量来使 Notification 偏移默认位置。'
      }),
      new P({
        text: 'Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 Notification 实例应当具有一个相同的偏移量。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new NotificationOffsettingExample()],
        sourceWrapper: this.sourceData.offsetting
      })
    );
  }

  createPositioning() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义消息弹出的位置'
      }),
      new P({
        text: '可以让 Notification 从屏幕四角中的任意一角弹出。'
      }),
      new P({
        text: '使用 position 属性设置 Notification 的弹出位置， 支持四个选项：top-right、top-left、bottom-right 和 bottom-left， 默认为 top-right。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new NotificationPositioningExample()],
        sourceWrapper: this.sourceData.positioning
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
        showcase: [new NotificationRawHtmlExample()],
        sourceWrapper: this.sourceData.rawHtml
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

}
