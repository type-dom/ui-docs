import { createProxy, TypeDiv } from '@type-dom/framework';
import {
  ILabelPosition,
  TdForm,
  TdFormItem,
  TdInput,
  TdRadioGroup,
} from '@type-dom/ui';

export class FormAlignExample extends TypeDiv {
  className = 'FormAlignExample';

  constructor() {
    super();
    const formRef = createProxy(null);
    this.addChildren(
      new TdRadioGroup({
        name: 'radio-group',
        modelValue: 'right',
        isButton: true,
        styleObj: {
          marginBottom: '40px',
        },
        options: [
          {
            label: 'Left',
            value: 'left',
          },
          {
            label: 'Right',
            value: 'right',
          },
          {
            label: 'Top',
            value: 'top',
          },
        ],
        events: {
          click: (evt, element: TdRadioGroup) => {
            console.log('radio-group event ', evt);
            console.log('element.modelValue is ', element?.modelValue);
            if (formRef.value && formRef.value instanceof TdForm) {
              formRef.value.children.forEach(child => {
                if (child instanceof TdFormItem) {
                  if (element?.modelValue === 'top') {
                    child.setLabelPosition('left');
                    child.setStyleObj({
                      display: 'block',
                    });
                  } else {
                    child.setLabelPosition(
                      element?.modelValue as ILabelPosition
                    );
                    child.setStyleObj({
                      display: 'flex',
                    });
                  }
                }
              });
            }
          },
        },
      }),
      new TdForm({
        // labelPosition: 'left',
        ref: formRef,
        labelWidth: 'auto',
        styleObj: {
          maxWidth: '600px',
        },
        childNodes: [
          new TdFormItem({
            label: 'Activity name',
            contents: [new TdInput()],
          }),
          new TdFormItem({
            label: 'Activity zone',
            contents: [new TdInput()],
          }),
          new TdFormItem({
            label: 'Activity time',
            contents: [new TdInput()],
          }),
        ],
      })
    );
  }
}
