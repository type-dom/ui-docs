import { TypeComponent, RouterView, Div } from '@type-dom/framework';
/**
 * Form组件显示页面
 */
export class FormView extends TypeComponent {
  className: 'FormView';
  parent?: RouterView;
  routerView: RouterView
  constructor() {
    super();
    console.log('FormView constructor . ');
    this.className = 'FormView';
    this.addAttrName('form-view')
    this.addStyleObj({
      padding: '10px',
    });
    this.addChild(new Div({
      text: 'FormView',
    }));
    this.routerView = new RouterView({
      parent: this,
    });
  }
}
