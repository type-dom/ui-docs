export const Config = {
  cacheString: '_dc',
  //查询条件
  QueryMethod: {
    /**
     * 等于
     * @readonly
     */
    Equal: ' = ',
    /**
     * 不等于
     * @readonly
     */
    NotEqual: ' != ',
    /**
     * 大于
     * @readonly
     */
    GreaterThan: ' > ',
    /**
     * 大于等于
     * @readonly
     */
    GreaterThanOrEqual: ' >= ',
    /**
     * 小于
     * @readonly
     */
    LessThan: ' < ',
    /**
     * 小于等于
     * @readonly
     */
    LessThanOrEqual: ' <= ',
    /**
     * Like
     * @readonly
     */
    Like: ' Like ',
    /**
     * Is Null
     * @readonly
     */
    IsNull: ' Is Null ',
    /**
     * Is Not Null
     * @readonly
     */
    IsNotNull: ' Is Not Null ',
    /**
     * In
     * @readonly
     */
    In: ' In '
  },

  //空值
  Guid: {
    /**
     * 提供空Guid字符串
     * @readonly
     */
    Empty: '00000000-0000-0000-0000-000000000000'
  },

  //代理返回数据类型
  DataType: {
    /**
     * GridStore
     * @readonly
     */
    GridStore: 'GridStore',
    /**
     * TreeStore
     * @readonly
     */
    TreeStore: 'TreeStore',
    /**
     * ComboxStore
     * @readonly
     */
    ComboxStore: 'ComboxStore'
  },
  // 消息窗口配置参数
  messageParams: {
    messageDuration: 5000,
    animateDuration: 800
  },
  // 统一接口请求地址
  Url: '/ITAS',

  cmiUrl: '/ITAS/serviceWindow',
  sysId: 'APP_ITAS_CONSOLE',
  sysCode: 'PWdEUkdGa04wVVRSNFFrTTBjRE5DSmpOeEkwUUZWRVJCUmtOM1FUTUdOak4=',
  appSsnUUID: 'APP_SSN_UUID',
  appUsnUUID: 'APP_USN_UUID',
  lang: 'en',
  pageSize: 15,

  currencyParamsConfig: {},

  authenticationRequired: false, //是否使用证书登录 默认关闭
  checkAuthentication: false, //默认没有安装证书控件 检测后动态修改
  openSSO: false, // 是否开启单点登录
  // 操作权限
  permissions: [],
  // 系统级默认根组织Guid配置
  defaultRootOrganizationGuid: '00000000-0000-0000-0000-000000000000',
  //联系方式格式校验
  ContactvalidateFormat: {
    CellPhoneMask: '+(999)-999999999999',
    CellPhoneRegex: /^\+\(\d{3}\)-\d{12}$/,
    TelePhoneMask: '+(999)-999-9999',
    TelePhoneRegex: /^\+\(\d{3}\)-\d{3}-\d{4}$/,
    FaxMask: '+(999)-999-9999',
    FaxRegex: /^\+\(\d{3}\)-\d{3}-\d{4}$/
  },
  //日期格式
  DisplayDataFormat: 'm/d/Y',
  FormatData: 'date("m/d/Y")',
  SubmitDataFormat: 'Y-m-d',
  // serverDateTime: "Y-m-d H:i",
  serverDateTime: 'Y-m-d',
  serverTimerId: null,
  //允许上传文件类型
  AllowUploadDocumentType: [
    'image/jpeg',
    'application/pdf',
    'application/msword',
    'image/bmp',
    'image/jpg',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ],
  AllowUploadAavatarType: [
    'image/jpeg',
    'image/jpg',
    'image/apng',
    'image/avif',
    'image/gif',
    'image/png',
    'image/webp'
  ],
  MaxDocumentSize: 5,
  //货币组件配置
  ThousandSeparator: '.',
  DecimalSeparator: ',',
  DecimalPrecision: '2',
  currencySymbol: '$',
  changePwdWin: null,
  appSsnSSE: null
};
