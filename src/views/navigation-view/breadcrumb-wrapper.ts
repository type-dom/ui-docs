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
import { BreadcrumbBasicExample } from '../../examples/navigation/breadcrumb/basic';
import { BreadcrumbIconExample } from '../../examples/navigation/breadcrumb/icon';
import { Example } from '@type-dom/ui';

export class BreadcrumbWrapper extends TypeDiv {
  className: 'BreadcrumbWrapper';
  parent?: RouterView;
  private sourceCode: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'BreadcrumbWrapper';
    this.sourceCode = createProxy({
      basic: '',
      icon: '',
    });
    console.log('this.sourceCode is ', this.sourceCode);
    this.addChildren(
      new Div({
        text: 'Breadcrumb 面包屑',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '显示当前页面的路径，快速返回之前的任意页面。'
      })
    );

    this.createBasic();
    this.createCustom();
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法'
      }),
      new P({
        text: '在 el-breadcrumb 中使用 el-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 \'/\'。'
      }),
      // 典型表单
      new Example({
        showcase: [new BreadcrumbBasicExample()],
        sourceWrapper: this.sourceCode.basic
      })
    );
  }

  createCustom() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '图标分隔符'
      }),
      new P({
        text: '通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 失效。'
      }),
      new Example({
        showcase: [new BreadcrumbIconExample()],
        sourceWrapper: this.sourceCode.icon
      })
    );
  }

  mounted() {
    fetch('./examples/navigation/breadcrumb/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.basic.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/breadcrumb/icon.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.icon.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
  }
}
