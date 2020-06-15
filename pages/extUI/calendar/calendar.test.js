describe('pages/extUI/calendar/calendar.nvue', () => {
	let page, data, calendar, calendarFirst, calendarLast, firstComponents, lastComponents

	beforeAll(async () => {
		// 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
		page = await program.reLaunch('/pages/extUI/calendar/calendar')

	
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			await page.waitFor(10000)
		}else{
			// 延时 5秒，是因为页面有定时器 ，所以要等定时器执行完毕
			await page.waitFor(5000)
		}

		page = await program.currentPage()
		// 获取页面 data 数据
		data = await page.data()
		// 获取组件示例，当前页面有两个
		calendar = await page.$$('.uni-calendar--hook');
		// 获取插入模式组件实例
		calendarFirst = await calendar[0]
		// 获取弹出模式组件
		calendarLast = await calendar[1]
		firstComponents = await calendarFirst.data()
		lastComponents = await calendarLast.data()
	})
	
	/**
	 * 测试步骤：
	 * 1. 获取页面data 数据 
	 * 2. 如果 showCalendar 为 true 则通过测试
	 */
	it('插入模式-组件显示', async () => {
		// 页面是否显示
		expect(data.showCalendar).toBe(true)
	})
	
	/**
	 * 测试步骤：
	 * 1. 获取插入模式日历组件元素
	 * 2. 获取日历长度 ，固定为 42 ，如果不是42测试不通过
	 * 3. 插入模式传入数据必然是今天，如果不是今天则测试不通过
	 */
	it('插入模式-初次渲染', async () => {
		const calendarFirstItem = await calendarFirst.$$('.uni-calendar-item--hook')
		// 当前日期数量
		expect(calendarFirstItem.length).toBe(42)
		// 测试默认是否显示的为今天
		expect(firstComponents.nowDate.date).toBe((new Date().getDate()))
	})
	
	/**
	 * 测试步骤：
	 * 1. 获取传入的所有打卡数据
	 * 2. 测试组件内数据是否和实际渲染元素长度是否相等，相等测试通过
	 * 3. 循环打卡数据，并逐个点击页面中渲染的显示打卡数据元素
	 * 4. 打卡数据与点击后的日期相等，则测试通过
	 * 5. 验证打卡后元素文字是否与传入数据打卡输入一致，一致则测试通过
	 */
	it('插入模式-打卡数据', async () => {
		// 获取日历格子组件
		const calendarFirstItem = await calendarFirst.$$('.uni-calendar-item--hook')
		// 获取打卡日期数据
		const selected = data.info.selected
		// 处理所有的打卡数据
		const weeks = firstComponents.weeks
		const newWeeks = []
		for (let i in weeks) {
			newWeeks.push(...weeks[i])
		}
		// 测试数据和实际渲染元素是否相等，如果不等，则报错
		expect(newWeeks.length).toBe(calendarFirstItem.length)

		// 处理打卡数据
		for (let i = 0; i < selected.length; i++) {
			const item = selected[i]
			calendarFirst.callMethod('init', item.date)
			await page.waitFor(2000)
			let selecteDate = await calendarFirst.data()
			selecteDate = selecteDate.nowDate.fullDate
			expect(getDate(item.date).fullDate).toBe(getDate(selecteDate).fullDate)
			
			const componentsData = await calendarFirst.data()
			const weeks = componentsData.weeks
			const newWeeks = []
			for (let i in weeks) {
				newWeeks.push(...weeks[i])
			}
			const index = newWeeks.findIndex(week => getDate(week.fullDate).fullDate === getDate(item.date).fullDate)
			const clockDom = await calendarFirstItem[index].$('.uni-calendar-item__weeks-box-circle')
			// 打点数据存在与否
			expect(await clockDom.attribute('class')).toContain('uni-calendar-item__weeks-box-circle')
			const info = await calendarFirstItem[index].$('.uni-calendar-item--extra')
			const infoText = info ? (await info.text()) : ''
			// 打卡文字是否正确
			expect(item.info).toBe(infoText)
		}

	})
	
	/**
	 * 测试步骤
	 * 1. 随机获取某一天
	 * 2. 获取这一天是否禁用状态
	 * 3. 元素点击，如果是禁用，则点击不会生效，不会添加 uni-calendar-item--checked ，而会添加 uni-calendar-item--disable
	 * 4. 如果存在 disable 类 ，则 checked 类一定不存在，否则错误 ，反之亦然
	 */
	it('插入模式-随机点击某一天', async () => {
		const calendarFirstItem = await calendarFirst.$$('.uni-calendar-item--hook')
		// 随机获取某一天的元素
		let tapEventDom = generateMixed(await calendarFirstItem)
		let disableDom = null
		// 获取需要点击日期的禁用状态

		// 微信处理与其他平台区分 ，因为微信多一层所以不能直接取到 box 元素
		if (process.env.UNI_PLATFORM === "mp-weixin") {
			tapEventDom = await tapEventDom.$('.uni-calendar-item__weeks-box')
		}
		// 获取当前点击元素所有类
		disableDom = await tapEventDom.attribute('class')
		// 获取当前点击是否 disable 类
		let is_disable = disableDom.includes('uni-calendar-item--disable')
		// 点击当前选中的格子
		await tapEventDom.tap()
		await page.waitFor(2000)

		// 重新获取需要点击日期的禁用状态
		disableDom = await tapEventDom.attribute('class')
		// 如果存在 checked ，disable 一定是false ，如果不存在 checked ，那么 disable 一定为 true，如果同时存在或者同时不存在一定是有问题的
		expect(disableDom.includes('uni-calendar-item--checked')).toBe(!is_disable)
		
	})
	
	/**
	 * 测试步骤：
	 * 1. 点击下个月
	 * 2. 月份显示年月与时机获取数据年月一致，则测试通过
	 */
	it('插入模式-切换下个月', async () => {
		const tapEventDom = await calendarFirst.$('.uni-calendar--right')
		await tapEventDom.tap()
		await page.waitFor(500)
		await setSelectMonth(page, calendarFirst)

	})
	
	/**
	 * 测试步骤：
	 * 1. 点击上个月
	 * 2. 月份显示年月与时机获取数据年月一致，则测试通过
	 */
	it('插入模式-切换上个月', async () => {
		const tapEventDom = await calendarFirst.$('.uni-calendar--left')
		await tapEventDom.tap()
		await page.waitFor(500)
		await setSelectMonth(page, calendarFirst)
	})
	
	/**
	 * 测试步骤：
	 * 1. 点击回到今天
	 * 2. 月份显示年月与时机获取数据年月一致，则测试通过
	 */
	it('插入模式-回到今天', async () => {
		const tapEventDom = await calendarFirst.$('.uni-calendar__backtoday')
		await tapEventDom.tap()
		await page.waitFor(500)
		await setSelectMonth(page, calendarFirst)
	})
	
	/**
	 * 测试步骤：
	 * 1. 点击选择年月
	 * 2. 月份显示年月与时机获取数据年月一致，则测试通过
	 */
	it('插入模式-选择年月', async () => {
		await page.waitFor(500)
		const {
			year,
			month
		} = getDate(new Date(), 40)
		await calendarFirst.callMethod('init', year + '-' + month + '-1')
		await page.waitFor(500)
		await setSelectMonth(page, calendarFirst)

	})
	
	/**
	 * TODO 弹出模式暂时有问题，先不做
	 */
	// it('弹出模式-打开日历', async () => {
	// 	await page.waitFor(2000)
	// 	const calendar = await page.$('#calendar_2');
	// 	const tapEventDom = await page.$('.calendar-button')
	// 	await tapEventDom.tap()
	// 	await page.waitFor(200)
	// 	const pageItem = await page.$$('.uni-calendar--hook .uni-calendar-item--hook')
	// 	const calendarItem_1 =  await calendar[0].$$('.uni-calendar-item--hook')
	// 	const calendarItem = await calendar[1].$$('.uni-calendar-item--hook')
	// 	const calendarItem = await calendar.$$('.uni-calendar-item--hook')
	// })


})

