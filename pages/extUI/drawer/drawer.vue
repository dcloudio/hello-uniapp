<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
		</uni-card>

		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text
										class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text
										class="word-btn-white">关闭Drawer</text></button>
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
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
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
		// app端拦截返回事件 ，仅app端生效
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
