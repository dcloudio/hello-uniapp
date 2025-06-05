// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('/pages/template/crypto-api/crypto-api.vue', () => {
	let page

	beforeAll(async () => {
		// 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
		page = await program.reLaunch('/pages/template/crypto-api/crypto-api')
		await page.waitFor("view")
	})

	it('crypto-api', async () => {
		const button = await page.$('#button')
		await button.tap()
		await page.waitFor(500)
		const strElement = await page.$('#str')
		const result = await strElement.text()
		expect(result).toBe('true-true-true')
	})
});
