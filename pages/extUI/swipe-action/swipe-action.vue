<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">uni-swipe-action, a container for triggering options by sliding, the container can hold components such as lists and trigger some actions by sliding left and right。</text>
		</uni-card>
		<uni-section
		    title="Basic usage"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :threshold="0"
			    :right-options="options1"
			    @click="bindClick"
			>
				<view class="content-box" @click="contentClick">
					<text class="content-text">Using Data Fill</text>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item @click="bindClick">
				<template v-slot:left>
					<view class="slot-button">
						<text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'Sticky'}})"
						>Sticky</text>
					</view>
				</template>
				<view class="content-box" @click="contentClick">
					<text class="content-text">Use of left and right slots</text>
				</view>
				<template v-slot:right>
					<view class="slot-button" @click="bindClick({position:'right',content:{text:'delete'}})"><text class="slot-button-text">delete</text></view>
				</template>
			</uni-swipe-action-item>
			<uni-swipe-action-item
			    :right-options="options1"
			    @click="bindClick"
			>
				<template v-slot:left>
					<view class="slot-button"><text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'Sticky'}})"
						>Sticky</text></view>
				</template>
				<view class="content-box" @click="contentClick">
					<text class="content-text">Mixed data and slot usage</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="No sliding"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item :disabled="true">
				<view class="content-box">
					<text class="content-text">No left or right scrolling</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="Using variable control switches"
		    type="line"
		></uni-section>
		<view class="example-body">
			<view
			    class="button"
			    @click="setOpened"
			>
				<text class="button-text">Current Status：{{ isOpened }}</text>
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
					<text class="content-text">Use variables to control the opening state of SwipeAction</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<uni-section
		    title="swipe-action List"
		    type="line"
		></uni-section>
		<uni-swipe-action ref="swipeAction">
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
					text: 'cancel Sticky'
				}],
				options2: [{
						text: 'cancel',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: 'confirm',
						style: {
							backgroundColor: '#F56C6C'
						}
					}
				],
				swipeList: [{
						options: [{
							text: 'add',
							style: {
								backgroundColor: '#F56C6C'
							}
						}],
						id: 0,
						content: 'Left click to add a new data'
					},
					{
						id: 1,
						options: [{
								text: 'Sticky'
							},
							{
								text: 'delete',
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
								text: 'Sticky'
							},
							{
								text: 'Mark as read',
								style: {
									backgroundColor: 'rgb(254,156,1)'
								}
							},
							{
								text: 'delete',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],
						content: 'item3'
					}
				]
			};
		},
		onReady() {
			// 模拟延迟赋值
			setTimeout(() => {
				this.isOpened = 'right';
			}, 1000);

			uni.$on('update',res=>{
				console.log(111);
				this.swipeClick({
					content:{
						text:'add'
					}
				})
			})
		},
		methods: {
			contentClick(){
				console.log('点击内容');
				uni.showToast({
					title:'点击内容',
					icon:'none'
				})
			},
			bindClick(e) {
				console.log(e);
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
				console.log('return：', e);
			},
			swipeChange(e, index) {
				console.log('return：', e);
				console.log('current idnex：', index);
			},
			swipeClick(e, index) {
				let {
					content
				} = e;
				if (content.text === 'delete') {
					uni.showModal({
						title: 'Tips',
						content: 'whether delete?',
						success: res => {
							if (res.confirm) {
								this.swipeList.splice(index, 1);
							} else if (res.cancel) {
								console.log('User click cancel');
							}
						}
					});
				} else if (content.text === 'add') {
					if (this.swipeList.length < 10) {
						this.swipeList.push({
							id: new Date().getTime(),
							options: [{
									text: 'Sticky'
								},
								{
									text: 'Mark as read',
									style: {
										backgroundColor: 'rgb(254,156,1)'
									}
								},
								{
									text: 'delete',
									style: {
										backgroundColor: 'rgb(255,58,49)'
									}
								}
							],
							content: 'add' + new Date().getTime()
						});
						uni.showToast({
							title: `add a pice data`,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: `Up to ten data items`,
							icon: 'none'
						});
					}
				} else {
					uni.showToast({
						title: `Clicked on the ${e.content.text} button`,
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
