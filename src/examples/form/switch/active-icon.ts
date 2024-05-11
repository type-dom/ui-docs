import { Br, Div, TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';
import { ElCheckSvg, ElCloseSvg } from '@type-dom/svgs';

export class SwitchActiveIconExample extends TypeDiv {
  className: 'SwitchActiveIconExample';
  constructor() {
    super();
    this.className = 'SwitchActiveIconExample';
    this.addChildren(
      new TdSwitch({
        name: 'switch-icon',
        activeIcon: new ElCheckSvg(),
        inactiveIcon: new ElCloseSvg(),
      }),
      new Br(),
      new TdSwitch({
        name: 'switch-icon',
        activeIcon: new ElCheckSvg(),
        inactiveIcon: new ElCloseSvg(),
        inlinePrompt: true,
      }),
    )
  }
}
