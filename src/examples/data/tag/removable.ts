import { Div, TypeDiv } from '@type-dom/framework';
import { IType, TdTag } from '@type-dom/ui';

export class TagRemovableExample extends TypeDiv {
  className = 'TagRemovableExample';

  constructor() {
    super();
    const $item = {
      marginTop: '10px',
      marginRight: '30px'
    };

    const tags: { name: string, type: IType}[] = [
      { name: 'Tag 1', type: 'primary' },
      { name: 'Tag 2', type: 'success' },
      { name: 'Tag 3', type: 'info' },
      { name: 'Tag 4', type: 'warning' },
      { name: 'Tag 5', type: 'danger' },
    ];
    const tagList: TdTag[] = [];
    for (const tag of tags) {
      tagList.push(new TdTag({
        type: tag.type,
        slot: tag.name,
        closable: true,
      }));
    }
    this.addChild(new Div({
      name: 'removable',
      styleObj: {
        display: 'flex',
        gap: '0.5rem',
      },
      childNodes: tagList,
    }));
  }
}
