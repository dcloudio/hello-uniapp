

### DateFormat 日期格式化
> **组件名：uni-dateformat**
> 代码块： `uDateformat`


日期格式化组件。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<!-- 一般用法 -->
<uni-dateformat date="2020/10/20 20:20:20"></uni-dateformat>

<!-- 不显示刚刚/马上/xx分钟前 -->
<uni-dateformat date="2020/10/20 20:20:20" :threshold="[0,0]"></uni-dateformat>
```

## API

### Dateformat Props

|属性名		|类型							|默认值					|说明												|
|:-:		|:-:							|:-:					|:-:												|
|date		|Object&#124;String&#124;Number	|Date.now()				|要格式化的日期对象/日期字符串/时间戳				|
|threshold	|Array							|[0, 0]					|转化类型阈值										|
|format		|String							|'yyyy/MM/dd hh:mm:ss'	|格式字符串											|
|locale		|String							|zh						|格式化使用的语言，目前支持zh（中文）、en（英文）	|


#### Threshold Options

格式化组件会对时间进行用户友好转化，threshold就是用来控制转化的时间阈值的。

以`[60000, 3600000]`为例，将传入时间与当前时间差的绝对值记为delta（单位毫秒）

- `delta < 60000`时，时间会被转化为“刚刚|马上”
- `delta >= 60000 && delta < 3600000`时，时间会被转化为“xx分钟前|xx分钟后”，如果超过1小时会显示成“xx小时前|xx小时后”，以此类推
- `delta >= 3600000`时，会按照format参数传入的格式进行格式化

如果不想转化为“马上|刚刚”可以传入`:threshold = "[0,3600000]"`。默认值`[0,0]`既不会转换为“马上|刚刚”也不会转化为“xx分钟前|xx分钟后”

#### Format Options

format接收字符以及含义如下：

|字符	|说明							|
|:-:	|:-:							|
|yyyy	|四位年份						|
|yy		|两位年份						|
|MM		|两位月份（不足两位在前面补0）	|
|M		|月份，不自动补0				|
|dd		|两位天（不足两位在前面补0）	|
|d		|天，不自动补0					|
|hh		|两位小时（不足两位在前面补0）	|
|h		|小时，不自动补0				|
|mm		|两位分钟（不足两位在前面补0）	|
|m		|分钟，不自动补0				|
|ss		|两位秒（不足两位在前面补0）	|
|s		|秒，不自动补0					|
|SSS	|三位毫秒（不足三位在前面补0）	|
|S		|毫秒，不自动补0				|



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/dateformat/dateformat](https://hellouniapp.dcloud.net.cn/pages/extUI/dateformat/dateformat)