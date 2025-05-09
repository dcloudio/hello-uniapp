const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isHarmony = platformInfo.startsWith('harmony')

describe('pages/component/web-view-local/issue-17581.vue', () => {
	if (!isHarmony) {
		it('skip', async () => {
			expect(1).toBe(1)
		})
		return
	}
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/component/web-view-local/issue-17581')
		await page.waitFor(1000)
	})

	it('click position', async () => {
		await program.tap({
			x: 100,
			y: 400
		})
		await page.waitFor(200)
		const {
			clickClientY
		} = await page.data()
		expect(clickClientY).toBeLessThan(200)
		expect(clickClientY).toBeGreaterThan(0)
	})
})
