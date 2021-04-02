describe('pages/component/view/view.vue', () => {
	let page
	beforeAll(async () => {
		// 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
		page = await program.reLaunch('/pages/component/view/view')
		await page.waitFor(1000)
	})

	/**
	 * 测试步骤
	 * 1. 检测页面标题是否为 view
	 */
	it('view 组件标题', async () => {
		let view = await page.$('.common-page-head-title')
		expect(await view.text()).toBe('view')
	})
	/**
	 * 测试步骤
	 * 1. uni-flex 的个数
	 * 2. flex-item 的个数
	 */
	it('view 个数', async () => {
		let viewLen = await page.$$('.uni-flex')
		expect(viewLen.length).toBe(18)
		let viewItemLen = await page.$$('.flex-item')
		expect(viewItemLen.length).toBe(6)
	})
	/**
	 * 测试步骤
	 * 1. 第一个颜色块的色值是否为 rgb(247, 98, 96)
	 */
	it('view 前三个元素颜色', async () => {
		let viewRed = await page.$('.uni-bg-red')
		expect(await viewRed.style('backgroundColor')).toBe('rgb(247, 98, 96)')
	})
})
