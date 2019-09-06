<template>
	<view>
		<view :class="{
        leftBottom: leftBottom,
        rightBottom: rightBottom,
        leftTop: leftTop,
        rightTop: rightTop
      }" class="fab-box fab">
			<view :class="{
          left: horizontal === 'left' && direction === 'horizontal',
          top: vertical === 'top' && direction === 'vertical',
          bottom: vertical === 'bottom' && direction === 'vertical',
          right: horizontal === 'right' && direction === 'horizontal'
        }" :style="{ 'background-color': styles.buttonColor }" class="fab-circle" @click="_onClick">
				<text :class="{ active: isShow }" class="uni-icon uni-icon-plusempty" />
			</view>
			<view :class="{
          left: horizontal === 'left',
          right: horizontal === 'right',
          flexDirection: direction === 'vertical',
          flexDirectionStart: flexDirectionStart,
          flexDirectionEnd: flexDirectionEnd
        }" :style="{ width: boxWidth, height: boxHeight, background: styles.backgroundColor }" class="fab-content">
				<view v-if="flexDirectionStart || horizontalLeft" class="fab-item first" />
				<view v-for="(item, index) in content" :key="index" :class="{ active: isShow }" :style="{
            color: item.active ? styles.selectedColor : styles.color
          }" class="fab-item" @click="_onItemClick(index, item)">
					<image :src="item.active ? item.selectedIconPath : item.iconPath" class="content-image" mode="widthFix" />
					<text class="text">{{ item.text }}</text>
				</view>
				<view v-if="flexDirectionEnd || horizontalRight" class="fab-item first" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniFab',
		props: {
			pattern: {
				type: Object,
				default () {
					return {}
				}
			},
			horizontal: {
				type: String,
				default: 'left'
			},
			vertical: {
				type: String,
				default: 'bottom'
			},
			direction: {
				type: String,
				default: 'horizontal'
			},
			content: {
				type: Array,
				default () {
					return []
				}
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				fabShow: false,
				flug: true,
				isShow: false,
				styles: {
					color: '#3c3e49',
					selectedColor: '#007AFF',
					backgroundColor: '#fff',
					buttonColor: '#3c3e49'
				}
			}
		},
		computed: {
			contentWidth(e) {
				return uni.upx2px((this.content.length + 1) * 110 + 20) + 'px'
			},
			contentWidthMin() {
				return uni.upx2px(110) + 'px'
			},
			// 动态计算宽度
			boxWidth() {
				return this.getPosition(3, 'horizontal')
			},
			// 动态计算高度
			boxHeight() {
				return this.getPosition(3, 'vertical')
			},
			// 计算左下位置
			leftBottom() {
				return this.getPosition(0, 'left', 'bottom')
			},
			// 计算右下位置
			rightBottom() {
				return this.getPosition(0, 'right', 'bottom')
			},
			// 计算左上位置
			leftTop() {
				return this.getPosition(0, 'left', 'top')
			},
			rightTop() {
				return this.getPosition(0, 'right', 'top')
			},
			flexDirectionStart() {
				return this.getPosition(1, 'vertical', 'top')
			},
			flexDirectionEnd() {
				return this.getPosition(1, 'vertical', 'bottom')
			},
			horizontalLeft() {
				return this.getPosition(2, 'horizontal', 'left')
			},
			horizontalRight() {
				return this.getPosition(2, 'horizontal', 'right')
			}
		},
		watch: {
			pattern(newValue, oldValue) {
				//console.log(JSON.stringify(newValue))
				this.styles = Object.assign({}, this.styles, newValue)
			}
		},
		created() {
			this.isShow = this.show
			if (this.top === 0) {
				this.fabShow = true
			}
			// 初始化样式
			this.styles = Object.assign({}, this.styles, this.pattern)
		},
		methods: {
			_onClick() {
				this.isShow = !this.isShow
			},
			open() {
				this.isShow = true
			},
			close() {
				this.isShow = false
			},
			/**
			 * 按钮点击事件
			 */
			_onItemClick(index, item) {
				this.$emit('trigger', {
					index,
					item
				})
			},
			/**
			 * 获取 位置信息
			 */
			getPosition(types, paramA, paramB) {
				if (types === 0) {
					return this.horizontal === paramA && this.vertical === paramB
				} else if (types === 1) {
					return this.direction === paramA && this.vertical === paramB
				} else if (types === 2) {
					return this.direction === paramA && this.horizontal === paramB
				} else {
					return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin
				}
			}
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf') format('truetype');
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		line-height: 1;
		display: inline-block;
		text-decoration: none;
		-webkit-font-smoothing: antialiased;
	}

	.uni-icon-plusempty:before {
		content: '\e468';
	}

	.fab-box {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}

	.fab-box.top {
		width: 60upx;
		height: 60upx;
		right: 30upx;
		bottom: 60upx;
		border: 1px #5989b9 solid;
		background: #6699cc;
		border-radius: 10upx;
		color: #fff;
		transition: all 0.3;
		opacity: 0;
	}

	.fab-box.active {
		opacity: 1;
	}

	.fab-box.fab {
		z-index: 10;
	}

	.fab-box.fab.leftBottom {
		left: 30upx;
		bottom: 60upx;
	}

	.fab-box.fab.leftTop {
		left: 30upx;
		top: 80upx;
		/* #ifdef H5 */
		top: calc(80upx + var(--window-top));
		/* #endif */
	}

	.fab-box.fab.rightBottom {
		right: 30upx;
		bottom: 60upx;
	}

	.fab-box.fab.rightTop {
		right: 30upx;
		top: 80upx;
		/* #ifdef H5 */
		top: calc(80upx + var(--window-top));
		/* #endif */
	}

	.fab-circle {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 110upx;
		height: 110upx;
		background: #3c3e49;
		/* background: #5989b9; */
		border-radius: 50%;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
		z-index: 11;
	}

	.fab-circle.left {
		left: 0;
	}

	.fab-circle.right {
		right: 0;
	}

	.fab-circle.top {
		top: 0;
	}

	.fab-circle.bottom {
		bottom: 0;
	}

	.fab-circle .uni-icon-plusempty {
		color: #ffffff;
		font-size: 80upx;
		transition: all 0.3s;
		font-weight: bold;
	}

	.fab-circle .uni-icon-plusempty.active {
		transform: rotate(135deg);
		font-size: 80upx;
	}

	.fab-content {
		background: #6699cc;
		box-sizing: border-box;
		display: flex;
		border-radius: 100upx;
		overflow: hidden;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
		transition: all 0.2s;
		width: 110upx;
	}

	.fab-content.left {
		justify-content: flex-start;
	}

	.fab-content.right {
		justify-content: flex-end;
	}

	.fab-content.flexDirection {
		flex-direction: column;
		justify-content: flex-end;
	}

	.fab-content.flexDirectionStart {
		flex-direction: column;
		justify-content: flex-start;
	}

	.fab-content.flexDirectionEnd {
		flex-direction: column;
		justify-content: flex-end;
	}

	.fab-content .fab-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 110upx;
		height: 110upx;
		font-size: 24upx;
		color: #fff;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.fab-content .fab-item.active {
		opacity: 1;
	}

	.fab-content .fab-item .content-image {
		width: 50upx;
		height: 50upx;
		margin-bottom: 5upx;
	}

	.fab-content .fab-item.first {
		width: 110upx;
	}
</style>