import { TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchDisabledExample extends TypeDiv {
  className: 'SwitchDisabledExample';

  constructor() {
    super();
    this.className = 'SwitchDisabledExample';
    this.addChildren(
      new TdSwitch({
        name: 'switch-disabled',
        modelValue: true,
        disabled: true,
        styleObj: {
          marginRight: '20px'
        }
      }),
      new TdSwitch({
        name: 'switch-normal',
        modelValue: true
      })
    );
  }
}
