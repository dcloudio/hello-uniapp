describe('renderjs', () => {
	let page, btns;
	if (process.env.UNI_PLATFORM === "mp-weixin") {
		// renderjs仅支持App和H5
		it('is mp-weixin', async () => {
			expect(1).toBe(1)
		})
		return
	}
	beforeAll(async () => {
		page = await program.reLaunch('/pages/template/renderjs/renderjs')
		await page.waitFor('view');
		btns = await page.$$('button');
	});
	it('check page data', async () => {
		const data1 = await page.$('.renderjs');
		expect(await data1.text()).toEqual('serviceData');
	});
	it('callMethod renderjs', async () => {
		await btns[0].tap();
		await page.waitFor(300);
		const data2 = await page.$('.renderjs');
		expect(await data2.text()).toEqual('renderjsData');
	});
	it('callMethod service', async () => {
		await btns[1].tap();
		await page.waitFor(300);
		const data3 = await page.$('.renderjs');
		expect(await data3.text()).toEqual('serviceData改变了');
	});
	if (process.env.UNI_PLATFORM === "h5") {
		it('trigger getServiceData', async () => {
			expect(await page.data('newValue')).toEqual('serviceData改变了');
			expect(await page.data('oldValue')).toEqual('renderjsData');
		});
	}

});
