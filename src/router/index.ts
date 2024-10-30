import { Router, type IRoute } from '@type-dom/framework';
import {
  ElBasketballSvg,
  ElFemaleSvg,
  ElInfoFilledSvg,
  TdAPlusSvg
} from '@type-dom/svgs';

// 创建一个路由表
const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    svgObj: new ElInfoFilledSvg(),
    component: () => import('../layout/layout'),
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: '/home',
        svgObj: new ElFemaleSvg(),
        component: () => import('../views/home-view/home-view')
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    svgObj: new ElInfoFilledSvg(),
    hidden: true,
    component: () => import('../views/login/login')
  },
  {
    name: 'Basic',
    path: '/basic',
    svgObj: new ElBasketballSvg(),
    component: () => import('../layout/layout'),
    redirect: '/basic/button',
    children: [
      {
        name: 'Button',
        path: '/basic/button',
        component: () => import('../views/basic-view/button-wrapper')
      },
      {
        name: 'Layout',
        path: '/basic/layout',
        component: () => import('../views/basic-view/layout-wrapper')
      },
      {
        name: 'Link',
        path: '/basic/link',
        component: () => import('../views/basic-view/link-wrapper')
      },
      {
        name: 'Scrollbar',
        path: '/basic/scrollbar',
        component: () => import('../views/basic-view/scrollbar-wrapper')
      },
      {
        name: 'Space',
        path: '/basic/space',
        component: () => import('../views/basic-view/space-wrapper')
      },
      {
        name: 'Text',
        path: '/basic/text',
        component: () => import('../views/basic-view/text-wrapper')
      }
    ]
  },
  {
    name: 'Data',
    path: '/data',
    svgObj: new ElBasketballSvg(),
    component: () => import('../layout/layout'),
    redirect: '/data/avatar',
    children: [
      {
        name: 'Avatar',
        path: '/data/avatar',
        component: () => import('../views/data-view/avatar-wrapper')
      },
      {
        name: 'Badge',
        path: '/data/badge',
        component: () => import('../views/data-view/badge-wrapper')
      },
      {
        name: 'Card',
        path: '/data/card',
        component: () => import('../views/data-view/card-wrapper')
      },
      {
        name: 'Collapse',
        path: '/data/collapse',
        component: () => import('../views/data-view/collapse-wrapper')
      },
      {
        name: 'Descriptions',
        path: '/data/descriptions',
        component: () => import('../views/data-view/descriptions-wrapper')
      },
      {
        name: 'Empty',
        path: '/data/empty',
        component: () => import('../views/data-view/empty-wrapper')
      },
      {
        name: 'Image',
        path: '/data/image',
        component: () => import('../views/data-view/image-wrapper')
      },
      {
        name: 'Result',
        path: '/data/result',
        component: () => import('../views/data-view/result-wrapper')
      },
      {
        name: 'Segmented',
        path: '/data/segmented',
        component: () => import('../views/data-view/segmented-wrapper')
      },
      {
        name: 'Statistic',
        path: '/data/statistic',
        component: () => import('../views/data-view/statistic-wrapper')
      },
      {
        name: 'Tag',
        path: '/data/tag',
        component: () => import('../views/data-view/tag-wrapper')
      }
    ]
  },
  {
    name: 'Feedback',
    path: '/feedback',
    svgObj: new TdAPlusSvg(),
    component: () => import('../layout/layout'),
    redirect: '/feedback/alert',
    children: [
      {
        name: 'Alert',
        path: '/feedback/alert',
        component: () => import('../views/feedback-view/alert-wrapper')
      },
      {
        name: 'Dialog',
        path: '/feedback/dialog',
        component: () => import('../views/feedback-view/dialog-wrapper')
      },
      {
        name: 'Message',
        path: '/feedback/message',
        component: () => import('../views/feedback-view/message-wrapper')
      },
      {
        name: 'MessageBox',
        path: '/feedback/message-box',
        component: () => import('../views/feedback-view/message-box-wrapper')
      },
      {
        name: 'Notification',
        path: '/feedback/notification',
        component: () => import('../views/feedback-view/notification-wrapper')
      },
    ]
  },
  {
    name: 'Form',
    path: '/form',
    svgObj: new TdAPlusSvg(),
    component: () => import('../layout/layout'),
    redirect: '/form/form',
    children: [
      {
        name: 'Checkbox',
        path: '/form/checkbox',
        component: () => import('../views/form-view/checkbox-wrapper')
      },
      {
        name: 'Form',
        path: '/form/form',
        component: () => import('../views/form-view/form-wrapper')
      },
      {
        name: 'Radio',
        path: '/form/radio',
        component: () => import('../views/form-view/radio-wrapper')
      },
      {
        name: 'Input',
        path: '/form/input',
        component: () => import('../views/form-view/input-wrapper')
      },
      {
        name: 'Switch',
        path: '/form/switch',
        component: () => import('../views/form-view/switch-wrapper')
      }
    ]
  },
  {
    name: 'Navigation',
    path: '/navigation',
    svgObj: new ElBasketballSvg(),
    component: () => import('../layout/layout'),
    redirect: '/navigation/affix',
    children: [
      {
        name: 'Affix',
        path: '/navigation/affix',
        component: () => import('../views/navigation-view/affix-wrapper')
      },
      {
        name: 'Anchor',
        path: '/navigation/anchor',
        component: () => import('../views/navigation-view/anchor-wrapper')
      },
      {
        name: 'Backtop',
        path: '/navigation/backtop',
        component: () => import('../views/navigation-view/backtop-wrapper')
      },
      {
        name: 'Breadcrumb',
        path: '/navigation/breadcrumb',
        component: () => import('../views/navigation-view/breadcrumb-wrapper')
      },

      {
        name: 'Tabs',
        path: '/navigation/tabs',
        component: () => import('../views/navigation-view/tabs-wrapper')
      },
    ]
  }
];
export const routerUI = new Router({ routes, history: false });
