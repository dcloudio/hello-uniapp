<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button type="default" @tap="modalTap">Modal with title</button>
				<button type="default" @tap="noTitlemodalTap">untitled modal</button>
			</view>
		</view>
	</view>
</template>
<script>

	export default {
		data() {
			return {
				title: 'modal',
				modalHidden: true,
				modalHidden2: true
			}
		},
		methods: {
			modalTap: function (e) {
				uni.showModal({
					title: "Pop-up window title",
					content: "Pop-up content, inform the current status, information and solutions, try to control the description text within three lines",
					showCancel: false,
					confirmText: "OK"
				})
			},
			noTitlemodalTap: function (e) {
				uni.showModal({
					content: "Pop-up content, inform the current status, information and solutions, try to control the description text within three lines",
					confirmText: "OK",
					cancelText: "Cancel"
				})
			}
		}
	}
</script>