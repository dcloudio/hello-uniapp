## 3.3.29（2022-10-20）
- 使用[uni-open-bridge-common](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html#common)存储用户三方凭证，以便其他服务使用。
## 3.3.28（2022-07-27）
- 修复 app端微信登录返回的accessToken过期时间（expired）不正确的Bug
## 3.3.27（2022-07-27）
- 短信发送失败、微信登录失败等场景下输出原始错误方便排查错误
## 3.3.26（2022-07-08）
- 兼容配置放在uni-id下的逻辑，但是仍推荐使用uni-config-center
## 3.3.25（2022-06-30）
- 修复config文件不合法时未抛出具体错误的Bug
## 3.3.24（2022-06-28）
- 修复3.3.12引出的使用多应用配置时报错的Bug
## 3.3.23（2022-06-13）
- 修复上版本引出的部分依赖未找到的Bug
## 3.3.22（2022-06-13）
- 新增 preferedWebPlatform 配置用于解决HBuilderX 3.4.9版本起web端platform不一致的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-web-platform)
## 3.3.21（2022-05-24）
- 修复createInstance传入clientInfo无效的Bug
## 3.3.20（2022-05-19）
- 调整以下错误码（账号已注册[uni-id-account-exists]、账号不存在[uni-id-account-not-exists]、账号已绑定[uni-id-account-bound]）
## 3.3.19（2022-05-19）
- 修复 addUser 部分情况下会创建出重复账号的Bug
## 3.3.18（2022-05-12）
- 调整绑定、解绑邮箱手机号接口，只要传递code参数就进行验证码校验即使传递的值为undefined
## 3.3.17（2022-05-09）
- register_env内增加os_name字段用于区分注册时的客户端系统类型
## 3.3.16（2022-05-09）
- 修复 addUser接口添加的用户无法使用密码登录的Bug [详情](https://ask.dcloud.net.cn/question/144670)
## 3.3.15（2022-05-08）
- 修复config文件语法错误时报`this.t is not a function`的Bug 感谢@寒暄
## 3.3.14（2022-05-08）
- 新增 getWeixinUserInfo接口 用于获取app平台微信登录用户的用户信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
- 新增 addUser接口 用于手动添加用户 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
- 新增 resetPwdBySms接口 用于使用短信验证码重置密码 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
- 新增 refreshToken接口 用于主动刷新用户token [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#refresh-token)
- 调整 用户注册时记录用户注册环境到 register_env 字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
- 调整 用户注册时将注册 ip 移至 register_env 内

## 3.3.13（2022-03-04）
- createInstance方法支持传递clientInfo [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#create-instance)
- 修复`this.t is not a function`报错
## 3.3.12（2022-01-15）
- 新增 preferedAppPlatform 配置用于解决uni-app vue2版本vue3版本获取platform不一致的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-app-platform)
- 修复 checkToken 未返回自定义token内容的Bug
## 3.3.11（2022-01-11）
- 修复用户名密码登录时多个应用出现重复用户名登录报错的Bug
## 3.3.10（2022-01-07）
- 新增 自定义国际化语言支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
- 修复 一键登录时未校验重复手机号是否已验证的Bug
- 修复 Apple登录时用户邮箱为空时报错的Bug
- 修复 登录接口未传username时错误提示不正确的Bug
## 3.3.9（2021-11-09）
- 去除重复的context.xxx未找到的提示语
## 3.3.8（2021-10-28）
- 新增 用户账户封禁接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=ban-account)
- 新增 用户账户注销接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=close-account)
- 修复 未传appid时用户重复注册的Bug
## 3.3.7（2021-10-08）
- 移除部分接口的废弃提示
## 3.3.6（2021-09-08）
- 修复 邀请码可能重复的Bug
## 3.3.5（2021-08-10）
- 修复版本号错误
## 3.3.4（2021-08-10）
- 微信、QQ、支付宝登录新增type参数用于指定当前是登录还是注册
## 3.3.3（2021-08-04）
- 修复使用数组形式的配置文件报错的Bug
## 3.3.2（2021-08-03）
- 修复上3.3.0版本引出的createInstance接口传入配置不生效的Bug 感谢[hmh](https://gitee.com/hmh)
## 3.3.1（2021-07-30）
- 修复 将设置用户允许登录的应用列表时传入空数组报错的Bug
## 3.3.0（2021-07-30）
- 新增 不同端应用配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
- 新增 不同端用户隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
  + 此版本升级需要开发者处理一下用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
- 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
- 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
## 3.2.1（2021-07-09）
- 撤销3.2.0版本所做的调整
## 3.2.0（2021-07-09）
- 【重要】支持不同端（管理端、用户端等）用户隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
- 支持不同端（管理端、用户端等）配置文件隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
## 3.1.3（2021-07-08）
- 移除插件内误传的node_modules
## 3.1.2（2021-07-08）
- 修复 微信小程序绑定微信账号时报错的Bug
## 3.1.1（2021-07-01）
- 使用新的错误码规范，兼容旧版 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
- 修复微信登录、绑定时未返回用户accessToken的Bug
## 3.1.0（2021-04-19）
- 增加对用户名、邮箱、密码字段的两端去空格
- 默认忽略用户名、邮箱的大小写 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=case-sensitive)
- 修复 customToken导出async方法报错的Bug
## 3.0.12（2021-04-13）
- 调整bindTokenToDevice默认值为false
## 3.0.11（2021-04-12）
- 修复3.0.7版本引出的多个用户访问时可能出现30201报错的Bug
## 3.0.10（2021-04-08）
- 优化错误提示
## 3.0.9（2021-04-08）
- bindMobile接口支持通过一键登录的方式绑定
- 优化错误提示
## 3.0.8（2021-03-19）
- 修复 3.0.7版本某些情况下生成token报错的Bug
## 3.0.7（2021-03-19）
- 新增 支持uni-config-center，更新uni-id无须再担心配置被覆盖 [详情](https://uniapp.dcloud.io/uniCloud/uni-id?id=uni-config-center)
- 新增 自定义token内容，可以缓存角色权限之外的更多信息到客户端 [详情](https://uniapp.dcloud.io/uniCloud/uni-id?id=custom-token)
- 新增 支持传入context获取uni-id实例，防止单实例多并发时全局context混乱 [详情](https://uniapp.dcloud.io/uniCloud/uni-id?id=create-instance)
## 3.0.6（2021-03-05）
- 新增[uniID.wxBizDataCrypt](https://uniapp.dcloud.io/uniCloud/uni-id?id=%e5%be%ae%e4%bf%a1%e6%95%b0%e6%8d%ae%e8%a7%a3%e5%af%86)方法
- 优化loginByApple方法，提高接口响应速度
## 3.0.5（2021-02-03）
- 调整为uni_modules目录规范
