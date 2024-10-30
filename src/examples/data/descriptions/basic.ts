import { TypeDiv } from '@type-dom/framework';
import { TdDescriptions, TdDescriptionsItem, TdTag } from '@type-dom/ui';

export class DescriptionsBasicExample extends TypeDiv {
  className = 'DescriptionsBasicExample';

  constructor() {
    super();
    const $item = {
      marginTop: '10px',
      marginRight: '30px'
    };
    this.addChildren(
      new TdDescriptions({
        title: 'User Info',
        styleObj: $item,
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
