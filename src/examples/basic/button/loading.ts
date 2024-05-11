import { Div, TypeDiv } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { ElElemeSvg, ElLoadingSvg } from '@type-dom/svgs';

export class ButtonLoadingExample extends TypeDiv {
  className: string = 'ButtonLoadingExample';
  constructor() {
    super();
    this.addChild(this.createLoadingButton());
  }

  createLoadingButton() {
    return new Div({
      childNodes: [
        new TdButton({
          name: 'loading-btn',
          type: 'primary',
          title: 'Loading',
          loading: true,
          svgObj: new ElLoadingSvg(),
          styleObj: {
            margin: '3px 10px',
          },
        }),
        new TdButton({
          name: 'loading-btn',
          type: 'primary',
          title: 'Loading',
          loading: true,
          // loadingText: 'Loading...',
          svgObj: new ElElemeSvg(),
          styleObj: {
            margin: '3px 10px',
          }
        })
      ]
    });
  }
}
