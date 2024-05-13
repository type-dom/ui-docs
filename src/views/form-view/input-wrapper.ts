import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TypeDiv,
  XProxy,
} from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { FormInputBasicExample } from '../../examples/form/input/basic';
import { FormInputDisabledExample } from '../../examples/form/input/disabled';
import { FormInputClearableExample } from '../../examples/form/input/clearable';
import { FormatInputFormatExample } from '../../examples/form/input/format';
import { FormInputPasswordExample } from '../../examples/form/input/password';
import { FormInputIconExample } from '../../examples/form/input/icon';
import { FormInputTextareaExample } from '../../examples/form/input/textarea';
import { FormInputSizeExample } from '../../examples/form/input/size';

export class InputWrapper extends TypeDiv {
  className: 'InputWrapper';
  parent?: RouterView;
  title = 'Here is a input wrapper ';
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    console.error('InputWrapper constructor . ');
    this.className = 'InputWrapper';
    this.addChildren(
      new Div({
        text: 'Input 输入框',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '通过鼠标或键盘输入字符',
      })
    );
    // this.setContext(true);
    this.sourceData = createProxy({
      basicSource: '',
      disabledSource: '',
      clearableSource: '',
      formatSource: '',
      passwordSource: '',
      iconSource: '',
      textareaSource: '',
      sizeSource: '',
    });
    // 基础用法
    this.createBasic();
    // 禁用状态
    this.createDisabled();
    // 一键清空
    this.createClearable();
    // 格式化
    this.createFormat();
    // 密码框
    this.createPassword();
    // 带图标的输入框
    this.createIcon();
    // 文本域
    this.createTextarea();
    // 尺寸
    this.createSize();
  }

  beforeCreate() {
    console.log('beforeCreate . ');
  }

  created() {
    console.error('InputWrapper created . ');
    // let id = 1
    // const me = this;
    // setInterval(()=> {
    //   me.data$.setDataItem('title', 'hello world . ' + id++);
    // }, 1000);
    // this.data$.setDataItem('title', 'hello world . ' + id++);
    // this.data$.data.title = 'hello world . ' + id++;
    // const num = ref(0);
    // console.log('num is ', num.value);
    // const reactiveData = reactive({
    //   name: 'Helen',
    //   age: 27,
    //   address: 'Shanghai',
    // });
    // console.log('reactiveData is ', reactiveData);
    // console.log('this.data is ', this.data);
    // this.data.title = 'welcome . ';
    // this.data.input = 'def';
    // this.data.name = 'John';
    // this.data.input = 'Please input . '
    // // @ts-ignore
    // this.data.user.name = 'Jane';
  }

  mounted() {
    console.log('InputWrapper mounted . ');
    fetch('./examples/form/input/basic.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.basicSource.setValue(text);
      });
    fetch('./examples/form/input/disabled.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.disabledSource.setValue(text);
      });
    fetch('./examples/form/input/clearable.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.clearableSource.setValue(text);
      });
    fetch('./examples/form/input/format.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.formatSource.setValue(text);
      });
    fetch('./examples/form/input/password.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.passwordSource.setValue(text);
      });
    fetch('./examples/form/input/icon.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.iconSource.setValue(text);
      });
    fetch('./examples/form/input/textarea.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.textareaSource.setValue(text);
      });
    fetch('./examples/form/input/size.ts')
      .then((res) => res.text())
      .then((text) => {
        console.log('text is ', text);
        this.sourceData.sizeSource.setValue(text);
      });
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法',
      }),
      new Example({
        showcase: [new FormInputBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    );
  }

  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态',
      }),
      new P({
        text: '通过 disabled 属性指定是否禁用 input 组件',
      }),
      new Example({
        showcase: [new FormInputDisabledExample()],
        sourceWrapper: this.sourceData.disabledSource,
      })
    );
  }

  createClearable() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '一键清空',
      }),
      new P({
        text: '使用clearable属性即可得到一个可一键清空的输入框',
      }),
      new Example({
        showcase: [new FormInputClearableExample()],
        sourceWrapper: this.sourceData.clearableSource,
      })
    );
  }

  createFormat() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '格式化',
      }),
      new P({
        text: '在 formatter的情况下显示值，我们通常同时使用 parser',
      }),
      new Example({
        showcase: [new FormatInputFormatExample()],
        sourceWrapper: this.sourceData.formatSource,
      })
    );
  }

  createPassword() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '密码框',
      }),
      new P({
        text: '使用 show-password 属性即可得到一个可切换显示隐藏的密码框',
      }),
      new Example({
        showcase: [new FormInputPasswordExample()],
        sourceWrapper: this.sourceData.passwordSource,
      })
    );
  }

  createIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '带图标的输入框',
      }),
      new P({
        text: '带有图标标记输入类型',
      }),
      new P({
        text: '通过设置 prefix-icon 或 suffix-icon 属性即可',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormInputIconExample()],
        sourceWrapper: this.sourceData.iconSource,
      })
    );
  }

  createTextarea() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '文本域',
      }),
      new P({
        text: '用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的 textarea 元素。',
      }),
      new P({
        text: '文本域高度可通过 rows 属性控制', // todo not realized yet;
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormInputTextareaExample()],
        sourceWrapper: this.sourceData.textareaSource,
      })
    );
  }

  createSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '尺寸',
      }),
      new P({
        text: '使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。',
      }),
      new Example({
        showcase: [new FormInputSizeExample()],
        sourceWrapper: this.sourceData.sizeSource,
      })
    );
  }
}
