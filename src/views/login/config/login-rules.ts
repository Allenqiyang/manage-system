export const accountRules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名须为5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
}

export const phoneRules = {
  phoneNum: [
    {
      required: true,
      message: '号码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '电话号码须为11位数字',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码须为6位数字',
      trigger: 'blur'
    }
  ]
}