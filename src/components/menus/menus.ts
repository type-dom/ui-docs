// 基于router创建的菜单
import { IRoute, ITypeConfig, TypeDiv } from '@type-dom/framework';
import { routerUI } from '../../router';
import { Menu } from './menu';

export class Menus extends TypeDiv {
  className: 'Menus';
  selectedMenu?: Menu;

  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'Menus';
    this.addAttrName('menus');
    // 默认样式
    this.addStyleObj({
      userSelect: 'none',
      overflow: 'auto',
      boxSizing: 'border-box',
      flexShrink: 0,
      maxHeight: 'calc(100vh - 40px)',
    });
    this.setConfig(config);
    console.log('ui-doc routerUI.routes is ', routerUI.routes);
    this.createMenus(this, routerUI.routes);
    console.log('menus is ', this);
  }

  get menuRoot(): Menus {
    return this;
  }

  // /home '' '/' 首页菜单要单独处理
  createMenus(parent: Menus | Menu, routes: IRoute[]) {
    console.log('createMenus . ');
    routes.forEach((route) => {
      if (route.hidden) {
        return;
      }
      if (route?.path === '/' && route.redirect) {
        route = route.children!.find((item) => item.path === route.redirect)!;
      //   todo 没有的话，要报错的。
      }

      const menuItem = new Menu(route);
      if (parent instanceof Menu) {
        parent.menuItems.push(menuItem);
      }
      menuItem.appendParent(parent);
      if (window.location.pathname === route.path) {
        // 当前路由与菜单绑定路由一致，则选中状态
        this.setSelectedMenu(menuItem);
      }
      if (route.children) {
        this.createMenus(menuItem, route.children);
      }
    });
  }

  setSelectedMenu(menu: Menu) {
    if (menu !== this.selectedMenu) {
      if (this.selectedMenu) {
        this.selectedMenu.setStyleObj({
          backgroundColor: '',
        });
      }
      this.selectedMenu = menu;
      if (menu.route.redirect === undefined) {
        menu.setStyleObj({
          backgroundColor: '#ccc',
        });
      }
    }
  }
}
