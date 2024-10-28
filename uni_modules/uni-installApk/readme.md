# uni-installApk

## 使用说明  

Android平台安装Apk

**注意: 3.95以下需要自定义基座**

### uni.installApk(options : InstallApkOptions):void

安装apk

参数说明

```
type InstallApkOptions = {
	/**
	 * apk文件地址
	 */
	filePath : string,
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: (res : any) => void,
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: (err : any) => void,
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: (res : any) => void,
}
```