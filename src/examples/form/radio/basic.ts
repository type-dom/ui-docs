import { Br, TypeDiv } from '@type-dom/framework';
import { TdRadioGroup } from '@type-dom/ui';

export class FormRadioBasicExample extends TypeDiv {
  className: 'FormRadioBasicExample';
  constructor() {
    super();
    this.className = 'FormRadioBasicExample';
    this.addAttrName('form-radio-basic-example');
    this.addChildren(
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            size: 'large',
            checked: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            size: 'large',
            checked: false,
          }
        ]
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            // size: 'default',
            checked: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            // size: 'default',
            checked: false,
          }
        ]
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            size: 'small',
            checked: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            size: 'small',
            checked: false,
          }
        ]
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        disabled: true,
        styleObj: {
          marginBottom: '10px'
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            size: 'small',
            checked: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            size: 'small',
            checked: false,
          }
        ]
      })
    )
  }
}
