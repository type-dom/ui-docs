import { Div, TypeDiv } from '@type-dom/framework';
import { TdSegmented } from '@type-dom/ui';

export class SegmentedBasicExample extends TypeDiv {
  className = 'SegmentedBasicExample';

  constructor() {
    super();
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
          size: 'large',
          options: options,
        }),
        new TdSegmented({
          modelValue: 'Mon',
          size: 'default',
          options: options,
        }),
        new TdSegmented({
          modelValue: 'Mon',
          size: 'small',
          options: options,
        }),
      ]
    }))
  }
}
