import { TypeComponent, RouterView, Div } from '@type-dom/framework';
/**
 * Basic组件显示页面
 */
export class BasicView extends TypeComponent {
  className: 'BasicView';
  parent: RouterView;
  constructor() {
    super();
    console.log('BasicView constructor . ');
    this.className = 'BasicView';
    this.addAttrName('basic-view');
    this.addStyleObj({
      padding: '10px',
    });
    this.addChild(new Div({
      text: 'BasicView',
    }));
    this.routerView = new RouterView({
      parent: this,
    });
  }
}
