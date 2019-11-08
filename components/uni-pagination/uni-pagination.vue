<template>
	<view class="uni-pagination">
		<view class="uni-pagination__btns">
			<view class="uni-pagination__btn" :class="currentIndex === 1 ? 'uni-pagination--disabled' : 'uni-pagination--enabled'" :hover-class="currentIndex === 1 ? '' : 'uni-pagination--hover'" :hover-start-time="20" :hover-stay-time="70" @click="clickLeft">
				<template v-if="showIcon===true || showIcon === 'true'">
					<uni-icons color="#000" size="20" type="arrowleft" />
				</template>
				<template v-else><text class="uni-pagination__child-btn">{{ prevText }}</text></template>
			</view>
			<view class="uni-pagination__btn" :class="currentIndex === maxPage ? 'uni-pagination--disabled' : 'uni-pagination--enabled'" :hover-class="currentIndex === maxPage ? '' : 'uni-pagination--hover'" :hover-start-time="20" :hover-stay-time="70" @click="clickRight">
				<template v-if="showIcon===true || showIcon === 'true'">
					<uni-icons color="#000" size="20" type="arrowright" />
				</template>
				<template v-else><text class="uni-pagination__child-btn">{{ nextText }}</text></template>
			</view>
		</view>
		<view class="uni-pagination__num">
			<view class="uni-pagination__num-current">
				<text class="uni-pagination__num-current-text" style="color:#007aff">{{ currentIndex }}</text><text class="uni-pagination__num-current-text">/{{ maxPage || 0 }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'UniPagination',
		components: {
			uniIcons
		},
		props: {
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
			total: { // 数据总量
				type: [Number, String],
				default: 0
			},
			pageSize: { // 每页数据量
				type: [Number, String],
				default: 10
			},
			showIcon: { // 是否以 icon 形式展示按钮
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				currentIndex: 1
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
			}
		},
		watch: {
			current(val) {
				this.currentIndex = +val
			}
		},
		created() {
			this.currentIndex = +this.current
		},
		methods: {
			clickLeft() {
				if (Number(this.currentIndex) === 1) {
					return
				}
				this.currentIndex -= 1
				this.change('prev')
			},
			clickRight() {
				if (Number(this.currentIndex) === this.maxPage) {
					return
				}
				this.currentIndex += 1
				this.change('next')
			},
			change(e) {
				this.$emit('change', {
					type: e,
					current: this.currentIndex
				})
			}
		}
	}
</script>

<style scoped>
	.uni-pagination {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		/* #ifdef APP-NVUE */
		padding: 0 20px;
		/* #endif */
		width: 350px;
		position: relative;
		overflow: hidden;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.uni-pagination__btns {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	.uni-pagination__btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 60px;
		height: 30px;
		line-height: 30px;
		font-size: 28rpx;
		position: relative;
		background-color: #f8f8f8;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-width: 1px;
		border-style: solid;
		border-color: #e5e5e5;
	}

	.uni-pagination__child-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		font-size: 28rpx;
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
		position: absolute;
		left: 150px;
		top: 0;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 30px;
		line-height: 30px;
		font-size: 28rpx;
		color: #333;
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
		opacity: 0.3;
	}

	.uni-pagination--hover {
		color: rgba(0, 0, 0, .6);
		background-color: #f1f1f1;
	}
</style>