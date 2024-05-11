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
import { Example } from '../../components/example/example';
import { CustomBlock } from '../../components/custom-block/custom-block';
import { SwitchBasicExample } from '../../examples/form/switch/basic';
import { SwitchSizeExample } from '../../examples/form/switch/size';
import { SwitchTextExample } from '../../examples/form/switch/text';
import { SwitchActiveIconExample } from '../../examples/form/switch/active-icon';
import { SwitchDisabledExample } from '../../examples/form/switch/disabled';
import { SwitchLoadingExample } from '../../examples/form/switch/loading';
import { SwitchActionTextExample } from '../../examples/form/switch/action-text';
import { SwitchActionIconExample } from '../../examples/form/switch/action-icon';

export class SwitchWrapper extends TypeDiv {
  className: 'SwitchWrapper';
  parent?: RouterView;
  title = 'Here is a switch wrapper ';
  private sourceData: XProxy<IJsonData>;

  constructor() {
    super();
    console.error('SwitchWrapper constructor . ');
    this.className = 'SwitchWrapper';
    this.addChildren(
      new Div({
        text: 'Switch 开关',
        styleObj: {
          fontSize: '2.2em',
          fontWeight: 900,
          margin: '1em 0',
        }
      }),
      new P({
        text: '表示两种相互对立的状态间的切换，多用于触发「开/关」。'
      })
    );
    this.sourceData = createProxy({
      basicSource: '',
      disabledSource: '',
      textSource: '',
      loadingSource: '',
      sizeSource: '',
      activeIconSource: '',
      actionTextSource: '',
      actionIconSource: '',
    });
    // 使用一个方法来添加子元素，以提高代码的可维护性
    this.createBasic();
    this.createSize();
    this.createText();
    this.createActiveIcon();
    this.createDisabled();
    this.createLoading();
    this.createActionIcon();
    this.createActionText();
  }

  created() {
    console.error('SwitchWrapper created . ');
    // const num = ref(0);
    // console.log('num is ', num.value);
    // const reactiveData = reactive({
    //   name: 'Helen',
    //   age: 27,
    //   address: 'Shanghai',
    // });
    // console.log('reactiveData is ', reactiveData);
    // console.log('this.data is ', this.data);
  }

  mounted() {
    console.error('SwitchWrapper mounted . ');
    // 这里可以添加与UI交互、数据加载等相关的逻辑
    fetch('./examples/form/switch/basic.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.basicSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/size.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.sizeSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/text.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.textSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/active-icon.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.activeIconSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/disabled.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.disabledSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/loading.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.loadingSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/action-icon.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.actionIconSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
    fetch('./examples/form/switch/action-text.ts')
      .then(response => response.text())
      .then(text => {
        this.sourceData.actionTextSource.setValue(text);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  }

  createBasic() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '基础用法',
      }),
      new P({
        text: '绑定 v-model 到一个 Boolean 类型的变量。 可以使用 switch-on-color 属性与 switch-off-color 属性来设置开关的背景色。'
      }),
      new Example({
        showcase: [new SwitchBasicExample()],
        sourceWrapper: this.sourceData.basicSource,
      })
    )
  }

  createSize() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '尺寸',
      }),
      new P({
        text: '通过设置 size 属性来改变开关的尺寸，可选值为 large、default、small。'
      }),
      new Example({
        showcase: [new SwitchSizeExample()],
        sourceWrapper: this.sourceData.sizeSource,
      })
    )
  }

  createText() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '文字描述',
      }),
      new P({
        text: '使用active-text属性与inactive-text属性来设置开关的文字描述。 使用 inline-prompt 属性来控制文本是否显示在点内。'
      }),
      new P({
        text: '使用active-text属性与inactive-text属性来设置开关的文字描述。',
        styleObj: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        }
      }),
      new Example({
        showcase: [new SwitchTextExample()],
        sourceWrapper: this.sourceData.textSource,
      })
    )
  }

  createActiveIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '显示自定义图标',
      }),
      new CustomBlock({
        title: 'Tip',
        paragraphs: [
          new P({
            text: '使用 inactive-icon 和 active-icon 属性来添加图标。 使用 inline-prompt 属性来控制图标显示在点内。'
          })
        ]
      }),
      new P({
        text: '使用 inactive-icon 和 active-icon 属性来添加图标。 使用 inline-prompt 属性来控制图标显示在点内。'
      }),
      new Example({
        showcase: [new SwitchActiveIconExample()],
        sourceWrapper: this.sourceData.activeIconSource,
      })
    )
  }

  createDisabled() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '禁用状态',
      }),
      new P({
        text: '设置disabled属性，接受一个Boolean，设置true即可禁用。'
      }),
      new Example({
        showcase: [new SwitchDisabledExample()],
        sourceWrapper: this.sourceData.disabledSource,
      })
    )
  }

  createLoading() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '加载状态',
      }),
      new P({
        text: '设置loading属性，接受一个Boolean，设置true即加载中状态。'
      }),
      new Example({
        showcase: [new SwitchLoadingExample()],
        sourceWrapper: this.sourceData.loadingSource,
      })
    )
  }

  createActionIcon() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义动作图标',
      }),
      new P({
        text: '使用 inactive-action-icon 和 active-action-icon 属性来添加图标。'
      }),
      new Example({
        showcase: [new SwitchActionIconExample()],
        sourceWrapper: this.sourceData.actionIconSource,
      })
    )
  }

  createActionText() {
    this.addChildren(
      new Head({
        nodeName: 'h2',
        text: '自定义操作图标',
      }),
      new P({
        text: '使用 active-action 和 inactive-action 属性来添加图标。'
      }),
      new Example({
        showcase: [new SwitchActionTextExample()],
        sourceWrapper: this.sourceData.actionTextSource,
      })
    )
  }
}
