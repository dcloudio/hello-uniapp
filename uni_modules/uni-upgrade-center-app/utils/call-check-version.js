const {
	checkVersion
} = uniCloud.importObject('checkVersion')

export default function() {
	// #ifdef APP-PLUS
	return new Promise((resolve, reject) => {
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			checkVersion({
				appid: plus.runtime.appid,
				appVersion: plus.runtime.version,
				wgtVersion: widgetInfo.version
			}).then(result => {
				resolve({
					result
				})
			}).catch(err => {
				reject(err)
			})
		})
	})
	// #endif
	// #ifndef APP-PLUS
	return new Promise((resolve, reject) => {
		reject({
			message: '请在App中使用'
		})
	})
	// #endif
}
