import { Div, TypeDiv } from '@type-dom/framework';
import { TdInput } from '@type-dom/ui';
import { ElSearchSvg } from '@type-dom/svgs';

export class FormInputSizeExample extends TypeDiv {
  className: 'FormInputSizeExample';
  constructor() {
    super();
    this.className = 'FormInputSizeExample';
    this.addChildren(
      new Div({
        styleObj: {
          marginBottom: '1em'
        },
        childNodes: [
          new TdInput({
            width: 240,
            size: 'large',
            styleObj: {
              paddingRight: '10px',
            },
          }),
          new TdInput({
            width: 240,
            // size: 'default',
            styleObj: {
              paddingRight: '10px',
            },
          }),
          new TdInput({
            width: 240,
            size: 'small',
          }),
        ]
      }),
      new Div({
        styleObj: {
          marginBottom: '1em'
        },
        childNodes:[
          new TdInput({
            width: 240,
            placeholder: 'Type something',
            prefixIcon: new ElSearchSvg(),
            styleObj: {
              paddingRight: '10px',
            },
            size: 'large',
          }),
          new TdInput({
            width: 240,
            placeholder: 'Type something',
            styleObj: {
              paddingRight: '10px',
            },
            prefixIcon: new ElSearchSvg(),
          }),
          new TdInput({
            width: 240,
            placeholder: 'Type something',
            prefixIcon: new ElSearchSvg(),
            size: 'small',
          }),
        ]
      }),
      new Div({
        styleObj: {
          marginBottom: '1em'
        },
        childNodes: [
          new TdInput({
            width: 240,
            placeholder: 'Type something',
            styleObj: {
              paddingRight: '10px',
            },
            suffixIcon: new ElSearchSvg(),
            size: 'large',
          }),
          new TdInput({
            width: 240,
            placeholder: 'Type something',
            styleObj: {
              paddingRight: '10px',
            },
            suffixIcon: new ElSearchSvg(),
          }),
          new TdInput({
            width: 240,
            placeholder: 'Type something',
            suffixIcon: new ElSearchSvg(),
            size: 'small',
          }),
        ]
      })
    )
  }
}
