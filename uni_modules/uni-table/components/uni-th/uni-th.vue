<template>
	<!-- #ifdef H5 -->
	<th :rowspan="rowspan" :colspan="colspan" class="uni-table-th" :class="{ 'table--border': border }" :style="{ width: width + 'px', 'text-align': align }">
		<view class="uni-table-th-row">
			<view class="uni-table-th-content" :style="{ 'justify-content': contentAlign }" @click="sort">
				<slot></slot>
				<view v-if="sortable" class="arrow-box">
					<text class="arrow up" :class="{ active: ascending }" @click.stop="ascendingFn"></text>
					<text class="arrow down" :class="{ active: descending }" @click.stop="descendingFn"></text>
				</view>
			</view>
			<dropdown v-if="filterType || filterData.length" :filterData="filterData" :filterType="filterType" @change="ondropdown"></dropdown>
		</view>
	</th>
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view class="uni-table-th" :class="{ 'table--border': border }" :style="{ width: width + 'px', 'text-align': align }"><slot></slot></view>
	<!-- #endif -->
</template>

<script>
	import dropdown from './filter-dropdown.vue'
/**
 * Th 表头
 * @description 表格内的表头单元格组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=3270
 * @property {Number} 	width 						单元格宽度
 * @property {Boolean} 	sortable 					是否启用排序
 * @property {Number} 	align = [left|center|right]	单元格对齐方式
 * @value left   	单元格文字左侧对齐
 * @value center	单元格文字居中
 * @value right		单元格文字右侧对齐
 * @property {Array}	filterData 筛选数据
 * @property {String}	filterType	[search|select] 筛选类型
 * @value search	关键字搜素
 * @value select	条件选择
 * @event {Function} sort-change 排序触发事件
 */
export default {
	name: 'uniTh',
	options: {
		virtualHost: true
	},
	components: {
		dropdown
	},
	emits:['sort-change','filter-change'],
	props: {
		width: {
			type: [String, Number],
			default: ''
		},
		align: {
			type: String,
			default: 'left'
		},
		rowspan: {
			type: [Number, String],
			default: 1
		},
		colspan: {
			type: [Number, String],
			default: 1
		},
		sortable: {
			type: Boolean,
			default: false
		},
		filterType: {
			type: String,
			default: ""
		},
		filterData: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data() {
		return {
			border: false,
			ascending: false,
			descending: false
		}
	},
	computed: {
		contentAlign() {
			let align = 'left'
			switch (this.align) {
				case 'left':
					align = 'flex-start'
					break
				case 'center':
					align = 'center'
					break
				case 'right':
					align = 'flex-end'
					break
			}
			return align
		}
	},
	created() {
		this.root = this.getTable('uniTable')
		this.rootTr = this.getTable('uniTr')
		this.rootTr.minWidthUpdate(this.width ? this.width : 140)
		this.border = this.root.border
		this.root.thChildren.push(this)
	},
	methods: {
		sort() {
			if (!this.sortable) return
			this.clearOther()
			if (!this.ascending && !this.descending) {
				this.ascending = true
				this.$emit('sort-change', { order: 'ascending' })
				return
			}
			if (this.ascending && !this.descending) {
				this.ascending = false
				this.descending = true
				this.$emit('sort-change', { order: 'descending' })
				return
			}

			if (!this.ascending && this.descending) {
				this.ascending = false
				this.descending = false
				this.$emit('sort-change', { order: null })
			}
		},
		ascendingFn() {
			this.clearOther()
			this.ascending = !this.ascending
			this.descending = false
			this.$emit('sort-change', { order: this.ascending ? 'ascending' : null })
		},
		descendingFn() {
			this.clearOther()
			this.descending = !this.descending
			this.ascending = false
			this.$emit('sort-change', { order: this.descending ? 'descending' : null })
		},
		clearOther() {
			this.root.thChildren.map(item => {
				if (item !== this) {
					item.ascending = false
					item.descending = false
				}
				return item
			})
		},
		ondropdown(e) {
			this.$emit("filter-change", e)
		},
		/**
		 * 获取父元素实例
		 */
		getTable(name) {
			let parent = this.$parent
			let parentName = parent.$options.name
			while (parentName !== name) {
				parent = parent.$parent
				if (!parent) return false
				parentName = parent.$options.name
			}
			return parent
		}
	}
}
</script>

<style lang="scss">
$border-color: #ebeef5;

.uni-table-th {
	padding: 12px 10px;
	/* #ifndef APP-NVUE */
	display: table-cell;
	box-sizing: border-box;
	/* #endif */
	font-size: 14px;
	font-weight: bold;
	color: #909399;
	border-bottom: 1px $border-color solid;
}

.uni-table-th-row {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
}

.table--border {
	border-right: 1px $border-color solid;
}
.uni-table-th-content {
	display: flex;
	align-items: center;
	flex: 1;
}
.arrow-box {
}
.arrow {
	display: block;
	position: relative;
	width: 10px;
	height: 8px;
	// border: 1px red solid;
	left: 5px;
	overflow: hidden;
	cursor: pointer;
}
.down {
	top: 3px;
	::after {
		content: '';
		width: 8px;
		height: 8px;
		position: absolute;
		left: 2px;
		top: -5px;
		transform: rotate(45deg);
		background-color: #ccc;
	}
	&.active {
		::after {
			background-color: #007aff;
		}
	}
}
.up {
	::after {
		content: '';
		width: 8px;
		height: 8px;
		position: absolute;
		left: 2px;
		top: 5px;
		transform: rotate(45deg);
		background-color: #ccc;
	}
	&.active {
		::after {
			background-color: #007aff;
		}
	}
}
</style>
