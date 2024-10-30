import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TypeDiv,
  XProxy
} from '@type-dom/framework';
import { Example } from '@type-dom/ui';

import { AlertBasicExample } from '../../examples/feedback/alert/basic';
import { AlertThemeExample } from '../../examples/feedback/alert/theme';
import { AlertCloseButtonExample } from '../../examples/feedback/alert/close-button';
import { AlertIconExample } from '../../examples/feedback/alert/icon';
import { AlertCenterExample } from '../../examples/feedback/alert/center';
import { AlertDescriptionExample } from '../../examples/feedback/alert/description';
import { AlertIconDescriptionExample } from '../../examples/feedback/alert/icon-description';

export class AlertWrapper extends TypeDiv {
  className: 'AlertWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'AlertWrapper';
    this.addChildren(
      new Div({
        text: 'Alert 提示',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '用于页面中展示重要的提示信息。'
      })
    );
    this.sourceData = createProxy({
      alignCenter: '',
      basic: '',
      center: '',
      closeButton: '',
      description: '',
      theme: '',
      icon: '',
      iconDescription: '',
    });

    this.createBasic();
    this.createTheme();
    this.createCloseButton();
    this.createIcon();
    this.createCenter();
    this.createDescription();
    this.createIconDescription();
  }

  mounted() {
    fetch('./examples/feedback/alert/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/alert/theme.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.theme.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/alert/close-button.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.closeButton.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/alert/icon.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.icon.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/alert/center.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.center.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/alert/description.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.description.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/feedback/alert/icon-description.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.iconDescription.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: 'Alert 组件不属于浮层元素，不会自动消失或关闭。'
      }),
      new P({
        text: 'Dialog 弹出一个对话框，适合需要定制性更大的场景。'
      }),
      new P({
        text: 'Alert 组件提供四种类型，由 type 属性指定，默认值为 info。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AlertBasicExample()],
        sourceWrapper: this.sourceData.basic
      }),
    );
  }

  createTheme() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '主题'
      }),
      new P({
        text: 'Alert 组件提供了两个不同的主题：light 和 dark。'
      }),
      new P({
        text: '通过设置 effect 属性来改变主题，默认为 light。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AlertThemeExample()],
        sourceWrapper: this.sourceData.theme
      })
    );
  }

  createCloseButton() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义关闭按钮'
      }),
      new P({
        text: '你可以自定义关闭按钮为文字或其他符号。'
      }),
      new P({
        text: '你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。 你可以设置 close-text 属性来代替右侧的关闭图标， 需要注意的是 close-text 必须是一个字符串。 当 Alert 组件被关闭时会触发 close 事件。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AlertCloseButtonExample()],
        sourceWrapper: this.sourceData.closeButton
      })
    );
  }

  createIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '使用图标'
      }),
      new P({
        text: '你可以通过为 Alert 组件添加图标来提高可读性。'
      }),
      new P({
        text: '通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AlertIconExample()],
        sourceWrapper: this.sourceData.icon
      }),
    );
  }

  createCenter() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '文字居中'
      }),
      new P({
        text: '使用 center 属性来让文字水平居中。'
      }),
      new Example({
        showcase: [new AlertCenterExample()],
        sourceWrapper: this.sourceData.center
      })
    );
  }

  createDescription() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '文字描述'
      }),
      new P({
        text: '为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。'
      }),
      new P({
        text: '除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AlertDescriptionExample()],
        sourceWrapper: this.sourceData.description
      })
    );
  }

  createIconDescription() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '带图标和描述'
      }),
      new P({
        text: '在最后, 这是一个带有图标和描述的例子。'
      }),
      new Example({
        showcase: [new AlertIconDescriptionExample()],
        sourceWrapper: this.sourceData.iconDescription
      })
    );
  }

}
