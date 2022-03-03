<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFFFFF; padding:40rpx;">
				<view class="uni-hello-text uni-center">Current Location Information</view>
				<block v-if="hasLocation === false">
					<view class="uni-h2 uni-center uni-common-mt">No location selected</view>
				</block>
				<block v-if="hasLocation === true">
					<view class="uni-hello-text uni-center" style="margin-top:10px;">
						{{locationAddress}}
					</view>
					<view class="uni-h2 uni-center uni-common-mt">
						<text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</text>
						<text>\nN: {{location.latitude[0]}}°{{location.latitude[1]}}′</text>
					</view>
				</block>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @tap="chooseLocation">Select a location</button>
				<button @tap="clear">Empty</button>
			</view>
		</view>
	</view>
</template>
<script>
	import * as util from '../../../common/util.js'
	var formatLocation = util.formatLocation;

	export default {
		data() {
			return {
				title: 'chooseLocation',
				hasLocation: false,
				location: {},
				locationAddress: ''
			}
		},
		methods: {
			chooseLocation: function () {
				uni.chooseLocation({
					success: (res) => {
						this.hasLocation = true,
							this.location = formatLocation(res.longitude, res.latitude),
							this.locationAddress = res.address
					}
				})
			},
			clear: function () {
				this.hasLocation = false
			}
		}
	}
</script>

<style>
	.page-body-info {
		padding-bottom: 0;
		height: 440rpx;
	}
</style>
