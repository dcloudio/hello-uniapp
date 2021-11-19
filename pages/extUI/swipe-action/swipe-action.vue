<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">通过滑动触发选项的容器，容器内可放置列表等组件，通过左右滑动来触发一些操作。</text>
		</uni-card>
		<uni-section
		    title="基本用法"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :threshold="0"
			    :right-options="options1"
			    @click="bindClick"
			>
				<view class="content-box">
					<text class="content-text">使用数据填充</text>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item @click="bindClick">
				<template v-slot:left>
					<view class="slot-button">
						<text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'置顶'}})"
						>置顶</text>
					</view>
				</template>
				<view class="content-box">
					<text class="content-text">使用插槽</text>
				</view>
				<template v-slot:right>
					<view class="slot-button"><text class="slot-button-text">删除</text></view>
				</template>
			</uni-swipe-action-item>
			<uni-swipe-action-item
			    :right-options="options1"
			    @click="bindClick"
			>
				<template v-slot:left>
					<view class="slot-button"><text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'置顶'}})"
						>置顶</text></view>
				</template>
				<view class="content-box">
					<text class="content-text">混合使用</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="禁止滑动"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item :disabled="true">
				<view class="content-box">
					<text class="content-text">禁止左右滚动</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="使用变量控制开关"
		    type="line"
		></uni-section>
		<view class="example-body">
			<view
			    class="button"
			    @click="setOpened"
			>
				<text class="button-text">当前状态：{{ isOpened }}</text>
			</view>
		</view>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :right-options="options2"
			    :show="isOpened"
			    :auto-close="false"
			    @change="change"
			    @click="bindClick"
			>
				<view class="content-box">
					<text class="content-text">使用变量控制SwipeAction的开启状态</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<uni-section
		    title="swipe-action 列表"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item
			    v-for="(item, index) in swipeList"
			    :right-options="item.options"
			    :key="item.id"
			    @change="swipeChange($event, index)"
			    @click="swipeClick($event, index)"
			>
				<view class="content-box">
					<text class="content-text">{{ item.content }}</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				show: false,
				isOpened: 'none',
				options1: [{
					text: '取消置顶'
				}],
				options2: [{
						text: '取消',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '确认',
						style: {
							backgroundColor: '#F56C6C'
						}
					}
				],
				swipeList: []
			};
		},
		onReady() {
			// 模拟延迟赋值
			setTimeout(() => {
				this.isOpened = 'right';
				this.swipeList = [{
						options: [{
							text: '添加',
							style: {
								backgroundColor: '#F56C6C'
							}
						}],
						id: 0,
						content: 'item1'
					},
					{
						id: 1,
						options: [{
								text: '置顶'
							},
							{
								text: '删除',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],
						content: 'item2'
					},
					{
						id: 2,
						options: [{
								text: '置顶'
							},
							{
								text: '标记为已读',
								style: {
									backgroundColor: 'rgb(254,156,1)'
								}
							},
							{
								text: '删除',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],
						content: 'item3'
					}
				]
			}, 1000);
		},
		methods: {
			bindClick(e) {
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			},
			setOpened() {
				if (this.isOpened === 'none') {
					this.isOpened = 'left';
					return;
				}
				if (this.isOpened === 'left') {
					this.isOpened = 'right';
					return;
				}
				if (this.isOpened === 'right') {
					this.isOpened = 'none';
					return;
				}
			},
			change(e) {
				this.isOpened = e;
				console.log('返回：', e);
			},
			swipeChange(e, index) {
				console.log('返回：', e);
				console.log('当前索引：', index);
			},
			swipeClick(e, index) {
				let {
					content
				} = e;
				if (content.text === '删除') {
					uni.showModal({
						title: '提示',
						content: '是否删除',
						success: res => {
							if (res.confirm) {
								this.swipeList.splice(index, 1);
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else if (content.text === '添加') {
					if (this.swipeList.length < 10) {
						this.swipeList.push({
							id: new Date().getTime(),
							options: [{
									text: '置顶'
								},
								{
									text: '标记为已读',
									style: {
										backgroundColor: 'rgb(254,156,1)'
									}
								},
								{
									text: '删除',
									style: {
										backgroundColor: 'rgb(255,58,49)'
									}
								}
							],
							content: '新增' + new Date().getTime()
						});
						uni.showToast({
							title: `添加了一条数据`,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: `最多添加十条数据`,
							icon: 'none'
						});
					}
				} else {
					uni.showToast({
						title: `点击了${e.content.text}按钮`,
						icon: 'none'
					});
				}
			}
		}
	};
</script>

<style lang="scss">
	.content-box {
		flex: 1;
		/* #ifdef APP-NVUE */
		justify-content: center;
		/* #endif */
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border-bottom-color: #f5f5f5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

	.content-text {
		font-size: 15px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding: 10px 0;
		background-color: #fff;
	}

	.button {
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		padding: 4px 8px;
		border-radius: 4px;
	}

	.button-text {
		font-size: 15px;
	}

	.slot-button {
		/* #ifndef APP-NVUE */
		display: flex;
		height: 100%;
		/* #endif */
		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		background-color: #ff5a5f;
	}

	.slot-button-text {
		color: #ffffff;
		font-size: 14px;
	}
</style>
