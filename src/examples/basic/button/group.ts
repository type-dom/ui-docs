import { TypeDiv } from '@type-dom/framework';
import { TdButton, TdButtonGroup } from '@type-dom/ui';
import { ElArrowLeftSvg, ElArrowRightSvg, ElDeleteSvg, ElEditSvg, ElShareSvg } from '@type-dom/svgs';

export class ButtonGroupExample extends TypeDiv {
  className = 'ButtonGroupExample';
  constructor() {
    super();
    this.addChildren(...this.createButtonGroup());
  }
  createButtonGroup() {
    return [
      new TdButtonGroup({
        childNodes: [
          new TdButton({
            type: 'primary',
            title: 'Previous Page',
            svgObj: new ElArrowLeftSvg(),
          }),
          new TdButton({
            type: 'primary',
            title: 'Next Page',
            svgObj: new ElArrowRightSvg(),
            iconPosition: 'right'
          })
        ]
      }),
      new TdButtonGroup({
        styleObj: {
          marginLeft: '1em'
        },
        childNodes: [
          new TdButton({
            type: 'primary',
            svgObj: new ElEditSvg(),
          }),
          new TdButton({
            type: 'primary',
            svgObj: new ElShareSvg(),
          }),
          new TdButton({
            type: 'primary',
            svgObj: new ElDeleteSvg(),
          })
        ]
      })
    ]
  }
}
