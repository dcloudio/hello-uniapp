## 3.4.4（2022-07-25）
- 新增 同步 uni-ui@1.4.20
	- uni-forms 【重要】组件逻辑重构，部分用法旧版本不兼容，请注意兼容问题
	- uni-section 新增组件
## 3.4.3（2022-07-14）
- 修复 HBuilderX 拉取 hello uni-app 项目直接运行提示无服务空间关联的bug
## 3.4.2（2022-07-06）
- 新增 同步 uni-ui@1.4.18
	- uni-forms 【重要】组件逻辑重构，部分用法旧版本不兼容，请注意兼容问题
	- uni-forms 【重要】组件使用 Provide/Inject 方式注入依赖，提供了自定义表单组件调用 uni-forms 校验表单的能力
	- uni-forms 新增 更多表单示例
	- uni-forms 新增 model 属性，等同于原 value/modelValue 属性，旧属性即将废弃
	- uni-forms 新增 validateTrigger 属性的 blur 值，仅 uni-easyinput 生效
	- uni-forms 新增 onFieldChange 方法，可以对子表单进行校验，可替代binddata方法
	- uni-forms 新增 子表单的 setRules 方法，配合自定义校验函数使用
	- uni-forms 新增 uni-forms-item 的 setRules 方法，配置动态表单使用可动态更新校验规则
	- uni-forms 修复 由 1.4.0 引发的 label 插槽不生效的bug
	- uni-forms 修复 子组件找不到 setValue 报错的bug
	- uni-forms 修复 uni-data-picker 在 uni-forms-item 中报错的bug
	- uni-forms 修复 uni-data-picker 在 uni-forms-item 中宽度不正确的bug
	- uni-forms 修复 表单校验顺序无序问题
	- uni-forms 优化 子表单组件uni-datetime-picker、uni-data-select、uni-data-picker的显示样式
	- uni-forms 优化 动态表单校验方式，废弃拼接name的方式
	- uni-breadcrumb 修复 微信小程序 separator 不显示问题
	- uni-data-checkbox 优化 在 uni-forms 中的依赖注入方式
	- uni-data-picker 修复 uni-data-picker 在 uni-forms-item 中宽度不正确的bug
	- uni-data-picker 优化 显示样式
	- uni-data-select 优化 显示样式
	- uni-datetime-picker 修复 日历顶部年月及底部确认未国际化 bug
	- uni-datetime-picker 优化 组件样式，调整了组件图标大小、高度、颜色等，与uni-ui风格保持一致
	- uni-easyinput 新增 在 uni-forms 1.4.0 中使用可以在 blur 时校验内容
	- uni-easyinput 新增 clear 事件，点击右侧叉号图标触发
	- uni-easyinput 新增 change 事件 ，仅在输入框失去焦点或用户按下回车时触发
	- uni-easyinput 优化 组件样式，组件获取焦点时高亮显示，图标颜色调整等
	- uni-easyinput 优化 clearable 显示策略
	- uni-file-picker 修复 在uni-forms下样式不生效的bug
	- uni-nav-bar 修复 组件示例中插槽用法无法显示内容的bug
	- uni-swipe-action 修复 vue3 下使用组件不能正常运行的Bug
	- uni-swipe-action 修复 h5端点击click触发两次的Bug
	- uni-table 修复 微信小程序存在无使用组件的问题
## 3.4.1（2022-06-30）
- 新增 支持 ios 安全区
## 3.3.8（2022-05-08）
- 新增 同步 uni-ui@1.4.15
	- uni-data-picker 修复 字节小程序 本地数据无法选择下一级的Bug
	- uni-data-select 新增 记住上次的选项（仅 collection 存在时有效）
	- uni-search-bar 修复  vue3 input 事件不生效的bug
	- uni-search-bar 修复 多余代码导致的bug
	- uni-tooltip 更新 text 属性变更为 content
	- uni-tooltip 更新 移除 width 属性
	- uni-tooltip 修复 组件根 text 嵌套组件 warning
