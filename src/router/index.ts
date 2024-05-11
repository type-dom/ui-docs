import { Router } from '@type-dom/framework';
import type { IRoute } from '@type-dom/framework';
import {
  ElBackSvg, ElBasketballSvg, ElFemaleSvg,
  ElForkSpoonSvg, ElInfoFilledSvg, ElLightningSvg, ElLinkSvg, ElMilkTeaSvg, ElRankSvg, ElSwitchSvg,
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
    component: () => import('../views/home-view/home-view')
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
        svgObj: new ElBackSvg(),
        component: () => import('../views/basic-view/button-wrapper')
      },
      {
        name: 'Layout',
        path: '/basic/layout',
        svgObj: new ElLightningSvg(),
        component: () => import('../views/basic-view/layout-wrapper')
      },
      {
        name: 'Link',
        path: '/basic/link',
        svgObj: new ElLinkSvg(),
        component: () => import('../views/basic-view/link-wrapper')
      },
      {
        name: 'Scrollbar',
        path: '/basic/scrollbar',
        svgObj: new ElSwitchSvg(),
        component: () => import('../views/basic-view/scrollbar-wrapper')
      },
      {
        name: 'Space',
        path: '/basic/space',
        svgObj: new ElForkSpoonSvg(),
        component: () => import('../views/basic-view/space-wrapper')
      },
      {
        name: 'Text',
        path: '/basic/text',
        svgObj: new ElMilkTeaSvg(),
        component: () => import('../views/basic-view/text-wrapper')
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
        name: 'Form',
        path: '/form/form',
        svgObj: new ElFemaleSvg(),
        component: () => import('../views/form-view/form-wrapper')
      },
      {
        name: 'Radio',
        path: '/form/radio',
        svgObj: new ElRankSvg(),
        component: () => import('../views/form-view/radio-wrapper')
      },
      {
        name: 'Input',
        path: '/form/input',
        svgObj: new ElInfoFilledSvg(),
        component: () => import('../views/form-view/input-wrapper')
      },
      {
        name: 'Switch',
        path: '/form/switch',
        svgObj: new ElSwitchSvg(),
        component: () => import('../views/form-view/switch-wrapper')
      }
    ]
  }
];
export const routerUI = new Router({ routes });
