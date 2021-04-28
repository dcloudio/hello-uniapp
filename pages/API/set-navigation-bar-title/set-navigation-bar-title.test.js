//var cv = require('opencv/lib/opencv');

describe('pages/API/set-navigation-bar-title/set-navigation-bar-title.vue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
       page = await program.reLaunch('/pages/API/set-navigation-bar-title/set-navigation-bar-title')
       
       if (process.env.UNI_PLATFORM === "mp-weixin") {
       	await page.waitFor(10000)
       } else {
       	await page.waitFor(5000)
       }
       
       page = await program.currentPage()

    })

    it('set-navigation-bar-title 组件标题', async () => {
    	let view = await page.$('.common-page-head-title')
    	expect(await view.text()).toBe('nav-default')
    })
})
