import { Div, P, Span, TextNode, TypeDiv } from '@type-dom/framework';
import { TdCollapse, TdCollapseItem } from '@type-dom/ui';

export class CollapseBasicExample extends TypeDiv {
  className = 'CollapseBasicExample';

  constructor() {
    super();
    const activeNames = ['1'];
    this.attr.addName('demo-collapse-basic');
    this.addChild(
      new TdCollapse({
        modelValue: activeNames,
        events: {
          click: (event) => {
            this.handleChange();
          }
        },
        childNodes: [
          new TdCollapseItem({
            title: 'Consistency',
            nameId: '1',
            slot: [
              new Div({
                text: `Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;`
              }),
              new Div({
                text: `Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.`
              })
            ]
          }),
          new TdCollapseItem({
            title: 'Feedback',
            nameId: '2',
            slot: [
              new Div({
                text: `Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;`
              }),
              new Div({
                text: `Visual feedback: reflect current state by updating or rearranging
          elements of the page.`
              })
            ]
          }),
          new TdCollapseItem({
            title: 'Efficiency',
            nameId: '3',
            slot: [
              new Div({
                text: 'Simplify the process: keep operating process simple and intuitive;'
              }),
              new Div({
                text: `Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;`
              }),
              new Div({
                text: `Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.`
              })
            ]
          }),
          new TdCollapseItem({
            title: 'Controllability',
            nameId: '4',
            slot: [
              new Div({
                text: `Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;`
              }),
              new Div({
                text: `Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.`
              })
            ]
          })
        ]
      })
    );
  }
  handleChange() {
    console.log('click');
  }
}
