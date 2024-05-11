import { RouterView, TypeDiv, Img, Span } from '@type-dom/framework';
import { TdAside, TdContainer, TdFooter, TdHeader, TdMain } from '@type-dom/ui';
import { Menus } from '../components/menus/menus';

/**
 * 项目布局组件
 * todo 最外层是TdContainer就可以了。本身的div这一层是多出来的。
 */
export class Layout extends TypeDiv {
  className: 'Layout';
  constructor() {
    super();
    this.className = 'Layout';
    this.addAttrName('Layout');
    this.routerView = new RouterView({
      parent: this,
      name: 'layout-view',
      styleObj: {
        display: 'block',
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        // width: 'calc(100% - ' + menusWidth + 'px)',
      }
    });
    this.initComponents();
  }

  private initComponents() {
    const header = this.createHeader();
    const bodyContainer = this.createBodyContainer();
    this.addChild(new TdContainer({
      name: 'main-container',
      vertical: true,
      childNodes: [
        header,
        bodyContainer,
      ]
    }));
  }
  private createHeader() {
    return new TdHeader({
      name: 'header',
      childNodes: [
        new Img({
          attrObj: {
            name: 'logo',
            src: './assets/logo.png',
            width: 40,
            height: 40,
          }
        }),
        new Span({
          text: 'UI Component',
          styleObj: {
            paddingLeft: '20px',
          }
        })
      ]
    });
  }

  private createBodyContainer() {
    return  new TdContainer({
      name: 'body-container',
      childNodes: [
        new TdAside({
          name: 'td-aside',
          width: 250,
          styleObj: {
            border: '1px solid #ddd'
          },
          childNodes: [
            new Menus({
              name: 'menus',
            }),
          ]
        }),
        new TdContainer({
          name: 'view-container',
          vertical: true,
          styleObj: {
            borderTop: '1px solid #ddd'
          },
          childNodes: [
            new TdMain({
              // routerView: this.routerView,
              styleObj: {
                padding: '0 20px'
              },
              childNodes: [
                this.routerView,
              ]
            }),
            new TdFooter({
              name: 'footer',
              text: 'footer'
            })
          ]
        })
      ]
    });
  }
}
