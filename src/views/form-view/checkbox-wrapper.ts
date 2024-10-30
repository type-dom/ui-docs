import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P, TextNode,
  TypeDiv,
  XProxy
} from '@type-dom/framework';
import { CustomBlock, Example } from '@type-dom/ui';
import { CheckboxBasicExample } from '../../examples/form/checkbox/basic';
import { CheckboxButtonStyleExample } from '../../examples/form/checkbox/button-style';
import { CheckboxDisabledExample } from '../../examples/form/checkbox/disabled';
import { CheckboxGroupingExample } from '../../examples/form/checkbox/grouping';
import { CheckboxIndeterminateExample } from '../../examples/form/checkbox/indeterminate';
import { CheckboxLimitationExample } from '../../examples/form/checkbox/limitation';
import { CheckboxWithBorderExample } from '../../examples/form/checkbox/with-border';


export class CheckboxWrapper extends TypeDiv {
  className: 'CheckboxWrapper';
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'CheckboxWrapper';
    this.attr.addName('radio-wrapper');
    this.sourceData = createProxy({
      basic: '',
      buttonStyle: '',
      disabled: '',
      grouping: '',
      intermediate: '',
      limitation: '',
      withBorder: ''
    });

    this.addChildren(
      new Div({
        text: 'Checkbox 多选框',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '在一组备选项中进行多选。'
      }),
      new CustomBlock({
        title: 'WARNING',
        type: 'warning',
        paragraphs: [new TextNode('label 作为 value 来使用已经被 废弃, 建议label 只用来表示展示的文字，这个被废弃的用法将会在 3.0.0 版本被移除，请考虑使用新 API 替换.')],
      }),
      new CustomBlock({
        title: 'TIP',
        paragraphs: [new TextNode('新的 API value 已在 2.6.0 版本添加，文档中的示例都将使用 value。 如果您使用的版本 低于 2.6.0 并且使用 checkbox-group，请参考：')],
      })
    );
    // 基础用法
    this.createBasic();
    // 禁用状态
    this.createDisabled();
    // 多选框组
    this.createGrouping();
    // 半选
    this.createIntermediate();
    // 限制选择
    this.createLimitation();
    // 按钮样式
    this.createButtonStyle();
    // // 带有边框
    this.createWithBorder();
  }

  mounted() {
    console.log('CheckboxWrapper mounted');
    fetch('./examples/form/checkbox/basic.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.basic.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
    fetch('./examples/form/checkbox/disabled.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.disabled.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
    fetch('./examples/form/checkbox/grouping.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.grouping.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
    fetch('./examples/form/checkbox/button-style.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.buttonStyle.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
    fetch('./examples/form/checkbox/with-border.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.withBorder.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
    fetch('./examples/form/checkbox/indeterminate.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.intermediate.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
    fetch('./examples/form/checkbox/limitation.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.limitation.setValue(text);
      })
      .catch((error) => console.error('error is ', error));
  }

  // 基础用法
  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法'
      }),
      new P({
        text: '单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。'
      }),
      new P({
        text: 'checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 v-model 绑定 Array 类型的变量即可。 只有一个选项时的默认值类型为 Boolean，当选中时值为true。 el-checkbox 标签中的内容将成为复选框按钮之后的描述。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CheckboxBasicExample()],
        sourceWrapper: this.sourceData.basic
      })
    );
  }

  // 禁用状态
  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态'
      }),
      new P({
        text: '多选框不可用状态。'
      }),
      new P({
        text: '设置 disabled 属性即可。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CheckboxDisabledExample()],
        sourceWrapper: this.sourceData.disabled
      })
    );
  }

  // 单选框组
  createGrouping() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '多选框组'
      }),
      new P({
        text: '适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。'
      }),
      new P({
        text: '在 el-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true。 在 el-checkbox 组件中，value 是选择框的值。 如果该组件下没有被传入内容，那么 label 将会作为 checkbox 按钮后的介绍。 value 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CheckboxGroupingExample()],
        sourceWrapper: this.sourceData.grouping
      })
    );
  }
  // 半选
  createIntermediate() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '中间状态'
      }),
      new P({
        text: 'indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果'
      }),
      new Example({
        showcase: [new CheckboxIndeterminateExample()],
        sourceWrapper: this.sourceData.intermediate
      })
    );
  }
  // 限制选择
  createLimitation() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '可选项目数量的限制'
      }),
      new P({
        text: '使用 min 和 max 属性能够限制可以被勾选的项目的数量。'
      }),
      new Example({
        showcase: [new CheckboxLimitationExample()],
        sourceWrapper: this.sourceData.limitation
      })
    );
  }

  // 按钮样式
  createButtonStyle() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '按钮样式'
      }),
      new P({
        text: '按钮样式的多选组合。'
      }),
      new P({
        text: '只需要把 el-checkbox 元素替换为 el-checkbox-button 元素即可。 此外，Element Plus 还提供了size属性。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CheckboxButtonStyleExample()],
        sourceWrapper: this.sourceData.buttonStyle
      })
    );
  }

  // 带有边框
  createWithBorder() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '带有边框'
      }),
      new P({
        text: '设置border属性可以渲染为带有边框的多选框。'
      }),
      new Example({
        showcase: [new CheckboxWithBorderExample()],
        sourceWrapper: this.sourceData.withBorder
      })
    );
  }

}
