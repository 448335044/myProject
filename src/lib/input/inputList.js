export const loginList = [
  {
    key: 'user',
    type: 'text',
    inputTitle:"用户名", 
    isShowTitle: false,
    inputPlaceholder:"请输入用户名 (4-14位英文或数字)",
    module:'admin',
    isShowMsg: false,
    reg:"^[a-zA-Z0-9-*/+.~!@#$%^&*()]{4,14}$",
    regMsg: "请输入合法的用户名"
  },
  {
    key: 'password',
    type: 'password',
    inputTitle:"密码", 
    isShowTitle: false,
    inputPlaceholder:"请输入密码 (6-14位英文数字组合)",
    module:'',
    isShowMsg: false,
    reg:"^(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,14}$",
    regMsg: "请输入合法的密码"
  },
  {
    key: 'surePassword',
    type: 'password',
    inputTitle:"密码确认", 
    isShowTitle: false,
    inputPlaceholder:"请再次输入密码 (6-14位英文数字组合)",
    module:'',
    isShowMsg: false,
    reg:"^(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,14}$",
    regMsg: "两次密码不一致"
  }
]

// export const phoneList = [{
//   key: 'phone',
//   type: 'number',
//   inputTitle:"手机号",
//   isShowTitle: false, 
//   inputPlaceholder:"请输入手机号",
//   module:'',
//   isShowMsg: false,
//   reg:"^((\\+86)?|\(\\+86\)|86)1[3456789]\\d{9}$",
//   regMsg: "请输入正确的手机号"
// }]