## 3.3.7（2022-04-06）
- 新增 更新扩展组件 uni-nav-bar、uni-list 的展示页面
## 3.3.6（2022-03-31）
- 更新 uni-ui 组件及示例
## 3.3.5（2022-03-30）
- 修复 插槽兼容 vue3， slot -> v-slot
- 新增 更新 uni-ui
## 3.3.4（2022-02-25）
- 修复 编译到 App 平台的控制台报错
## 3.3.3（2022-02-23）
- 修复 模板城市选择 vue3 报错的bug
- 修复 删除 map.nvue 中多余的 enableOverlooking 变量
- 修复 swipe-dot.nvue 中条件编译媒体查询
## 3.3.2（2022-01-26）
- 修复 默认运行到 vue2
## 3.3.1（2022-01-26）
- 新增 同步 uni-ui@1.4.11
	- uni-collapse 修复 微信小程序resize后组件收起的bug
	- uni-countdown 修复 在微信小程序中样式不生效的bug
	- uni-countdown 新增 update 方法 ，在动态更新时间后，刷新组件
	- uni-load-more 新增 showText属性 ，是否显示文本
	- uni-load-more 修复 nvue 平台下不显示文本的bug
	- uni-load-more 修复 微信小程序平台样式选择器报警告的问题
	- uni-nav-bar 修复 在vue下，标题不垂直居中的bug
	- uni-nav-bar 修复 height 属性类型错误
	- uni-nav-bar 新增 height 属性,可修改组件高度
	- uni-nav-bar 新增 dark 属性可可开启暗黑模式
	- uni-nav-bar 优化 标题字数过多显示省略号
	- uni-nav-bar 优化 插槽，插入内容可完全覆盖
	- uni-popup 修复 isMaskClick 失效的bug
	- uni-popup 新增 cancelText \ confirmText 属性 ，可自定义文本
	- uni-popup 新增 maskBackgroundColor 属性 ，可以修改蒙版颜色
	- uni-popup 优化 maskClick属性 更新为 isMaskClick ，解决微信小程序警告的问题
## 3.3.0（2022-01-04）
- 修复 开发时在 vue3 下由 pc 端切换到手机端，不能返回上一级页面的 bug
- 优化 去掉 pc 端 topwindow 右上角用于演示的 url 导航
## 3.2.12（2021-12-20）
- 新增 适配京东小程序
## 3.2.11（2021-12-07）
- 修复 uni-ui 在 hello-uniapp 中丢失图标、ui 受到公共样式影响等问题
- 修复 微信登录取值报错的问题
## 3.2.10（2021-11-30）
- 修复 map 组件示例不显示的 bug
## 3.2.9（2021-11-19）
- 新增 uni-ui 以 uni_modules 方式引入，方便开发者从 hello-uniapp 中 copy 组件及示例
- 优化 uni-ui 示例页面，完善组件示例
## 3.2.8（2021-11-10）
- 新增 适配飞书平台（lark）
## 3.2.7（2021-10-26）
- 修复 uni-popup 示例的 button 文字在 iPhone 5 上换行的 bug
- 修复 uni-table 示例，页面顶部距离不对的 bug
- 修复 GlobalData示例，在vue3是无效的 bug
- 优化 删除无用的 project.swan.json 文件
## 3.2.6（2021-10-08）
- 由于体验问题，暂时撤销 uni-ui 以 uni_modules 方式引入的修改

