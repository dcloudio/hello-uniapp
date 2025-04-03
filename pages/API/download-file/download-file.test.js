const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
describe('pages/API/download-file/download-file.vue', () => {
	let page;
	const versions = ['12.4', '13.7', '15.5', '17.4', '17.5_深色主题', '18.1'];
	const [platform, version] = platformInfo.split(' ');
	if (platform === 'ios_simulator' && versions.includes(version)) {
	    it('skip', async () => {
	        expect(1).toBe(1);
	    });
	    return;
	}
	beforeAll(async () => {
		page = await program.reLaunch('/pages/API/download-file/download-file')
		await page.waitFor('view')
	});
	it('check download url', async () => {
		expect.assertions(2);
		await page.callMethod('downloadImage')
		const waitTime = process.env.uniTestPlatformInfo.includes('firefox') ? 5000:2000
		const start = Date.now();
		await page.waitFor(async () => {
		  return await page.data('jest_result') === true || (Date.now() - start > waitTime)
		})
		expect(await page.data('jest_result')).toBeTruthy();
		expect(await page.data('imageSrc')).toBeTruthy();
	});
});
