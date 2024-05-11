import { TypeDiv } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';
import { ElCalendarSvg, ElSearchSvg } from '@type-dom/svgs';

export class FormInputIconExample extends TypeDiv {
  className: 'FormInputIconExample';
  constructor() {
    super();
    this.className = 'FormInputIconExample';
    this.addChildren(
      new TdInput({
        width: 240,
        placeholder: 'Pick a date',
        suffixIcon: new ElCalendarSvg(),
        styleObj: {
          paddingRight: '10px',
        },
      }),
      new TdInput({
        width: 240,
        placeholder: 'Type something',
        prefixIcon: new ElSearchSvg(),
      }),
    )
  }
}
