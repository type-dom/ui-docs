import { createProxy, TypeDiv } from '@type-dom/framework';
import { TdButton, TdForm, TdFormItem, TdInput } from '@type-dom/ui';

export class FormInlineExample extends TypeDiv {
  className = 'FormInlineExample';
  constructor() {
    super();
    const model = createProxy({
      formItem1: '',
      formItem2: '',
      formItem3: '',
    });
    this.addChild(
      new TdForm({
        inline: true,
        model: model,
        childNodes: [
          new TdFormItem({
            label: 'Activity name',
            contents: [new TdInput({
              modelValue: model.formItem1,
              placeholder: 'Please enter activity name',
            })],
          }),
          new TdFormItem({
            label: 'Activity zone',
            contents: [new TdInput({
              modelValue: model.formItem2,
              placeholder: 'Please enter activity zone',
            })],
          }),
          new TdFormItem({
            label: 'Activity time',
            contents: [
              new TdInput({
                modelValue: model.formItem3,
                placeholder: 'Please enter activity time',
              })
            ],
          }),
          new TdFormItem({
            contents: [
              new TdButton({
                title: 'Query',
                type: 'primary',
                events: {
                  click: () => {
                    console.log('submit');
                  }
                }
              })
            ],
          })
        ],
      }),
    )
  }
}
