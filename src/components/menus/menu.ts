import { fromEvent, filter } from 'rxjs';
import { Div, TypeMenu, type IRoute } from '@type-dom/framework';
import { ElCaretBottomSvg, ElCaretLeftSvg } from '@type-dom/svgs';
import { TdIcon } from '@type-dom/ui';
import { routerUI } from '../../router';
import { Menus } from './menus';

export class Menu extends TypeMenu {
  className: 'Menu';
  route: IRoute;
  parent?: Menu | Menus;
  contentItem: Div;
  menuItems: Menu[];
  collapsed?: boolean;
  caret?: TdIcon;

  constructor(route: IRoute) {
    super();
    this.className = 'Menu';
    this.route = route;
    this.addStyleObj({
      paddingInlineStart: '20px',
      // display: 'flex',
      // flexDirection: 'column',
    });
    const div = new Div({
      parent: this,
      styleObj: {
        display: 'flex',
        alignItems: 'center',
      },
    });
    if (route.svgObj) {
      div.addChild(
        new TdIcon({
          svgObj: route.svgObj,
          styleObj: {
            paddingRight: '5px',
          },
        })
      );
    }
    div.addChild(
      new Div({
        text: route.name,
        attrObj: {
          name: 'route-name',
        },
        styleObj: {
          width: '160px',
        },
      })
    );
    if (route.children) {
      const caret = new TdIcon({
        svgObj: new ElCaretBottomSvg(),
        size: '30px',
      });
      caret.appendParent(div);
      this.caret = caret;
    }
    div.appendParent(this);
    this.contentItem = div;
    this.menuItems = [];
  }

  get menuRoot(): Menus | undefined {
    return this.parent?.menuRoot;
  }

  initEvents() {
    if (this.route.redirect === undefined) {
      this.subscriptions.push(
        fromEvent(this.contentItem.dom, 'click')
          .pipe(
            filter(() => {
              return this.menuRoot?.selectedMenu !== this;
            })
          )
          .subscribe((event) => {
            // if (this.menuRoot.selectedMenu === this) {
            //   return;
            // }
            routerUI.navigateTo(this.route.path);
            this.menuRoot?.setSelectedMenu(this);
            document.title = 'UI - ' + this.route.name;
            event.stopPropagation(); // 防止冒泡
            event.preventDefault();
          })
      );
    } else {
      //   todo 添加展开、收起的监听
      const leftSvg = new ElCaretLeftSvg();
      // console.log(' leftSvg.resetSize ');
      // leftSvg.resetSize('1.5em', '1.5em');
      // leftSvg.setStyleObj({
      //   width: '1.5em',
      //   height: '1.5em'
      // })
      const bottomSvg = new ElCaretBottomSvg();
      // bottomSvg.setStyleObj({
      //   width: '1.5em',
      //   height: '1.5em'
      // })
      // bottomSvg.resetSize('1.5em', '1.5em');
      this.subscriptions.push(
        fromEvent(this.contentItem.dom, 'click').subscribe((event) => {
          if (this.menuRoot?.selectedMenu === this) {
            return;
          }
          if (this.collapsed === undefined || this.collapsed === false) {
            this.collapsed = true;
            this.menuItems.forEach((menu) => {
              menu.setStyleObj({
                display: 'none',
              });
            });
            this.caret?.replaceSvg(leftSvg); // 左三角
          } else {
            this.collapsed = false;
            this.menuItems.forEach((menu) => {
              menu.setStyleObj({
                display: 'block',
              });
            });
            this.caret?.replaceSvg(bottomSvg); // 向下三角
          }
          event.stopPropagation(); // 防止冒泡
          event.preventDefault();
        })
      );
    }
  }
}
