<template>
	<view class="mpvue-picker">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<!-- #ifndef H5 -->
				<uni-icon size="16" type="info"></uni-icon>
				<!-- #endif -->
				说明 :
			</view>
			<view class="uni-helllo-text">
				<view>
					在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听城市选择按钮的点击事件。
				</view>
			</view>
		</view>
		<mpvue-picker
			:themeColor="themeColor"
			ref="mpvuePicker"
			:mode="mode"
			:deepLength="deepLength"
			:pickerValueDefault="pickerValueDefault"
			@onConfirm="onConfirm"
			@onCancel="onCancel"
			:pickerValueArray="pickerValueArray"
		></mpvue-picker>
	</view>
</template>

<script>
// https://github.com/zhetengbiji/mpvue-picker
import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
// https://github.com/zhetengbiji/mpvue-citypicker
import cityData from '../../../common/city.data.js';

export default {
	components: {
		mpvuePicker
	},
	data() {
		return {
			title: 'nav-city-dropdown',
			pickerSingleArray: [
				{
					label: '中国',
					value: 1
				},
				{
					label: '俄罗斯',
					value: 2
				},
				{
					label: '美国',
					value: 3
				},
				{
					label: '日本',
					value: 4
				}
			],
			themeColor: '#007AFF',
			mode: '',
			deepLength: 1,
			pickerValueDefault: [0],
			pickerValueArray: []
		};
	},
	onReady() {
		this.setStyle(0, '北京市');
	},
	methods: {
		onCancel(e) {
			console.log(e);
		},
		// 单列
		showSinglePicker() {
			this.pickerValueArray = cityData;
			this.mode = 'selector';
			this.deepLength = 1;
			this.pickerValueDefault = [0];
			this.$refs.mpvuePicker.show();
		},
		onConfirm(e) {
			console.log(e.label);
			this.setStyle(0, e.label);
		},
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
			document.getElementsByClassName('uni-btn-icon')[1].innerText = text;
			// #endif
		}
	},
	onBackPress() {
		if (this.$refs.mpvuePicker.showPicker) {
			this.$refs.mpvuePicker.pickerCancel();
			return true;
		}
	},
	onUnload() {
		if (this.$refs.mpvuePicker.showPicker) {
			this.$refs.mpvuePicker.pickerCancel();
		}
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			this.showSinglePicker();
		}
	}
};
</script>

<style></style>
