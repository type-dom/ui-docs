import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TypeDiv,
  XProxy
} from '@type-dom/framework';
import { CustomBlock, Example } from '@type-dom/ui';

import { StatisticBasicExample } from '../../examples/data/statistic/basic';
import { CountDownExample } from '../../examples/data/statistic/count-down';
import { StatisticCardExample } from '../../examples/data/statistic/statistic-card';

export class StatisticWrapper extends TypeDiv {
  className: 'StatisticWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'StatisticWrapper';
    this.addChildren(
      new Div({
        text: 'Statistic 统计组件',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '显示统计数据。'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      countDownSource: '',
      statisticCardSource: ''
    });

    this.createBasic();
    this.createCountDown();
    this.createStatisticCard();
  }

  mounted() {
    fetch('./examples/data/statistic/basic.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/statistic/count-down.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.countDownSource.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
    fetch('./examples/data/statistic/statistic-card.ts')
      .then((res) => res.text())
      .then((text) => {
        this.sourceData.statisticCardSource.setValue(text);
      })
      .catch((err) => console.error('Error loading script:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new P({
        text: '用于突出某个或某组数字时，如统计数值、金额、排名等，数值和标题前后都可以加icon、单位等元素。 可以使用 vueuse 实现数值的变化动效'
      }),
      new Example({
        showcase: [new StatisticBasicExample()],
        sourceWrapper: this.sourceData.basicSource
      })
    );
  }

  createCountDown() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '倒计时'
      }),
      new P({
        text: '倒计时组件，支持添加其他组件来控制。'
      }),
      new Example({
        showcase: [new CountDownExample()],
        sourceWrapper: this.sourceData.countDownSource
      }),
      new CustomBlock({
        type: 'tip',
        title: 'Tip',
        paragraphs: [new P({
          text: '在格式化过程中，建议在天数范围内'
        })]
      })
    );
  }

  createStatisticCard() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '统计卡片'
      }),
      new P({
        text: '卡片式用法展示，可以自由组合'
      }),
      new Example({
        showcase: [new StatisticCardExample()],
        sourceWrapper: this.sourceData.statisticCardSource
      })
    );
  }
}
