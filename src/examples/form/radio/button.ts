import { Br, TypeDiv } from '@type-dom/framework';
import { TdRadioGroup } from '@type-dom/ui';

export class FormRadioButtonExample extends TypeDiv {
  className: 'FormRadioButtonExample';

  constructor() {
    super();
    this.className = 'FormRadioButtonExample';
    this.addChildren(
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        isButton: true,
        size: 'large',
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'New York',
            value: 'opt1',
            size: 'large',
          },
          {
            label: 'Washington',
            value: 'opt2',
            size: 'large',
          },
          {
            label: 'Los Angeles',
            value: 'opt3',
            size: 'large',
          },
          {
            label: 'Chicago',
            value: 'opt4',
            size: 'large',
          }
        ]
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        isButton: true,
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'New York',
            value: 'opt1',
          },
          {
            label: 'Washington',
            value: 'opt2',
          },
          {
            label: 'Los Angeles',
            value: 'opt3',
          },
          {
            label: 'Chicago',
            value: 'opt4',
          }
        ]
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt3',
        isButton: true,
        size: 'small',
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'New York',
            value: 'opt1',
            size: 'small',
          },
          {
            label: 'Washington',
            value: 'opt2',
            size: 'small',
            disabled: true,
          },
          {
            label: 'Los Angeles',
            value: 'opt3',
            size: 'small',
          },
          {
            label: 'Chicago',
            value: 'opt4',
            size: 'small',
          }
        ]
      }),
    )
  }
}
