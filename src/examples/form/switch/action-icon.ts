import { createProxy, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';
import { ElHideSvg, ElViewSvg } from '@type-dom/svgs';

export class SwitchActionIconExample extends TypeDiv {
  className: 'SwitchActionIconExample';
  private switch: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'SwitchActionIconExample';
    this.switch = createProxy({
      checked: true,
    });
    this.addChild(
      new TdSwitch({
        name: 'switch-custom-icon',
        modelValue: true,
        activeActionIcon: new ElViewSvg(),
        inactiveActionIcon: new ElHideSvg(),
      }),
    )
  }
}
