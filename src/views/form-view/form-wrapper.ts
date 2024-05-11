import {
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TextNode,
  TypeComponent,
  XProxy,
  createProxy,
} from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { CustomBlock } from '../../components/custom-block/custom-block';
import { FormBasicExample } from '../../examples/form/form/basic';
import { FormInlineExample } from '../../examples/form/form/inline';
import { FormAlignExample } from '../../examples/form/form/align';

export class FormWrapper extends TypeComponent {
  className: 'FormWrapper';
  parent?: RouterView;
  private formModel: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'FormWrapper';
    this.formModel = createProxy({
      activityName: 'activityName',
      activityZone: 'activityZone',
      activityTime: 'activityTime',
      instantDelivery: false,
      activityType: 'activityType',
      resources: 'Sponsor',
      activityForm: 'activityForm',
      basicSourceCode: '',
      inlineSourceCode: '',
      alignSourceCode: '',
    });
    console.log('this.formModel is ', this.formModel);
    this.addChildren(
      new Div({
        text: 'Form 表单',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。',
      })
    );

    this.createClassicForm();
    this.createInlineForm();
    this.createAlignForm();
  }

  createClassicForm() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '典型表单',
      }),
      new P({
        text: '最基础的表单包括各种输入表单项，比如input、select、radio、checkbox等。',
      }),
      new P({
        text: '在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        }
      }),
      // 典型表单
      new Example({
        showcase: [new FormBasicExample()],
        sourceWrapper: this.formModel.basicSourceCode,
      }),
      new CustomBlock({
        title: 'Tip',
        paragraphs: [new TextNode('W3C 标准定义：')],
        blockquote: new P({
          text: '当一个表单中只有一个单行文本输入字段时， 浏览器应当将在此字段中按下 Enter （回车键）的行为视为提交表单的请求。 如果希望阻止这一默认行为，可以在 <td-form> 监听事件 submit prevent。',
        }),
      })
    );
  }

  createInlineForm() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '行内表单',
      }),
      new P({
        text: '当垂直方向空间受限且表单较简单时，可以在一行内放置表单。',
      }),
      new P({
        text: '通过设置 inline 属性为 true 可以让表单域变为行内的表单域。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormInlineExample()],
        sourceWrapper: this.formModel.inlineSourceCode,
      })
    );
  }

  createAlignForm() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '对齐方式',
      }),
      new P({
        text: '根据你们的设计情况，来选择最佳的标签对齐方式。',
      }),
      new P({
        text: '通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left， 当设为 top 时标签会置于表单域的顶部',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      }),
      new Example({
        showcase: [new FormAlignExample()],
        sourceWrapper: this.formModel.alignSourceCode,
      })
    );
  }

  mounted() {
    fetch('./examples/form/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.formModel.basicSourceCode.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/form/inline.ts')
      .then((response) => response.text())
      .then((data) => {
        this.formModel.inlineSourceCode.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/form/align.ts')
      .then((response) => response.text())
      .then((data) => {
        this.formModel.alignSourceCode.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
  }
}
