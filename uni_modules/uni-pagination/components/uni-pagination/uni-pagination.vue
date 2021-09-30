<template>
	<view class="uni-pagination">
		<!-- #ifndef APP-NVUE -->
		<view class="uni-pagination__total is-phone-hide">共 {{ total }} 条</view>
		<!-- #endif -->
		<view
			class="uni-pagination__btn"
			:class="currentIndex === 1 ? 'uni-pagination--disabled' : 'uni-pagination--enabled'"
			:hover-class="currentIndex === 1 ? '' : 'uni-pagination--hover'"
			:hover-start-time="20"
			:hover-stay-time="70"
			@click="clickLeft"
		>
			<template v-if="showIcon === true || showIcon === 'true'">
				<uni-icons color="#666" size="16" type="arrowleft" />
			</template>
			<template v-else>
				<text class="uni-pagination__child-btn">{{ prevText }}</text>
			</template>
		</view>
		<view class="uni-pagination__num uni-pagination__num-flex-none">
			<view class="uni-pagination__num-current">
				<text class="uni-pagination__num-current-text is-pc-hide" style="color:#409EFF">{{ currentIndex }}</text>
				<text class="uni-pagination__num-current-text is-pc-hide">/{{ maxPage || 0 }}</text>
				<!-- #ifndef APP-NVUE -->
				<view
					v-for="(item, index) in paper"
					:key="index"
					:class="{ 'page--active': item === currentIndex }"
					class="uni-pagination__num-tag tag--active is-phone-hide"
					@click.top="selectPage(item, index)"
				>
					<text>{{ item }}</text>
				</view>
				<!-- #endif -->
				
			</view>
		</view>
		<view
			class="uni-pagination__btn"
			:class="currentIndex >= maxPage ? 'uni-pagination--disabled' : 'uni-pagination--enabled'"
			:hover-class="currentIndex === maxPage ? '' : 'uni-pagination--hover'"
			:hover-start-time="20"
			:hover-stay-time="70"
			@click="clickRight"
		>
			<template v-if="showIcon === true || showIcon === 'true'">
				<uni-icons color="#666" size="16" type="arrowright" />
			</template>
			<template v-else>
				<text class="uni-pagination__child-btn">{{ nextText }}</text>
			</template>
		</view>
	</view>
</template>

<script>
/**
 * Pagination 分页器
 * @description 分页器组件，用于展示页码、请求数据等
 * @tutorial https://ext.dcloud.net.cn/plugin?id=32
 * @property {String} prevText 左侧按钮文字
 * @property {String} nextText 右侧按钮文字
 * @property {Number} current 当前页
 * @property {Number} total 数据总量
 * @property {Number} pageSize 每页数据量
 * @property {Number} showIcon = [true|false] 是否以 icon 形式展示按钮
 * @event {Function} change 点击页码按钮时触发 ,e={type,current} current为当前页，type值为：next/prev，表示点击的是上一页还是下一个
 */

