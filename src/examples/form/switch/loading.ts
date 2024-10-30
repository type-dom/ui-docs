import { TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchLoadingExample extends TypeDiv {
  className: 'SwitchLoadingExample';
  private loading: boolean;

  constructor() {
    super();
    this.className = 'SwitchLoadingExample';
    this.loading = false;
    this.addChildren(
      new TdSwitch({
        name: 'switch-loading',
        modelValue: true,
        loading: true,
        styleObj: {
          marginRight: '20px'
        }
      }),
      new TdSwitch({
        name: 'switch-normal',
        modelValue: false,
        loading: true,
      })
    );
  }
}
