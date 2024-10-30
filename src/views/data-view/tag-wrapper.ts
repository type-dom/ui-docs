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

import { TagBasicExample } from '../../examples/data/tag/basic';
import { TagCheckableExample } from '../../examples/data/tag/checkable';
import { TagEditableExample } from '../../examples/data/tag/editable';
import { TagRemovableExample } from '../../examples/data/tag/removable';
import { TagRoundedExample } from '../../examples/data/tag/rounded';
import { TagSizesExample } from '../../examples/data/tag/sizes';
import { TagThemeExample } from '../../examples/data/tag/theme';

export class TagWrapper extends TypeDiv {
  className: 'TagWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'TagWrapper';
    this.addChildren(
      new Div({
        text: 'Tag 标签',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0'
        }
      }),
      new P({
        text: '用于标记和选择。'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      checkable: '',
      editable: '',
      removable: '',
      rounded: '',
      sizes: '',
      theme: ''
    });
    this.createBasic();
    this.createRemovable();
    this.createEditable();
    this.createSizes();
    this.createTheme();
    this.createRounded();
    this.createCheckable();
  }

  mounted() {
    fetch('./examples/data/tag/basic.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/tag/checkable.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.checkable.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/tag/editable.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.editable.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/tag/removable.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.removable.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/tag/rounded.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.rounded.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/tag/sizes.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.sizes.setValue(text);
      })
      .catch(err => console.error('fetch error:', err));
    fetch('./examples/data/tag/theme.ts')
      .then(res => res.text())
      .then(text => {
        this.sourceData.theme.setValue(text);
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
        text: '由 type 属性来选择 tag 的类型。 也可以通过 color 属性来自定义背景色。'
      }),
      new Example({
        showcase: [new TagBasicExample()],
        sourceWrapper: this.sourceData.basicSource
      })
    );
  }

  createCheckable() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '可选中的标签'
      }),
      new P({
        text: '有时候因为业务需求，我们可能会需要用到类似复选框的标签，但是按钮式的复选框的样式又不满足需求，此时我们就可以用到 check-tag组件。 您可以在2.5.4中使用 type 属性。'
      }),
      new P({
        text: 'check-tag 的基础使用方法，check-tag 提供的 API 非常简单。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new TagCheckableExample()],
        sourceWrapper: this.sourceData.maxSource
      })
    );
  }

  createEditable() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '动态编辑标签'
      }),
      new P({
        text: '动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。'
      }),
      new Example({
        showcase: [new TagEditableExample()],
        sourceWrapper: this.sourceData.customSource
      })
    );
  }

  createRemovable() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '可移除标签'
      }),
      new P({
        text: '设置 closable 属性可以定义一个标签是否可移除。 它接受一个 Boolean。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 disable-transitions 属性，它接受一个 Boolean，true 为关闭。 当 Tag 被移除时会触发 close 事件。'
      }),
      new Example({
        showcase: [new TagRemovableExample()],
        sourceWrapper: this.sourceData.dotSource
      })
    );
  }

  createRounded() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '圆形标签'
      }),
      new P({
        text: 'Tag 可以向按钮组件一样变为完全圆形。'
      }),
      new Example({
        showcase: [new TagRoundedExample()],
        sourceWrapper: this.sourceData.offsetSource
      })
    );
  }

  createSizes() {
  //
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '不同尺寸'
      }),
      new P({
        text: 'Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。'
      }),
      new P({
        text: '使用 size 属性来设置额外尺寸, 可选值包括 large, default 或 small.',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new TagSizesExample()],
        sourceWrapper: this.sourceData.offsetSource
      })
    );
  }

  createTheme() {
  //
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '主题'
      }),
      new P({
        text: 'Tag 组件提供了三个不同的主题：dark、light 和 plain。'
      }),
      new P({
        text: '通过设置 effect 属性来改变主题，默认为 light。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        }
      }),
      new Example({
        showcase: [new TagThemeExample()],
        sourceWrapper: this.sourceData.offsetSource
      })
    );
  }
}
