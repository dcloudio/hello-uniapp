<template>
	<view>
		<!-- 底部占位 -->
		<view class="uni-tab__seat" />
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-box">
				<view v-for="(item,index) in options" :key="index" class="flex uni-tab__cart-button-left uni-tab__shop-cart" @click="onClick(index,item)">
					<view class="uni-tab__icon">
						<image :src="item.icon" mode="widthFix" />
					</view>
					<text class="uni-tab__text">{{ item.text }}</text>
					<view class="flex uni-tab__dot-box">
						<view v-if="item.info" :class="{ 'uni-tab__dots': item.info > 9 }" class="uni-tab__dot ">
							{{ item.info }}
						</view>
					</view>
				</view>
			</view>
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box ">
				<view v-for="(item,index) in buttonGroup" :key="index" :style="{backgroundColor:item.backgroundColor,color:item.color}" class="flex uni-tab__cart-button-right" @click="buttonClick(index,item)">{{ item.text }}</view>

				<!-- <view class="flex uni-tab__cart-button-right uni-tab__color-y ">立即购买</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniGoodsNav',
		props: {
			options: {
				type: Array,
				default () {
					return [{
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
						text: '店铺'
					}, {
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
						text: '购物车'
					}]
				}
			},
			buttonGroup: {
				type: Array,
				default () {
					return [{
							text: '加入购物车',
							backgroundColor: '#ff0000',
							color: '#fff'
						},
						{
							text: '立即购买',
							backgroundColor: '#ffa200',
							color: '#fff'
						}
					]
				}
			},
			fill: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick(index, item) {
				this.$emit('click', {
					index,
					content: item
				})
			},
			buttonClick(index, item) {
				if (uni.report) {
					uni.report(item.text, item.text)
				}
				this.$emit('buttonClick', {
					index,
					content: item
				})
			}
		}
	}
</script>

<style>
	.flex {
		display: flex;
	}

	.uni-tab__cart-box {
		width: 100%;
		height: 100rpx;
		background: #fff;
		z-index: 900;
	}

	.uni-tab__cart-sub-box {
		width: 100%;
		box-sizing: border-box;
	}

	.uni-tab__right {
		margin: 5px 0;
		margin-right: 10px;
		border-radius: 100px;
		overflow: hidden;
	}

	.uni-tab__cart-button-left {
		position: relative;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		font-size: 24rpx;
	}

	.uni-tab__icon {
		width: 40rpx;
		height: 40rpx;
	}

	.uni-tab__icon image {
		width: 100%;
		height: 100%;
	}

	.uni-tab__cart-button-left .uni-tab__text {
		margin-top: 5rpx;
		font-size: 24rpx;
		color: #666;
	}

	.uni-tab__cart-button-right {
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: 24rpx;
		color: #fff;
	}

	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}

	.uni-tab__cart-button-left .uni-tab__dot-box {
		position: absolute;
		right: 40rpx;
		top: 20rpx;
		justify-content: center;
		align-items: center;
		width: 0;
		height: 0;
	}

	.uni-tab__dot-box .uni-tab__dot {
		flex-shrink: 0;
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #ffffff;
		text-align: center;
		font-size: 12px;
		background: #ff0000;
		border-radius: 50%;
	}

	.uni-tab__dot-box .uni-tab__dot.uni-tab__dots {
		padding: 0 8rpx;
		width: auto;
		border-radius: 30rpx;
	}

	.uni-tab__color-y {
		background: #ffa200;
	}

	.uni-tab__color-r {
		background: #ff0000;
	}
</style>