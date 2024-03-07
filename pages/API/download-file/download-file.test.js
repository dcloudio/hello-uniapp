// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('pages/API/download-file/download-file.vue', () => {
	let page;
	beforeAll(async () => {
		page = await program.reLaunch('/pages/API/download-file/download-file')
		await page.waitFor('view')
	});
	it('check download url', async () => {
		expect.assertions(1);
		await page.callMethod('downloadImage')
		await page.waitFor(2000)
		const data = await page.data()
		console.log("data",data)
		expect(await page.data('jest_result')).toBeTruthy();
	});
});
