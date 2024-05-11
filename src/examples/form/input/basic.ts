import { createProxy, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormInputBasicExample extends TypeDiv {
  className: 'FormInputBasicExample';
  private input: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'FormInputBasicExample';
    this.input = createProxy('');
    this.addChild(
      new TdInput({
        modelValue: this.input,
        width: 240,
        placeholder: 'Please input'
      }),
    )
  }
}
