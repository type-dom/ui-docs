import {
  Code,
  Div,
  Head,
  IJsonData,
  P,
  RouterView,
  TextNode,
  TypeComponent,
  XProxy,
  createProxy,
} from '@type-dom/framework';
import { Example } from '../../components/example/example';
import { CustomBlock } from '../../components/custom-block/custom-block';
import { ButtonBasicExample } from '../../examples/basic/button/basic';
import { ButtonDisabledExample } from '../../examples/basic/button/disabled';
import { ButtonIconExample } from '../../examples/basic/button/icon';
import { ButtonGroupExample } from '../../examples/basic/button/group';
import { ButtonLoadingExample } from '../../examples/basic/button/loading';
import { ButtonSizeExample } from '../../examples/basic/button/size';

export class ButtonWrapper extends TypeComponent {
  className: 'ButtonWrapper';
  parent?: RouterView;
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'ButtonWrapper';
    this.addChildren(
      new Div({
        text: 'Button 按钮',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        },
      }),
      new P({
        text: '常用的操作按钮。',
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      iconSource: '',
      groupSource: '',
      loadingSource: '',
      sizeSource: '',
      disabledSource: '',
    });
    // console.log('Script content:', data);
    this.createBasic();
    this.createDisabled();
    this.createIcon();
    this.createGroup();
    this.createLoading();
    this.createSize();
  }

  mounted() {
    fetch('./examples/basic/button/basic.ts')
      .then((response) => response.text())
      .then((data) => {
        this.sourceData.basicSource.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));

    fetch('./examples/basic/button/disabled.ts')
      .then((response) => response.text())
      .then((data) => {
        // console.log('Script content:', data);
        this.sourceData.disabledSource.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));

    fetch('./examples/basic/button/icon.ts')
      .then((response) => response.text())
      .then((data) => {
        // console.log('Script content:', data);
        this.sourceData.iconSource.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));

    fetch('./examples/basic/button/group.ts')
      .then((response) => response.text())
      .then((data) => {
        // console.log('Script content:', data);
        this.sourceData.groupSource.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));

    fetch('./examples/basic/button/loading.ts')
      .then((response) => response.text())
      .then((data) => {
        // console.log('Script content:', data);
        this.sourceData.loadingSource.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));

    fetch('./examples/basic/button/size.ts')
      .then((response) => response.text())
      .then((data) => {
        // console.log('Script content:', data);
        this.sourceData.sizeSource.setValue(data);
      })
      .catch((error) => console.error('Error loading script:', error));
  }
  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法',
      }),
      new P({
        childNodes: [
          new TextNode('使用'),
          new Code({
            text: 'type',
          }),
          new TextNode('、'),
          new Code({
            text: 'plain',
          }),
          new TextNode('、'),
          new Code({
            text: 'round',
          }),
          new TextNode('、'),
          new Code({
            text: 'circle',
          }),
          new TextNode('来定义按钮的样式。'),
        ],
      })
    );
    const exampleBasic = new Example({
      showcase: [new ButtonBasicExample()],
      sourceWrapper: this.sourceData.basicSource,
    });
    this.addChild(exampleBasic);
  }

  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态',
      }),
      new P({
        childNodes: [
          new TextNode('你可以使用 '),
          new Code({
            text: 'disabled',
          }),
          new TextNode(' 属性来定义按钮是否被禁用。'),
        ],
      }),
      new P({
        childNodes: [
          new TextNode('使用 '),
          new Code({
            text: 'disabled',
          }),
          new TextNode(' 属性来控制按钮是否为禁用状态。 该属性接受一个 '),
          new Code({
            text: 'Boolean',
          }),
          new TextNode(' 类型的值。'),
        ],
      })
    );
    const exampleDisable = new Example({
      showcase: [new ButtonDisabledExample()],
      sourceWrapper: this.sourceData.disabledSource,
    });
    this.addChild(exampleDisable);
  }

  createIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '图标按钮',
      }),
      new P({
        text: '使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。',
      }),
      new P({
        text: '使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加<i>标签来添加图标， 你也可以使用自定义图标。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      })
    );
    const exampleIcon = new Example({
      showcase: [new ButtonIconExample()],
      sourceWrapper: this.sourceData.iconSource,
    });
    this.addChild(exampleIcon);
  }

  createGroup() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '按钮组',
      }),
      new P({
        text: '以按钮组的方式出现，常用于多项类似操作。',
      }),
      new P({
        text: '使用 TdButtonGroup 对多个按钮分组。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      })
    );
    const exampleButtonGroup = new Example({
      showcase: [new ButtonGroupExample()],
      sourceWrapper: this.sourceData.groupSource,
    });
    this.addChild(exampleButtonGroup);
  }

  createLoading() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '加载状态按钮',
      }),
      new P({
        text: '点击按钮来加载数据，并向用户反馈加载状态。',
      }),
      new P({
        text: '通过设置 loading 属性为 true 来显示加载中状态。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      })
    );
    this.addChild(
      new CustomBlock({
        title: 'Tip:',
        paragraphs: [
          new TextNode(
            '您可以使用 loading 插槽或 loadingIcon属性自定义您的loading图标'
          ),
          new TextNode('ps: loading 插槽优先级高于loadingIcon属性'),
        ],
      })
    );
    this.addChild(
      new Example({
        showcase: [new ButtonLoadingExample()],
        sourceWrapper: this.sourceData.loadingSource,
      })
    );
  }

  createSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '调整尺寸',
      }),
      new P({
        text: '除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。',
      }),
      new P({
        text: '使用 size 属性额外配置尺寸，可使用 large和small两种值。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      })
    );
    this.addChild(
      new Example({
        showcase: [new ButtonSizeExample()],
        sourceWrapper: this.sourceData.sizeSource,
      })
    );
  }

}
