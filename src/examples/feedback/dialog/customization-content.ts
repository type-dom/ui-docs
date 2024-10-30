import { Div, Span, Table, TableDataCell, TableRow, TypeDiv } from '@type-dom/framework';
import { TdButton, TdDialog, TdForm, TdFormItem, TdInput, TdOption, TdSelect } from '@type-dom/ui';

export class DialogCustomizationContentExample extends TypeDiv {
  className = 'DialogCustomizationContentExample';

  constructor() {
    super();
    this.addChildren(
      new TdButton({
        slot: 'Open a Table nested Dialog',
        plain: true,
        events: {
          click: (evt, element) => {
            this.down<TdDialog>('refId', 'tableDialogRef').show();
          }
        }
      }),
      new TdButton({
        slot: 'Open a Form nested Dialog',
        // styleObj: $item,
        events: {
          click: (evt, element) => {
            this.down<TdDialog>('refId', 'formDialogRef').show();
          }
        }
      }),
      new TdDialog({
        title: 'Shipping address',
        modelValue: false,
        refId: 'tableDialogRef',
        width: 800,
        slot: new Table({
          name: 'table',
          slot: [
            new TableRow({
              slot: [
                new TableDataCell({
                  slot: [
                    new Span({
                      text: 'Name'
                    })
                  ]
                }),
                new TableDataCell({
                  slot: [
                    new Span({
                      text: 'Address'
                    })
                  ]
                })
              ]
            }),
            new TableRow({
              slot: [
                new TableDataCell({
                  slot: [
                    new Span({
                      text: 'John Smith'
                    })
                  ]
                }),
                new TableDataCell({
                  slot: [
                    new Span({
                      text: 'Suzhou'
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),
      new TdDialog({
        title: 'Shipping address',
        modelValue: false,
        refId: 'formDialogRef',
        width: 500,
        slot: new TdForm({
          name: 'form',
          slot: [
            new TdFormItem({
              label: 'Promotion name',
              labelWidth: '140px',
              slot: [
                new TdInput({
                  autocomplete: 'off',
                }),
              ]
            }),
            new TdFormItem({
              label: 'Zones',
              labelWidth: '140px',
              slot: [
                new TdSelect({
                  slot: [
                    new TdOption({
                      label: 'Zone No.1',
                      value: 'shanghai'
                    }),
                    new TdOption({
                      label: 'Zone No.2',
                      value: 'beijing'
                    })
                  ]
                }),
              ]
            })
          ]
        }),
        slots: {
          footer: new Div({
            childNodes: [
              new TdButton({
                slot: 'Cancel',
                events: {
                  click: (evt, element) => {
                    element.up<TdDialog>('TdDialog').handleClose();
                  }
                }
              }),
              new TdButton({
                type: 'primary',
                slot: 'Confirm',
                styleObj: {
                  marginLeft: '12px'
                },
                events: {
                  click: (evt, element) => {
                    element.up<TdDialog>('TdDialog').handleClose();
                  }
                }
              })
            ]
          })
        }
      }),
    );
  }
}
