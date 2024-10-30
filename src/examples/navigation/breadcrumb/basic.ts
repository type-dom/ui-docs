import { A, TypeDiv } from '@type-dom/framework';
import { TdBreadcrumb, TdBreadcrumbItem } from '@type-dom/ui';

export class BreadcrumbBasicExample extends TypeDiv {
  className = 'BreadcrumbBasicExample';

  constructor() {
    super();
    this.addChildren(
      new TdBreadcrumb({
        separator: '/',
        slot: [
          new TdBreadcrumbItem({
            text: 'homepage',
            toPath: '/',
          }),
          new TdBreadcrumbItem({
            slot: [
              new A({
                text: 'promotion management',
                attrObj: {
                  href: '/'
                }
              })
            ]
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
