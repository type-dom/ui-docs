import { TypeDiv } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';

export class FormInputPasswordExample extends TypeDiv {
  className: 'FormPasswordExample';

  constructor() {
    super();
    this.className = 'FormPasswordExample';
    this.addChild(
      new TdInput({
        width: 240,
        placeholder: 'Please input password',
        type: 'password',
        showPassword: true
      })
    );
  }
}
