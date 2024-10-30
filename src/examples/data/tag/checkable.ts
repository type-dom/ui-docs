import { Div, TypeDiv } from '@type-dom/framework';
import { TdCheckTag } from '@type-dom/ui';

export class TagCheckableExample extends TypeDiv {
  className = 'TagCheckableExample';

  constructor() {
    super();
    const $item = {
      display: 'flex',
      gap: '0.5rem',
      margin: '1rem',
    };
    let checked = false;
    this.addChild(new Div({
      name: 'checkable',
      styleObj: $item,
      childNodes: [
        new TdCheckTag({
          text: 'Checked',
          checked: true,
        }),
        new TdCheckTag({
          text: 'Toggle me',
          checked: checked,
          emits: {
            change: (value) => {
              console.log('checkable tag clicked . ');
              // element.setChecked(!element.checked);
              checked = value;
            }
          }
        }),
      ]
    }));
    let checked1 = true;
    let checked2 = true;
    let checked3 = true;
    let checked4 = true;
    let checked5 = true;
    this.addChild(new Div({
      name: 'checkable',
      styleObj: $item,
      childNodes: [
        new TdCheckTag({
          type: 'primary',
          text: 'Tag 1',
          checked: checked1,
          emits: {
            change: (val) => {
              checked1 = val;
            }
          }
        }),
        new TdCheckTag({
          type: 'success',
          text: 'Tag 2',
          checked: true,
          emits: {
            change: (val) => {
              checked2 = val;
            }
          }
        }),
        new TdCheckTag({
          type: 'info',
          text: 'Tag 3',
          checked: checked3,
          emits: {
            change: (val) => {
              checked3 = val;
            }
          }
        }),
        new TdCheckTag({
          type: 'warning',
          text: 'Tag 4',
          checked: true,
          emits: {
            change: (val) => {
              checked4 = val;
            }
          }
        }),
        new TdCheckTag({
          type: 'danger',
          text: 'Tag 5',
          checked: true,
          emits: {
            change: (val) => {
              checked5 = val;
            }
          }
        })
      ]
    }));
  }
}
