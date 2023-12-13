// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('pages/API/download-file/download-file.vue', () => {

	let page;
	beforeAll(async () => {
		page = await program.reLaunch('/pages/API/download-file/download-file')
		await page.waitFor(1000)
	});

	it('check download url', async () => {
		expect.assertions(1);
		await page.callMethod('downloadImage')
		await page.waitFor(500)
		expect(await page.data('imageSrc')).toBeTruthy();
	});
});
