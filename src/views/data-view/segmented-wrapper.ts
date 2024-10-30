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

import { SegmentedBasicExample } from '../../examples/data/segmented/basic';
import { SegmentedBlockExample } from '../../examples/data/segmented/block';
import { SegmentedCustomContentExample } from '../../examples/data/segmented/custom-content';
import { SegmentedCustomStyleExample } from '../../examples/data/segmented/custom-style';
import { SegmentedDisabledExample } from '../../examples/data/segmented/disabled';

export class SegmentedWrapper extends TypeDiv {
  className: 'SegmentedWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'SegmentedWrapper';
    this.addChildren(
      new Div({
        text: 'Segmented 分段控制器',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '用于展示多个选项并允许用户选择其中单个选项。'
      })
    );
    this.sourceData = createProxy({
      basic: '',
      block: '',
      customContent: '',
      customStyle: '',
      disabled: ''
    });

    this.createBasic();
    this.createDisabled();
    this.createBlock();
    this.createCustomContent();
    this.createCustomStyle();
  }

  mounted() {
    fetch('./examples/data/segmented/basic.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.basic.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/segmented/disabled.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.disabled.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/segmented/custom-content.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.customContent.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/segmented/custom-style.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.customStyle.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/segmented/block.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.block.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new P({
        text: '设置v-model为选项值。'
      }),
      new Example({
        showcase: [new SegmentedBasicExample()],
        sourceWrapper: this.sourceData.basic
      })
    );
  }

  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态'
      }),
      new P({
        text: '设置 disabled 属性来禁用一些选项。'
      }),
      new Example({
        showcase: [new SegmentedDisabledExample()],
        sourceWrapper: this.sourceData.disabled
      })
    );
  }

  createBlock() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: 'Block 分段选择器'
      }),
      new P({
        text: '设置block为true以适应父元素的宽度。'
      }),
      new Example({
        showcase: [new SegmentedBlockExample()],
        sourceWrapper: this.sourceData.block
      })
    );
  }
  createCustomContent() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义内容'
      }),
      new P({
        text: '设置 default slot 位来渲染自定义内容。'
      }),
      new Example({
        showcase: [new SegmentedCustomContentExample()],
        sourceWrapper: this.sourceData.customContent
      })
    );
  }
  createCustomStyle() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义样式'
      }),
      new P({
        text: '设置 default slot 位来渲染自定义内容。'
      }),
      new Example({
        showcase: [new SegmentedCustomStyleExample()],
        sourceWrapper: this.sourceData.customStyle
      })
    );
  }
}
