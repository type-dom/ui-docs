import { Br, TypeDiv } from '@type-dom/framework';
import { TdRadioGroup } from '@type-dom/ui';

export class FormRadioBorderExample extends TypeDiv {
  className: 'FormRadioBorderExample';

  constructor() {
    super();
    this.className = 'FormRadioBorderExample';
    this.addAttrName('form-radio-border-example');
    this.addChildren(
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        styleObj: {
          marginBottom: '10px',
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            size: 'large',
            checked: true,
            border: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            size: 'large',
            checked: false,
            border: true,
          },
        ],
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        styleObj: {
          marginBottom: '10px',
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            // size: 'default',
            checked: true,
            border: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            // size: 'default',
            checked: false,
            border: true,
          },
        ],
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        styleObj: {
          marginBottom: '10px',
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            size: 'small',
            checked: true,
            border: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            size: 'small',
            checked: false,
            border: true,
          },
        ],
      }),
      new Br(),
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'opt1',
        disabled: true,
        styleObj: {
          marginBottom: '10px',
        },
        options: [
          {
            label: 'Option1',
            value: 'opt1',
            size: 'small',
            checked: true,
            border: true,
          },
          {
            label: 'Option2',
            value: 'opt2',
            size: 'small',
            checked: false,
            border: true,
          },
        ],
      })
    );
  }
}
