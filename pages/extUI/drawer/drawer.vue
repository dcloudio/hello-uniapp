<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">This is an example of the use of the drawer navigation component, which can be specified to pop up on the left or right side of the menu (initialization only), and any content can be placed inside the component. The navigation menu can be displayed by clicking on the page button.</text>
		</uni-card>

		<uni-section title="Slide out left side" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">Show Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">Hide Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="Slide out right side" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">show Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">The right mask can only be closed with a button, not by clicking on the mask</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text
										class="word-btn-white">Hide Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>Scrollable Content {{item}}</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text
										class="word-btn-white">Hide Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showRight: false,
				showLeft: false
			}
		},
		methods: {
			confirm() {},
			showDrawer(e) {
				this.$refs[e].open()
			},
			closeDrawer(e) {
				this.$refs[e].close()
			},
			change(e, type) {
				console.log((type === 'showLeft' ? 'left drawer' : 'right drawer') + (e ? 'show' : 'hide'));
				this[type] = e
			}
		},
		onNavigationBarButtonTap(e) {
			if (this.showLeft) {
				this.$refs.showLeft.close()
			} else {
				this.$refs.showLeft.open()
			}
		},
		onBackPress() {
			if (this.showRight || this.showLeft) {
				this.$refs.showLeft.close()
				this.$refs.showRight.close()
				return true
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		padding: 10px;
	}

	.scroll-view {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1
	}

	// 处理抽屉内容滚动
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.info {
		padding: 15px;
		color: #666;
	}

	.info-text {
		font-size: 14px;
		color: #666;
	}

	.info-content {
		padding: 5px 15px;
	}

	.close {
		padding: 10px;
	}
</style>
