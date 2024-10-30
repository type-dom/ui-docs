import { Br, TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchSizeExample extends TypeDiv {
  className: 'SwitchSizeExample';

  constructor() {
    super();
    this.className = 'SwitchSizeExample';
    this.addChildren(
      new TdSwitch({
        name: 'switch-large',
        modelValue: true,
        size: 'large',
        activeText: 'Open',
        inactiveText: 'Close'
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-default',
        modelValue: true,
        // size: 'default',
        activeText: 'Open',
        inactiveText: 'Close'
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-small',
        modelValue: true,
        size: 'small',
        activeText: 'Open',
        inactiveText: 'Close'
      })
    );
  }
}
