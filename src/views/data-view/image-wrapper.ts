import {
  createProxy,
  Div,
  Head,
  IJsonData,
  P,
  RouterView, TextNode,
  TypeDiv,
  XProxy
} from '@type-dom/framework';
import { CustomBlock, Example } from '@type-dom/ui';

import { ImageBasicExample } from '../../examples/data/image/basic';
import { ImagePlaceholderExample } from '../../examples/data/image/placeholder';
import { ImageLoadFailedExample } from '../../examples/data/image/load-failed';
import { ImageLazyLoadExample } from '../../examples/data/image/lazy-load';
import { ImagePreviewExample } from '../../examples/data/image/preview';

export class ImageWrapper extends TypeDiv {
  className: 'ImageWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'ImageWrapper';
    this.addChildren(
      new Div({
        text: 'Image 图片',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等'
      })
    );
    this.sourceData = createProxy({
      basic: '',
      placeholder: '',
      loadFailed: '',
      lazyLoad: '',
      preview: '',
    });

    this.createBasic();
    this.createPlaceholder();
    this.createLoadFailed();
    this.createLazyLoad();
    this.createPreview();
  }

  mounted() {
    fetch('./examples/data/image/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basic.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/image/placeholder.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.placeholder.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/image/load-failed.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.loadFailed.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/image/lazy-load.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.lazyLoad.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/image/preview.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.preview.setValue(text);
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
        text: '可通过fit确定图片如何适应到容器框，同原生 object-fit。'
      }),
      new Example({
        showcase: [new ImageBasicExample()],
        sourceWrapper: this.sourceData.basic
      })
    );
  }

  createPlaceholder() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '占位内容'
      }),
      new P({
        text: '可通过slot = placeholder可自定义占位内容'
      }),
      new Example({
        showcase: [new ImagePlaceholderExample()],
        sourceWrapper: this.sourceData.placeholder
      })
    );
  }

  // todo 还没有实现
  createLoadFailed() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '加载失败'
      }),
      new P({
        text: '可通过slot = error可自定义加载失败内容'
      }),
      new Example({
        showcase: [new ImageLoadFailedExample()],
        sourceWrapper: this.sourceData.loadFailed
      })
    );
  }

  createLazyLoad() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '懒加载'
      }),
      new CustomBlock({
        title: 'Tip',
        paragraphs: [
          new TextNode('浏览器原生支持的 loading 属性。 您可以使用 loading="lazy" 替换之前的lazy= true。'),
          new TextNode('如果当前浏览器支持原生图片延迟加载，则先使用原生能力，否则将使用滚动监听实现相同效果。')
        ]
      }),
      new P({
        text: '可通过lazy开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 scroll-container 来设置滚动容器， 若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。'
      }),
      new Example({
        showcase: [new ImageLazyLoadExample()],
        sourceWrapper: this.sourceData.lazyLoad
      })
    );
  }
  createPreview() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '预览效果'
      }),
      new P({
        text: '可通过 previewSrcList 开启预览大图的功能。 你可以通过 initial-index 初始化第一张预览图片的位置。 默认初始位置为 0。'
      }),
      new Example({
        showcase: [new ImagePreviewExample()],
        sourceWrapper: this.sourceData.preview
      })
    )
  }
}
