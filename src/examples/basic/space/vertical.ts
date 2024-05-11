import { Div, TypeDiv } from '@type-dom/framework';
import { TdSpace } from '@type-dom/ui';

export class SpaceVerticalExample extends TypeDiv {
  className: 'SpaceVerticalExample';

  constructor() {
    super();
    this.className = 'SpaceVerticalExample';
    const divs2: Div[] = [];
    for (let i = 0; i < 3; i++) {
      divs2.push(
        new Div({
          text: `Div2${i}`,
          styleObj: {
            width: '200px',
            height: '200px',
            background: '#ddd',
          },
        })
      );
    }
    this.addChildren(
      new TdSpace({
        wrap: true,
        direction: 'vertical',
        childNodes: divs2,
      })
    );
  }
}
