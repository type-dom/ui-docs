import { TypeDiv } from '@type-dom/framework';
import { TdSwitch } from '@type-dom/ui';

export class SwitchBasicExample extends TypeDiv {
  className: 'SwitchBasicExample';

  constructor() {
    super();
    this.className = 'SwitchBasicExample';
    this.addChildren(
      new TdSwitch({
        name: 'first',
        modelValue: true,
        events: {
          click: (evt, element) => {
            console.log('switch click. element.modelValue is ', element?.modelValue);
          }
        }
      }),
      new TdSwitch({
        name: 'second',
        switchOnColor: '#13ce66',
        switchOffColor: '#ff4949',
        modelValue: true,
        styleObj: {
          marginLeft: '6px'
        }
      })
    );
  //    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  }
}
