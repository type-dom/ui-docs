import { Div, TypeDiv } from '@type-dom/framework';
import { TdCheckbox } from '@type-dom/ui';

export class CheckboxDisabledExample extends TypeDiv {
  className: 'CheckboxDisabledExample';

  constructor() {
    super();
    this.className = 'CheckboxDisabledExample';
    this.attr.addName('checkbox-basic-example');
    this.addChildren(
      new Div({
        childNodes: [
          new TdCheckbox({
            modelValue: false,
            label: 'Disabled',
            disabled: true,
          }),
          new TdCheckbox({
            modelValue: true,
            label: 'Not disabled',
          }),
        ]
      }),
    );
  }
}
