import { createProxy, IJsonData, TypeDiv, XProxy } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormInputPasswordExample extends TypeDiv {
  className: 'FormPasswordExample';
  private input: XProxy<IJsonData>;
  constructor() {
    super();
    this.className = 'FormPasswordExample';
    this.input = createProxy('');
    this.addChild(
      new TdInput({
        width: 240,
        placeholder: 'Please input password',
        type: 'password',
        showPassword: true,
      }),
    )
  }
}
