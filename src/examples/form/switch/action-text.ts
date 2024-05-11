import { TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchActionTextExample extends TypeDiv {
  className: 'SwitchActionText';
  constructor() {
    super();
    this.className = 'SwitchActionText';
    this.addChildren(
      new TdSwitch({
        name: 'switch-custom-action-icon',
        modelValue: true,
        activeActionText: 'T',
        inactiveActionText: 'F',
      }),
    )
  }
}