## 3.2.4（2021-09-07）
- 修复 vue3 在 H5 编译报错的 bug
- 新增 同步 uni-ui
	- 新增 uni-ui 组件支持国际化 i18n
	- uni-data-checkbox 修复 在uni-forms中 modelValue 中不存在当前字段，当前字段必填写也不参与校验的问题
	- uni-datetime-picker 优化 取消选中时（范围选）直接开始下一次选择, 避免多点一次
	- uni-datetime-picker 优化 移动端支持清除按钮，同时支持通过 ref 调用组件的 clear 方法
	- uni-datetime-picker 优化 调整字号大小，美化日历界面
	- uni-datetime-picker 修复 因国际化导致的 placeholder 失效的 bug
	- uni-file-picker 修复 return-type="object" 时且存在v-model时，无法删除文件的Bug
	- uni-file-picker 新增 参数中返回 fileID 字段
	- uni-file-picker 修复 腾讯云传入fileID 不能回显的bug
	- uni-file-picker 修复 选择图片后，不能放大的问题
	- uni-link 修复 在 nvue 下不显示的 bug
	- uni-list 修复 在vue3中to属性在发行应用的时候报错的bug
	- uni-search-bar 修复 value 属性与 modelValue 属性不兼容的Bug
	- uni-swipe-action 优化 close-all 方法
	- uni-collapse 优化 show-arrow 属性默认为true
	- uni-collapse 新增 show-arrow 属性，控制是否显示右侧箭头
	- uni-data-checkbox 修复 单选 list 模式下 ，icon 为 left 时，选中图标不显示的问题
	- uni-easyinput 修复 在 uni-forms 的动态表单中默认值校验不通过的 bug
	- uni-file-picker 修复 由于 0.2.11 版本引起的不能回显图片的Bug
	- uni-file-picker 新增 clearFiles(index) 方法，可以手动删除指定文件
	- uni-file-picker 修复 v-model 值设为 null 报错的Bug
	- uni-swipe-action 新增 close-all 方法，关闭所有已打开的组件
	- uni-swipe-action 新增 resize() 方法，在非微信小程序、h5、app-vue端出现不能滑动的问题的时候，重置组件
	- uni-swipe-action 修复 app 端偶尔出现类似 Page[x][-x,xx;-x,xx,x,x-x] 的问题
	- uni-swipe-action 优化 微信小程序、h5、app-vue 滑动逻辑，避免出现动态新增组件后不能滑动的问题


## 3.2.3（2021-08-27）
- 优化 tabbar 页面移除 vuex 相关代码
- 新增 适配 vue3 (app)
## 3.2.2（2021-08-10）
- 新增 适配快手小程序
- 新增 同步 uni-ui
	- uni-datetime-picker 新增 return-type 属性支持返回 date 日期对象
	- uni-file-picker 修复 fileExtname属性不指定值报错的Bug
	- uni-file-picker 修复 在某种场景下图片不回显的Bug
	- uni-link 支持自定义插槽
	- uni-calendar 修复 弹出层被 tabbar 遮盖 bug
	- uni-dateformat 调整 默认时间不再是当前时间，而是显示'-'字符
	- uni-datetime-picker 新增 适配 vue3
	- uni-datetime-picker 新增 支持作为 uni-forms 子组件相关功能
	- uni-datetime-picker 修复 在 uni-forms 中使用时，选择时间报 NAN 错误的 bug
	- uni-datetime-picker 修复 type 属性动态赋值无效的 bug
	- uni-datetime-picker 修复 ‘确认’按钮被 tabbar 遮盖 bug
	- uni-datetime-picker 修复 组件未赋值时范围选左、右日历相同的 bug
	- uni-datetime-picker 修复 范围选未正确显示当前值的 bug
	- uni-datetime-picker 修复 h5 平台（移动端）报错 'cale' of undefined 的 bug
	- uni-file-picker 修复 auto-upload 属性失效的Bug
## 3.2.1（2021-07-31）
- 新增 同步 uni-ui@1.3.8
## 3.2.0（2021-07-30）
- 新增 同时兼容 vue2 & vue3
## 3.1.20（2021-07-30）
- 新增 同时兼容 vue2 & vue3
## 3.1.17（2021-05-26）
- 修复 3.1.16 依赖 sass 的问题
- 条件编译 nuve 不支持 css 属性
## 3.1.16（2021-05-26）
- 修复 uni-data-checkbox 不关联服务空间的情况下组件报错的 Bug
## 3.1.12（2021-05-07）
- hello-uniapp 发布插件市场
