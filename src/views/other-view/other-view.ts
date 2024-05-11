import { TypeComponent, RouterView } from '@type-dom/framework';
/**
 * Other组件显示页面
 */
export class OtherView extends TypeComponent {
  className: 'OtherView';
  parent?: RouterView;
  constructor() {
    super();
    console.log('OtherView constructor . ');
    this.className = 'OtherView';
    this.addAttrName('other-view')
    this.addStyleObj({
      padding: '10px',
    });
    this.routerView = new RouterView({
      parent: this,
    });
  }
}
