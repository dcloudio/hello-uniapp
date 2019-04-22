<template>
	<view :class="{'uni-grid-no-border':!showBorder,'uni-grid-no-out-border':showBorder && !showOutBorder}" class="uni-grid">
		<view v-for="(items,i) in gridGroup" :key="i" class="uni-grid__flex">
			<view v-for="(item,index) in items" :hover-start-time="20" :hover-stay-time="70" :key="index" :class="[index == columnNum ? 'uni-grid-item-last' : '','uni-grid-item-' + type]" :style="{visibility:item.seize ? 'hidden' : 'inherit'}" class="uni-grid-item" hover-class="uni-grid-item-hover" @click="onClick(i,index)">
				<view v-if="!item.seize" class="uni-grid-item__content">
					<image :src="item.image" class="uni-grid-item-image" />
					<text class="uni-grid-item-text">{{ item.text }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniGrid',
		props: {
			options: {
				type: Array,
				default () {
					return []
				}
			},
			type: { // 布局格式，长方形oblong，正方形square
				type: String,
				default: 'square'
			},
			columnNum: { // 每一行有多少个
				type: [Number, String],
				default: 3
			},
			showOutBorder: { // 显示外边框
				type: Boolean,
				default: true
			},
			showBorder: { // 是否显示border，如果为false，showOutBorder无效
				type: Boolean,
				default: true
			}
		},
		data() {
			return {}
		},
		computed: {
			gridGroup() {
				let group = []
				let groupItem = []
				this.options && this.options.forEach((item, index) => {
					groupItem.push(item)
					if (index % this.columnNum === this.columnNum - 1) {
						group.push(groupItem)
						groupItem = []
					}
				})
				if (groupItem.length > 0) {
					if (this.columnNum > groupItem.length) {
						for (let i = 0, length = groupItem.length; i < this.columnNum - length; i++) {
							groupItem.push({
								seize: true
							})
						}
					}
					group.push(groupItem)
				}
				groupItem = null
				return group
			}
		},
		created() {
			this.columnNumber = this.gridGroup[0].length
		},
		methods: {
			onClick(index, num) {
				this.$emit('click', {
					index: index * this.columnNumber + num
				})
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-grid {
		position: relative;
		display: flex;
		flex-direction: column
	}

	.uni-grid__flex {
		display: flex;
		flex-direction: row
	}

	.uni-grid-item {
		display: flex;
		position: relative;
		flex-direction: column;
		flex: 1
	}

	.uni-grid-item:before {
		display: block;
		content: " ";
		padding-bottom: 100%
	}

	.uni-grid-item:after {
		content: '';
		position: absolute;
		z-index: 1;
		transform-origin: center;
		box-sizing: border-box;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		border-color: #c8c7cc;
		border-style: solid;
		border-width: 1px;
		-webkit-transform: scale(.5);
		transform: scale(.5);
		border-top-width: 0;
		border-left-width: 0
	}

	.uni-grid-item__content {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center
	}

	.uni-grid-item-text {
		font-size: 32upx;
		color: #333;
		margin-top: 12upx
	}

	.uni-grid-item-hover {
		background-color: #f1f1f1
	}

	.uni-grid-item-image {
		width: 80upx;
		height: 80upx
	}

	.uni-grid .uni-grid__flex:first-child .uni-grid-item:after {
		border-top-width: 1px
	}

	.uni-grid .uni-grid__flex .uni-grid-item:first-child:after {
		border-left-width: 1px
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex:first-child .uni-grid-item:after {
		border-top-width: 0
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex:last-child .uni-grid-item:after {
		border-bottom-width: 0
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item:first-child:after {
		border-left-width: 0
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item:last-child:after {
		border-right-width: 0
	}

	.uni-grid.uni-grid-no-border .uni-grid-item:after {
		border-width: 0
	}

	.uni-grid.uni-grid-no-border .uni-grid__flex:first-child .uni-grid-item:after {
		border-top-width: 0
	}

	.uni-grid.uni-grid-no-border .uni-grid__flex .uni-grid-item:first-child:after {
		border-left-width: 0
	}

	.uni-grid-item-oblong.uni-grid-item:before {
		padding-bottom: 60%
	}

	.uni-grid-item-oblong .uni-grid-item__content {
		flex-direction: row
	}

	.uni-grid-item-oblong .uni-grid-item-image {
		width: 52upx;
		height: 52upx
	}

	.uni-grid-item-oblong .uni-grid-item-text {
		margin-top: 0;
		margin-left: 12upx
	}
</style>