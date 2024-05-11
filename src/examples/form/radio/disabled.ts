import { TypeDiv } from '@type-dom/framework';
import { TdRadio } from '@type-dom/ui';

export class FormRadioDisabledExample extends TypeDiv {
  className: 'FormRadioDisabledExample';

  constructor() {
    super();
    this.className = 'FormRadioDisabledExample';
    this.addAttrName('form-radio-disabled-example');
    this.addChildren(
      new TdRadio({
        label: 'Option1',
        value: 'opt1',
        disabled: true,
      }),
      new TdRadio({
        label: 'Option2',
        value: 'opt2',
        disabled: true,
        checked: true,
      }),
    )
  }
}
