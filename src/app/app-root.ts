import { ITypeConfig, RouterView, TypeRoot } from '@type-dom/framework';
import { routerUI } from '../router';

/**
 * 应用类，挂载全局属性和方法。
 * 根节点，继承 TypeRoot;
 * 因为属性和方法要全局调用，所以全部设置为静态 static; 包括get也设置为静态
 */
export class AppRoot extends TypeRoot {
  className: 'AppRoot';
  static el: HTMLElement | string;
  constructor(config?: ITypeConfig) {
    super(config);
    this.className = 'AppRoot';
    this.addAttrName('app-root');
    this.addStyleObj({
      display: 'flex',
      flexDirection: 'column',
      // padding: '10px',
      // border: '10px solid #dddddd',
    });
    this.subscriptions = [];
    this.routerView = new RouterView({
      parent: this,
      name: 'app-root-view',
      styleObj: {
        display: 'block',
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        // width: 'calc(100% - ' + menusWidth + 'px)',
      }
    });
    // 使用路由
    // 路由器初始化，并挂载到当前页
    routerUI.init(this);
  }
}
