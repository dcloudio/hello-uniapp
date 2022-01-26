'use strict';
exports.main = async (event, context) => {
	/**
	 * 检测升级 使用说明
	 * 上传包：
	 * 1. 根据传参，先检测传参是否完整，appid appVersion wgtVersion 必传
	 * 2. 先从数据库取出所有该平台（从上下文读取平台信息，默认 Andriod）的所有线上发行更新
	 * 3. 再从所有线上发行更新中取出版本最大的一版。如果可以，尽量先检测wgt的线上发行版更新
	 * 4. 使用上步取出的版本包的版本号 和传参 appVersion、wgtVersion 来检测是否有更新，必须同时大于这两项，否则返回暂无更新
	 * 5. 如果库中 wgt包 版本大于传参 appVersion，但是不满足 min_uni_version < appVersion，则不会使用wgt更新，会接着判断库中 app包version 是否大于 appVersion
	 */

	let {
		appid,
		appVersion,
		wgtVersion,
	} = event;

	const platform_Android = 'Android';
	const platform_iOS = 'iOS';
	const package_app = 'native_app';
	const package_wgt = 'wgt';
	const app_version_db_name = 'opendb-app-versions'

	let platform = platform_Android;

	// 云函数URL化请求
	if (event.headers) {
		let body;
		try {
			if (event.httpMethod.toLocaleLowerCase() === 'get') {
				body = event.queryStringParameters;
			} else {
				body = JSON.parse(event.body);
			}
		} catch (e) {
			return {
				code: 500,
				msg: '请求错误'
			};
		}

		appid = body.appid;
		appVersion = body.appVersion;
		wgtVersion = body.wgtVersion;

		platform = /iPhone|iPad/.test(event.headers) ? platform_iOS : platform_Android;
	} else if (context.OS) {
		platform = context.OS === 'android'
			? platform_Android
			: context.OS === 'ios'
				? platform_iOS
				: platform_Android;
	}

	if (appid && appVersion && wgtVersion && platform) {
		const collection = uniCloud.database().collection(app_version_db_name);

		const record = await collection.where({
				appid,
				platform,
				stable_publish: true
			})
			.orderBy('create_date', 'desc')
			.get();

		if (record && record.data && record.data.length > 0) {
			const appVersionInDb = record.data.find(item => item.type === package_app) || {};
			const wgtVersionInDb = record.data.find(item => item.type === package_wgt) || {};
			const hasAppPackage = !!Object.keys(appVersionInDb).length;
			const hasWgtPackage = !!Object.keys(wgtVersionInDb).length;

			// 取两个版本中版本号最大的包，版本一样，使用wgt包
			let stablePublishDb = hasAppPackage
				? hasWgtPackage
					? compare(wgtVersionInDb.version, appVersionInDb.version) >= 0
						? wgtVersionInDb
						: appVersionInDb
					: appVersionInDb
				: wgtVersionInDb;

			const {
				version,
				min_uni_version
			} = stablePublishDb;

			// 库中的version必须满足同时大于appVersion和wgtVersion才行，因为上次更新可能是wgt更新
			const appUpdate = compare(version, appVersion) === 1; // app包可用更新
			const wgtUpdate = compare(version, wgtVersion) === 1; // wgt包可用更新

			if (Object.keys(stablePublishDb).length && appUpdate && wgtUpdate) {
				// 判断是否可用wgt更新
				if (min_uni_version && compare(min_uni_version, appVersion) < 1) {
					return {
						code: 101,
						message: 'wgt更新',
						...stablePublishDb
					};
				} else if (hasAppPackage && compare(appVersionInDb.version, appVersion) === 1) {
					return {
						code: 102,
						message: '整包更新',
						...appVersionInDb
					};
				}
			}

			return {
				code: 0,
				message: '当前版本已经是最新的，不需要更新'
			};
		}

		return {
			code: -101,
			message: '暂无更新或检查appid是否填写正确'
		};
	}

	return {
		code: -102,
		message: '请检查传参是否填写正确'
	};
};

/**
 * 对比版本号，如需要，请自行修改判断规则
 * 支持比对	("3.0.0.0.0.1.0.1", "3.0.0.0.0.1")	("3.0.0.1", "3.0")	("3.1.1", "3.1.1.1") 之类的
 * @param {Object} v1
 * @param {Object} v2
 * v1 > v2 return 1
 * v1 < v2 return -1
 * v1 == v2 return 0
 */
function compare(v1 = '0', v2 = '0') {
	v1 = String(v1).split('.')
	v2 = String(v2).split('.')
	const minVersionLens = Math.min(v1.length, v2.length);

	let result = 0;
	for (let i = 0; i < minVersionLens; i++) {
		const curV1 = Number(v1[i])
		const curV2 = Number(v2[i])

		if (curV1 > curV2) {
			result = 1
			break;
		} else if(curV1 < curV2) {
			result = -1
			break;
		}
	}

	if (result === 0 && (v1.length !== v2.length)) {
		const v1BiggerThenv2 = v1.length > v2.length;
		const maxLensVersion = v1BiggerThenv2 ? v1 : v2;
		for (let i = minVersionLens; i < maxLensVersion.length; i++) {
			const curVersion = Number(maxLensVersion[i])
			if (curVersion > 0) {
				v1BiggerThenv2 ? result = 1 : result = -1
				break;
			}
		}
	}

	return result;
}
