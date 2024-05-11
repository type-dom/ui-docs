import { createProxy, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormInputClearableExample extends TypeDiv {
  className: 'FormInputClearableExample';
  private input: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'FormInputClearableExample';
    this.input = createProxy('');
    this.addChild(
      new TdInput({
        modelValue: this.input,
        width: 240,
        placeholder: 'Please input',
        clearable: true,
      }),
    )
  }
}
