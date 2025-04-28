## 1.3.13（2025-04-15）
- 修复 app 端 缺少leftOptions 或 rightOptions 时无法滑动的问题
## 1.3.12（2025-04-14）
- 修复 由上一个兼容版本引发的 安卓运行报错且无法回弹的问题
## 1.3.11（2025-04-08）
- 优化 兼容鸿蒙平台
- 修复 WEB 平台控制台报错
## 1.3.10（2024-01-17）
- 修复 点击按钮时，按钮会被点击穿透导致自动收缩的 bug(兼容阿里/百度/抖音小程序)
## 1.3.9（2024-01-17）
- 修复 点击按钮时，按钮会被点击穿透导致自动收缩的 bug
## 1.3.8（2023-04-13）
- 修复`uni-swipe-action`和`uni-swipe-action-item`不同时使用导致 closeOther 方法报错的 bug
## 1.3.7（2022-06-06）
- 修复 vue3 下使用组件不能正常运行的Bug
## 1.3.6（2022-05-31）
- 修复 h5端点击click触发两次的Bug
## 1.3.5（2022-05-23）
- 修复 isPC 找不到的Bug
## 1.3.4（2022-05-19）
-  修复 在 nvue 下 disabled 失效的bug
## 1.3.3（2022-03-31）
- 修复 按钮字体大小不能设置的bug
## 1.3.2（2022-03-16）
- 修复 h5和app端下报el错误的bug
## 1.3.1（2022-03-07）
- 修复 HBuilderX 1.4.X 版本中，h5和app端下报错的bug
## 1.3.0（2021-11-19）
- 优化 组件UI，并提供设计资源，详见:[https://uniapp.dcloud.io/component/uniui/resource](https://uniapp.dcloud.io/component/uniui/resource)
- 文档迁移，详见:[https://uniapp.dcloud.io/component/uniui/uni-swipe-action](https://uniapp.dcloud.io/component/uniui/uni-swipe-action)
## 1.2.4（2021-08-20）
- 优化 close-all 方法
## 1.2.3（2021-08-20）
- 新增 close-all 方法，关闭所有已打开的组件
## 1.2.2（2021-08-17）
- 新增 resize() 方法，在非微信小程序、h5、app-vue端出现不能滑动的问题的时候，重置组件
- 修复 app 端偶尔出现类似 Page[x][-x,xx;-x,xx,x,x-x] 的问题 
- 优化 微信小程序、h5、app-vue 滑动逻辑，避免出现动态新增组件后不能滑动的问题
## 1.2.1（2021-07-30）
- 组件兼容 vue3，如何创建vue3项目，详见 [uni-app 项目支持 vue3 介绍](https://ask.dcloud.net.cn/article/37834)
- 修复 跨页面修改组件数据 ，导致不能滑动的问题
## 1.1.10（2021-06-17）
- 修复 按钮点击执行两次的bug
## 1.1.9（2021-05-12）
- 新增 项目示例地址
## 1.1.8（2021-03-26）
- 修复 微信小程序 nv_navigator is not defined 报错的bug
## 1.1.7（2021-02-05）
- 调整为uni_modules目录规范
- 新增 左侧滑动
- 新增 插槽使用方式
- 新增 threshold 属性，可以控制滑动缺省值
- 优化 长列表滚动性能
- 修复 滚动页面时触发组件滑动的Bug
