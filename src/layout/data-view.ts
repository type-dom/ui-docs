import { TypeComponent, RouterView } from '@type-dom/framework';
/**
 * Data组件显示页面
 */
export class DataView extends TypeComponent {
  className: 'DataView';
  parent: RouterView;
  constructor() {
    super();
    console.log('DataView constructor . ');
    this.className = 'DataView';
    this.addAttrName('data-view')
    this.addStyleObj({
      padding: '10px',
    });
    this.routerView = new RouterView({
      parent: this,
    });
  }
}
