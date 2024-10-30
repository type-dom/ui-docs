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

import { CollapseBasicExample } from '../../examples/data/collapse/basic';
import { CollapseAccordionExample } from '../../examples/data/collapse/accordion';
import { CollapseCustomizationExample } from '../../examples/data/collapse/customization';

export class CollapseWrapper extends TypeDiv {
  className: 'CollapseWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'CollapseWrapper';
    this.addChildren(
      new Div({
        text: 'Collapse 折叠面板',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '通过折叠面板收纳内容区域'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      accordionSource: '',
      customizationSource: ''
    });

    this.createBasic();
    this.createAccordion();
    this.createCustomization();
  }

  mounted() {
    fetch('./examples/data/collapse/basic.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/collapse/accordion.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.accordionSource.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/collapse/customization.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.customizationSource.setValue(text);
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
        text: '可同时展开多个面板，面板之间不影响'
      }),
      new Example({
        showcase: [new CollapseBasicExample()],
        sourceWrapper: this.sourceData.basicSource
      })
    );
  }

  createAccordion() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '手风琴效果'
      }),
      new P({
        text: '每次只能展开一个面板'
      }),
      new P({
        text: '通过 accordion 属性来设置是否以手风琴模式显示。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CollapseAccordionExample()],
        sourceWrapper: this.sourceData.countDownSource
      }),
    );
  }

  createCustomization() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义面板标题'
      }),
      new P({
        text: '除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。'
      }),
      new Example({
        showcase: [new CollapseCustomizationExample()],
        sourceWrapper: this.sourceData.customizationSource
      })
    );
  }
}
