<template>
	<view class="uni-goods-nav">
		<!-- 底部占位 -->
		<view class="uni-tab__seat" />
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-left">
				<view v-for="(item,index) in options" :key="index" class="flex uni-tab__cart-button-left uni-tab__shop-cart" @click="onClick(index,item)">
					<view class="uni-tab__icon">
						<uni-icons :type="item.icon" size="20" color="#646566"></uni-icons>
						<!-- <image class="image" :src="item.icon" mode="widthFix" /> -->
					</view>
					<text class="uni-tab__text">{{ item.text }}</text>
					<view class="flex uni-tab__dot-box">
						<text v-if="item.info" :class="{ 'uni-tab__dots': item.info > 9 }" class="uni-tab__dot " :style="{'backgroundColor':item.infoBackgroundColor?item.infoBackgroundColor:'#ff0000',
						color:item.infoColor?item.infoColor:'#fff'
						}">{{ item.info }}</text>
					</view>
				</view>
			</view>
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-right ">
				<view v-for="(item,index) in buttonGroup" :key="index" :style="{backgroundColor:item.backgroundColor,color:item.color}" class="flex uni-tab__cart-button-right" @click="buttonClick(index,item)"><text :style="{color:item.color}" class="uni-tab__cart-button-right-text">{{ item.text }}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	/**
	 * GoodsNav 商品导航
	 * @description 商品加入购物车、立即购买等
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=865
	 * @property {Array} options 组件参数
	 * @property {Array} buttonGroup 组件按钮组参数
	 * @property {Boolean} fill = [true | false] 组件按钮组参数
	 * @event {Function} click 左侧点击事件
	 * @event {Function} buttonClick 右侧按钮组点击事件
	 * @example <uni-goods-nav :fill="true"  options="" buttonGroup="buttonGroup"  @click="" @buttonClick="" />
	 */
	export default {
		name: 'UniGoodsNav',
		components: {
			uniIcons
		},
		props: {
			options: {
				type: Array,
				default () {
					return [{
						icon: 'shop',
						text: '店铺',
					}, {
						icon: 'cart',
						text: '购物车'
					}]
				}
			},
			buttonGroup: {
				type: Array,
				default () {
					return [{
							text: '加入购物车',
							backgroundColor: '#ffa200',
							color: '#fff'
						},
						{
							text: '立即购买',
							backgroundColor: '#ff0000',
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
					content: item,

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

<style scoped>
	.flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-goods-nav {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
	}

	.uni-tab__cart-box {
		flex: 1;
		height: 50px;
		background-color: #fff;
		z-index: 900;
	}

	.uni-tab__cart-sub-left {
		padding: 0 5px;
	}

	.uni-tab__cart-sub-right {
		flex: 1;
	}

	.uni-tab__right {
		margin: 5px 0;
		margin-right: 10px;
		border-radius: 100px;
		overflow: hidden;
	}

	.uni-tab__cart-button-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 10px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-tab__icon {
		width: 18px;
		height: 18px;
	}

	.image {
		width: 18px;
		height: 18px;
	}

	.uni-tab__text {
		margin-top: 3px;
		font-size: 12px;
		color: #646566;
	}

	.uni-tab__cart-button-right {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		flex: 1;
		justify-content: center;
		align-items: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-tab__cart-button-right-text {
		font-size: 14px;
		color: #fff;
	}

	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}

	.uni-tab__dot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		position: absolute;
		right: -2px;
		top: 2px;
		justify-content: center;
		align-items: center;
	}

	.uni-tab__dot {
		padding: 0 4px;
		line-height: 15px;
		color: #ffffff;
		text-align: center;
		font-size: 12px;
		background-color: #ff0000;
		border-radius: 15px;
	}

	.uni-tab__dots {
		padding: 0 4px;
		border-radius: 15px;
	}

	.uni-tab__color-y {
		background-color: #ffa200;
	}

	.uni-tab__color-r {
		background-color: #ff0000;
	}
</style>