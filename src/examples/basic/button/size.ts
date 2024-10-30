import { Div, TypeDiv } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { ElSearchSvg } from '@type-dom/svgs';

export class ButtonSizeExample extends TypeDiv {
  className = 'ButtonSizeExample';

  constructor() {
    super();
    this.addChildren(...this.createSizeButtons());
  }

  createSizeButtons() {
    return [
      new Div({
        childNodes: [
          new TdButton({
            name: 'large-btn',
            slot: 'Large',
            size: 'large',
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'middle-btn',
            slot: 'Default',
            // size: 'middle',
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'small-btn',
            slot: 'Small',
            size: 'small',
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            slot: 'Large',
            size: 'large',
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'middle-btn',
            slot: 'Default',
            // size: 'middle',
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'small-btn',
            slot: 'Small',
            size: 'small',
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          })
        ]
      }),
      new Div({
        childNodes: [
          new TdButton({
            name: 'large-btn',
            slot: 'Large',
            size: 'large',
            round: true,
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'middle-btn',
            slot: 'Default',
            // size: 'middle',
            round: true,
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'small-btn',
            slot: 'Small',
            size: 'small',
            round: true,
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            slot: 'Large',
            size: 'large',
            round: true,
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'middle-btn',
            slot: 'Default',
            // size: 'middle',
            round: true,
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'small-btn',
            slot: 'Small',
            size: 'small',
            round: true,
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          })
        ]
      }),
      new Div({
        childNodes: [
          new TdButton({
            name: 'large-btn',
            size: 'large',
            circle: true,
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'middle-btn',
            // size: 'middle',
            circle: true,
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          }),
          new TdButton({
            name: 'small-btn',
            size: 'small',
            circle: true,
            svgObj: new ElSearchSvg(),
            styleObj: {
              margin: '3px 10px'
            }
          })
        ]
      })
    ];
  }
}
