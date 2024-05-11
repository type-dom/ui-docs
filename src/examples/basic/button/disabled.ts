import { Div, TypeDiv } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';

export class ButtonDisabledExample extends TypeDiv {
  className = 'ButtonDisabledExample'
  constructor() {
    super();
    this.addChildren(
      this.createDisableNormalButton(),
      this.createDisablePlainButton(),
    )
  }
  createDisableNormalButton() {
    return new Div({
      childNodes: [
        new TdButton({
          name: 'default-disabled-btn',
          title: 'Default',
          // type: 'default', // 是否设置是不一样的效果
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
          attrObj: {
          },
        }),
        new TdButton({
          name: 'primary-disabled-btn',
          title: 'Primary',
          type: 'primary',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
          attrObj: {
          },
        }),
        new TdButton({
          name: 'success-disabled-btn',
          title: 'Success',
          type: 'success',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'info-disabled-btn',
          title: 'Info',
          type: 'info',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'warning-disabled-btn',
          title: 'Warning',
          type: 'warning',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'danger-disabled-btn',
          title: 'Danger',
          type: 'danger',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
      ],
    });
  }
  createDisablePlainButton() {
    return new Div({
      childNodes: [
        new TdButton({
          name: 'default-disabled-btn',
          plain: true,
          title: 'Default',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          plain: true,
          title: 'Primary',
          type: 'primary',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'success-plain-disabled-btn',
          plain: true,
          title: 'Success',
          type: 'success',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'info-plain-disabled-btn',
          plain: true,
          title: 'Info',
          type: 'info',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'warning-plain-disabled-btn',
          plain: true,
          title: 'Warning',
          type: 'warning',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
          attrObj: {
          },
        }),
        new TdButton({
          name: 'danger-disabled-btn',
          plain: true,
          title: 'Danger',
          type: 'danger',
          disabled: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
      ],
    });
  }
}
