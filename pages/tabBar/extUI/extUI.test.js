describe('pages/tabBar/extUI/extUI.nvue', () => {
	let page, containsVite, isApp;
	containsVite = process.env.UNI_CLI_PATH.includes('uniapp-cli-vite')
	isApp = process.env.UNI_PLATFORM.includes('app')
	if (containsVite && isApp) {
	  it('vue3', async () => {
	    expect(1).toBe(1)
	  })
	  return
	}
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        page = await program.reLaunch('/pages/tabBar/extUI/extUI')
        if (process.env.UNI_PLATFORM === "h5") {
        	await page.waitFor(1000)
        }
        if (process.env.UNI_PLATFORM === "mp-weixin" || process.env.UNI_PLATFORM === "mp-baidu") {
        	await page.waitFor(10000)
        }
        page = await program.currentPage()
		await page.waitFor("view")
    })
    /**
     * 点击 u-link 组件
     */
    it('u-link 点击', async () => {
        const helloLink = await page.$('.hello-link')
        // 检测首页u-link的文本内容
        expect(await helloLink.text()).toBe('https://ext.dcloud.net.cn')
    })

    /**
     * 检测列表长度,是否发生变化
     */
    it('.uni-panel 列表长度', async () => {
		let lists = []
		if(process.env.UNI_PLATFORM == 'h5'){
			lists = await page.$$('.uni-container.extUI .uni-panel')
		}else{
			const extUIEl  = await page.$('.extUI')
			lists = await extUIEl.$$('.uni-panel')
		}
		if(process.env.UNI_PLATFORM == 'app-plus'){
			expect(lists.length).toBe(41)
		}else if(process.env.UNI_PLATFORM == 'h5' || process.env.UNI_PLATFORM == 'mp-weixin'){
			expect(lists.length).toBe(44)
		}
    })
    /**
     * 检测打开列表第一个元素是否正确
     */
    it('.uni-panel-h tap 打开 badge 组件', async () => {
        // 检测首个 panel 是视图容器
        expect(await (await page.$('.uni-panel-text')).text()).toBe('uni-badge 数字角标')
        const listHead = await page.$('.uni-panel-h')
        // 是否获取正确的元素
        expect(await listHead.attribute('class')).toContain('uni-panel-h')
        // 点击第一个 item，验证打开的新页面是否正确
        await listHead.tap()
		const waitTime = process.env.UNI_PLATFORM == 'mp-weixin'? 5000 : 2000
		await page.waitFor(waitTime)
        expect((await program.currentPage()).path).toBe('pages/extUI/badge/badge')
        await page.waitFor(500)
        // 执行 navigateBack 验证是否返回
        expect((await program.navigateBack()).path).toBe('pages/tabBar/extUI/extUI')
    })

})
