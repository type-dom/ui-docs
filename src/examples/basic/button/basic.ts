import { Div, TypeDiv } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { ElCheckSvg, ElDeleteSvg, ElEditSvg, ElMessageSvg, ElSearchSvg, ElStarSvg } from '@type-dom/svgs';

export class ButtonBasicExample extends TypeDiv {
  className = 'ButtonBasicExample';
  constructor() {
    super();
    this.addChildren(
      this.createNormalButton(),
      this.createPlainButton(),
      this.createRoundButton(),
      this.createCircleButton(),
    )
  }
  createNormalButton() {
    return new Div({
      styleObj: {
        marginBottom: '1rem',
      },
      childNodes: [
        new TdButton({
          name: 'default-btn',
          title: 'Default',
          styleObj: {
            margin: '3px 10px',
          },
          attrObj: {
            click: 'handleClick',
          },
        }),
        new TdButton({
          name: 'primary-btn',
          title: 'Primary',
          type: 'primary',
          styleObj: {
            margin: '3px 10px',
          },
          attrObj: {
            click: 'handleClick',
          },
        }),
        new TdButton({
          name: 'success-btn',
          title: 'Success',
          type: 'success',
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          title: 'Info',
          type: 'info',
          name: 'info-btn',
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'warning-btn',
          title: 'Warning',
          type: 'warning',
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'danger-btn',
          title: 'Danger',
          type: 'danger',
          styleObj: {
            margin: '3px 10px',
          },
        }),
      ],
    });
  }
  createPlainButton() {
    return new Div({
      styleObj: {
        marginBottom: '1rem',
      },
      childNodes: [
        new TdButton({
          name: 'default-plain-btn',
          title: 'Plain',
          plain: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'primary-plain-btn',
          title: 'Primary',
          type: 'primary',
          plain: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'success-plain-btn',
          title: 'Success',
          type: 'success',
          plain: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'info-plain-btn',
          title: 'Info',
          type: 'info',
          plain: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'warning-plain-btn',
          title: 'Warning',
          type: 'warning',
          plain: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'danger-plain-btn',
          title: 'Danger',
          type: 'danger',
          plain: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
      ],
    });
  }
  createRoundButton() {
    return new Div({
      styleObj: {
        marginBottom: '1rem',
      },
      childNodes: [
        new TdButton({
          name: 'round-default-btn',
          title: 'Round',
          round: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'round-primary-btn',
          title: 'Primary',
          type: 'primary',
          round: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'round-success-btn',
          title: 'Success',
          type: 'success',
          round: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'round-info-btn',
          title: 'Info',
          type: 'info',
          round: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'round-warning-btn',
          title: 'Warning',
          type: 'warning',
          round: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'round-danger-btn',
          title: 'Danger',
          type: 'danger',
          round: true,
          styleObj: {
            margin: '3px 10px',
          },
        }),
      ],
    });
  }
  createCircleButton() {
    const $circleStyle = {
      margin: '3px 10px',
      width: '32px',
      height: '32px',
    };
    return new Div({
      childNodes: [
        new TdButton({
          name: 'circle-default-btn',
          svgObj: new ElSearchSvg(),
          circle: true,
          styleObj: $circleStyle,
          attrObj: {},
        }),
        new TdButton({
          type: 'primary',
          circle: true,
          name: 'circle-primary-btn',
          svgObj: new ElEditSvg(),
          styleObj: $circleStyle,
        }),
        new TdButton({
          type: 'success',
          circle: true,
          name: 'circle-success-btn',
          svgObj: new ElCheckSvg(),
          styleObj: $circleStyle,
        }),
        new TdButton({
          type: 'info',
          circle: true,
          name: 'circle-info-btn',
          svgObj: new ElMessageSvg(),
          styleObj: $circleStyle,
        }),
        new TdButton({
          type: 'warning',
          circle: true,
          name: 'circle-warning-btn',
          svgObj: new ElStarSvg(),
          styleObj: $circleStyle,
        }),
        new TdButton({
          type: 'danger',
          circle: true,
          name: 'circle-danger-btn',
          svgObj: new ElDeleteSvg(),
          styleObj: $circleStyle,
        }),
      ],
    });
  }
}
