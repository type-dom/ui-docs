import { TypeDiv } from '@type-dom/framework';
import { ElArrowRightSvg } from '@type-dom/svgs';
import { TdBreadcrumb, TdBreadcrumbItem } from '@type-dom/ui';

export class BreadcrumbIconExample extends TypeDiv {
  className = 'BreadcrumbIconExample';

  constructor() {
    super();
    this.addChildren(
      new TdBreadcrumb({
        separatorIcon: new ElArrowRightSvg(),
        slot: [
          new TdBreadcrumbItem({
            text: 'homepage',
            toPath: '/',
          }),
          new TdBreadcrumbItem({
            text: 'promotion management',
          }),
          new TdBreadcrumbItem({
            text: 'promotion list'
          }),
          new TdBreadcrumbItem({
            text: 'promotion detail'
          })
        ]
      })
    );
  }
}
