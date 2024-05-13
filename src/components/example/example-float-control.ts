import { ITypeConfig, Span, StyleCursor, TypeDiv } from '@type-dom/framework';
import {
  $bgColor, $borderColor,
  $textColor, TdIcon
} from '@type-dom/ui';
import { Example } from './example';
import { ElCaretTopSvg } from '@type-dom/svgs';

export class ExampleFloatControl extends TypeDiv {
  className: 'ExampleFloatControl';
  parent!: Example;

  constructor(config: ITypeConfig) {
    super();
    this.className = 'ExampleFloatControl';
    this.addAttrName('example-float-control');
    this.addAttrObj({
      role: 'button',
      tabIndex: 0,
    });
    this.addStyleObj({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // border-top: 1px solid var(--border-color),
      borderTop: '1px solid ' + $borderColor.base,
      height: '44px',
      boxSizing: 'border-box',
      // background-color: var(--bg-color, #fff),
      backgroundColor: $bgColor.default,
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      marginTop: '-1px',
      // color: var(--el-text-color-secondary),
      color: $textColor.secondary,
      cursor: StyleCursor.pointer,
      position: 'sticky',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: 10,
    });
    this.addChildren(
      new TdIcon({
        svgObj: new ElCaretTopSvg(),
        styleObj: {
          fontSize: '16px',
        }
      }),
      new Span({
        text: '隐藏源代码',
        styleObj: {
          fontSize: '14px',
          marginLeft: '10px',
        }
      }),
    );
    this.setConfig(config);
  }
  initEvents() {
    this.addEvents({
      click: () => {
        // 隐藏 代码
        this.hide();
        this.parent.sourceWrapper.hide();
      }
    })
  }
}
