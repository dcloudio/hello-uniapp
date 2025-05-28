let page;
const containsVite = process.env.UNI_CLI_PATH.includes('uniapp-cli-vite');
const isApp = process.env.UNI_PLATFORM.includes('app');
const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase();
const isHarmony = platformInfo.startsWith('harmony')
function createTests(pagePath, type) {
	return describe(`测试页面路径: ${pagePath}`, () => {
		async function toScreenshot(imgName) {
			await page.waitFor(300)
			const image = await program.screenshot({
				deviceShot: true
			});
			expect(image).toSaveImageSnapshot({
				customSnapshotIdentifier() {
					return imgName
				}
			})
			await page.waitFor(500);
		}
		if (platformInfo === 'ios_simulator 13.7') {
			it('skip', async () => {
				expect(1).toBe(1)
			})
			return
		}
		beforeAll(async () => {
			page = await program.reLaunch(pagePath)
			await page.waitFor('view');
			// isHarmony不支持截图跳过
			if (!isHarmony) {await toScreenshot(type)}
		});
		afterAll(async () => {
			await page.callMethod('resetAge')
		});
		it('check page data', async () => {
			const username = await page.$('.username');
			expect(await username.text()).toEqual('用户名：foo');
			const sex = await page.$('.sex');
			expect(await sex.text()).toEqual('性别：男');
			const age = await page.$('.age');
			expect(await age.text()).toEqual('年龄：10');
			const doubleAge = await page.$('.doubleAge');
			expect(await doubleAge.text()).toEqual('年龄翻倍：20');
		});
		it('store mutations', async () => {
			await page.callMethod('addAge')
			const age = await page.$('.age');
			expect(await age.text()).toEqual('年龄：11');
			const doubleAge = await page.$('.doubleAge');
			expect(await doubleAge.text()).toEqual('年龄翻倍：22');
		});
		it('store getters', async () => {
			await page.callMethod('addAgeTen')
			const age = await page.$('.age');
			expect(await age.text()).toEqual('年龄：21');
			const doubleAge = await page.$('.doubleAge');
			expect(await doubleAge.text()).toEqual('年龄翻倍：42');
		});
		it('store actions', async () => {
			await page.callMethod('addAgeAction')
			const age = await page.$('.age');
			expect(await age.text()).toEqual('年龄：41');
			const doubleAge = await page.$('.doubleAge');
			expect(await doubleAge.text()).toEqual('年龄翻倍：82');
		});
	})
}

// vue3-nvue不支持自动化测试
const nvuePath = '/pages/template/vuex-nvue/vuex-nvue'
const vuepath = '/pages/template/vuex-vue/vuex-vue'
if (containsVite) {
	// vue3
	if (isApp) {
		createTests(vuepath, 'vue3-App-vue');
	} else if (process.env.UNI_PLATFORM == 'h5') {
		createTests(vuepath, 'vue3-H5-vue');
	} else {
		createTests(vuepath, 'vue3-Mp-vue');
	}
} else {
	// vue2
	if (isApp) {
		createTests(nvuePath, 'vue2-App-nvue');
		createTests(vuepath, 'vue2-App-vue');
	} else if (process.env.UNI_PLATFORM == 'h5') {
		createTests(vuepath, 'vue2-H5-vue');
	} else {
		createTests(vuepath, 'vue2-Mp-vue');
	}
}
