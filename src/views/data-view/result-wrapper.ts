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

import { ResultBasicExample } from '../../examples/data/result/basic';
import { ResultCustomExample } from '../../examples/data/result/custom';

export class ResultWrapper extends TypeDiv {
  className: 'ResultWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'ResultWrapper';
    this.addChildren(
      new Div({
        text: 'Result 结果',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '用于对用户的操作结果或者异常状态做反馈。'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      customSource: '',
    });

    this.createBasic();
    this.createCustom();
  }

  mounted() {
    fetch('./examples/data/result/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/result/custom.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new Example({
        showcase: [new ResultBasicExample()],
        sourceWrapper: this.sourceData.basicSource
      })
    );
  }

  createCustom() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义内容'
      }),
      new Example({
        showcase: [new ResultCustomExample()],
        sourceWrapper: this.sourceData.customSource
      })
    );
  }
}
