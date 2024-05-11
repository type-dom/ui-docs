import { TypeComponent, RouterView, Div } from '@type-dom/framework';
/**
 * Feedback组件显示页面
 */
export class FeedbackView extends TypeComponent {
  className: 'FeedbackView';
  parent: RouterView;
  constructor() {
    super();
    console.log('FeedbackView constructor . ');
    this.className = 'FeedbackView';
    this.addAttrName('feedback-view')
    this.addStyleObj({
      padding: '10px',
    });
    this.addChild(new Div({
      text: 'FeedbackView',
    }))
    this.routerView = new RouterView({
      parent: this,
    });
  }
}
