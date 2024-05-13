import { Br, TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchTextExample extends TypeDiv {
  className: 'SwitchTextExample';

  // private switch: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'SwitchTextExample';
    this.addChildren(
      new TdSwitch({
        name: 'switch-text',
        activeText: 'Pay by month',
        inactiveText: 'Pay by year',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-text',
        activeText: 'Pay by month',
        inactiveText: 'Pay by year',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-text',
        inlinePrompt: true,
        activeText: '是',
        inactiveText: '否',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-text',
        inlinePrompt: true,
        activeText: 'Y',
        inactiveText: 'N',
        switchOnColor: '#13ce66',
        switchOffColor: '#ff4949',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-text',
        inlinePrompt: true,
        activeText: '超出省略',
        inactiveText: '超出省略',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-text',
        inlinePrompt: true,
        activeText: '完整展示多个内容',
        inactiveText: '多个内容',
        switchOnColor: '#13ce66',
        switchOffColor: '#ff4949',
      })
    );
  }
}
