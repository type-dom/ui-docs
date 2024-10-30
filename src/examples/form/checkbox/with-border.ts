import { Div, TypeDiv } from '@type-dom/framework';
import { TdCheckbox, TdCheckboxGroup } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class CheckboxWithBorderExample extends TypeDiv {
  className: 'CheckboxWithBorderExample';

  constructor() {
    super();
    this.className = 'CheckboxWithBorderExample';
    this.attr.addName('checkbox-basic-example');
    const groupStyle: IStyle = {
      marginTop: '24px'
    }
    const checked1 = true;
    const checked2 = false;
    const checked3 = false;
    const checked4 = true;
    const checkboxGroup1 = ['Value1'];
    this.addChildren(
      new Div({
        childNodes: [
          new TdCheckbox({
            modelValue: checked1,
            label: 'Option 1',
            size: 'large',
            border: true
          }),
          new TdCheckbox({
            modelValue: checked2,
            label: 'Option 2',
            size: 'large',
            border: true
          }),
        ]
      }),
      new Div({
        styleObj: groupStyle,
        childNodes: [
          new TdCheckbox({
            modelValue: checked3,
            label: 'Option 1',
            border: true
          }),
          new TdCheckbox({
            modelValue: checked4,
            label: 'Option 2',
            border: true,
          }),
        ]
      }),
      new Div({
        styleObj: groupStyle,
        childNodes: [
          new TdCheckboxGroup({
            modelValue: checkboxGroup1,
            size: 'small',
            slot: [
              new TdCheckbox({
                label: 'Option 1',
                value: 'Value1',
                border: true,
              }),
              new TdCheckbox({
                label: 'Option 2',
                value: 'Value2',
                border: true,
              }),
            ]
          })
        ]
      }),
      new Div({
        styleObj: groupStyle,
        childNodes: [
          new TdCheckboxGroup({
            modelValue: checkboxGroup1,
            size: 'small',
            slot: [
              new TdCheckbox({
                label: 'Option 1',
                value: 'Value1',
                border: true,
                disabled: true
              }),
              new TdCheckbox({
                label: 'Option 2',
                value: 'Value2',
                border: true,
                disabled: true
              }),
            ]
          })
        ]
      }),
    );
  }
}
