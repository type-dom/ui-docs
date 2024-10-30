import { TypeDiv } from '@type-dom/framework';
import { TdBadge, TdButton } from '@type-dom/ui';

export class BadgeCustomExample extends TypeDiv {
  className = 'BadgeCustomExample';

  constructor() {
    super();
    const $item = {
      marginTop: '10px',
      marginRight: '30px'
    };
    this.addChildren(
      new TdBadge({
        value: 'new',
        styleObj: $item,
        slot: new TdButton({
          slot: 'comments'
        })
      }),
      new TdBadge({
        value: 'hot',
        styleObj: $item,
        slot: new TdButton({
          slot: 'replies'
        })
      })
    );
  }
}
