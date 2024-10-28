<template>
	<view class="mpvue-picker">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<!-- #ifndef H5 -->
				<uni-icons size="16" type="info"></uni-icons>
				<!-- #endif -->
				说明 :
			</view>
			<view class="uni-helllo-text">
				<text>
					在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听城市选择按钮的点击事件。
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'nav-city-dropdown',
				pickerValueArray: [{
						label: '北京市',
						value: 110000
					},
					{
						label: '天津市',
						value: 120000
					},
					{
						label: '广州市',
						value: 440100
					},
					{
						label: '深圳市',
						value: 440300
					}
				],
			};
		},
		onReady() {
			// #ifdef VUE3
			this.setStyle(0, '北京市')
			// #endif
			// #ifndef VUE3
			this.setStyle(1, '北京市')
			// #endif
		},
		methods: {
			/**
			 * 修改导航栏buttons
			 * index[number] 修改的buttons 下标索引，最右边索引为0
			 * text[string] 需要修改的text 内容
			 */
			setStyle(index, text) {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				if (text.length > 3) {
					text = text.substr(0, 3) + '...';
				}
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleNView = currentWebview.getStyle().titleNView;
				// 添加文字过长截取为3个字符，请根据自己业务需求更改
				titleNView.buttons[0].text = text;
				currentWebview.setStyle({
					titleNView: titleNView
				});
				// #endif
				// #ifdef H5
				// h5 临时方案
				const btn = document.getElementsByClassName('uni-btn-icon')[index]
				btn.innerText = text;
				// #endif
			}
		},
		onNavigationBarButtonTap(e) {
			let that = this;
			if (e.index === 0) {
				uni.showActionSheet({
					itemList: that.pickerValueArray.map(item => item.label),
					success: function(res) {
						let index = res.tapIndex;
						// #ifdef VUE3
						that.setStyle(0, that.pickerValueArray[index].label)
						// #endif
						// #ifndef VUE3
						that.setStyle(1, that.pickerValueArray[index].label)
						// #endif
						console.log(JSON.stringify(that.pickerValueArray[index]));
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}
		}
	};
</script>
