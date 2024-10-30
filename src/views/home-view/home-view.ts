import {
  Br,
  Div,
  TextNode,
  TypeDiv,
  TypeRoot
} from '@type-dom/framework';
import { TdContainer } from '@type-dom/ui';
import { anonymizeData } from '@type-dom/utils';


export class HomeView extends TypeDiv {
  className: 'HomeView';
  parent?: TypeRoot;

  constructor() {
    super();
    this.className = 'HomeView';
    console.log('Home is ', this);
    this.attr.addName('home-view');
    // 创建html类组件
    this.addChild(
      new Div({
        // 具体类，TypeClass 指定对应的类，要显式的引用，即import进来。
        text: 'hello world ! ', // 第一项子节点的子元素
        attrObj: {
          // 设置属性参数
          name: 'first-item'
        },
        styleObj: {
          // 设置样式
          padding: '10px',
          color: '#F00',
          background: '#FF0'
        }
      })
    );

    this.addChild(
      new TdContainer({
        slot: 'TdContainer'
      })
    );
    this.addChild(new Br());

// 示例用法
    const data = {
      name: '张小明',
      address: '北京市海淀区上地信息路3号华为大厦6楼',
      phoneNumber: '12345678911',
      faxNumber: '1234567890',
      email: 'tom123@aabbcc.com',
      socialId: '123456196010201234'
    };

    const anonymizedData = anonymizeData(data);
    console.log('name is ', data.name, ' to ', anonymizedData.name);
    console.log('address is ', data.address, ' to ', anonymizedData.address);
    console.log('phoneNumber is ', data.phoneNumber, ' to ', anonymizedData.phoneNumber);
    console.log('faxNumber is ', data.faxNumber, ' to ', anonymizedData.faxNumber);
    console.log('email is ', data.email, ' to ', anonymizedData.email);
    console.log('socialId is ', data.socialId, ' to ', anonymizedData.socialId);
  }
}
