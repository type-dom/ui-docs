import { Div, TypeDiv } from '@type-dom/framework';
import { TdCheckbox } from '@type-dom/ui';

export class CheckboxBasicExample extends TypeDiv {
  className: 'CheckboxBasicExample';

  constructor() {
    super();
    this.className = 'CheckboxBasicExample';
    this.attr.addName('checkbox-basic-example');
    this.addChildren(
      new Div({
        childNodes: [
          new TdCheckbox({
            modelValue: true,
            label: 'Option 1',
            size: 'large',
          }),
          new TdCheckbox({
            modelValue: false,
            label: 'Option 2',
            size: 'large',
          }),
        ]
      }),
      new Div({
        childNodes: [
          new TdCheckbox({
            modelValue: false,
            label: 'Option 1',
          }),
          new TdCheckbox({
            modelValue: false,
            label: 'Option 2',
          }),
        ]
      }),
      new Div({
        childNodes: [
          new TdCheckbox({
            modelValue: false,
            label: 'Option 1',
            size: 'small',
          }),
          new TdCheckbox({
            modelValue: false,
            label: 'Option 2',
            size: 'small',
          }),
        ]
      }),
    );
  }
}
