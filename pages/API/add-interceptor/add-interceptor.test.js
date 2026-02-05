const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
describe('pages/API/add-interceptor/add-interceptor.vue', () => {
	beforeAll(async () => {
		page = await program.reLaunch('/pages/API/add-interceptor/add-interceptor')
		await page.waitFor('view')
	});
	it('check interceptor', async () => {
		await page.callMethod('addInterceptor')
		await page.callMethod('request')
		await page.waitFor(2000)
		await page.callMethod('removeInterceptor')
		expect(await page.data('responseText')).toBe('afterIntercept=1');
	});
});
