import { Span, TextNode, TypeDiv } from '@type-dom/framework';
import { ITdTabPaneConfig, TdIcon, TdTabPane, TdTabs } from '@type-dom/ui';
import { ElCalendarSvg } from '@type-dom/svgs';

export class TabsCustomTabExample extends TypeDiv {
  className = 'TabsCustomTabExample';

  constructor() {
    super();
    this.addChild(
      new TdTabs({
        type: 'border-card',
        modelValue: 1,
        emits: {
          tabClick: (tab: ITdTabPaneConfig, event: Event) => {
            console.log(tab, event)
          }
        },
        contentStyle: {
          padding: '32px',
          color: '#6b778c',
          fontSize: '32px',
          fontWeight: 600,
        },
        slot: [
          new TdTabPane({
            // label: 'User',
            slot: new TextNode('User'),
            slots: {
              label: new Span({
                styleObj: {
                  verticalAlign: 'middle',
                },
                childNodes: [
                  new TdIcon({
                    svgObj: new ElCalendarSvg(),
                  }),
                  new Span({
                    text: 'Route',
                    styleObj: {
                      verticalAlign: 'middle',
                      marginLeft: '4px',
                    }
                  }),
                ]
              })
            }
          }),
          new TdTabPane({
            label: 'Config',
            slot: new TextNode('Config')
          }),
          new TdTabPane({
            label: 'Role',
            slot: new TextNode('Role')
          }),
          new TdTabPane({
            label: 'Task',
            slot: new TextNode('Task')
          }),
        ]
      })
    );
  }
}
