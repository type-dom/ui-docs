import { Code, Div, IJsonData, IPrimitive, ITypeConfig, Pre, TypeDiv, TypeElement, XProxy } from '@type-dom/framework';
import { $borderColor, $borderRadius, $fillColor, TdDivider } from '@type-dom/ui';
import { ExampleShowcase } from './example-showcase';
import { ExampleSourceWrapper } from './example-source-wrapper';
import { OpBtns } from './op-btns';
import { ExampleFloatControl } from './example-float-control';
import { ButtonBasicExample } from '../../examples/basic/button/basic';
interface IExampleConfig extends ITypeConfig {
  showcase: TypeElement[];
  sourceWrapper: string | XProxy<IJsonData>;
}
export class Example extends TypeDiv {
  className: 'Example';
  sourceWrapper: ExampleSourceWrapper;
  floatControl: ExampleFloatControl;
  config: IExampleConfig;
  constructor(config: IExampleConfig) {
    super();
    this.className = 'Example';
    this.config = config;
    this.addAttrName('example');
    this.addStyleObj({
      // border: '1px solid 'var(--border-color),
      border: '1px solid ' + $borderColor.base,
      // border-radius: var(--el-border-radius-base);
      borderRadius: $borderRadius.base,
    });
    const exampleShowcase = new ExampleShowcase({
      parent: this,
    });
    exampleShowcase.addChildren(...config.showcase);
    this.addChild(exampleShowcase);
    this.addChild(new TdDivider({
      styleObj: {
        margin: '0'
      }
    }));
    const opBtns = new OpBtns({
      parent: this,
    });
    this.addChild(opBtns);
    this.sourceWrapper = new ExampleSourceWrapper({
      parent: this,
      styleObj: {
        display: 'none',
      },
      childNodes: [
        new Div({
          attrObj: {
            name: 'source-wrapper',
          },
          styleObj: {
            // background-color: var(--code-bg-color),
            backgroundColor: $fillColor.light,
            overflowX: 'auto',
          },
          childNodes: [
            new Pre({
              childNodes: [
                new Code({
                  text: config.sourceWrapper,
                }),
              ],
            }),
          ],
        }),
      ]
    });
    // this.sourceWrapper.addChild(config.sourceWrapper);
    this.addChild(this.sourceWrapper);
    this.floatControl = new ExampleFloatControl({
      parent: this,
      styleObj: {
        display: 'none',
      }
    });
    this.addChild(this.floatControl);
  }
}
