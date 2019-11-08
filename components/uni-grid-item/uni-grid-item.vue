<template>
	<view v-if="width" :style="{ width: width }" class="uni-grid-item">
		<view :class="{ 'uni-grid-item--border': showBorder, 'uni-grid-item__box-square': square, 'uni-grid-item--border-top': showBorder && index < column, 'uni-highlight': highlight }" :style="{  'border-right-color': borderColor ,'border-bottom-color': borderColor ,'border-top-color': borderColor }" class="uni-grid-item__box" @click="_onClick">
			<view class="uni-grid-item__box-item" :class="{'uni-grid-item__box-item-square': square}">
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
				borderColor: '#e5e5e5'
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
			this.grid.children.push(this)
		},
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

<style scoped>
	.uni-grid-item {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
	}

	.uni-grid-item__box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		position: relative;
		flex-direction: row;
		align-items: center;
		/* #ifdef APP-NVUE */
		justify-content: center;
		/* #endif */
	}

	.uni-grid-item__box-item {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		/* #endif */
		position: relative;
		flex: 1;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding: 15px 0;
	}

	.uni-grid-item__box-item-square {
		position: absolute;
		top: 0;
		bottom: 0;
	}

	.uni-grid-item--image {
		width: 25px;
		height: 25px;
	}

	.uni-grid-item--text {
		font-size: 24rpx;
		margin-top: 5px;
	}

	.uni-grid-item__box-square {
		height: 0;
		padding-top: 100%;
	}

	.uni-grid-item--border {
		position: relative;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-right-color: #e5e5e5;
		border-right-style: solid;
		border-right-width: 1px;
	}

	.uni-grid-item--border-top {
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 1px;
		/* #ifndef APP-NVUE */
		height: 100%;
		box-sizing: border-box;
		/* #endif */
	}

	.uni-highlight:active {
		background-color: #f1f1f1;
	}
</style>