/**
 * 切换月份验证
 * @param {Object} page
 * @param {Object} calendar
 */

async function setSelectMonth(page, uniCalendar) {
	const componentsData = await uniCalendar.data()
	// 获取内容
	const dateDom = await uniCalendar.$('.uni-calendar__header-text')
	const dateText = await dateDom.text()
	const {
		year,
		month
	} = componentsData.nowDate
	// 当前日期数量
	const calendarItem = await uniCalendar.$$('.uni-calendar-item--hook')
	expect(calendarItem.length).toBe(42)
	await page.waitFor(200)
	// 切换下个月后显示日期是否与数据日期相同
	expect(dateText).toBe((year || '') + '年' + (month || '') + '月')

}

/**
 * 随机获取数组中一项
 * @param {Object} items
 */
function generateMixed(items) {
	var item = items[Math.floor(Math.random() * items.length)];
	return item;
}

/**
 * 获取任意时间
 */
function getDate(date, AddDayCount = 0) {
	if (!date) {
		date = new Date()
	}
	if (typeof date !== 'object') {
		date = date.replace(/-/g, '/')
	}
	const dd = new Date(date)
	dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
	const y = dd.getFullYear()
	const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
	const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
	return {
		fullDate: y + '-' + m + '-' + d,
		year: y,
		month: m,
		date: d,
		day: dd.getDay()
	}
}


// calendarFirstItem.reduce((promise, name) => {
// 	return promise.then((res) => {

// 	})
// }, Promise.resolve([])).then((name) => {

// })
