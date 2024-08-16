// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('pages/API/download-file/download-file.vue', () => {

	let page;
	beforeAll(async () => {
		page = await program.reLaunch('/pages/API/download-file/download-file')
		await page.waitFor(1000)
	});

	it('check download url', async () => {
		expect.assertions(2);
		await page.callMethod('downloadImage')
		const start = Date.now();
		await page.waitFor(async () => {
		  return await page.data('jest_result') === true || (Date.now() - start > 2000)
		})
		console.log("data",await page.data(),Date.now() - start > 2000)
		expect(await page.data('jest_result')).toBeTruthy();
		expect(await page.data('imageSrc')).toBeTruthy();
	});
});
