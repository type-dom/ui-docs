import { Div, TypeDiv } from '@type-dom/framework';
import { TdCheckboxButton, TdCheckboxGroup } from '@type-dom/ui';
import { IStyle } from '@type-dom/css-type';

export class CheckboxButtonStyleExample extends TypeDiv {
  className: 'CheckboxButtonStyleExample';

  constructor() {
    super();
    this.className = 'CheckboxButtonStyleExample';
    const checkboxGroup1 = ['Shanghai'];
    const checkboxGroup2 = ['Shanghai'];
    const checkboxGroup3 = ['Shanghai'];
    const checkboxGroup4 = ['Shanghai'];
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
    const $demoButtonStyle: IStyle = {
      marginTop: '24px'
    };
    this.addChildren(
      new Div({
        childNodes:  [new TdCheckboxGroup({
          name: 'check-group1',
          modelValue: checkboxGroup1,
          size: 'large',
          init: (element) => {
            for (const city of cities) {
              element.addChild(new TdCheckboxButton({
                label: city,
                value: city,
                slot: city,
                size: 'large'
              }))
            }
          }
        })]
      }),
      new Div({
        styleObj: $demoButtonStyle,
        childNodes: [new TdCheckboxGroup({
          name: 'check-group2',
          modelValue: checkboxGroup2,
          init: (element) => {
            for (const city of cities) {
              element.addChild(new TdCheckboxButton({
                label: city,
                value: city,
                slot: city,
              }))
            }
          }
        })]
      }),
      new Div({
        styleObj: $demoButtonStyle,
        childNodes: [new TdCheckboxGroup({
          name: 'check-group3',
          modelValue: checkboxGroup3,
          size: 'small',
          init: (element) => {
            for (const city of cities) {
              element.addChild(new TdCheckboxButton({
                label: city,
                value: city,
                slot: city,
                disabled: city === 'Beijing'
              }))
            }
          }
        })]
      }),
      new Div({
        styleObj: $demoButtonStyle,
        childNodes: [new TdCheckboxGroup({
          name: 'check-group4',
          modelValue: checkboxGroup4,
          size: 'small',
          disabled: true,
          init: (element) => {
            for (const city of cities) {
              element.addChild(new TdCheckboxButton({
                label: city,
                value: city,
                slot: city,
              }))
            }
          }
        })]
      })
    );
  }
}
