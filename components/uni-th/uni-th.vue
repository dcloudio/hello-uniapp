<template>
	<view class="uni-table-th" :class="{'table--border':border}" :style="{width:width + 'px','text-align':align}">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * Th 表头
	 * @description 表格内的表头单元格组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=
	 * @property {Number} 	width 						单元格宽度
	 * @property {Number} 	align = [left|center|right]	单元格对齐方式
	 * @value left   	单元格文字左侧对齐
	 * @value center	单元格文字居中
	 * @value right		单元格文字右侧对齐
	 */

	export default {
		name: 'uniTh',
		options: {
			virtualHost: true
		},
		props: {
			width: {
				type: [String, Number],
				default: ''
			},
			align: {
				type: String,
				default: 'left'
			}
		},
		data() {
			return {
				border: false
			};
		},
		created() {
			this.root = this.getTable('uniTable')
			this.rootTr = this.getTable('uniTr')
			this.rootTr.minWidthUpdate(this.width ? this.width : 140)
			this.border = this.root.border
		},
		methods: {
			/**
			 * 获取父元素实例
			 */
			getTable(name) {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false;
					parentName = parent.$options.name;
				}
				return parent;
			}
		}
	}
</script>

<style scoped>
	.uni-table-th {
		padding: 12px 10px;
		display: table-cell;
		color: #333;
		font-weight: 500;
		border-bottom: 1px #ddd solid;
		font-size: 14px;
		box-sizing: border-box;
	}

	.table--border {
		border-right: 1px #ddd solid;
	}
</style>