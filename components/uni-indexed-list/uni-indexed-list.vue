<template>
	<view class="uni-indexed-list">
		<scroll-view :scroll-into-view="scrollViewId" :style="{ height: winHeight + 'px' }" class="uni-indexed-list__scroll" scroll-y>
			<view v-for="(list, idx) in lists" :key="idx" :id="'uni-indexed-list-' + list.key">
				<view v-if="loaded || list.itemIndex < 15" class="uni-indexed-list__title-wrapper">
					<text v-if="list.items && list.items.length > 0" class="uni-indexed-list__title">{{ list.key }}</text>
				</view>
				<view v-if="(loaded || list.itemIndex < 15) && list.items && list.items.length > 0" class="uni-indexed-list__list">
					<view v-for="(item, index) in list.items" :key="index" class="uni-indexed-list__item" hover-class="uni-indexed-list__item--hover">
						<view v-if="loaded || item.itemIndex < 15" class="uni-indexed-list__item-container" @click="onClick(idx, index)">
							<view class="uni-indexed-list__item-border" :class="{'uni-indexed-list__item-border--last':index===list.items.length-1}">
								<view v-if="showSelect" style="margin-right: 20rpx;">
									<uni-icons :type="item.checked ? 'checkbox-filled' : 'circle'" :color="item.checked ? '#007aff' : '#aaa'" size="24" />
								</view>
								<text class="uni-indexed-list__item-content">{{ item.name }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view :class="touchmove ? 'uni-indexed-list__menu--active' : ''" :style="{ height: winHeight + 'px' }" class="uni-indexed-list__menu" @touchstart="touchStart" @touchmove.stop.prevent="touchMove" @touchend="touchEnd">
			<view v-for="(list, key) in lists" :key="key" class="uni-indexed-list__menu-item">
				<text class="uni-indexed-list__menu-text" :class="touchmoveIndex == key ? 'uni-indexed-list__menu-text--active' : ''">{{ list.key }}</text>
			</view>
		</view>
		<view v-if="touchmove" class="uni-indexed-list__alert-wrapper">
			<text class="uni-indexed-list__alert">{{ lists[touchmoveIndex].key }}</text>
		</view>
	</view>
</template>
<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		name: 'UniIndexedList',
		components: {
			uniIcons
		},
		props: {
			options: {
				type: Array,
				default () {
					return []
				}
			},
			showSelect: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				lists: [],
				touchmove: false,
				touchmoveIndex: -1,
				itemHeight: 0,
				winHeight: 0,
				scrollViewId: '',
				touchmoveTimeout: '',
				loaded: false
			}
		},
		watch: {
			options: {
				handler: function() {
					this.setList()
				},
				deep: true
			}
		},
		mounted() {
			this.setList()
			setTimeout(() => {
				this.loaded = true
			}, 300);
		},
		methods: {
			setList() {
				let winHeight = uni.getSystemInfoSync().windowHeight
				this.itemHeight = winHeight / this.options.length
				this.winHeight = winHeight

				// if (!this.showSelect) {
				// 	this.lists = this.options;
				// 	return;
				// }
				// console.log(this.options)
				let index = 0;
				this.lists = this.options.map(value => {
					// console.log(value)
					let indexBefore = index
					let items = value.data.map(item => {
						let obj = {}
						// for (let key in item) {
						obj['key'] = value.letter
						obj['name'] = item
						obj['itemIndex'] = index
						index++
						// }
						obj.checked = item.checked ? item.checked : false
						return obj
					})
					return {
						title: value.letter,
						key: value.letter,
						items: items,
						itemIndex: indexBefore
					}
				})
				// console.log(this.lists)
			},
			touchStart(e) {
				this.touchmove = true
				let pageY = e.touches[0].pageY
				let index = Math.floor(pageY / this.itemHeight)
				let item = this.lists[index]
				if (item) {
					this.scrollViewId = 'uni-indexed-list-' + item.key
					this.touchmoveIndex = index
				}
			},
			touchMove(e) {
				if (this.touchmoveTimeout) {
					clearTimeout(this.touchmoveTimeout)
				}
				this.touchmoveTimeout = setTimeout(() => {
					let pageY = e.touches[0].pageY
					let index = Math.floor(pageY / this.itemHeight)
					let item = this.lists[index]
					if (item) {
						this.scrollViewId = 'uni-indexed-list-' + item.key
						this.touchmoveIndex = index
					}
				}, 10)
			},
			touchEnd() {
				this.touchmove = false
				this.touchmoveIndex = -1
			},
			onClick(idx, index) {
				let obj = {}
				for (let key in this.lists[idx].items[index]) {
					obj[key] = this.lists[idx].items[index][key]
				}
				let select = []
				if (this.showSelect) {
					this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked
					this.lists.forEach((value, idx) => {
						value.items.forEach((item, index) => {
							if (item.checked) {
								let obj = {}
								for (let key in this.lists[idx].items[index]) {
									obj[key] = this.lists[idx].items[index][key]
								}
								select.push(obj)
							}
						})
					})
				}
				this.$emit('click', {
					item: obj,
					select: select
				})
			}
		}
	}
</script>
<style scoped>
	.uni-indexed-list__list {
		background-color: #ffffff;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		border-top-style: solid;
		border-top-width: 1px;
		border-top-color: #e5e5e5;
	}

	.uni-indexed-list__item {
		font-size: 32rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-indexed-list__item-container {
		padding-left: 30rpx;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-indexed-list__item-border {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		padding-left: 0;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #e5e5e5;
	}

	.uni-indexed-list__item-border--last {
		border-bottom-width: 0px;
	}

	.uni-indexed-list__item-content {
		flex: 1;
		font-size: 14px;
	}

	.uni-indexed-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-indexed-list__scroll {
		flex: 1;
	}

	.uni-indexed-list__title-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		/* #endif */
		background-color: #f7f7f7;
	}

	.uni-indexed-list__title {
		padding: 6px 12px;
		line-height: 24px;
		font-size: 24rpx;
	}

	.uni-indexed-list__menu {
		width: 24px;
		background-color: lightgrey;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.uni-indexed-list__menu-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.uni-indexed-list__menu-text {
		line-height: 20px;
		font-size: 12px;
		text-align: center;
		color: #aaa;
	}

	.uni-indexed-list__menu--active {
		background-color: rgb(200, 200, 200);
	}

	.uni-indexed-list__menu-text--active {
		color: #007aff;
	}

	.uni-indexed-list__alert-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.uni-indexed-list__alert {
		width: 80px;
		height: 80px;
		border-radius: 80px;
		text-align: center;
		line-height: 80px;
		font-size: 35px;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>