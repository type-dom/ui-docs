import { TypeDiv } from '@type-dom/framework';
import { TdCheckbox, TdCheckboxGroup } from '@type-dom/ui';

export class CheckboxLimitationExample extends TypeDiv {
  className: 'CheckboxLimitationExample';

  constructor() {
    super();
    this.className = 'CheckboxLimitationExample';
    this.attr.addName('check-limitation-example');

    const checkedCities = ['Shanghai', 'Beijing'];
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
    this.addChildren(
      new TdCheckboxGroup({
        name: 'check-group',
        modelValue: checkedCities,
        min: 1,
        max: 2,
        styleObj: {
          marginBottom: '10px'
        },
        init: (element) => {
          for (const city of cities) {
            element.addChild(new TdCheckbox({
              label: city,
              value: city,
              slot: city,
            }))
          }
        }
      }),
    );
  }
}
