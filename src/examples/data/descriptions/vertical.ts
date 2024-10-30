import { TypeDiv } from '@type-dom/framework';
import { ISize, TdDescriptions, TdDescriptionsItem, TdRadioGroup, TdTag } from '@type-dom/ui';

export class DescriptionsVerticalExample extends TypeDiv {
  className = 'DescriptionsVerticalExample';

  constructor() {
    super();
    const $item = {
      marginTop: '10px',
      marginRight: '30px'
    };
    this.addChildren(
      new TdRadioGroup({
        modelValue: 'default',
        options: [
          { label: 'Large', value: 'large' },
          { label: 'Default', value: 'default' },
          { label: 'Small', value: 'small' },
        ],
        events: {
          click: (evt, element) => {
            // 1. 获取到当前选中的值
            const value = element.modelValue as ISize;
            // 2. 设置大小
            this.childNodes.forEach((child) => {
              if (child instanceof TdDescriptions) {
                child.setSize(value);
              }
            });
          }
        },
        emits: {
          change: (value) => {
            console.log('radio group clicked . ', value);
          }
        }
      }),
      new TdDescriptions({
        title: 'Vertical list with border',
        styleObj: $item,
        direction: 'vertical',
        column: 4,
        border: true,
        slot: [
          new TdDescriptionsItem({
            label: 'Username',
            text: 'kooriookami',
          }),
          new TdDescriptionsItem({
            label: 'Telephone',
            text: '18100000000'
          }),
          new TdDescriptionsItem({
            label: 'Place',
            text: 'Suzhou'
          }),
          new TdDescriptionsItem({
            label: 'Remarks',
            slot: new TdTag({
              text: 'School',
              size: 'small',
            })
          }),
          new TdDescriptionsItem({
            label: 'Address',
            text: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
          })
        ]
      }),

      new TdDescriptions({
        title: 'Vertical list without border',
        styleObj: $item,
        direction: 'vertical',
        column: 4,
        slot: [
          new TdDescriptionsItem({
            label: 'Username',
            text: 'kooriookami',
          }),
          new TdDescriptionsItem({
            label: 'Telephone',
            text: '18100000000'
          }),
          new TdDescriptionsItem({
            label: 'Place',
            text: 'Suzhou'
          }),
          new TdDescriptionsItem({
            label: 'Remarks',
            slot: new TdTag({
              text: 'School',
              size: 'small',
            })
          }),
          new TdDescriptionsItem({
            label: 'Address',
            text: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
          })
        ]
      }),
    );
  }
}
