describe('test pinia', () => {
  let page,containsVite;
  containsVite = process.env.UNI_CLI_PATH.includes('uniapp-cli-vite')
  if (!containsVite) {
	// Vue 2 项目暂不支持 Pinia
    it('is vue2', async () => {
      expect(1).toBe(1)
    })
    return
  }
  beforeAll(async () => {
    page = await program.reLaunch('/pages/template/pinia/pinia')
    await page.waitFor('view');
  });
  it('check page data', async () => {
    const count = await page.$('.count');
    expect(await count.text()).toEqual('当前计数：0');
    const doubleCount = await page.$('.doubleCount');
    expect(await doubleCount.text()).toEqual('计数翻倍：0');
  });
  it('store incrementCounter', async () => {
    await page.callMethod('incrementCounter')
    const count = await page.$('.count');
    expect(await count.text()).toEqual('当前计数：1');
    const doubleCount = await page.$('.doubleCount');
    expect(await doubleCount.text()).toEqual('计数翻倍：2');
  });
  it('store incrementPatchCounter', async () => {
    await page.callMethod('incrementPatchCounter')
    const count = await page.$('.count');
    expect(await count.text()).toEqual('当前计数：2');
    const doubleCount = await page.$('.doubleCount');
    expect(await doubleCount.text()).toEqual('计数翻倍：4');
  });
  it('store actions', async () => {
    const increment = await page.$('.increment');
    await increment.tap()
    const countIn = await page.$('.count');
    expect(await countIn.text()).toEqual('当前计数：3');
    const doubleCountIn = await page.$('.doubleCount');
    expect(await doubleCountIn.text()).toEqual('计数翻倍：6');

    const decrement = await page.$('.decrement');
    await decrement.tap()
    const countDe = await page.$('.count');
    expect(await countDe.text()).toEqual('当前计数：2');
    const doubleCountDe = await page.$('.doubleCount');
    expect(await doubleCountDe.text()).toEqual('计数翻倍：4');
  });
});
