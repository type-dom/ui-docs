import { TdInput } from '@type-dom/ui';
import { TypeDiv } from '@type-dom/framework';

export class FormInputTextareaExample extends TypeDiv {
  className: 'FormInputTextareaExample';
  constructor() {
    super();
    this.className = 'FormInputTextareaExample';

    this.addChildren(
      new TdInput({
        width: 240,
        type: 'textarea',
        autosize: true,
      }),
    )
  }
}
