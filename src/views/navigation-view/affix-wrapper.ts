import {
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TypeDiv,
  XProxy,
  createProxy
} from '@type-dom/framework';
import { Example } from '@type-dom/ui';

import { AffixBasicExample } from '../../examples/navigation/affix/basic';
import { AffixTargetContainerExample } from '../../examples/navigation/affix/target-container';
import { AffixFixedPositionExample } from '../../examples/navigation/affix/fixed-position';

export class AffixWrapper extends TypeDiv {
  className: 'AffixWrapper';
  parent?: RouterView;
  private sourceCode: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'AffixWrapper';
    this.sourceCode = createProxy({
      basic: '',
      targetContainer: '',
      fixedPosition: ''
    });
    console.log('this.sourceCode is ', this.sourceCode);
    this.addChildren(
      new Div({
        text: 'Affix 固钉',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '将页面元素固定在特定可视区域。'
      })
    );

    this.createBasic();
    this.createTargetContainer();
    this.createFixedPosition();
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法'
      }),
      new P({
        text: '固钉默认固定在页面顶部。'
      }),
      new P({
        text: '通过设置 offset 属性来改变吸顶距离，默认值为 0。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      // 典型表单
      new Example({
        showcase: [new AffixBasicExample()],
        sourceWrapper: this.sourceCode.basic
      })
    );
  }

  createTargetContainer() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '指定容器'
      }),
      new P({
        text: '通过设置 target 属性，让固钉始终保持在容器内， 超过范围则隐藏。'
      }),
      new P({
        text: '请注意容器避免出现滚动条。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AffixTargetContainerExample()],
        sourceWrapper: this.sourceCode.targetContainer
      })
    );
  }

  createFixedPosition() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: 'Affix 组件提供 2 个固定的位置参数 top 和 bottom。'
      }),
      new P({
        text: '根据你们的设计情况，来选择最佳的标签对齐方式。'
      }),
      new P({
        text: '通过设置 position 属性来改变固定位置，默认值为 top 。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new AffixFixedPositionExample()],
        sourceWrapper: this.sourceCode.fixedPosition
      })
    );
  }

  mounted() {
    fetch('./examples/navigation/affix/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.basic.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/affix/target-container.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.targetContainer.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/affix/fixed-position.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.fixedPosition.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
  }
}
