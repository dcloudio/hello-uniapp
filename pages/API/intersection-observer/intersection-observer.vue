<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				{{appear ? '小球出现' : '小球消失'}}
			</view>
			<scroll-view class="scroll-view" scroll-y>
				<view class="scroll-area">
					<text class="notice">向下滚动让小球出现</text>
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
		height: 400upx;
		background: #fff;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.scroll-area {
		height: 1300upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.notice {
		margin-top: 150upx;
		margin: 150upx 0 400upx 0;
	}

	.ball {
		width: 200upx;
		height: 200upx;
		background: #4cd964;
		border-radius: 50%;
	}
</style>
