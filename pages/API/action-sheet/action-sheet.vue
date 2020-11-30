<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button class="target" type="default" @tap="actionSheetTap">弹出action sheet</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'action-sheet',
				buttonRect: {}
			}
		},
		// #ifdef H5
		onReady() {
			this.getNodeInfo()
			window.addEventListener('resize', this.getNodeInfo)
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.getNodeInfo)
		},
		// #endif
		methods: {
			actionSheetTap() {
				const that = this
				uni.showActionSheet({
					title:'标题',
					itemList: ['item1', 'item2', 'item3', 'item4'],
					popover: {
						top: that.buttonRect.top * 2 + that.buttonRect.height,
						left: that.buttonRect.left + that.buttonRect.width/2
					},
					success: (e) => {
						console.log(e.tapIndex);
						uni.showToast({
							title:"点击了第" + e.tapIndex + "个选项",
							icon:"none"
						})
					}
				})
			},
			// #ifdef H5
			getNodeInfo() {
				let i = 1
				console.log(i++)
				uni.createSelectorQuery().select('.target').boundingClientRect().exec((ret) => {
					const rect = ret[0]
					if (rect) {
						this.buttonRect = rect
					}
				});
			}
			// #endif
		}
	}
</script>
