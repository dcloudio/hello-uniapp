describe('renderjs', () => {
	let page;
	if (process.env.UNI_PLATFORM !== "mp-weixin") {
		// renderjs仅支持App和H5
		it('not mp-weixin', async () => {
			expect(1).toBe(1)
		})
		return
	}
	beforeAll(async () => {
		page = await program.reLaunch('/pages/template/issue-15216/issue-15216')
		await page.waitFor('view');
	});
	it('check page data', async () => {
		const uniXxx = await page.data('uniXxx');
		expect(uniXxx).toEqual('abc');
	});
});
