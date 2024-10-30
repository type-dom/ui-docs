import { Div, TypeDiv } from '@type-dom/framework';
import { TdSegmented } from '@type-dom/ui';

export class SegmentedDisabledExample extends TypeDiv {
  className = 'SegmentedDisabledExample';

  constructor() {
    super();
    const options = [
      {
        label: 'Mon',
        value: 'Mon',
        disabled: true,
      },
      {
        label: 'Tue',
        value: 'Tue',
      },
      {
        label: 'Wed',
        value: 'Wed',
        disabled: true,
      },
      {
        label: 'Thu',
        value: 'Thu',
      },
      {
        label: 'Fri',
        value: 'Fri',
        disabled: true,
      },
      {
        label: 'Sat',
        value: 'Sat',
      },
      {
        label: 'Sun',
        value: 'Sun',
      },
    ];

    this.addChild(new Div({
      styleObj: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '1rem',
      },
      childNodes: [
        new TdSegmented({
          modelValue: 'Mon',
          options: options,
          disabled: true,
        }),
        new TdSegmented({
          modelValue: 'Tue',
          options: options,
        }),
      ]
    }))
  }
}
