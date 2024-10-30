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
import { Example } from '@type-dom/ui';

import { CardBasicExample } from '../../examples/data/card/basic';
import { CardSimpleExample } from '../../examples/data/card/simple';
import { CardWithImagesExample } from '../../examples/data/card/with-images';
import { CardShadowExample } from '../../examples/data/card/shadow';

export class CardWrapper extends TypeDiv {
  className: 'CardWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;
  config = {};
  constructor() {
    super();
    this.className = 'CardWrapper';
    this.addChildren(
      new Div({
        text: 'Card 卡片',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '将信息聚合在卡片容器中展示。'
      })
    );
    this.sourceData = createProxy({
      basic: '',
      simple: '',
      withImages: '',
      shadow: '',
    });

    this.createBasic();
    this.createSimple();
    this.createWithImages();
    this.createShadow();
  }

  mounted() {
    fetch('./examples/data/card/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/card/shadow.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.shadow.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/card/simple.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.simple.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/card/with-images.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.withImages.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new P({
        text: '卡片包含标题，内容以及操作区域。'
      }),
      new P({
        text: 'Card 组件由 header body 和 footer组成。 header 和 footer是可选的，其内容取决于一个具名的 slot。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CardBasicExample()],
        sourceWrapper: this.sourceData.basic
      })
    );
  }

  createSimple() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '简单卡片'
      }),
      new P({
        text: '卡片可以只有内容区域。'
      }),
      new Example({
        showcase: [new CardSimpleExample()],
        sourceWrapper: this.sourceData.simple
      })
    );
  }

  // todo 还没有实现
  createWithImages() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '有图片内容的卡片'
      }),
      new P({
        text: '可配置定义更丰富的内容展示。'
      }),
      new P({
        text: '配置 body-style 属性来自定义 body 部分的样式。 在这个例子中我们还使用了 el-col 组件来布局。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CardWithImagesExample()],
        sourceWrapper: this.sourceData.withImages
      })
    );
  }

  createShadow() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '带有阴影效果的卡片'
      }),
      new P({
        text: '你可以定义什么时候展示卡片的阴影效果。'
      }),
      new P({
        text: '通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new CardShadowExample()],
        sourceWrapper: this.sourceData.shadow
      })
    );
  }
}
