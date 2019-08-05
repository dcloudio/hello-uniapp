<template>
	<view>
		<view v-if="maskShow && !insert" :class="{ 'ani-mask-show': aniMaskShow }" class="uni-calendar__mask" />
		<view v-if="maskShow || insert" :class="{ 'ani-calendar-show': aniMaskShow, 'uni-calendar__static': insert }" class="uni-calendar__box">
			<view v-if="!insert" class="uni-calendar__nav">
				<view class="uni-calendar__nav-item" @click="close">取消</view>
				<view class="uni-calendar__nav-item" @click="confirm">确认</view>
			</view>
			<view class="uni-calendar__wrapper">
				<view class="uni-calenda__content">
					<view class="uni-calendar__panel">
						<view class="uni-calendar__date-befor" @tap="dataBefor(-1, 'month')"><text class="iconfont icon-jiantou" /></view>
						<view class="uni-calendar__panel-box">
							<view>{{ canlender.year }}年</view>
							<view>{{ canlender.month }}月</view>
						</view>
						<view class="uni-calendar__date-after uni-calendar__rollback" @tap="dataBefor(1, 'month')"><text class="iconfont icon-jiantou " /></view>
						<view class="uni-calendar__backtoday" @tap="backtoday">回到今天</view>
					</view>
					<view v-if="isLunar" class="uni-calendar__day-detail">
						<view>{{ canlender.year + '年' + canlender.month + '月' + canlender.date + '日 （' + canlender.lunar.astro + ')' }}</view>
						<view>
							{{ canlender.lunar.gzYear + '年' + canlender.lunar.gzMonth + '月' + canlender.lunar.gzDay + '日 (' + canlender.lunar.Animal + '年)' }}
							{{ canlender.lunar.IMonthCn + canlender.lunar.IDayCn }} {{ canlender.lunar.isTerm ? canlender.lunar.Term : '' }}
						</view>
					</view>
					<view class="uni-calendar__header">
						<view class="uni-calendar__week">日</view>
						<view class="uni-calendar__week">一</view>
						<view class="uni-calendar__week">二</view>
						<view class="uni-calendar__week">三</view>
						<view class="uni-calendar__week">四</view>
						<view class="uni-calendar__week">五</view>
						<view class="uni-calendar__week">六</view>
					</view>
					<uni-calendar-item :canlender="canlender" :lunar="isLunar" @selectDays="selectDays" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import CALENDAR from './calendar.js'
	import uniCalendarItem from './uni-calendar-item'
	export default {
		name: 'UniCalendar',
		components: {
			uniCalendarItem
		},
		props: {
			/**
			 * 当前日期
			 */
			date: {
				type: String,
				default: ''
			},
			/**
			 * 打点日期
			 */
			selected: {
				type: Array,
				default () {
					return []
				}
			},
			/**
			 * 是否开启阴历日期
			 */
			lunar: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否禁用今天之前的日期
			 */
			disableBefore: {
				type: Boolean,
				default: false
			},
			/**
			 * 开始时间
			 */
			startDate: {
				type: String,
				default: ''
			},
			/**
			 * 结束时间
			 */
			endDate: {
				type: String,
				default: ''
			},
			/**
			 * 范围
			 */
			range: {
				type: Boolean,
				default: false
			},
			/**
			 * 插入
			 */
			insert: {
				type: Boolean,
				default: false
			}
		},
		data() {
			/**
			 * TODO 兼容新旧编译器
			 * 新编译器（自定义组件模式）下必须使用固定数值，否则部分平台下会获取不到节点。
			 * 随机数值是在旧编译器下使用的，旧编译器模式已经不推荐使用，后续直接废掉随机数值的写法。
			 */
			return {
				maskShow: false, // 显示日历
				aniMaskShow: false,
				dateShow: false, // 日期是否选择
				canlender: {
					weeks: []
				},
				multiple: 0,
				multipleDates: {
					begin: '',
					end: '',
					data: []
				},
				isLunar: false
			}
		},
		watch: {
			date() {
				this.init()
			},
			selected() {
				this.init()
			},
			lunar(newVal) {
				this.isLunar = newVal
				this.init()
			},
			disableBefore() {
				this.init()
			},
			startDate() {
				this.init()
			},
			endDate() {
				this.init()
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				// 初始化日历
				// this.canlender = this.getWeek(this.date || new Date());
				this.getMonthAll(0, this.date, true)
			},
			open() {
				this.maskShow = true
				this.multiple = 0
				this.multipleDates.data = []
				this.multipleDates.begin = ''
				this.multipleDates.end = ''
				this.init()
				this.$nextTick(() => {
					setTimeout(() => (this.aniMaskShow = true), 30)
				})
			},
			close() {
				this.aniMaskShow = false
				this.$nextTick(() => {
					setTimeout(() => (this.maskShow = false), 300)
				})
			},
			confirm() {
				this.setEmit('confirm')
				this.close()
			},
			/**
			 * 获取当前月份全部日期
			 */
			getMonthAll(index, date) {
				if (date === '') {
					date = new Date()
				}
				const canlender = this.getWeek(this.getDate(date, index, 'month'))
				this.canlender = canlender
				if (this.insert) {
					this.setEmit('change')
				}
			},
			/**
			 * 设置事件
			 * @param {Object} canlender
			 */
			setEmit(name) {
				const canlender = this.canlender
				this.$emit(name, {
					range: this.range ? this.multipleDates : {},
					year: canlender.year,
					month: canlender.month,
					date: canlender.date,
					lunar: canlender.lunar,
					clockinfo: canlender.clockinfo || {},
					fulldate: canlender.year + '-' + canlender.month + '-' + canlender.date
				})
			},
			/**
			 * 今天之前是否禁用
			 * @param {Object} year 年
			 * @param {Object} month 月
			 * @param {Object} date 日
			 */
			isDisableBefore(year, month, date) {
				const nowDate = this.date || new Date()
				const time = year + '-' + month + '-' + date
				let startDate = false
				let endDate = false
				if (this.startDate) {
					startDate = this.dateCompare(this.startDate, time)
				}
				if (this.endDate) {
					endDate = this.dateCompare(this.getDate(this.endDate, 1), time)
				}

				if (this.disableBefore) {
					if (!this.startDate) {
						if (!this.endDate) {
							return !this.dateCompare(this.getDate(nowDate, 0), time)
						} else {
							return !this.dateCompare(this.getDate(nowDate, 0), time) || endDate
						}
					} else {
						return !this.dateCompare(this.getDate(nowDate, 0), time) || !startDate || endDate
					}
				} else {
					if (!this.startDate) {
						if (!this.endDate) {
							return false
						} else {
							return endDate
						}
					} else {
						return !startDate || endDate
					}
				}
			},
			/**
			 * 返回今天
			 */
			backtoday() {
				this.getMonthAll(0, this.date)
			},
			/**
			 * 切换前一月 || 后一月
			 * @param {Object} id
			 * @param {Object} types
			 */
			dataBefor(id, types) {
				const year = this.canlender.year + '-' + this.canlender.month + '-' + this.canlender.date
				this.getMonthAll(id, year)
			},
			/**
			 * 选择当前的日期
			 * week 当前的周
			 * index 点击的下标索引
			 * ischeck 是否选中
			 */
			selectDays(params) {
				const {
					week,
					index,
					ischeck,
					isDay
				} = params
				if (!ischeck) return
				if (isDay) return
				// 多选判断

				const canlender = this.canlender
				const month = canlender.weeks[week][index].month < 10 ? '0' + canlender.weeks[week][index].month : canlender.weeks[week][index].month
				const date = canlender.weeks[week][index].date < 10 ? '0' + canlender.weeks[week][index].date : canlender.weeks[week][index].date
				const time = canlender.year + '-' + month + '-' + date
				this.isClick = true
				// this.multiple = this.multiple === 0 ? 1 : 0;

				if (this.multiple === 0) {
					this.multipleDates.begin = time
					this.multiple = 1
				} else if (this.multiple === 1) {
					this.multiple = 2
					if (this.multipleDates.data) {
						this.multipleDates.data = []
					}
					const compare = this.dateCompare(this.multipleDates.begin, time)
					if (compare) {
						this.multipleDates.data = this.geDateAll(this.multipleDates.begin, time)
						this.multipleDates.end = time
					} else {
						this.multipleDates.data = this.geDateAll(time, this.multipleDates.begin)
						this.multipleDates.end = this.multipleDates.begin
						this.multipleDates.begin = time
					}
				} else {
					this.multiple = 0
					this.multipleDates.data = []
					this.multipleDates.begin = ''
					this.multipleDates.end = ''
				}
				this.getMonthAll(0, time)
			},
			// 获取日历内容
			getWeek(dateData) {
				// 判断当前是 安卓还是ios ，传入不容的日期格式
				if (typeof dateData !== 'object') {
					dateData = dateData.replace(/-/g, '/')
				}
				const selected = this.selected
				const nowDate = this.getDate(this.date || new Date())
				const {
					year,
					month,
					date,
					day
				} = this.getNewDate(dateData)
				let canlender = []
				let dates = {
					firstDay: new Date(year, month - 1, 1).getDay(),
					lastMonthDays: [], // 上个月末尾几天
					currentMonthDys: [], // 本月天数
					nextMonthDays: [], // 下个月开始几天
					endDay: new Date(year, month, 0).getDay(),
					weeks: []
				}
				// 循环上个月末尾几天添加到数组
				for (let i = dates.firstDay; i > 0; i--) {
					const beforeDate = new Date(year, month - 1, -i + 1).getDate() + ''
					dates.lastMonthDays.push({
						date: beforeDate,
						month: month - 1,
						disable: this.isDisableBefore(year, month - 1, beforeDate),
						lunar: this.getlunar(year, month - 1, beforeDate),
						isDay: false
					})
				}
				let clockinfo = {
					have: false
				}
				// 循环本月天数添加到数组
				for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
					let have = false
					let clockinfoTemp = {}
					// 处理打卡信息
					for (let j = 0; j < selected.length; j++) {
						const selDate = selected[j].date.split('-')

						if (Number(year) === Number(selDate[0]) && Number(month) === Number(selDate[1]) && Number(i) === Number(selDate[2])) {
							have = true
							clockinfoTemp.have = true
							clockinfoTemp.date = selected[j].date
							if (selected[j].info) {
								clockinfoTemp.info = selected[j].info
							}
							if (JSON.stringify(selected[j].data) === '{}' || selected[j].data !== undefined) {
								clockinfoTemp.data = selected[j].data
							}
							if (Number(year) === Number(selDate[0]) && Number(month) === Number(selDate[1]) && Number(date) === Number(selDate[2])) {
								clockinfo = clockinfoTemp
							}
						}
					}
					// 多选
					const {
						begin,
						end,
						data
					} = this.multipleDates
					const [bYear, bMonth, bDate] = begin.split('-')
					const [eYear, eMonth, eDate] = end.split('-')
					let checked = false
					let multipleBegin = false
					let multipleEnd = false
					data.forEach((item, index) => {
						const [mYear, mMonth, mDate] = item.split('-')
						if (year === Number(mYear) && month === Number(mMonth) && i === Number(mDate)) {
							checked = true
						}
					})
					// 开始日期
					if (year === Number(bYear) && month === Number(bMonth) && i === Number(bDate)) {
						multipleBegin = true
					}

					// 结束日期
					if (year === Number(eYear) && month === Number(eMonth) && i === Number(eDate)) {
						// console.log(eYear, eMonth, eDate, 'end');
						multipleEnd = true
					}

					dates.currentMonthDys.push({
						checked: this.range ? checked : false,
						multipleBegin: this.range ? multipleBegin : false,
						multipleEnd: this.range ? multipleEnd : false,
						date: i + '',
						month: month,
						have,
						clockinfo: clockinfoTemp,
						disable: this.isDisableBefore(year, month, i + ''),
						lunar: this.getlunar(year, month, i + ''),
						isDay: nowDate === year + '-' + (month < 10 ? '0' + month : month) + '-' + (i < 10 ? '0' + i : i)
					})
				}
				const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length)
				// 循环下个月开始几天 添加到数组
				for (let i = 1; i < surplus + 1; i++) {
					dates.nextMonthDays.push({
						date: i + '',
						month: month + 1,
						disable: this.isDisableBefore(year, month + 1, i + ''),
						lunar: this.getlunar(year, month + 1, i + ''),
						isDay: false
					})
				}

				canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays)
				// 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
				for (let i = 0; i < canlender.length; i++) {
					if (i % 7 === 0) {
						dates.weeks[parseInt(i / 7)] = new Array(7)
					}
					dates.weeks[parseInt(i / 7)][i % 7] = canlender[i]
				}

				return {
					weeks: dates.weeks,
					month: month,
					date: date,
					day: day,
					year: year,
					clockinfo,
					lunar: CALENDAR.solar2lunar(year, month, date),
					lastDate: dates.currentMonthDys[dates.currentMonthDys.length - 1].date
				}
			},
			/**
			 * 计算阴历日期显示
			 */
			getlunar(year, month, date) {
				return CALENDAR.solar2lunar(year, month, date).IDayCn
			},
			/**
			 * 获取日期
			 * @param {Object} dateData
			 */
			getNewDate(dateData) {
				const _date = new Date(dateData)
				return {
					year: _date.getFullYear(), // 年
					month: _date.getMonth() + 1, // 月
					date: _date.getDate(), // 日
					day: _date.getDay() // 天
				}
			},
			/**
			 * 获取任意时间
			 */
			getDate(date, AddDayCount = 0, str = 'day') {
				if (typeof date !== 'object') {
					date = date.replace(/-/g, '/')
				}
				const dd = new Date(date)
				switch (str) {
					case 'day':
						dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
						break
					case 'month':
						dd.setMonth(dd.getMonth() + AddDayCount) // 获取AddDayCount天后的日期
						break
					case 'year':
						dd.setFullYear(dd.getFullYear() + AddDayCount) // 获取AddDayCount天后的日期
						break
				}
				const y = dd.getFullYear()
				const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
				const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
				return y + '-' + m + '-' + d
			},
			/**
			 * 比较时间大小
			 */
			dateCompare(startDate, endDate) {
				// 计算截止时间
				startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
				// 计算详细项的截止时间
				endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
				if (startDate <= endDate) {
					return true
				} else {
					return false
				}
			},
			geDateAll(begin, end) {
				var arr = []
				var ab = begin.split('-')
				var ae = end.split('-')
				var db = new Date()
				db.setUTCFullYear(ab[0], ab[1] - 1, ab[2])
				var de = new Date()
				de.setUTCFullYear(ae[0], ae[1] - 1, ae[2])
				var unixDb = db.getTime() - 24 * 60 * 60 * 1000
				var unixDe = de.getTime() - 24 * 60 * 60 * 1000
				for (var k = unixDb; k <= unixDe;) {
					// console.log((new Date(parseInt(k))).format());
					k = k + 24 * 60 * 60 * 1000
					arr.push(this.getDate(new Date(parseInt(k))))
				}
				return arr
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	@font-face {
		font-family: iconfont;
		src: url(//at.alicdn.com/t/font_989023_qdgy7euvg4.eot?t=1545961121132);
		src: url(//at.alicdn.com/t/font_989023_qdgy7euvg4.eot?t=1545961121132#iefix) format("embedded-opentype"), url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAPcAAsAAAAABiAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8fEf5Y21hcAAAAYAAAABLAAABcOcutbxnbHlmAAABzAAAACgAAAAoOZ2GtGhlYWQAAAH0AAAALwAAADYTtoNAaGhlYQAAAiQAAAAcAAAAJAfeA4NobXR4AAACQAAAAAgAAAAICAAAAGxvY2EAAAJIAAAABgAAAAYAFAAAbWF4cAAAAlAAAAAeAAAAIAENABJuYW1lAAACcAAAAUUAAAJtPlT+fXBvc3QAAAO4AAAAIQAAADLf6deseJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT1jY27438AQw9zI0AAUZgTJAQDeIAvweJxjYGBgZWBgYAZiHSBmYWBgDGFgZAABP6AoI1icmYELLM7CoARWwwISf8b2/z+MBPJZwCQDIxvDKOABkzJQHjisIJiBEQA3lgmBAAABAAD/gAMAA4EABQAACQE1CQE1AQACAP6IAXgBgP4AiAF4AXiIAAB4nGNgZGBgAOLdZzma4vltvjJwszCAwA3v+QsR9P8GFgbmRiCXg4EJJAoAMzgKmgB4nGNgZGBgbvjfwBDDwgACQJKRARUwAQBHCAJrBAAAAAQAAAAAAAAAABQAAHicY2BkYGBgYmBjANEgFgMDFxAyMPwH8xkACS0BIAAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAiZGJkZmBIyszMa8kv9SEgQEAGD0DTAAAAA==") format("woff"), url(//at.alicdn.com/t/font_989023_qdgy7euvg4.ttf?t=1545961121132) format("truetype"), url(//at.alicdn.com/t/font_989023_qdgy7euvg4.svg?t=1545961121132#iconfont) format("svg")
	}

	.iconfont {
		font-family: iconfont !important;
		font-size: 32upx;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale
	}

	.icon-jiantou:before {
		content: '\e606'
	}

	.uni-calendar__mask {
		position: fixed;
		bottom: 0;
		top: 0;
		width: 100%;
		background: rgba(0, 0, 0, .4);
		transition: all .3s;
		opacity: 0;
		z-index: 9998
	}

	.uni-calendar__mask.ani-mask-show {
		opacity: 1
	}

	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 100upx;
		background: #fff;
		z-index: 10000;
		font-size: 32upx
	}

	.uni-calendar__box {
		position: fixed;
		bottom: 0;
		z-index: 9999;
		width: 100%;
		box-sizing: border-box;
		transition: all .3s;
		transform: translateY(100%)
	}

	.uni-calendar__box.ani-calendar-show {
		transform: translateY(0)
	}

	.uni-calendar__box.uni-calendar__static {
		position: static;
		transform: translateY(0)
	}

	.uni-calendar__box .uni-calendar__nav {
		display: flex;
		justify-content: space-between;
		height: 100upx;
		border-bottom: 1px #f5f5f5 solid;
		background: #f5f5f5;
		padding: 0 10upx
	}

	.uni-calendar__box .uni-calendar__nav .uni-calendar__nav-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100upx;
		height: 100upx;
		color: #333
	}

	.uni-calendar__wrapper {
		width: 100%;
		box-sizing: border-box;
		font-size: 26rpx;
		background: #fff;
		transition: all .3s
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		height: 100rpx
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-after,
	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-befor {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
		width: 80rpx;
		text-align: center;
		line-height: 80rpx
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-after.uni-calendar__rollback,
	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-befor.uni-calendar__rollback {
		transform: rotate(180deg)
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__panel-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200upx
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__backtoday {
		position: absolute;
		right: 0;
		top: 25rpx;
		padding: 0 10rpx;
		padding-left: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		border: 1px rgba(253, 46, 50, .5) solid;
		border-right: none;
		font-size: 24rpx;
		border-top-left-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
		color: rgba(253, 46, 50, .7);
		background: rgba(241, 233, 233, .4)
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__day-detail {
		padding: 20upx;
		padding-left: 30upx;
		border-top: 1px #f5f5f5 solid
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__header {
		display: flex;
		font-size: 28upx;
		border-top: 1px #f5f5f5 solid
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__header .uni-calendar__week {
		width: 100%;
		text-align: center;
		line-height: 80rpx;
		color: #333;
		font-weight: 700
	}

	.uni-calendar__wrapper .uni-calenda__content .uni-calendar__body {
		display: flex;
		flex-wrap: wrap;
		font-size: 28upx
	}
</style>