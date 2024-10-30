import { Div, TypeDiv } from '@type-dom/framework';
import { $borderRadius, $segmented, $textColor, TdSegmented } from '@type-dom/ui';

export class SegmentedCustomStyleExample extends TypeDiv {
  className = 'SegmentedCustomStyleExample';

  constructor() {
    super();
    const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket'];
    // $segmented.itemSelectedColor = $textColor.primary;
    // $segmented.itemSelectedBgColor = '#ffd100';
    // $borderRadius.base = '16px';
    this.addChild(new Div({
      childNodes: [
        new TdSegmented({
          modelValue: 'Delicacy',
          options: options,
          // itemStyle: {
          //   borderRadius: '16px',
          // }
        }),
      ]
    }))
  }
}
