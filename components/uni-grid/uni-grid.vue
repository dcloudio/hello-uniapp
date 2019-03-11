<template>
	<view class="uni-grid" :class="setBorderClass">
		<view class="uni-grid__flex" v-for="(items,i) in gridGroup" :key="i">
			<view class="uni-grid-item" hover-class="uni-grid-item-hover" :hover-start-time="20" :hover-stay-time="70" v-for="(item,index) in items" :key="index" :class="[index === columnNumber ? 'uni-grid-item-last' : '','uni-grid-item-' + type]" @click="onClick(i,index)">
				<view class="uni-grid-item__content">
					<image class="uni-grid-item-image" :src="item.image"></image>
					<text class="uni-grid-item-text">{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "uni-grid",
		props: {
			data: Array,
			type: { //布局格式，长方形oblong，正方形square
				type: String,
				default: 'square'
			},
			columnNum: { //每一行有多少个
				type: [Number, String],
				default: 3
			},
			showOutBorder: { //显示外边框
				type: [Boolean, String],
				default: true
			},
			showBorder: { //是否显示border，如果为false，showOutBorder无效
				type: [Boolean, String],
				default: true
			}
		},
		data() {
			return {}
		},
		computed: {
			columnNumber() {
				return Number(this.columnNum) ? Number(this.columnNum) : 3
			},
			gridGroup() {
				let group = []
				let groupItem = []
				this.data && this.data.forEach((item, index) => {
					groupItem.push(item)
					if (index % this.columnNum === this.columnNum - 1) {
						group.push(groupItem)
						groupItem = []
					}
				})
				if (groupItem.length > 0) {
					group.push(groupItem)
				}
				groupItem = null
				return group
			},
			setBorderClass() {
				let classList = []
				if (this.showBorder === false || this.showBorder === 'false') {
					classList.push('uni-grid-no-border')
					return classList
				}
				if (this.showOutBorder === false || this.showOutBorder === 'false') {
					classList.push('uni-grid-no-out-border')
				}
				return classList
			}
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