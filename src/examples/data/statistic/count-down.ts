import * as dayjs from 'dayjs';
import { Div, TextNode, TypeDiv } from '@type-dom/framework';
import { TdButton, TdCol, TdCountDown, TdIcon, TdRow } from '@type-dom/ui';
import { ElCalendarSvg } from '@type-dom/svgs';

export class CountDownExample extends TypeDiv {
  className = 'StatisticCountDownExample';
  private value: number;
  private value1: number;
  value2: dayjs.Dayjs;

  constructor() {
    super();
    this.value = (Date.now() + 1000 * 60 * 60 * 7);
    this.value1 = (Date.now() + 1000 * 60 * 60 * 24 * 2);
    this.value2 = dayjs().add(1, 'month').startOf('month');

    this.addChild(
      new TdRow({
        slot: [
          new TdCol({
            span: 8,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdCountDown({
                title: 'Start to grab',
                value: this.value
              })
            ]
          }),
          new TdCol({
            span: 8,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdCountDown({
                title: 'Remaining VIP time',
                value: this.value1,
                format: 'HH:mm:ss',
                slot: [
                  new TdButton({
                    slot: 'Reset',
                    type: 'primary',
                    styleObj: {
                      marginTop: '8px'
                    },
                    events: {
                      click: (event, button?: TdButton) => {
                        // 要用箭头函数，否则this指向有问题
                        console.log('click reset button');
                        const countDown = button.up<TdCountDown>('TdCountDown');
                        countDown.addProp('value', Date.now() + 1000 * 60 * 60 * 24 * 2);
                        countDown.stopTimer();
                        countDown.startTimer();
                      }
                    }
                  })
                ]
              })
            ]
          }),
          new TdCol({
            span: 8,
            styleObj: {
              textAlign: 'center'
            },
            slot: [
              new TdCountDown({
                format: 'DD [days] HH:mm:ss',
                value: this.value2,
                slots: {
                  title: new Div({
                    styleObj: {
                      display: 'inline-flex',
                      alignItems: 'center'
                    },
                    childNodes: [
                      new TdIcon({
                        size: '12',
                        svgObj: new ElCalendarSvg(),
                        styleObj: {
                          marginRight: '4px'
                        }
                      }),
                      new TextNode('Still to go until next month')
                    ]
                  })
                }
              }),
              new Div({
                text: this.value2.format('YYYY-MM-DD'),
                styleObj: {
                  marginTop: '8px'
                }
              })
            ]
          })
        ]
      })
    );
  }
}
