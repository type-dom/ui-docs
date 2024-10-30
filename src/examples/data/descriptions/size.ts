import { IStyle } from '@type-dom/css-type';
import { Div, TextNode, TypeDiv } from '@type-dom/framework';
import {
  ISize,
  TdButton,
  TdDescriptions,
  TdDescriptionsItem,
  TdIcon,
  TdRadioGroup,
  TdTag
} from '@type-dom/ui';
import { ElIphoneSvg, ElLocationSvg, ElOfficeBuildingSvg, ElTicketsSvg, ElUserSvg } from '@type-dom/svgs';

export class DescriptionsSizeExample extends TypeDiv {
  className = 'DescriptionsSizeExample';
  private size: ISize;

  constructor() {
    super();
    const $cellItem: IStyle = {
      display: 'flex',
      alignItems: 'center',
    };
    this.size = 'default';

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
            this.size = element.modelValue as ISize;
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
        title: 'With border',
        column: 3,
        // size: 'default',
        border: true,
        slots: {
          extra: new TdButton({
            type: 'primary',
            slot: 'Operation'
          })
        },
        slot: [
          new TdDescriptionsItem({
            text: 'kooriookami',
            slots: {
              label: new Div({
                name: 'cell-item',
                styleObj: $cellItem,
                childNodes: [
                  new TdIcon({
                    styleObj: this.iconStyle,
                    svgObj: new ElUserSvg()
                  }),
                  new TextNode('Username')
                ]
              })
            }
          }),
          new TdDescriptionsItem({
            text: '18100000000',
            slots: {
              label: new Div({
                name: 'cell-item',
                styleObj: $cellItem,
                childNodes: [
                  new TdIcon({
                    styleObj: this.iconStyle,
                    svgObj: new ElIphoneSvg(),
                  }),
                  new TextNode('Telephone')
                ]
              })
            }
          }),
          new TdDescriptionsItem({
            text: 'Suzhou',
            slots: {
              label: new Div({
                name: 'cell-item',
                styleObj: $cellItem,
                childNodes: [
                  new TdIcon({
                    styleObj: this.iconStyle,
                    svgObj: new ElLocationSvg(),
                  }),
                  new TextNode('Place')
                ]
              })
            }
          }),
          new TdDescriptionsItem({
            slots: {
              label: new Div({
                name: 'cell-item',
                styleObj: $cellItem,
                childNodes: [
                  new TdIcon({
                    styleObj: this.iconStyle,
                    svgObj: new ElTicketsSvg(),
                  }),
                  new TextNode('Remarks')
                ]
              })
            },
            slot: new TdTag({
              text: 'School',
              size: 'small',
            })
          }),
          new TdDescriptionsItem({
            label: '',
            text: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
            slots: {
              label: new Div({
                name: 'cell-item',
                styleObj: $cellItem,
                childNodes: [
                  new TdIcon({
                    styleObj: this.iconStyle,
                    svgObj: new ElOfficeBuildingSvg(),
                  }),
                  new TextNode('Address')
                ]
              })
            },
          })
        ]
      }),

      new TdDescriptions({
        title: 'User Info',
        // size: this.size.value,
        slots: {
          extra: new TdButton({
            type: 'primary',
            slot: 'Operation'
          })
        },
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

  get iconStyle() {
    const marginMap = {
      large: '8px',
      default: '6px',
      small: '4px',
    };
    return {
      marginRight: marginMap[this.size] || marginMap.default,
    }
  }
}
