import { createProxy, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormatInputFormatExample extends TypeDiv {
  className: 'FormatInputFormat';
  private input: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'FormatInputFormat';
    this.input = createProxy(null);
    this.addChild(
      new TdInput({
        width: 240,
        // :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        // :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
        formatter: (value: string) => {
          return '$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        parser: (value: string) => {
          return value.replace(/\$\s?|(,*)/g, '');
        },
      })
    );
  }
}
