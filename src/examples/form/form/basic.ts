import { createProxy, TypeDiv } from '@type-dom/framework';
import { TdButton, TdForm, TdFormItem, TdInput, TdRadioGroup, TdSwitch } from '@type-dom/ui';

export class FormBasicExample extends TypeDiv {
  className = 'FormBasicExample';
  constructor() {
    super();
    const formModel1 = createProxy({
      activityName: 'activityName',
      activityZone: 'activityZone',
      activityTime: 'activityTime',
      instantDelivery: false,
      activityType: 'activityType',
      resources: 'Sponsor',
      activityForm: 'activityForm',
    });
    this.addChild(
      new TdForm({
        model: formModel1,
        labelWidth: 'auto',
        styleObj: {
          maxWidth: '600px',
        },
        childNodes: [
          new TdFormItem({
            label: 'Activity name',
            required: true,
            contents: [
              new TdInput({
                modelValue: formModel1.activityName,
                placeholder: 'Please enter activity name',
              }),
            ],
          }),
          new TdFormItem({
            label: 'Activity zone',
          }),
          new TdFormItem({
            label: 'Activity time',
          }),
          new TdFormItem({
            label: 'Instant delivery',
            contents: [new TdSwitch()],
          }),
          new TdFormItem({
            label: 'Activity type',
          }),
          new TdFormItem({
            label: 'Resources',
            contents: [
              new TdRadioGroup({
                modelValue: formModel1.resources,
                options: [
                  {
                    label: 'Sponsor',
                    value: 'Sponsor',
                  },
                  {
                    label: 'Venue',
                    value: 'Venue',
                  },
                ],
              }),
            ],
          }),
          new TdFormItem({
            label: 'Activity form',
            contents: [
              new TdInput({
                type: 'textarea',
                modelValue: formModel1.activityForm,
              }),
            ],
          }),
          new TdFormItem({
            contents: [
              new TdButton({
                title: 'Create',
                type: 'primary',
                styleObj: {},
                events: {
                  click: (evt, element: TdButton) => {
                    console.log('click', evt, element);
                    // evt.preventDefault();
                    formModel1.activityName.setValue('activityName1');
                    console.log('formModel1 original is  ', formModel1.toJsonData());
                  },
                },
              }),
              new TdButton({
                title: 'Cancel',
                // type: 'default'
                styleObj: {
                  marginLeft: '10px',
                },
              }),
            ],
          }),
        ],
      }),
    )
  }
}
