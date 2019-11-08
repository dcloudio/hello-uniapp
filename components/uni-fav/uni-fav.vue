<template>
	<view :class="[circle === true || circle === 'true' ? 'uni-fav--circle' : '']" :style="[{ backgroundColor: checked ? bgColorChecked : bgColor }]" @click="onClick" class="uni-fav">
		<!-- #ifdef MP-ALIPAY -->
		<view class="uni-fav-star" v-if="!checked && (star === true || star === 'true')">
			<uni-icons :color="fgColor" :style="{color: checked ? fgColorChecked : fgColor}" size="14" type="star-filled" />
		</view>
		<!-- #endif -->
		<!-- #ifndef MP-ALIPAY -->
		<uni-icons :color="fgColor" :style="{color: checked ? fgColorChecked : fgColor}" class="uni-fav-star" size="14" type="star-filled" v-if="!checked && (star === true || star === 'true')" />
		<!-- #endif -->
		<text :style="{color: checked ? fgColorChecked : fgColor}" class="uni-fav-text">{{ checked ? contentText.contentFav : contentText.contentDefault }}</text>
	</view>
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue";
	export default {
		name: "UniFav",
		components: {
			uniIcons
		},
		props: {
			star: {
				type: [Boolean, String],
				default: true
			},
			bgColor: {
				type: String,
				default: "#eeeeee"
			},
			fgColor: {
				type: String,
				default: "#666666"
			},
			bgColorChecked: {
				type: String,
				default: "#007aff"
			},
			fgColorChecked: {
				type: String,
				default: "#FFFFFF"
			},
			circle: {
				type: [Boolean, String],
				default: false
			},
			checked: {
				type: Boolean,
				default: false
			},
			contentText: {
				type: Object,
				default () {
					return {
						contentDefault: "收藏",
						contentFav: "已收藏"
					};
				}
			}
		},
		watch: {
			checked() {
				if (uni.report) {
					if (this.checked) {
						uni.report("收藏", "收藏");
					} else {
						uni.report("取消收藏", "取消收藏");
					}
				}
			}
		},
		methods: {
			onClick() {
				this.$emit("click");
			}
		}
	};
</script>

<style scoped>
	.uni-fav {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		border-radius: 3px;
	}

	.uni-fav--circle {
		border-radius: 30px;
	}

	.uni-fav-star {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		height: 25px;
		line-height: 24px;
		margin-right: 3px;
		align-items: center;
		justify-content: center;
	}

	.uni-fav-text {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		height: 25px;
		line-height: 25px;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}
</style>