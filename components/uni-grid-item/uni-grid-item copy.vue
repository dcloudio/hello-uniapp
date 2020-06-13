<template>
	<view v-if="width" :style="'width:'+width+';'+(square?'height:'+width:'')" class="uni-grid-item">
		<view :class="{ 'uni-grid-item--border': showBorder,  'uni-grid-item--border-top': showBorder && index < column, 'uni-highlight': highlight }" :style="{'border-right-color': borderColor ,'border-bottom-color': borderColor ,'border-top-color': borderColor }" class="uni-grid-item__box" @click="_onClick">
			<slot />
		</view>
	</view>
</template>

<script>
	/**
	 * GridItem 宫格
	 * @description 宫格组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=27
	 * @property {Number} index 子组件的唯一标识 ，点击gird会返回当前的标识
	 */
	export default {
		name: 'UniGridItem',
		inject: ['grid'],
		props: {
			index: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				column: 0,
				showBorder: true,
				square: true,
				highlight: true,
				left: 0,
				top: 0,
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
			this.grid.children.push(this)
			// this.grid.init()
			this.width = this.grid.width
		},
		beforeDestroy() {
			this.grid.children.forEach((item, index) => {
				if (item === this) {
					this.grid.children.splice(index, 1)
				}
			})
		},
		methods: {
			_onClick() {
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
		display: flex;
		/* #endif */
	}

	.uni-grid-item__box {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		/* #endif */
		position: relative;
		flex: 1;
		flex-direction: column;
		/* justify-content: center;
 */
		/* align-items: center;
 */
	}

	.uni-grid-item--border {
		position: relative;
		/* #ifdef APP-NVUE */
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 0.5px;
		border-right-color: #e5e5e5;
		border-right-style: solid;
		border-right-width: 0.5px;
		/* #endif */
		/* #ifndef APP-NVUE */
		z-index: 0;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.uni-grid-item--border:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		top: 0;
		right: 0;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: inherit;
		border-right-style: solid;
		border-right-width: 1px;
		border-right-color: inherit;
		box-sizing: border-box;
		width: 200%;
		height: 200%;
		transform: scale(0.5);
		transform-origin: left top;
		z-index: -1;
	}

	/* #endif */

	.uni-grid-item--border-top {
		position: relative;
		/* #ifdef APP-NVUE */
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 0.5px;
		/* #endif */
		/* #ifndef APP-NVUE */
		height: 100%;
		box-sizing: border-box;
		z-index: 0;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.uni-grid-item--border-top:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		top: 0;
		right: 0;
		border-top-style: solid;
		border-top-width: 1px;
		border-top-color: inherit;
		box-sizing: border-box;
		width: 200%;
		height: 200%;
		transform: scale(0.5);
		transform-origin: left top;
		z-index: -1;
	}

	/* #endif */
	.uni-highlight:active {
		background-color: #f1f1f1;
	}
</style>