import { Div, StyleAlignItems, TypeDiv } from '@type-dom/framework';
import { RadioGroup, TdSpace } from '@type-dom/ui';

export class SpaceSizeExample extends TypeDiv {
  className: 'SpaceSizeExample';
  constructor() {
    super();
    this.className = 'SpaceSizeExample';
    const radioGroup = new RadioGroup({
      name: 'radio-group',
      options: [
        {
          label: 'Large',
          // name: 'size',
          value: 'large'
        },
        {
          label: 'Default',
          // name: 'size',
          value: 'default'
        },
        {
          label: 'Small',
          // name: 'size',
          value: 'small'
        },
      ],
      events: {
        click: (evt, element: RadioGroup) => {
          //   todo
          console.log('click self is ', element);
          // 1. 获取到当前选中的值
          const value = element.value as string | number;
          // 2. 设置间距大小
          (element.nextSibling as TdSpace).setSize(value);
        }
      }
    })
    const sizeDivs: Div[] = [];
    for (let i = 0; i < 3; i++) {
      sizeDivs.push(new Div({
        text: `Div${i}`,
        styleObj: {
          width: '200px',
          height: '200px',
          background: '#ddd',
        },
      }));
    }
    // 控制间距的大小
    this.addChild(new TdSpace({
      wrap: true,
      size: 'small',
      direction: 'vertical',
      alignment: StyleAlignItems.start,
      childNodes: [
        radioGroup,
        new TdSpace({
          wrap: true,
          size: 'medium',
          childNodes: sizeDivs,
        })
      ],
    }));
  }
}
