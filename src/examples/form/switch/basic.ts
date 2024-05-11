import { TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';


export class SwitchBasicExample extends TypeDiv {
  className: 'SwitchBasicExample';
  constructor() {
    super();
    this.className = 'SwitchBasicExample';
    this.addChild(
      new TdSwitch({
        name: 'switch',
      }),
    )
  }
 }
