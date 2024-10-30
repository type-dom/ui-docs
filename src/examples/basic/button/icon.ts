import { Div, TextNode, TypeDiv } from '@type-dom/framework';
import { TdButton, TdIcon } from '@type-dom/ui';
import {
  ElDeleteSvg,
  ElEditSvg,
  ElSearchSvg,
  ElShareSvg,
  ElUploadSvg
} from '@type-dom/svgs';

export class ButtonIconExample extends TypeDiv {
  className: string = 'ButtonIconExample';

  constructor() {
    super();
    this.addChild(this.createIconButton());
  }

  createIconButton() {
    return new Div({
      childNodes: [
        new TdButton({
          name: 'edit-icon-btn',
          type: 'primary',
          svgObj: new ElEditSvg(),
          styleObj: {
            margin: '3px 10px'
          }
        }),
        new TdButton({
          name: 'share-icon-btn',
          svgObj: new ElShareSvg(),
          type: 'primary',
          styleObj: {
            margin: '3px 10px'
          }
        }),
        new TdButton({
          name: 'success-icon-btn',
          svgObj: new ElDeleteSvg(),
          type: 'primary',
          styleObj: {
            margin: '3px 10px'
          }
        }),
        new TdButton({
          name: 'info-icon-btn',
          svgObj: new ElSearchSvg(),
          type: 'primary',
          slot: 'Search',
          styleObj: {
            margin: '3px 10px'
          }
        }),
        new TdButton({
          type: 'primary',
          styleObj: {
            margin: '3px 10px'
          },
          attrObj: {
            name: 'upload-btn'
          },
          // svgObj: new ElUploadSvg(),
          // slot: 'Upload',
          // iconPosition: 'right',
          slot: [
            new TextNode('Upload'),
            new TdIcon({
              svgObj: new ElUploadSvg(),
              styleObj: {
                marginLeft: '5px'
              }
            })
          ]
        })
      ]
    });
  }
}
