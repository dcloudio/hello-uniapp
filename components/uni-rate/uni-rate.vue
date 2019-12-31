<template>
	<view class="uni-rate">
		<view :key="index" :style="{ marginLeft: margin + 'px' }" @click="_onClick(index)" class="uni-rate__icon" v-for="(star, index) in stars">
			<uni-icons :color="color" :size="size" :type="isFill ? 'star-filled' : 'star'" />
			<!-- #ifdef APP-NVUE -->
			<view :style="{ width: star.activeWitch.replace('%','')*size/100+'px'}" class="uni-rate__icon-on">
				<uni-icons style="text-align: left;" :color="activeColor" :size="size" type="star-filled" />
			</view>
			<!-- #endif -->
			<!-- #ifndef APP-NVUE -->
			<view :style="{ width: star.activeWitch,top:-size/2+'px' }" class="uni-rate__icon-on">
				<uni-icons :color="activeColor" :size="size" type="star-filled" />
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue";

	/**
	 * Rate 评分
	 * @description 评分组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=33
	 * @property {Number} value 当前评分
	 * @property {Number} max 最大的评分
	 * @property {Number} size 星星的大小
	 * @property {Number} margin 星星的间距
	 * @property {String} color 星星的颜色
	 * @property {String} activeColor 选中状态的星星的颜色
	 * @property {Boolean} isFill = [true|false] 星星的类型，是否为实心类型
	 * @property {Boolean} disabled = [true|false] 是否为不可点击状态
	 * @event {Function} change uniRate 的 value 改变时触发事件，e={value:Number}
	 */

	export default {
		name: "UniRate",
		components: {
			uniIcons
		},
		props: {
			isFill: {
				// 星星的类型，是否镂空
				type: [Boolean, String],
				default: true
			},
			color: {
				// 星星的颜色
				type: String,
				default: "#ececec"
			},
			activeColor: {
				// 星星选中状态颜色
				type: String,
				default: "#ffca3e"
			},
			size: {
				// 星星的大小
				type: [Number, String],
				default: 24
			},
			value: {
				// 当前评分
				type: [Number, String],
				default: 0
			},
			max: {
				// 最大评分
				type: [Number, String],
				default: 5
			},
			margin: {
				// 星星的间距
				type: [Number, String],
				default: 0
			},
			disabled: {
				// 是否可点击
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				valueSync: ""
			};
		},
		computed: {
			stars() {
				const value = this.valueSync ? this.valueSync : 0;
				const starList = [];
				const floorValue = Math.floor(value);
				const ceilValue = Math.ceil(value);
				// console.log("ceilValue: " + ceilValue);
				// console.log("floorValue: " + floorValue);
				for (let i = 0; i < this.max; i++) {
					if (floorValue > i) {
						starList.push({
							activeWitch: "100%"
						});
					} else if (ceilValue - 1 === i) {
						starList.push({
							activeWitch: (value - floorValue) * 100 + "%"
						});
					} else {
						starList.push({
							activeWitch: "0"
						});
					}
				}
				// console.log("starList[4]: " + starList[4].activeWitch);
				return starList;
			}
		},
		created() {
			this.valueSync = Number(this.value);
		},
		methods: {
			_onClick(index) {
				if (this.disabled) {
					return;
				}
				this.valueSync = index + 1;
				this.$emit("change", {
					value: this.valueSync
				});
			}
		}
	};
</script>

<style scoped>
	.uni-rate {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		line-height: 0;
		font-size: 0;
		flex-direction: row;
	}

	.uni-rate__icon {
		position: relative;
		line-height: 0;
		font-size: 0;
	}

	.uni-rate__icon-on {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		line-height: 1;
		text-align: left;
	}
</style>