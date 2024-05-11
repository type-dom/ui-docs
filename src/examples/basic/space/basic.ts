import { Div, TypeDiv } from '@type-dom/framework';
import { TdSpace } from '@type-dom/ui';

export class SpaceBasicExample extends TypeDiv {
  className: 'SpaceBasicExample';
  constructor() {
    super();
    this.className = 'SpaceBasicExample';
    const divs1: Div[] = [];
    for (let i = 0; i < 3; i++) {
      divs1.push(new Div({
        text: `Div1${i}`,
        styleObj: {
          width: '200px',
          height: '200px',
          background: '#bbb',
        },
      }));
    }
    this.addChildren(
      new TdSpace({
        wrap: true,
        childNodes: divs1,
       })
    )
  }
}
