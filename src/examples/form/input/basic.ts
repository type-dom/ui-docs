import { TypeDiv } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormInputBasicExample extends TypeDiv {
  className: 'FormInputBasicExample';

  constructor() {
    super();
    this.className = 'FormInputBasicExample';
    this.addChild(
      new TdInput({
        modelValue: '',
        width: 240,
        placeholder: 'Please input'
      })
    );
  }
}
