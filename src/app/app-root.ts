import { ITypeConfig, RouterView, TypeRoot } from '@type-dom/framework';
import { $textColor } from '@type-dom/ui';
import { routerUI } from '../router';

/**
 * 应用类，挂载全局属性和方法。
 * 根节点，继承 TypeRoot;
 * 因为属性和方法要全局调用，所以全部设置为静态 static; 包括get也设置为静态
 */
export class AppRoot extends TypeRoot {
  className: 'AppRoot';
  routerView: RouterView;

  // static el: HTMLElement | string;
  constructor(params: ITypeConfig = {}) {
    super(params?.nodeName);
    this.className = 'AppRoot';
    this.style.addObj({
      display: 'flex',
      flexDirection: 'column',
      color: $textColor.regular,
      // padding: '10px',
      // border: '10px solid #dddddd',
      margin: '0',
      padding: '0',
      // height: '100vh',
      boxSizing: 'border-box',
    });
    this.routerView = new RouterView({
      name: 'app-root-view',
      styleObj: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // width: 'calc(100% - ' + menusWidth + 'px)',
      }
    });
    this.addChild(this.routerView);
    // 使用路由
    // 路由器初始化，并挂载到当前页 todo 不能放到setup 中  ???
    routerUI.init(this);
    this.useParams(params);
  }
}
