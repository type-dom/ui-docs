import { ITypeConfig, TypeDiv } from '@type-dom/framework';

export class ExampleSourceWrapper extends TypeDiv {
  className: 'ExampleSourceWrapper';
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'ExampleSourceWrapper';
    this.addAttrName('example-source-wrapper');
    this.setConfig(config);
  }
}
