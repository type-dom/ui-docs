import { Br, createProxy, Div, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchSizeExample extends TypeDiv {
  className: 'SwitchSizeExample';
  // private sourceData: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'SwitchSizeExample';
    this.addChildren(
      new TdSwitch({
        name: 'switch-large',
        size: 'large',
        activeText: 'Open',
        inactiveText: 'Close',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-default',
        // size: 'default',,
        activeText: 'Open',
        inactiveText: 'Close',
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-small',
        size: 'small',
        activeText: 'Open',
        inactiveText: 'Close',
      }),
    )
  }
}
