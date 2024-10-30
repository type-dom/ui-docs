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

import { EmptyBasicExample } from '../../examples/data/empty/basic';
import { EmptyBottomContentExample } from '../../examples/data/empty/bottom-content';
import { EmptyCustomImageExample } from '../../examples/data/empty/custom-image';
import { EmptyImageSizeExample } from '../../examples/data/empty/image-size';

export class EmptyWrapper extends TypeDiv {
  className: 'EmptyWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'EmptyWrapper';
    this.addChildren(
      new Div({
        text: 'Empty 空状态',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '空状态时的占位提示。'
      })
    );
    this.sourceData = createProxy({
      basic: '',
      bottomContent: '',
      customImage: '',
      imageSize: '',
    });

    this.createBasic();
    this.createCustomImage();
    this.createImageSize();
    this.createBottomContent();
  }

  mounted() {
    fetch('./examples/data/empty/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/empty/bottom-content.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.bottomContent.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/empty/custom-image.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.customImage.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/empty/image-size.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.imageSize.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基本用法'
      }),
      new Example({
        showcase: [new EmptyBasicExample()],
        sourceWrapper: this.sourceData.basic
      })
    );
  }

  createBottomContent() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '底部内容'
      }),
      new P({
        text: '使用默认插槽可在底部插入内容。'
      }),
      new Example({
        showcase: [new EmptyBottomContentExample()],
        sourceWrapper: this.sourceData.bottomContent
      })
    );
  }

  createCustomImage() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义图片'
      }),
      new P({
        text: '通过设置 image 属性传入图片 URL。'
      }),
      new Example({
        showcase: [new EmptyCustomImageExample()],
        sourceWrapper: this.sourceData.customImage
      })
    );
  }

  createImageSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '图片尺寸'
      }),
      new P({
        text: '通过使用 image-size 属性来控制图片大小。'
      }),
      new Example({
        showcase: [new EmptyImageSizeExample()],
        sourceWrapper: this.sourceData.imageSize,
      })
    );
  }
}
