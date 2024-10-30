import { Div, TypeDiv } from '@type-dom/framework';
import { TdSegmented } from '@type-dom/ui';

export class SegmentedBlockExample extends TypeDiv {
  className = 'SegmentedBlockExample';

  constructor() {
    super();
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday long long long long long long long'];
    this.addChild(new Div({
      childNodes: [
        new TdSegmented({
          modelValue: 'Mon',
          options: options,
          block: true,
        }),
      ]
    }))
  }
}
