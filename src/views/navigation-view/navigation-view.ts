import { TypeComponent, RouterView } from '@type-dom/framework';
/**
 * Navigation组件显示页面
 */
export class NavigationView extends TypeComponent {
  className: 'NavigationView';
  parent?: RouterView;
  constructor() {
    super();
    console.log('NavigationView constructor . ');
    this.className = 'NavigationView';
    this.addAttrName('navigation-view')
    this.addStyleObj({
      padding: '10px',
    });
    this.routerView = new RouterView({
      parent: this,
    });
  }
}
