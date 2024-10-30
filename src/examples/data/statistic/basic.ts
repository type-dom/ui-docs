import { Div, TypeDiv } from '@type-dom/framework';
import { ElChatLineRoundSvg, ElMaleSvg } from '@type-dom/svgs';
import { TdCol, TdIcon, TdRow, TdStatistic } from '@type-dom/ui';

export class StatisticBasicExample extends TypeDiv {
  className = 'StatisticBasicExample';

  constructor() {
    super();
    this.addChild(
      new TdRow({
        slot: [
          new TdCol({
            span: 6,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdStatistic({
                title: 'Daily active users',
                value: 12
              })
            ]
          }),
          new TdCol({
            span: 6,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdStatistic({
                value: 138,
                suffix: '/ 100',
                slots: {
                  title: new Div({
                    text: 'Ratio of men to women',
                    styleObj: {
                      display: 'inline-block',
                      alignItems: 'center'
                    },
                    childNodes: [
                      new TdIcon({
                        size: 12,
                        svgObj: new ElMaleSvg(),
                        styleObj: {
                          marginLeft: '4px'
                        }
                      })
                    ]
                  })
                }
              })
            ]
          }),
          new TdCol({
            span: 6,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdStatistic({
                title: 'Total Transactions',
                value: 172000
              })
            ]
          }),
          new TdCol({
            span: 6,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdStatistic({
                title: 'Feedback number',
                value: 562,
                slots: {
                  suffix: new TdIcon({
                    svgObj: new ElChatLineRoundSvg(),
                    styleObj: {
                      verticalAlign: '-0.125em'
                    }
                  })
                }
              })
            ]
          })
        ]
      })
    );
  }
}
