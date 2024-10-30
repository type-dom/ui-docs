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

import { DescriptionsBasicExample } from '../../examples/data/descriptions/basic';
import { DescriptionsSizeExample } from '../../examples/data/descriptions/size';
import { DescriptionsCustomExample } from '../../examples/data/descriptions/custom';
import { DescriptionsVerticalExample } from '../../examples/data/descriptions/vertical';

export class DescriptionsWrapper extends TypeDiv {
  className: 'DescriptionsWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'DescriptionsWrapper';
    this.addChildren(
      new Div({
        text: 'Descriptions 描述列表',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '列表形式展示多个字段。'
      })
    );
    this.sourceData = createProxy({
      basic: '',
      size: '',
      custom: '',
      vertical: '',
    });

    this.createBasic();
    this.createSize();
    this.createVertical();
    this.createCustom();
  }

  mounted() {
    fetch('./examples/data/descriptions/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/descriptions/size.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.size.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/descriptions/custom.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.custom.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/descriptions/vertical.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.vertical.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new Example({
        showcase: [new DescriptionsBasicExample()],
        sourceWrapper: this.sourceData.basic
      })
    );
  }

  createSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '不同尺寸'
      }),
      new Example({
        showcase: [new DescriptionsSizeExample()],
        sourceWrapper: this.sourceData.size
      })
    );
  }

  createCustom() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义样式'
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
        showcase: [new DescriptionsCustomExample()],
        sourceWrapper: this.sourceData.custom
      })
    );
  }

  createVertical() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '垂直列表'
      }),
      new Example({
        showcase: [new DescriptionsVerticalExample()],
        sourceWrapper: this.sourceData.vertical
      })
    );
  }
}
