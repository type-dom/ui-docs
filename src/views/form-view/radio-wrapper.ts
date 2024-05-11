import { createProxy, Div, Head, IJsonData, P, TypeDiv, XProxy } from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { FormRadioBasicExample } from '../../examples/form/radio/basic';
import { FormRadioDisabledExample } from '../../examples/form/radio/disabled';
import { FormRadioGroupExample } from '../../examples/form/radio/group';
import { FormRadioButtonExample } from '../../examples/form/radio/button';
import { FormRadioBorderExample } from '../../examples/form/radio/border';

export class RadioWrapper extends TypeDiv {
  className: 'RadioWrapper';
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'RadioWrapper';
    this.addAttrName('radio-wrapper');
    this.sourceData = createProxy({
      basicSource: '',
      disabledSource: '',
      groupSource: '',
      buttonSource: '',
      borderSource: '',
    });

    this.addChildren(
      new Div({
        text: 'Radio 单选框',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '在一组备选项中进行单选',
      })
    );
    // 基础用法
    this.createBasic();
    // 禁用状态
    this.createDisabled();
    // 单选框组
    this.createGroup();
    // 按钮样式
    this.createButton();
    // 带有边框
    this.createBorder();
  }
  mounted() {
    console.log('RadioWrapper mounted');
    fetch('./examples/form/radio/basic.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/form/radio/disabled.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.disabledSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/form/radio/group.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.groupSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/form/radio/button.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.buttonSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
    fetch('./examples/form/radio/border.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.borderSource.setValue(text);
      })
      .catch(error => console.error('error is ', error));
  }

  // 基础用法
  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法',
      }),
      new P({
        text: '单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。',
      }),
      new P({
        text: '要使用 Radio 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 Radio value属性的值， value可以是String、Number 或 Boolean。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormRadioBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    );
  }
  // 禁用状态
  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态',
      }),
      new P({
        text: 'disabled 属性可以用来控制单选框的禁用状态。',
      }),
      new P({
        text: '你只需要为单选框设置 disabled 属性就能控制其禁用状态。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormRadioDisabledExample()],
        sourceWrapper: this.sourceData.disabledSource,
      })
    );
  }
  // 单选框组
  createGroup() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '单选框组',
      }),
      new P({
        text: '适用于在多个互斥的选项中选择的场景',
      }),
      new P({
        text: '结合radio-group元素和子元素radio可以实现单选组， 为 radio-group 绑定 modelValue，再为 每一个 radio 设置好 label 属性即可， 另外，还可以通过 change 事件来响应变化，它会传入一个参数 value 来表示改变之后的值。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormRadioGroupExample()],
        sourceWrapper: this.sourceData.groupSource,
      })
    );
  }
  // 按钮样式
  createButton() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '按钮样式',
      }),
      new P({
        text: '你可以让单选框看起来像一个按钮一样。',
      }),
      new P({
        text: '只需要把 el-radio 元素换成 el-radio-button 元素即可， 此外，Element Plus 还提供了 size 属性用来控制单选框的大小。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormRadioButtonExample()],
        sourceWrapper: this.sourceData.buttonSource,
      })
    );
  }
  // 带有边框
  createBorder() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '带边框单选框',
      }),
      new P({
        text: '设置 border 属性为 true 可以渲染为带有边框的单选框。',
      }),
      new Example({
        showcase: [new FormRadioBorderExample()],
        sourceWrapper: this.sourceData.borderSource,
      })
    );
  }
}
