import { TypeDiv } from '@type-dom/framework';
import { TdRadioGroup } from '@type-dom/ui';

export class FormRadioGroupExample extends TypeDiv {
  className: 'FormRadioGroupExample';

  constructor() {
    super();
    this.className = 'FormRadioGroupExample';
    this.addAttrName('form-radio-group-example');
    this.addStyleObj({
      padding: '1em 0',
    });
    this.addChildren(
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt2',
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'OptionA',
            value: 'opt1',
            size: 'large'
          },
          {
            label: 'OptionB',
            value: 'opt2',
          },
          {
            label: 'OptionC',
            value: 'opt3',
          }
        ]
      }),
    )
  }
}
