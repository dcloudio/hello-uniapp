<template>
	<view v-if="width" :style="{ width: width }" class="uni-grid-item">
		<view :class="{ border: showBorder, 'uni-grid-item__box-square': square, 'border-top': showBorder && index < column, 'uni-highlight': highlight }" :style="{ 'border-color': borderColor }" class="uni-grid-item__box" @click="_onClick">
			<view v-if="marker === 'dot'" :style="{ left: top + 'px', top: left + 'px' }" class="uni-grid-item__box-dot" />
			<view v-if="marker === 'badge'" :style="{ left: top + 'px', top: left + 'px' }" class="uni-grid-item__box-badge">
				<uni-badge :text="text" :type="type" :size="size" :inverted="inverted" />
			</view>
			<view v-if="marker === 'image'" :style="{ left: top + 'px', top: left + 'px' }" class="uni-grid-item__box-image">
				<image :style="{ width: imgWidth + 'px' }" :src="src" class="box-image" mode="widthFix" />
			</view>
			<view class="uni-grid-item__box-item">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../uni-badge/uni-badge.vue'
	export default {
		name: 'UniGridItem',
		components: {
			uniBadge
		},
		props: {
			// 类型：可选值，dot：圆点；badge：角标；image：图片
			marker: {
				type: String,
				default: ''
			},
			// 水平方向
			hor: {
				type: Number,
				default: 0
			},
			// 垂直方向
			ver: {
				type: Number,
				default: 0
			},
			// badge 下颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)
			type: {
				type: String,
				default: ''
			},
			// badge 下显示内容，汉字最多为1个
			text: {
				type: String,
				default: ''
			},
			// badge 下 Badge 大小
			size: {
				type: String,
				default: 'normal'
			},
			// badge 下 是否无需背景颜色
			inverted: {
				type: Boolean,
				default: false
			},
			// image 下图片路径
			src: {
				type: String,
				default: ''
			},
			// image 下图片宽度 ，最大 为 100 。 默认为 30
			imgWidth: {
				type: Number,
				default: 30
			}
		},
		inject: ['grid'],
		data() {
			return {
				column: 0,
				showBorder: true,
				square: true,
				highlight: true,
				left: 0,
				top: 0,
				index: 0,
				openNum: 2,
				width: 0,
				borderColor: '#d0dee5'
			}
		},
		created() {
			this.column = this.grid.column
			this.showBorder = this.grid.showBorder
			this.square = this.grid.square
			this.highlight = this.grid.highlight
			this.top = this.hor === 0 ? this.grid.hor : this.hor
			this.left = this.ver === 0 ? this.grid.ver : this.ver
			this.borderColor = this.grid.borderColor
			this.index = this.grid.index++
		},
		// #ifdef H5
		mounted() {
			this.grid._getSize(width => {
				this.width = width
			})
		},
		// #endif
		// #ifndef H5
		onReady() {
			this.grid._getSize(width => {
				this.width = width
			})
		},
		// #endif
		methods: {
			_onClick() {
				// console.log('点击', this.index);
				this.grid.change({
					detail: {
						index: this.index
					}
				})
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-grid-item {
		box-sizing: border-box
	}

	.uni-grid-item__box {
		position: relative;
		width: 100%
	}

	.uni-grid-item__box-item {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		font-size: 32upx;
		color: #666;
		padding: 20upx 0;
		box-sizing: border-box
	}

	.uni-grid-item__box-item .image {
		width: 50upx;
		height: 50upx
	}

	.uni-grid-item__box-item .text {
		font-size: 26upx;
		margin-top: 10upx
	}

	.uni-grid-item__box.uni-grid-item__box-square {
		height: 0;
		padding-top: 100%
	}

	.uni-grid-item__box.uni-grid-item__box-square .uni-grid-item__box-item {
		position: absolute;
		top: 0
	}

	.uni-grid-item__box.border {
		position: relative;
		box-sizing: border-box;
		border-bottom: 1px #d0dee5 solid;
		border-right: 1px #d0dee5 solid
	}

	.uni-grid-item__box.border-top {
		border-top: 1px #d0dee5 solid
	}

	.uni-grid-item__box.uni-highlight:active {
		background-color: #eee
	}

	.uni-grid-item__box-badge,
	.uni-grid-item__box-dot,
	.uni-grid-item__box-image {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		z-index: 10
	}

	.uni-grid-item__box-dot {
		width: 20upx;
		height: 20upx;
		background: #ff5a5f;
		border-radius: 50%
	}

	.uni-grid-item__box-badge {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
		height: 0
	}

	.uni-grid-item__box-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100upx;
		height: 100upx;
		overflow: hidden
	}

	.uni-grid-item__box-image .box-image {
		width: 90upx
	}
</style>