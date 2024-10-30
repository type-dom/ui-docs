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
import { BackTopBasicExample } from '../../examples/navigation/backtop/basic';
import { BackTopCustomExample } from '../../examples/navigation/backtop/custom';

export class BackTopWrapper extends TypeDiv {
  className: 'BackTopWrapper';
  parent?: RouterView;
  private sourceCode: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'BackTopWrapper';
    this.sourceCode = createProxy({
      basic: '',
      custom: '',
    });
    console.log('this.sourceCode is ', this.sourceCode);
    this.addChildren(
      new Div({
        text: 'Backtop 回到顶部',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '返回页面顶部的操作按钮。'
      })
    );

    this.createBasic();
    this.createCustom();
  }

  mounted() {
    fetch('./examples/navigation/backtop/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.basic.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
    fetch('./examples/navigation/backtop/custom.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceCode.custom.setValue(data);
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
        text: '通过滑动来查看容器右下角的按钮。'
      }),
      // 典型表单
      new Example({
        showcase: [new BackTopBasicExample()],
        sourceWrapper: this.sourceCode.basic
      })
    );
  }

  createCustom() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义内容'
      }),
      new P({
        text: '显示区域被固定为 40px * 40px 的区域，其中的内容可支持自定义。'
      }),
      new Example({
        showcase: [new BackTopCustomExample()],
        sourceWrapper: this.sourceCode.custom
      })
    );
  }

}
