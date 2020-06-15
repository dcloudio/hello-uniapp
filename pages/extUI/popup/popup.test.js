describe('pages/extUI/popup/popup.nvue', () => {

	let tapEventButton
	let page
	beforeAll(async () => {
		// 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
		page = await program.reLaunch('/pages/extUI/popup/popup')

		if (process.env.UNI_PLATFORM === "mp-weixin") {
			await page.waitFor(10000)
		} else {
			await page.waitFor(5000)
		}


		page = await program.currentPage()
		tapEventButton = await page.$$('.button')
	})
	
	/**
	 * 测试步骤
	 * 1. 进入页面会打开一个 dialog 
	 * 2. 检测 dialog 标题是否与预期值一致，一致则通过测试
	 */
	it('页面渲染', async () => {
		// await page.waitFor(2000)
		let popup = await page.$('#popupDialog')
		// TODO 微信小程序使用标签，h5 使用 class
		let popupItem = await popup.$('.uni-popup-dialog')
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popup.$('uni-popup-dialog')
		}

		const popupItemText = await popupItem.$('.uni-dialog-content-text')

		expect(await popupItemText.text()).toBe('欢迎使用 uni-popup!')
	})
	
	/**
	 * 测试步骤
	 * 1. 检测 dialog 是否存在，存在则测试通过
	 * 2. dialog 点击遮罩不会关闭，所以检测组件是否存在，存在则测试通过
	 * 3. 获取确认按钮 ，按钮文字与预期一致，则测试通过
	 * 4. 点击确定，关闭dialog ，检测组件是否还存在，不存在则测试通过
	 * 5. dialog 关闭会 弹出message ，检测组件是否存在，存在则测试通过
	 * 6. 2s 后关闭 message ，检测组件是否存在，不存在则测试通过
	 */
	it('关闭默认弹层', async () => {
		let popup = await page.$('#popupDialog')
		const tapEventMask = await popup.$('.uni-mask--hook')
		await tapEventMask.tap()
		await page.waitFor(500)

		// 如果组件存在，则通过
		expect(popup).toBeTruthy()

		// TODO 微信小程序使用标签，h5 使用 class ,	且不能跨组件查询
		let popupItem = await popup.$('.uni-popup-dialog');

		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popup.$('uni-popup-dialog')
		}

		const tapEventButton = await popupItem.$$('.uni-dialog-button')

		// 按钮应该为确定
		expect(await (await tapEventButton[1].$('.uni-dialog-button-text')).text()).toBe('确定')

		await tapEventButton[1].tap()
		await page.waitFor(1000)
		// 上面需要延时长一点，否则执行到下面，popup 可能还没关闭
		// 在小程序中，最外层组件不会消失，所以要判断子组件是否存在
		popup = await page.$('#popupDialog')
		popupItem = popup

		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popup.$('uni-popup-dialog')
		}

		// 如果组件不存在，则通过
		expect(popupItem).toBeNull()

		let popupMsg = await page.$('#popupMessage')
		
		// 如果提示组件存在，则通过
		expect(popupMsg).toBeTruthy()
		await page.waitFor(3000)
		popupMsg = await page.$('#popupMessage')
		// 在小程序中，最外层组件不会消失，所以要判断自组件是否存在

		popupItem = popupMsg
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupMsg.$('uni-popup-message')
		}
		// 如果提示组件不存在，则通过
		expect(popupItem).toBeNull()

	})	
	
	/**
	 * 测试步骤
	 * 1. 点击第一个按钮，打开基本弹窗
	 * 2. 基础popup存在，则测试通过
	 * 3. 获取基础组件内容，与预期一致，则测试通过
	 * 4. 点击遮罩关闭popup，组件不存在，则测试通过
	 */
	it('基本示例', async () => {
		await tapEventButton[1].tap()
		await page.waitFor(1000)
		let popup = await page.$('#popup')
		// 如果基本组件存在，则通过
		expect(popup).toBeTruthy()
		
		// 微信小程序不能跨组件获取元素
		let content = await popup.$('.uni-popup__wrapper-box')
		// console.log(await (await content.$('.popup-content')).attribute('class'));
		expect(await (await content.$('.popup-content')).text()).toBe('popup 内容，此示例没有动画效果')

		let tapEventMask = await popup.$('.uni-mask--hook')
		// h5 和 小程序 差一层标签，所以要选中组件内的元素触发事件
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			tapEventMask = await tapEventMask.$('.uni-transition')
		}

		await tapEventMask.tap()
		await page.waitFor(1000)

		popup = await page.$('#popup')
		tapEventMask = popup

		if (process.env.UNI_PLATFORM === "mp-weixin") {
			tapEventMask = await popup.$('.uni-mask--hook')
		}
		// 如果组件不存在，则通过
		expect(tapEventMask).toBeNull()

	})
	
	/**
	 * 测试步骤
	 * 1. 点击第五个按钮，打开popup
	 * 2. 如果组件存在，则测试通过
	 * 3. 检测popup 内容是否与预期内一致，一致则测试通过
	 * 4. 检测popup标题驶入与预期内一致，一致则测试通过
	 * 5. 检测标题颜色是否与预期一致，一致则测试通过
	 * 6. 点击取消按钮，检测组件是否存在，不存在则测试通过
	 * 7. dialog 消失后弹出message ，检测message是否存在，存在则测试通过
	 * 8. 2s 后message消失，检测组件是否存在，不存在则测试通过
	 */
	it('自定义弹出层 dialog + message', async () => {

		await tapEventButton[5].tap()
		await page.waitFor(500)
		let popupDialog = await page.$('#popupDialog')
		// 如果基本组件存在，则通过
		expect(popupDialog).toBeTruthy()

		let popupItem = await popupDialog.$('.uni-popup-dialog')

		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupDialog.$('uni-popup-dialog')
		}

		// 弹出层内容是否正确
		expect(await (await popupItem.$('.uni-dialog-content-text')).text()).toBe('欢迎使用 uni-popup!')
		// 标题是否正确
		expect(await (await popupItem.$('.uni-dialog-title-text')).text()).toBe('通知')
		// 检测标题颜色是否正确
		expect(await (await popupItem.$('.uni-dialog-title-text')).attribute('class')).toContain(
			'uni-popup__warn')

		const tapEventDialogButton = await popupItem.$$('.uni-dialog-button')
		// 按钮应该为取消
		expect(await (await tapEventDialogButton[0].$('.uni-dialog-button-text')).text()).toBe('取消')

		await tapEventDialogButton[0].tap()
		await page.waitFor(600)

		popupDialog = await page.$('#popupDialog')
		popupItem = popupDialog
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupDialog.$('uni-popup-dialog')
		}
		// 如果组件不存在，则通过
		expect(popupItem).toBeNull()

		let popupMsg = await page.$('#popupMessage')
		// 如果提示组件存在，则通过
		expect(popupMsg).toBeTruthy()
		await page.waitFor(3000)
		popupMsg = await page.$('#popupMessage')
		popupItem = popupMsg
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupDialog.$('uni-popup-message')
		}
		// 如果提示组件不存在，则通过
		expect(popupItem).toBeNull()

	})
	
	/**
	 * 测试步骤
	 * 1. 点击第七个按钮，打开input 弹窗
	 * 2. 检测input弹窗是否存在，存在则测试通过
	 * 3. 检测input内容是否与预期内一致，一致则测试通过
	 * 4. 检测点击按钮是否为确定，为确定则测试通过
	 * 5. 点击确定关闭input，关闭 input需要3s延迟才会关闭，检测input是否存在，存在则测试通过
	 * 6. 3s 后弹窗关闭，检测组件是否存在，不存在则测试通过
	 * 7. 
	 */

	it('提交信息 input + 延迟关闭', async () => {

		await tapEventButton[7].tap()
		await page.waitFor(500)
		let popupDialog = await page.$('#dialogInput')
		// 如果基本组件存在，则通过
		expect(popupDialog).toBeTruthy()

		let popupItem = await popupDialog.$('.uni-popup-dialog')
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupDialog.$('uni-popup-dialog')
		}

		// 输入弹层标题
		expect(await (await popupItem.$('.uni-dialog-title-text')).text()).toBe('输入内容')
		const tapEventDialogButton = await popupItem.$$('.uni-dialog-button')
		// 按钮应该为取消
		expect(await (await tapEventDialogButton[1].$('.uni-dialog-button-text')).text()).toBe('确定')

		await tapEventDialogButton[1].tap()
		await page.waitFor(1000)
		// 因为延迟，所以组件应该存在
		expect(popupDialog).toBeTruthy()

		await page.waitFor(2500)
		popupDialog = await page.$('#dialogInput')
		popupItem = popupDialog
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupDialog.$('uni-popup-dialog')
		}
		// 延迟3秒 ，组件应该要销毁
		expect(popupItem).toBeNull()
	})
	
	/**
	 * 测试步骤
	 * 1. 点击第八个按钮，打开share 弹窗
	 * 2. 检测share 是否存在，存在则测试通过
	 * 3. 检测分享标题是否与预期内一致，一致则测试通过
	 * 4. 检测分享内容长度是否与预期内一致，一致则测试通过
	 * 5. 点击取消按钮，检测组件是否存在，不存在则测试通过
	 */

	it('分享示例', async () => {
		await tapEventButton[8].tap()
		await page.waitFor(500)
		let popupShare = await page.$('#popupShare')
		// 如果基本组件存在，则通过
		expect(popupShare).toBeTruthy()

		let popupItem = await popupShare.$('.uni-popup-share')
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupShare.$('uni-popup-share')
		}
		// 分享标题是否存在
		expect(await (await popupItem.$('.uni-share-title-text')).text()).toBe('分享到')
		let shareItem = await popupItem.$$('.uni-share-content-item')
		// 分享项内容长度
		expect(shareItem.length).toBe(6)

		let shareButton = await popupItem.$('.uni-share-button')
		await shareButton.tap()
		await page.waitFor(1000)
		popupShare = await page.$('#popupShare')
		popupItem = popupShare
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			popupItem = await popupShare.$('uni-popup-share')
		}
		// 组件是否存在，不存在则通过
		expect(popupItem).toBeNull()

	})

})
