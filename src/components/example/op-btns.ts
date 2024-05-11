import { ITypeConfig, StyleCursor, StyleDisplay, TypeDiv, XProxy } from '@type-dom/framework';
import { $textColor, TdIcon } from '@type-dom/ui';
import { ElCopyDocumentSvg, TdViewCodeSvg } from '@type-dom/svgs';
import { Example } from './example';

export class OpBtns extends TypeDiv {
  className: 'OpBtns';
  parent: Example;
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'OpBtns';
    this.parent = config.parent as Example;
    this.addAttrName('op-btns');
    this.addStyleObj({
      padding: '.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '2.5rem',
      boxSizing: 'border-box'
    });
    this.addChild(new TdIcon({
      styleObj: {
        height: '1em',
        width: '1em',
        lineHeight: '1em',
        display: 'inline-flex',
        justifyContent: 'center',
        color: $textColor.secondary,
      },
      svgObj: new ElCopyDocumentSvg(),
      events: {
        click: async() => {
          // 选取要复制的文本
          let textToCopy = '';
          if (this.parent.config.sourceWrapper instanceof XProxy) {
            textToCopy = this.parent.config.sourceWrapper.value;
          } else {
            textToCopy = this.parent.config.sourceWrapper;
          }
          // 尝试使用Async Clipboard API
          try {
            await navigator.clipboard.writeText(textToCopy);
            alert('文本已复制到剪贴板！');
          } catch (err) {
            console.error('无法复制文本: ', err);
            alert('复制失败，请手动复制。');
          }
        }
      }
    }));
    this.addChild(new TdIcon({
      // text: '查看代码',
      styleObj: {
        height: '1em',
        width: '1em',
        lineHeight: '1em',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fill: 'currentColor',
        // color: var(--color),
        fontSize: '16px',
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: StyleCursor.pointer,
        margin: '0 .5rem',
        // color: var(--text-color-lighter),
        color: $textColor.secondary,
        transition: '.2s',
      },
      svgObj: new TdViewCodeSvg(),
      events: {
        click: () => {
          if (this.parent.sourceWrapper.styleObj.display === 'none') {
            this.parent.sourceWrapper.show();
            this.parent.floatControl.show(StyleDisplay.flex);
          } else {
            this.parent.sourceWrapper.hide();
            this.parent.floatControl.hide();
          }
        }
      }
    }));
    this.setConfig(config);
  }
}