export default {
	name: 'UniPagination',
	emits:['update:modelValue','input','change'],
	props: {
		value: {
			type: [Number, String],
			default: 1
		},
		modelValue: {
			type: [Number, String],
			default: 1
		},
		prevText: {
			type: String,
			default: '上一页'
		},
		nextText: {
			type: String,
			default: '下一页'
		},
		current: {
			type: [Number, String],
			default: 1
		},
		total: {
			// 数据总量
			type: [Number, String],
			default: 0
		},
		pageSize: {
			// 每页数据量
			type: [Number, String],
			default: 10
		},
		showIcon: {
			// 是否以 icon 形式展示按钮
			type: [Boolean, String],
			default: false
		},
		pagerCount: {
			type: Number,
			default: 7
		}
	},
	data() {
		return {
			currentIndex: 1,
			paperData: []
		}
	},
	computed: {
		maxPage() {
			let maxPage = 1
			let total = Number(this.total)
			let pageSize = Number(this.pageSize)
			if (total && pageSize) {
				maxPage = Math.ceil(total / pageSize)
			}
			return maxPage
		},
		paper() {
			const num = this.currentIndex
			// TODO 最大页数
			const pagerCount = this.pagerCount
			// const total = 181
			const total = this.total
			const pageSize = this.pageSize
			let totalArr = []
			let showPagerArr = []
			let pagerNum = Math.ceil(total / pageSize)
			for (let i = 0; i < pagerNum; i++) {
				totalArr.push(i + 1)
			}
			showPagerArr.push(1)
			const totalNum = totalArr[totalArr.length - (pagerCount + 1) / 2]
			totalArr.forEach((item, index) => {
				if ((pagerCount + 1) / 2 >= num) {
					if (item < pagerCount + 1 && item > 1) {
						showPagerArr.push(item)
					}
				} else if (num + 2 <= totalNum) {
					if (item > num - (pagerCount + 1) / 2 && item < num + (pagerCount + 1) / 2) {
						showPagerArr.push(item)
					}
				} else {
					if ((item > num - (pagerCount + 1) / 2 || pagerNum - pagerCount < item) && item < totalArr[totalArr.length - 1]) {
						showPagerArr.push(item)
					}
				}
			})
			if (pagerNum > pagerCount) {
				if ((pagerCount + 1) / 2 >= num) {
					showPagerArr[showPagerArr.length - 1] = '...'
				} else if (num + 2 <= totalNum) {
					showPagerArr[1] = '...'
					showPagerArr[showPagerArr.length - 1] = '...'
				} else {
					showPagerArr[1] = '...'
				}
				showPagerArr.push(totalArr[totalArr.length - 1])
			} else {
				if ((pagerCount + 1) / 2 >= num) {
				} else if (num + 2 <= totalNum) {
				} else {
					showPagerArr.shift()
					showPagerArr.push(totalArr[totalArr.length - 1])
				}
			}

			return showPagerArr
		}
	},
	watch: {
		current(val) {
			this.currentIndex = val
		},
		value(val) {
			if (val < 1) {
				this.currentIndex = 1
			} else {
				this.currentIndex = val
			}
		},
		modelValue(val) {
			if (val < 1) {
				this.currentIndex = 1
			} else {
				this.currentIndex = val
			}
		}
	},
	created() {
		this.currentIndex = +this.value
	},
	methods: {
		// 选择标签
		selectPage(e, index) {
			if (parseInt(e)) {
				this.currentIndex = e
				this.change('current')
			} else {
				let pagerNum = Math.ceil(this.total / this.pageSize)
				// let pagerNum = Math.ceil(181 / this.pageSize)
				// 上一页
				if (index <= 1) {
					if (this.currentIndex - 5 > 1) {
						this.currentIndex -= 5
					} else {
						this.currentIndex = 1
					}
					return
				}
				// 下一页
				if (index >= 6) {
					if (this.currentIndex + 5 > pagerNum) {
						this.currentIndex = pagerNum
					} else {
						this.currentIndex += 5
					}
					return
				}
			}
		},
		clickLeft() {
			if (Number(this.currentIndex) === 1) {
				return
			}
			this.currentIndex -= 1
			this.change('prev')
		},
		clickRight() {
			if (Number(this.currentIndex) >= this.maxPage) {
				return
			}
			this.currentIndex += 1
			this.change('next')
		},
		change(e) {
			this.$emit('input', this.currentIndex)
			this.$emit('update:modelValue', this.currentIndex)
			this.$emit('change', {
				type: e,
				current: this.currentIndex
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.uni-pagination {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	position: relative;
	overflow: hidden;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.uni-pagination__total {
	font-size: 14px;
	color: #999;
	margin-right: 15px;
}

.uni-pagination__btn {
	/* #ifndef APP-NVUE */
	display: flex;
	cursor: pointer;
	/* #endif */
	padding: 0 8px;
	line-height: 30px;
	font-size: $uni-font-size-base;
	position: relative;
	background-color: #f4f4f5;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	// border-width: 1px;
	// border-style: solid;
	// border-color: $uni-border-color;
}

.uni-pagination__child-btn {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	font-size: $uni-font-size-base;
	position: relative;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.uni-pagination__num {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 30px;
	line-height: 30px;
	font-size: $uni-font-size-base;
	color: $uni-text-color;
	margin: 0 5px;
}

.uni-pagination__num-tag {
	/* #ifdef H5 */
	cursor: pointer;
	min-width: 30px;
	/* #endif */
	margin: 0 5px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	// border: 1px red solid;
	color: #666;
	// border-width: 1px;
	// border-style: solid;
	// border-color: $uni-border-color;
}

.uni-pagination__num-current {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
}

.uni-pagination__num-current-text {
	font-size: 15px;
}

.uni-pagination--enabled {
	color: #333333;
	opacity: 1;
}

.uni-pagination--disabled {
	opacity: 0.5;
	/* #ifdef H5 */
	cursor: default;
	/* #endif */
}

.uni-pagination--hover {
	color: rgba(0, 0, 0, 0.6);
	background-color: $uni-bg-color-hover;
}

.tag--active:hover {
	color: $uni-color-primary;
}

.page--active {
	color: #fff;
	background-color: $uni-color-primary;
}

.page--active:hover {
	color: #fff;
}

/* #ifndef APP-NVUE */
.is-pc-hide {
	display: block;
}

.is-phone-hide {
	display: none;
}

@media screen and (min-width: 450px) {
	.is-pc-hide {
		display: none;
	}

	.is-phone-hide {
		display: block;
	}

	.uni-pagination__num-flex-none {
		flex: none;
	}
}
/* #endif */
</style>
