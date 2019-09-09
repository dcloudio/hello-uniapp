<template>
	<view :style="{backgroundColor:checked?bgColorChecked:bgColor,color:checked?fgColorChecked:fgColor}" :class="[
      circle === true || circle === 'true' ? 'uni-fav--circle' : '',
    ]" class="uni-fav" @click="onClick">
		<uni-icons v-if="!checked&&(star===true||star==='true')" :color="fgColor" class="uni-fav-star" type="star-filled" size="16" />
		<text class="uni-fav-text">
			{{ checked ? contentText.contentFav : contentText.contentDefault }}
		</text>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'UniFav',
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
				default: '#eeeeee'
			},
			fgColor: {
				type: String,
				default: '#666666'
			},
			bgColorChecked: {
				type: String,
				default: '#007aff'
			},
			fgColorChecked: {
				type: String,
				default: '#FFFFFF'
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
						contentDefault: '收藏',
						contentFav: '已收藏'
					}
				}
			}
		},
		watch: {
			checked() {
				if (uni.report) {
					if (this.checked) {
						uni.report("收藏", "收藏")
					} else {
						uni.report("取消收藏", "取消收藏")
					}
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-fav {
		display: inline-flex;
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 28rpx;
		box-sizing: border-box;
		border-radius: 6rpx;
		align-items: center;
		justify-content: center
	}

	.uni-fav--circle {
		border-radius: 60rpx
	}

	.uni-fav-star {
		height: 50rpx;
		line-height: 50rpx;
		margin-right: 5rpx;
		vertical-align: middle
	}

	.uni-fav-text {
		display: inline-block;
		height: 50rpx;
		line-height: 50rpx;
		vertical-align: middle
	}
</style>