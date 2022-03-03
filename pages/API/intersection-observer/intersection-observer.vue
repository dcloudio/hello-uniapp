<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				{{appear ? 'Small ball appears' : 'Small ball disappears'}}
			</view>
			<scroll-view class="scroll-view" scroll-y>
				<view class="scroll-area">
					<text class="notice">Scroll down to make the ball appear</text>
					<view class="ball"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	let observer = null;
	export default {
		data() {
			return {
				appear: false,
				title:'intersectionObserver'
			}
		},
		onReady() {
			observer = uni.createIntersectionObserver(this);
			observer.relativeTo('.scroll-view').observe('.ball', (res) => {
				if (res.intersectionRatio > 0 && !this.appear) {
					this.appear = true;
				} else if (!res.intersectionRatio > 0 && this.appear) {
					this.appear = false;
				}
			})
		},
		onUnload() {
			if (observer) {
				observer.disconnect()
			}
		}
	}
</script>
<style>
	.scroll-view {
		height: 400rpx;
		background: #fff;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.scroll-area {
		height: 1300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.notice {
		margin-top: 150rpx;
		margin: 150rpx 0 400rpx 0;
	}

	.ball {
		width: 200rpx;
		height: 200rpx;
		background: #4cd964;
		border-radius: 50%;
	}
</style>
