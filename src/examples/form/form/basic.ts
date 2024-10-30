import { TypeDiv } from '@type-dom/framework';
import {
  TdButton,
  TdForm,
  TdFormItem,
  TdInput,
  TdRadioGroup,
  TdSwitch
} from '@type-dom/ui';

export class FormBasicExample extends TypeDiv {
  className = 'FormBasicExample';

  constructor() {
    super();
    const formModel1 = {
      activityName: 'activityName',
      activityZone: 'activityZone',
      activityTime: 'activityTime',
      instantDelivery: false,
      activityType: 'activityType',
      resources: 'Sponsor',
      activityForm: 'activityForm'
    };
    this.addChild(
      new TdForm({
        model: formModel1,
        labelWidth: 'auto',
        styleObj: {
          maxWidth: '600px'
        },
        slot: [
          new TdFormItem({
            label: 'Activity name',
            required: true,
            slot: new TdInput({
              modelValue: formModel1.activityName,
              placeholder: 'Please enter activity name'
            })
          }),
          new TdFormItem({
            label: 'Activity zone'
          }),
          new TdFormItem({
            label: 'Activity time'
          }),
          new TdFormItem({
            label: 'Instant delivery',
            slot: new TdSwitch()
          }),
          new TdFormItem({
            label: 'Activity type'
          }),
          new TdFormItem({
            label: 'Resources',
            slot: new TdRadioGroup({
              modelValue: formModel1.resources,
              options: [
                {
                  label: 'Sponsor',
                  value: 'Sponsor'
                },
                {
                  label: 'Venue',
                  value: 'Venue'
                }
              ]
            })
          }),
          new TdFormItem({
            label: 'Activity form',
            slot: new TdInput({
              type: 'textarea',
              modelValue: formModel1.activityForm
            })
          }),
          new TdFormItem({
            slots: {
              first: new TdButton({
                slot: 'Create',
                type: 'primary',
                events: {
                  click: (evt) => {
                    // evt.preventDefault();
                    formModel1.activityName = 'activityName1';
                  }
                }
              }),
              second: new TdButton({
                slot: 'Cancel',
                // type: 'default'
                styleObj: {
                  marginLeft: '10px'
                }
              })
            }
          })
        ]
      })
    );
  }
}
