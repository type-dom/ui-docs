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

import { AvatarBasicExample } from '../../examples/data/avatar/basic';
import { AvatarTypesExample } from '../../examples/data/avatar/types';
import { AvatarFallbackExample } from '../../examples/data/avatar/fallback';
import { AvatarFitExample } from '../../examples/data/avatar/fit';

export class AvatarWrapper extends TypeDiv {
  className: 'AvatarWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'AvatarWrapper';
    this.addChildren(
      new Div({
        text: 'Avatar 头像',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: 'Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      typesSource: '',
      fallbackSource: '',
      fitSource: '',
    });

    this.createBasic();
    this.createTypes();
    this.createFallback();
    this.createFit();
  }

  mounted() {
    fetch('./examples/data/avatar/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/avatar/types.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.typesSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/avatar/fallback.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.fallbackSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/avatar/fit.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.fitSource.setValue(text);
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
        text: '使用 shape 和 size 属性来设置 Avatar 的形状和大小。'
      }),
      new Example({
        showcase: [new AvatarBasicExample()],
        sourceWrapper: this.sourceData.basicSource
      })
    );
  }

  createTypes() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '展示类型'
      }),
      new P({
        text: '支持使用图片，图标或者文字作为 Avatar。'
      }),
      new Example({
        showcase: [new AvatarTypesExample()],
        sourceWrapper: this.sourceData.typesSource
      })
    );
  }

  // todo 还没有实现
  createFallback() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '回退行为'
      }),
      new P({
        text: '图片加载失败时的回退行为。'
      }),
      new Example({
        showcase: [new AvatarFallbackExample()],
        sourceWrapper: this.sourceData.fallbackSource
      })
    );
  }

  createFit() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '适应容器'
      }),
      new P({
        text: '当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致'
      }),
      new Example({
        showcase: [new AvatarFitExample()],
        sourceWrapper: this.sourceData.fitSource
      })
    );
  }
}
