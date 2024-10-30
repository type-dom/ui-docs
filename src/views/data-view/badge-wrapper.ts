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

import { BadgeBasicExample } from '../../examples/data/badge/basic';
import { BadgeMaxExample } from '../../examples/data/badge/max';
import { BadgeCustomExample } from '../../examples/data/badge/custom';
import { BadgeDotExample } from '../../examples/data/badge/dot';
import { BadgeOffsetExample } from '../../examples/data/badge/offset';

export class BadgeWrapper extends TypeDiv {
  className: 'BadgeWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'BadgeWrapper';
    this.addChildren(
      new Div({
        text: 'Badge 徽标',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '按钮和图标上的数字或状态标记。'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      maxSource: '',
      customSource: '',
      dotSource: '',
      offsetSource: ''
    });

    this.createBasic();
    this.createMax();
    this.createCustom();
    this.createDot();
    this.createOffset();
  }

  mounted() {
    fetch('./examples/data/badge/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/badge/max.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.maxSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/badge/custom.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/badge/dot.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.dotSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/badge/offset.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.offsetSource.setValue(text);
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
        text: '可以用来展示新消息的数量。'
      }),
      new P({
        text: '数量值可接受 Number 或 String。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new BadgeBasicExample()],
        sourceWrapper: this.sourceData.basicSource
      })
    );
  }

  createMax() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '最大值'
      }),
      new P({
        text: '你还可以自定义最大值'
      }),
      new P({
        text: '由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new BadgeMaxExample()],
        sourceWrapper: this.sourceData.maxSource
      })
    );
  }

  createCustom() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义显示内容'
      }),
      new P({
        text: '你也可以展示除数字以外你想要展示的任何值。'
      }),
      new P({
        text: '当 value 是 String 时，可以显示自定义文字。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new BadgeCustomExample()],
        sourceWrapper: this.sourceData.customSource
      })
    );
  }

  createDot() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '小红点'
      }),
      new P({
        text: '通过一个小红点标记来告知用户有新内容。'
      }),
      new P({
        text: '使用 is-dot 属性。 是个布尔值。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new BadgeDotExample()],
        sourceWrapper: this.sourceData.dotSource
      })
    );
  }

  createOffset() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '偏移量'
      }),
      new P({
        text: '设置徽章点的偏移，格式是[左，顶部]， 代表状态点从左侧和默认位置顶部的偏移。'
      }),
      new Example({
        showcase: [new BadgeOffsetExample()],
        sourceWrapper: this.sourceData.offsetSource
      })
    );
  }
}
