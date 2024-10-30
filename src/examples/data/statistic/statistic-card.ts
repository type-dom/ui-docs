import { Div, Span, TypeDiv } from '@type-dom/framework';
import type { IStyle } from '@type-dom/css-type';
import {
  ElArrowRightSvg,
  ElCaretBottomSvg,
  ElCaretTopSvg,
  ElWarningSvg
} from '@type-dom/svgs';
import { $bgColor, $colors, $textColor, TdCol, TdIcon, TdRow, TdStatistic } from '@type-dom/ui';

export class StatisticCardExample extends TypeDiv {
  className = 'StatisticCardExample';

  constructor() {
    super();
    const $card: Partial<IStyle> = {
      height: '100%',
      padding: '20px',
      borderRadius: '4px',
      // background-color: var(--el-bg-color-overlay),
      backgroundColor: $bgColor.overlay
    };
    const $cardFooter: Partial<IStyle> = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontSize: '12px',
      // color: var(--el-text-color-regular),
      color: $textColor.regular,
      marginTop: '16px'
    };
    const $cardFooterItem: Partial<IStyle> = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };
    const $cardFooterItemLastSpan: Partial<IStyle> = {
      display: 'inline-flex',
      alignItems: 'center',
      marginLeft: '4px'
    };
    this.addChild(
      new TdRow({
        slot: [
          new TdCol({
            span: 8,
            slot: [
              new Div({
                name: 'statistic-card-1',
                styleObj: $card,
                childNodes: [
                  new TdStatistic({
                    value: 98500,
                    valueStyle: {
                      fontSize: '28px'
                    },
                    slots: {
                      title: new Div({
                        text: 'Daily active users',
                        styleObj: {
                          display: 'inline-block',
                          alignItems: 'center'
                        },
                        childNodes: [
                          new TdIcon({
                            size: 12,
                            svgObj: new ElWarningSvg(),
                            styleObj: {
                              marginLeft: '4px'
                            }
                          })
                        ]
                      })
                    }
                  }),
                  new Div({
                    name: 'statistic-card-footer-1',
                    styleObj: $cardFooter,
                    childNodes: [
                      new Div({
                        name: 'statistic-card-footer-item',
                        styleObj: $cardFooterItem,
                        childNodes: [
                          new Span({
                            text: 'than yesterday'
                          }),
                          new Span({
                            text: '24%',
                            styleObj: {
                              ...$cardFooterItemLastSpan,
                              color: $colors.success.base // green
                            },
                            childNodes: [
                              new TdIcon({
                                svgObj: new ElCaretTopSvg()
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TdCol({
            span: 8,
            slot: [
              new Div({
                name: 'statistic-card-2',
                styleObj: $card,
                childNodes: [
                  new TdStatistic({
                    value: 693700,
                    valueStyle: {
                      fontSize: '28px'
                    },
                    slots: {
                      title: new Div({
                        text: 'Monthly Active Users',
                        styleObj: {
                          display: 'inline-block',
                          alignItems: 'center'
                        },
                        childNodes: [
                          new TdIcon({
                            size: 12,
                            svgObj: new ElWarningSvg(),
                            styleObj: {
                              marginLeft: '4px'
                            }
                          })
                        ]
                      })
                    }
                  }),
                  new Div({
                    name: 'statistic-card-footer-2',
                    styleObj: $cardFooter,
                    childNodes: [
                      new Div({
                        name: 'statistic-card-footer-item',
                        styleObj: $cardFooterItem,
                        childNodes: [
                          new Span({
                            text: 'month on month'
                          }),
                          new Span({
                            text: '12%',
                            styleObj: {
                              ...$cardFooterItemLastSpan,
                              color: $colors.error.base // red
                            },
                            childNodes: [
                              new TdIcon({
                                svgObj: new ElCaretBottomSvg()
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TdCol({
            span: 8,
            slot: [
              new Div({
                name: 'statistic-card-3',
                styleObj: $card,
                childNodes: [
                  new TdStatistic({
                    value: 72000,
                    title: 'New transactions today',
                    valueStyle: {
                      fontSize: '28px'
                    }
                  }),
                  new Div({
                    name: 'statistic-card-footer-2',
                    styleObj: $cardFooter,
                    childNodes: [
                      new Div({
                        name: 'statistic-card-footer-item',
                        styleObj: $cardFooterItem,
                        childNodes: [
                          new Span({
                            text: 'than yesterday'
                          }),
                          new Span({
                            text: '16%',
                            styleObj: {
                              ...$cardFooterItemLastSpan,
                              color: $colors.success.base // green
                            },
                            childNodes: [
                              new TdIcon({
                                svgObj: new ElCaretTopSvg()
                              })
                            ]
                          })
                        ]
                      }),
                      new Div({
                        name: 'statistic-card-footer-item',
                        styleObj: $cardFooterItem,
                        childNodes: [
                          new TdIcon({
                            svgObj: new ElArrowRightSvg()
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    );
  }
}
