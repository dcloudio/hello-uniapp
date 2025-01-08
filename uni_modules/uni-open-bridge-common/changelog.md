## 1.2.1（2024-09-13）
- 修复 微信小程序平台 当微信的服务器返回`encrypt_key`的过期时间`expire_in`为`0`时特殊处理为`1`天，否者可能无法验证客户端请求携带的版本
## 1.2.0（2023-04-27）
- 重要 微信小程序平台 使用微信新增 API getStableAccessToken 获取 access_token, access_token 有效期内重复调用该接口不会更新 access_token, [详情](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getStableAccessToken.html)
## 1.1.5（2023-03-27）
- 修复 微信小程序平台 某些情况下 encrypt_key 插入错误的问题
## 1.1.4（2023-03-13）
- 修复 平台 weixin-web
## 1.1.3（2023-03-13）
- 新增 支持旧版本 uni-id 配置
- 新增 支持平台 weixin-app|qq-mp|qq-app
## 1.1.2（2023-02-28）
- 新增 config 配置错误提示语
## 1.1.1（2023-02-28）
- 新增 支持 provider 参数，和 platform 保持一致
## 1.1.0（2023-02-27）
- 重要更新 调整数据库key格式，兼容旧版本API，如果开发者通过手动拼接key查询数据库需要修改现有逻辑
  + 原格式: uni-id:[dcloudAppid]:[platform]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]
  + 新格式: uni-id:[provider]:[appid]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]
## 1.0.4（2022-09-21）
- 新增 支持使用阿里云固定IP获取微信公众号H5凭据 access_token、ticket，开发者需要在微信公众平台配置阿里云固定IP，[固定IP详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#aliyun-eip)
## 1.0.3（2022-09-06）
- 修复 过期时间问题，容错 AccessToken 默认 fallback 逻辑，当微信服务器没有返回过期时间时设置为2小时后过期
## 1.0.2（2022-09-02）
- 新增 依赖数据表schema opendb-open-data
## 1.0.0（2022-08-22）
- 首次发布
