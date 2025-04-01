describe('测试 css 变量', () => {
	let page
	const isApp = process.env.UNI_PLATFORM.includes('app');
	beforeAll(async () => {
		// 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
		page = await program.reLaunch('/pages/API/get-node-info/get-node-info')
		await page.waitFor(1000)
	})

	it('css var', async () => {

		if (isApp) {
			const element1 = await page.$('.box1')
			const size = await element1.size()
			expect(size.height > 0).toBe(true)

			const element2 = await page.$('.box2')
			const size2 = await element2.size()
			expect(size2.height === 0).toBe(true)

			const element3 = await page.$('.box3')
			const size3 = await element3.size()
			expect(size3.height === 0).toBe(true)

			const element4 = await page.$('.box4')
			const size4 = await element4.size()
			expect(size4.height > size.height).toBe(true)
		} else {
			expect(1).toBe(1)
		}
	})
});
