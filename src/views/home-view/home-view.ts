import {
  Br,
  Div,
  TextNode,
  TypeComponent,
  TypeRoot,
} from '@type-dom/framework';
import { TdContainer } from '@type-dom/ui';
export class HomeView extends TypeComponent {
  className: 'HomeView';
  parent?: TypeRoot;
  constructor() {
    super();
    this.className = 'HomeView';
    console.log('Home is ', this);
    this.addAttrName('home-view');
    // 创建html类组件
    this.addChild(new Div({ // 具体类，TypeClass 指定对应的类，要显式的引用，即import进来。
      text: 'hello world ! ',  // 第一项子节点的子元素
      attrObj: { // 设置属性参数
        name: 'first-item',
      },
      styleObj: { // 设置样式
        padding: '10px',
        color: '#F00',
        background: '#FF0',
      },
    })
    );

    this.addChild(new TdContainer({
      childNodes: [
        new TextNode('TdContainer'),
      ]
    }));
    this.addChild(new Br());
  }
}
