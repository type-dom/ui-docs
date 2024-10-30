import { createProxy, IJsonData, originalProxy, ref, TypeDiv, XProxy } from '@type-dom/framework';
import { TdButton, TdForm, TdFormItem, TdInput } from '@type-dom/ui';

export class Login extends TypeDiv {
  className: 'Login';
  formRef = ref(null);
  usernameRef = ref(null);
  formData: XProxy<IJsonData>;

  constructor() {
    super();
    this.className = 'Login';
    this.style.addObj({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    });
    this.formData = createProxy({
      username: 'admin',
      password: '123456',
      remember: true,
      groupInfo: {
        groupId: 1,
        groupName: 'Dev'
      }
    });
    this.addChild(
      new TdForm({
        name: 'login-form',
        ref: this.formRef,
        model: this.formData,
        styleObj: {
          width: 400
        },
        slot: [
          new TdFormItem({
            label: 'username',
            slot: new TdInput({
              ref: this.usernameRef,
              type: 'text',
              name: 'username',
              placeholder: '请输入用户名',
              // modelValue: 'admin',
              modelValue: this.formData.username
            })
          }),
          new TdFormItem({
            label: 'password',
            slot: new TdInput({
              type: 'password',
              name: 'password',
              placeholder: '请输入密码',
              // modelValue: '123456',
              modelValue: this.formData.password,
              showPassword: true
            })
          }),
          new TdFormItem({
            label: 'group name',
            slot: new TdInput({
              type: 'text',
              name: 'group-name',
              placeholder: '请输入组织名称',
              // modelValue: 'admin',
              modelValue: this.formData.groupInfo.groupName
            })
          }),
          new TdFormItem({
            contentAlign: 'center',
            slot: [
              new TdButton({
                slot: '登录',
                type: 'primary',
                styleObj: {
                  margin: '0 20px'
                },
                events: {
                  click: () => this.handleLogin()
                }
              }),
              new TdButton({
                slot: '重置',
                styleObj: {
                  margin: '0 20px'
                },
                events: {
                  click: () => this.handleReset()
                }
              })
            ]
          })
        ]
      })
    );
    console.log('Login is ', this);
  }

  created() {
    console.log('Login created . ');
    // todo error: 会重新创建 this.formData.username 对应的 XProxy; 需要改写 XProxy的赋值方法；
    // this.formData.username = 'John';
    this.formData.username.setValue('John');
    this.formData.groupInfo.groupName.setValue('MyGroup');
  }

  mounted() {
    console.log('Login mounted . ');
    console.log('this.formData is ', this.formData);
  }

  async handleLogin() {
    console.log('handleLogin');
    console.log('this.formData is ', this.formData);
    const originalData = originalProxy(this.formData);
    console.log('originalData is ', originalData);
    this.formData.username.setValue('superadmin1');
  }

//  登录
  handleReset() {
    console.log('handleReset');
    console.log('reset');
    console.log('this.formRef is ', this.formRef);
    //   formRef.value.resetFields();
  }
}
