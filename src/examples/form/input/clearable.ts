import { TypeDiv } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormInputClearableExample extends TypeDiv {
  className: 'FormInputClearableExample';

  constructor() {
    super();
    this.className = 'FormInputClearableExample';
    this.addChild(
      new TdInput({
        modelValue: '',
        width: 240,
        placeholder: 'Please input',
        clearable: true
      })
    );
  }
}
