import { createProxy, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchLoadingExample extends TypeDiv {
  className: 'SwitchLoadingExample';
  private loading: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'SwitchLoadingExample';
    this.loading = createProxy(false);
    this.addChildren(
      new TdSwitch({
        name: 'switch-loading',
        loading: true,
        modelValue: true,
        styleObj: {
          marginRight: '20px',
        },
      }),
      new TdSwitch({
        name: 'switch-normal',
      }),
    )
  }
}
