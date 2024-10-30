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

import { TabsBasicExample } from '../../examples/navigation/tabs/basic';
import { TabsBorderCardExample } from '../../examples/navigation/tabs/border-card';
import { TabsCardStyleExample } from '../../examples/navigation/tabs/card-style';
import { TabsTabPositionExample } from '../../examples/navigation/tabs/tab-position';
import { TabsCustomTabExample } from '../../examples/navigation/tabs/custom-tab';
import { TabsDynamicTabsExample } from '../../examples/navigation/tabs/dynamic-tabs';
import { TabsCustomizedAddButtonIconExample } from '../../examples/navigation/tabs/customized-add-button-icon';
import { TabsCustomizedTriggerExample } from '../../examples/navigation/tabs/customized-trigger';
import { Example } from '@type-dom/ui';

export class TabsWrapper extends TypeDiv {
  className: 'TabsWrapper';
  parent?: RouterView;
  private sourceCode: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'TabsWrapper';
    this.sourceCode = createProxy({
      basic: '',
      borderCard: '',
      cardStyle: '',
      customTab: '',
      dynamicTabs: '',
      customizedAddButtonIcon: '',
      customizedTrigger: '',
      tabPosition: ''
    });
    console.log('this.sourceCode is ', this.sourceCode);
    this.addChildren(
      new Div({
        text: 'Tabs 标签页',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '分隔内容上有关联但属于不同类别的数据集合。'
      })
    );

    this.createBasic();
    this.createCardStyle();
    this.createBorderCard();
    this.createTabPosition();
    this.createCustomTab();
    this.createDynamicTabs();
    this.createCustomizedAddButtonIcon();
    this.createCustomizedTrigger();
  }

  mounted() {
    fetch('./examples/navigation/tabs/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.basic.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/tabs/card-style.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.cardStyle.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法'
      }),
      new P({
        text: '基础的、简洁的标签页。'
      }),
      new P({
        text: 'Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      // 典型表单
      new Example({
        showcase: [new TabsBasicExample()],
        sourceWrapper: this.sourceCode.basic
      })
    );
  }

  createCardStyle() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '卡片风格的标签'
      }),
      new P({
        text: '你可以设置具有卡片风格的标签。'
      }),
      new P({
        text: '只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new TabsCardStyleExample()],
        sourceWrapper: this.sourceCode.cardStyle
      })
    );
  }

  createBorderCard() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '带有边框的卡片风格'
      }),
      new P({
        text: '你还可以设置标签页为带有边框的卡片'
      }),
      new P({
        text: '将 type 设置为 border-card。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new TabsBorderCardExample()],
        sourceWrapper: this.sourceCode.borderCard
      })
    );
  }

  createTabPosition() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '标签位置的设置'
      }),
      new P({
        text: '可以通过 tab-position 设置标签的位置'
      }),
      new P({
        text: '标签一共有四个方向的设置 tabPosition="left|right|top|bottom',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new TabsTabPositionExample()],
        sourceWrapper: this.sourceCode.tabPosition
      })
    );
  }

  createCustomTab() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义标签页的内容'
      }),
      new P({
        text: '可以通过具名插槽来实现自定义标签页的内容'
      }),
      new Example({
        showcase: [new TabsCustomTabExample()],
        sourceWrapper: this.sourceCode.customTab
      })
    );
  }

  createDynamicTabs() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '动态增减标签页'
      }),
      new P({
        text: '增减标签页按钮只能在选项卡样式的标签页下使用'
      }),
      new Example({
        showcase: [new TabsDynamicTabsExample()],
        sourceWrapper: this.sourceCode.dynamicTabs
      })
    );
  }

  createCustomizedAddButtonIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '添加按钮自定义图标'
      }),
      new Example({
        showcase: [new TabsCustomizedAddButtonIconExample()],
        sourceWrapper: this.sourceCode.cardStyle
      })
    );
  }

  createCustomizedTrigger() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '增加标签页触发器自定义'
      }),
      new Example({
        showcase: [new TabsCustomizedTriggerExample()],
        sourceWrapper: this.sourceCode.customizedTrigger
      })
    );
  }
}
