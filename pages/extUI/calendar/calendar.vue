<template>
	<view class="calendar-content">
		<!-- :start-date="'2019-2-10'"
		:end-date="'2019-3-15'" -->
		<text class="calendar-title">日历组件</text>
		<view class="calendar-tags-group">
			<view class="calendar-tags" :class="{ checked: item.checked }" v-for="(item, index) in tags" :key="index" @click="toggle(index, item)">
				<view class="calendar-tags-item">{{ item.name }}</view>
			</view>
		</view>
		<button class="calendar-button" type="button" @click="open">打开日历</button>

		<view v-if="show" class="calendar-mask" @click="closeMask">
			<view class="calendar-box" @click.stop="">
				<uni-calendar :lunar="tags['lunar'].checked" :fixedHeihgt="tags['fixedHeihgt'].checked" :slide="slide" :disableBefore="tags['disableBefore'].checked" :start-date="startDate" :end-date="endDate" :date="date" />
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'

	export default {
		components: {
			uniCalendar
		},
		data() {
			let tags = {
				lunar: {
					name: '农历',
					checked: false,
					attr: 'lunar'
				},
				fixedHeihgt: {
					name: '固定高度',
					checked: false,
					attr: 'fixedHeihgt'
				},
				vertical: {
					name: '垂直滚动',
					checked: false,
					attr: 'vertical'
				},
				horizontal: {
					name: '水平滚动',
					checked: false,
					attr: 'horizontal'
				},
				startDate: {
					name: '开始日期(2019-03-05)',
					checked: false,
					attr: 'startDate'
				},
				endDate: {
					name: '结束日期(2019-04-10)',
					checked: false,
					attr: 'endDate'
				},
				disableBefore: {
					name: '禁用今天之前的日期',
					checked: false,
					attr: 'disableBefore'
				},
				date: {
					name: '自定义当前日期(2019-03-20)',
					checked: false,
					attr: 'date'
				}
			};

			return {
				show: false,
				tags,
				slide: 'none',
				date: '',
				startDate: '',
				endDate: ''
			};
		},
		onLoad() {},
		methods: {
			closeMask() {
				this.show = false;
			},
			toggle(index, item) {
				this.tags[index].checked = !item.checked;
				// item.checked = !item.checked;
				if (index === 'horizontal') {
					this.tags['vertical'].checked = false;
				}
				if (index === 'vertical') {
					this.tags['horizontal'].checked = false;
				}
				// this.attribute[item.attr] = !item.checked;
			},
			open() {
				if (this.tags['horizontal'].checked) {
					this.slide = 'horizontal';
				} else if (this.tags['vertical'].checked) {
					this.slide = 'vertical';
				} else {
					this.slide = 'none';
				}
				if (this.tags['startDate'].checked) {
					this.startDate = '2019-03-05';
				} else {
					this.startDate = '';
				}
				if (this.tags['endDate'].checked) {
					this.endDate = '2019-04-10';
				} else {
					this.endDate = '';
				}
				if (this.tags['date'].checked) {
					this.date = '2019-03-20';
				} else {
					this.date = '';
				}
				this.show = true;
			}
		}
	};
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	page {
		background: #fff;
	}

	.calendar-content {
		padding: 20upx 0;
		padding-bottom: 60upx;
		font-size: 26upx;
	}

	.calendar-content>.calendar-title {
		line-height: 80upx;
		font-weight: bold;
		color: #333;
		font-size: 30upx;
		border-left: 2px #0d9ebb solid;
		padding-left: 20upx;
		margin: 0 20upx;
	}

	.calendar-tags-group {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 10upx;
	}

	.calendar-tags {
		width: 50%;
		box-sizing: border-box;
	}

	.calendar-tags-item {
		padding: 10upx 20upx;
		border: 1px #999 solid;
		color: #666;
		border-radius: 10upx;
		text-align: center;
		margin: 10upx;
	}

	.calendar-tags-item:active {
		background: #f8f8f8;
	}

	.checked .calendar-tags-item {
		background: #0d9ebb;
		color: #fff;
		border: 1px rgba(0, 0, 0, 0.1) solid;
	}

	.calendar-button {
		margin: 10upx 20upx;
	}

	.calendar-mask {
		position: fixed;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		background: rgba(0, 0, 0, 0.4);
	}

	.calendar-box {
		margin: 20upx;
		border: 1px #f5f5f5 solid;
		border-radius: 10upx;
		width: 100%;
		overflow: hidden;
	}
</style>