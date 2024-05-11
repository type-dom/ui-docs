import { TypeDiv } from '@type-dom/framework';
import { TdIcon, TdLink } from '@type-dom/ui';
import { ElEditSvg, ElViewSvg } from '@type-dom/svgs';

export class LinkIconExample extends TypeDiv {
  className: 'LinkIconExample';
  constructor() {
    super();
    this.className = 'LinkIconExample';
    this.addChildren(
      new TdLink({
        text: 'Edit',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
        icon: new TdIcon({
          svgObj: new ElEditSvg(),
        }),
        iconPosition: 'left',
      }),
      new TdLink({
        text: 'Check',
        styleObj: {
          marginRight: '10px',
          verticalAlign: 'text-bottom',
        },
        icon: new TdIcon({
          svgObj: new ElViewSvg(),
        }),
      })
    )
  }
}
