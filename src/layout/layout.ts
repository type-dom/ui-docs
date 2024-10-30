import { RouterView, TypeDiv, Img, Span, Div } from '@type-dom/framework';
import { Menus, TdAside, TdContainer, TdFooter, TdHeader, TdMain, TdText } from '@type-dom/ui';
import { routerUI } from '../router';

/**
 * 项目布局组件
 * todo 最外层是TdContainer就可以了。本身的div这一层是多出来的。
 */
export class Layout extends TypeDiv {
  className: 'Layout';
  routerView: RouterView;

  constructor() {
    super();
    this.className = 'Layout';
    this.attr.addName('Layout');
    this.routerView = new RouterView({
      name: 'layout-view',
    });
    this.initComponents();
  }

  private initComponents() {
    const header = this.createHeader();
    const bodyContainer = this.createBodyContainer();
    this.addChild(
      new TdContainer({
        name: 'main-container',
        vertical: true,
        slot: [header, bodyContainer]
      })
    );
  }

  private createHeader() {
    return new TdHeader({
      name: 'header',
      slot: [
        new Img({
          attrObj: {
            name: 'logo',
            src: './assets/logo.png',
            width: 40,
            height: 40
          }
        }),
        new Span({
          text: 'UI Component',
          styleObj: {
            paddingLeft: '20px'
          }
        }),
        new TdText({
          text: 'Logout',
          styleObj: {
            position: 'absolute',
            lineHeight: 2.5,
            right: '50px',
            // paddingLeft: '20px'
          },
          events: {
            click: () => {
              routerUI.push('/login');
            },
            mouseenter: (event  ) => {
              // console.log('mouseenter event is ', event, ', target is ', event.target);
              if (event?.target instanceof HTMLElement || event?.target instanceof SVGElement) {
                event?.target.style.setProperty('cursor', 'pointer');
              }
            }
          }
        })
      ]
    });
  }

  private createBodyContainer() {
    return new TdContainer({
      name: 'body-container',
      styleObj: {
        height: 'calc(100vh - 60px)'
      },
      slot: [
        new TdAside({
          name: 'td-aside',
          width: 250,
          styleObj: {
            border: '1px solid #ddd'
          },
          slot: new Menus({
            name: 'menus',
            router: routerUI,
          })
        }),
        new TdContainer({
          name: 'view-container',
          vertical: true,
          styleObj: {
            borderTop: '1px solid #ddd',
          },
          slot: [
            new TdMain({
              // routerView: this.routerView,
              styleObj: {
                padding: '0 20px',
              },
              slot: this.routerView
            }),
            new TdFooter({
              name: 'footer',
              backgroundColor: 'f5f7fa',
              styleObj: {
                padding: '20px 30px 60px',
                boxSizing: 'border-box',
              },
              slot: new Div({
                childNodes: [
                  new Span({
                    text: 'Copyright © 2023-present TypeDom'
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  }
}
