<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl">普通选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<!-- #ifndef MP-ALIPAY -->
		<view class="uni-title uni-common-pl">多列选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
						<view class="uni-input">{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<!-- #endif -->

		<view class="uni-title uni-common-pl">时间选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">日期选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		data() {
			return {
				title: 'picker',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],
				multiIndex: [0, 0, 0],
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				time: '12:01'
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			},
			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0:
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物']
								this.multiArray[2] = ['猪肉绦虫', '吸血虫']
								break
							case 1:
								this.multiArray[1] = ['鱼', '两栖动物', '爬行动物']
								this.multiArray[2] = ['鲫鱼', '带鱼']
								break
						}
						this.multiIndex[1] = 0
						this.multiIndex[2] = 0
						break
					case 1:
						switch (this.multiIndex[0]) {
							case 0:
								switch (this.multiIndex[1]) {
									case 0:
										this.multiArray[2] = ['猪肉绦虫', '吸血虫']
										break
									case 1:
										this.multiArray[2] = ['蛔虫']
										break
									case 2:
										this.multiArray[2] = ['蚂蚁', '蚂蟥']
										break
									case 3:
										this.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
										break
									case 4:
										this.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物']
										break
								}
								break
							case 1:
								switch (this.multiIndex[1]) {
									case 0:
										this.multiArray[2] = ['鲫鱼', '带鱼']
										break
									case 1:
										this.multiArray[2] = ['青蛙', '娃娃鱼']
										break
									case 2:
										this.multiArray[2] = ['蜥蜴', '龟', '壁虎']
										break
								}
								break
						}
						this.multiIndex[2] = 0
						break
				}
				this.$forceUpdate()
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			}
			
		}
	}
</script>

<style>

</style>
