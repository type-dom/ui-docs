import { ITypeConfig, TypeDiv } from '@type-dom/framework';
import { $bgColor } from '@type-dom/ui';
import { Example } from './example';

export class ExampleShowcase extends TypeDiv {
  className: 'ExampleShowcase';
  parent: Example;
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'ExampleShowcase';
    this.addAttrName('example-showcase');
    this.addStyleObj({
      padding: '1.5rem',
      margin: '.5px',
      // background-color: var(--bg-color),
      backgroundColor: $bgColor.default,
    });
    this.setConfig(config);
  }
}
