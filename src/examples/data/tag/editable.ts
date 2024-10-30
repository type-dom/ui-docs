import { nextTick, TypeDiv } from '@type-dom/framework';
import { TdButton, TdInput, TdTag } from '@type-dom/ui';

export class TagEditableExample extends TypeDiv {
  className = 'TagEditableExample';
  inputVisible: boolean;
  private inputValue?: string;
  private dynamicTags: string[];
  private inputEl: TdInput;
  private btnEl: TdButton;
  constructor() {
    super();
    const $item = {
      marginTop: '10px',
      marginRight: '30px'
    };
    this.attr.addName('td-tag');
    this.style.addObj({
      display: 'flex',
      gap: '0.5rem',
    });
    this.dynamicTags = ['Tag 1', 'Tag 2', 'Tag 3'];
    const tagList: TdTag[] = [];
    for (const tag of this.dynamicTags) {
      tagList.push(new TdTag({
        slot: tag,
        closable: true,
      }));
    }
    this.addChildren(...tagList);
    this.inputEl = new TdInput({
      size: 'small',
      styleObj: {
        width: 80,
        display: 'none',
      },
      emits: {
        blur: () => {
          console.log('editable tag inputEl blur . ');
          this.handleInputConfirm();
        },
        keydown: (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            this.handleInputConfirm();
          }
        }
      }
    });
    this.addChild(this.inputEl);
    this.btnEl = new TdButton({
      size: 'small',
      slot: '+ New Tag',
      events: {
        click: (event, btn: TdButton) => {
          this.showInput();
        }
      }
    });
    this.addChild(this.btnEl);
  }
  showInput() {
    console.log('showInput . ');
    this.inputVisible = true;
    this.inputEl.style.setObj({
      display: 'inline-flex',
    });
    this.btnEl.style.hide();
    nextTick(() => {
      this.inputEl.panel.inner.dom.focus();
    });
  }
  handleInputConfirm() {
    console.log('handleInputConfirm . this.inputEl.value is ', this.inputEl.value);
    if (this.inputEl.value) {
      this.dynamicTags.push(this.inputEl.value);
    //   todo 添加tag
      this.insertChild(new TdTag({
        slot: this.inputEl.value,
        closable: true,
      }), this.childNodes.length - 2);
      this.inputVisible = false;
      this.inputValue = '';
      this.inputEl.style.hide();
      this.inputEl.setModelValue('');
      this.btnEl.style.show('inline-flex');
      this.mount();
    }
  }
}
