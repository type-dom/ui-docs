import { Div, TypeDiv, TypeS, TypeSvg, TypeSvgSvg } from '@type-dom/framework';
import { TdIcon, TdSegmented } from '@type-dom/ui';
import { ElAppleSvg, ElCherrySvg, ElGrapeSvg, ElOrangeSvg, ElPearSvg, ElWatermelonSvg } from '@type-dom/svgs';

export class SegmentedCustomContentExample extends TypeDiv {
  className = 'SegmentedCustomContentExample';

  constructor() {
    super();

    const options: { label: string; value: string; icon: TypeSvgSvg; slot?: Div }[] = [
      {
        label: 'Apple',
        value: 'Apple',
        icon: new ElAppleSvg(),
      },
      {
        label: 'Cherry',
        value: 'Cherry',
        icon: new ElCherrySvg(),
      },
      {
        label: 'Grape',
        value: 'Grape',
        icon: new ElGrapeSvg(),
      },
      {
        label: 'Orange',
        value: 'Orange',
        icon: new ElOrangeSvg(),
      },
      {
        label: 'Pear',
        value: 'Pear',
        icon: new ElPearSvg(),
      },
      {
        label: 'Watermelon',
        value: 'Watermelon',
        icon: new ElWatermelonSvg(),
      },
    ];
    options.map((opt, index) => {
      opt.slot = new Div({
        styleObj: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        },
        childNodes: [
          new TdIcon({
            size: 20,
            svgObj: opt.icon,
          }),
          new Div({
            text: opt.label,
          })
        ]
      });
    });
    this.addChild(new Div({
      childNodes: [
        new TdSegmented({
          modelValue: 'Apple',
          options: options,
        }),
      ]
    }))
  }
}
