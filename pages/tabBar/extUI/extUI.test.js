describe('pages/tabBar/extUI/extUI.nvue', () => {
    let page
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

    })
    /**
     * 点击 u-link 组件
     */
    it('u-link 点击', async () => {
        const helloLink = await page.$('.hello-link')
        // 检测首页u-link的文本内容
        expect(await helloLink.text()).toBe(
            'https://ext.dcloud.net.cn')
    })

    /**
     * 检测列表长度,是否发生变化
     */
    // it('.uni-panel 列表长度', async () => {
    //     const lists = await page.$$('.uni-panel')
    //     expect(lists.length).toBe(29)
    // })

    /**
     * 检测打开列表第一个元素是否正确
     */
    it('.uni-panel-h tap 打开 badge 组件', async () => {
        // 检测首个 panel 是视图容器
        expect(await (await page.$('.uni-panel-text')).text()).toBe(
            'uni-badge 数字角标')

        const listHead = await page.$('.uni-panel-h')
        // 是否获取正确的元素
        expect(await listHead.attribute('class')).toContain(
            'uni-panel-h',
        )

        // 点击第一个 item，验证打开的新页面是否正确
        await listHead.tap()
        await page.waitFor(2000)
        
        expect((await program.currentPage()).path).toBe('pages/extUI/badge/badge')
        await page.waitFor(500)
        // 执行 navigateBack 验证是否返回
        expect((await program.navigateBack()).path).toBe('pages/tabBar/extUI/extUI')
    })

})
