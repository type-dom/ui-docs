import { BlockQuote, ITypeConfig, P, TextNode, TypeDiv, TypeElement, TypeNode } from '@type-dom/framework';
import { $borderColor, $colorPrimaryRgb, $colors, $textColor } from '@type-dom/ui';

export interface ICustomBlockConfig extends ITypeConfig {
  type?: 'tip' | 'warning'; // default is tip
  title: string;
  paragraphs: (TypeElement | TextNode)[];
  blockquote?: TypeElement | TextNode;
}

export class CustomBlock extends TypeDiv {
  className: 'CustomBlock';

  constructor(config: ICustomBlockConfig) {
    super();
    this.className = 'CustomBlock';
    this.addAttrName('tip');
    const borderColor = config.type === 'warning' ? $colors.warning.base : $colors.primary.base;
    this.addStyleObj({
      padding: '8px 16px',
      // background-color: var(--block-tip-bg-color),
      backgroundColor: 'rgba(' + $colorPrimaryRgb + ', 0.1)',
      borderRadius: '4px',
      // border-left: 5px solid var(--el-color-primary),
      borderLeft: '5px solid ' + borderColor, //
      margin: '20px 0'
    });
    if (config.title) {
      this.addChild(new P({
        text: config.title,
        styleObj: {
          fontSize: '1.1rem',
          fontWeight: 700,
          marginTop: '0',
        },
      }));
    }
    if (config.paragraphs) {
      config.paragraphs.forEach(paragraph => {
        this.addChild(new P({
          styleObj: {
            fontSize: '0.9rem',
          },
          childNodes: [paragraph],
        }));
      })
    }
    if (config.blockquote) {
      this.addChild(new BlockQuote({
        styleObj: {
          margin: '1rem 0',
          // border-left: .2rem solid var(--el-border-color),
          borderLeft: '.2rem solid ' + $borderColor.base,
          padding: '.25rem 0 .25rem 1rem',
          fontSize: '1rem',
          // color: var(--text-color-lighter),
          color: $textColor.secondary,
        },
        childNodes: [config.blockquote],
      }))
    }
  }
}
