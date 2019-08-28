<template>
	<view class="uni-swipe_content selector-query-hock">
		<view :class="{'ani':uniShow}" :style="{transform:moveLeft}" class="uni-swipe_move-box" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<view class="uni-swipe_box">
				<slot />
			</view>
			<view class="uni-swipe_button-group selector-query-hock">
				<view v-for="(item,index) in options" :key="index" :style="{
            backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
            color: item.style && item.style.color ? item.style.color : '#FFFFFF',
            fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
          }" class="uni-swipe_button" @click.stop="onClick(index,item)">{{ item.text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniSwipeAction',
		props: {
			/**
			 * 按钮内容
			 */
			options: {
				type: Array,
				default () {
					return []
				}
			},
			/**
			 * 禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 变量控制开关
			 */
			show: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否自动关闭
			 */
			autoClose: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				left: 0,
				uniShow: false
			}
		},
		computed: {
			moveLeft() {
				return `translateX(${this.left}px)`
			}
		},
		watch: {
			show(newVal) {
				if (this.autoClose) return
				if (newVal) {
					this.$emit('change', true)
					this.open()
				} else {
					this.$emit('change', false)
					this.close()
				}
				uni.$emit('__uni__swipe__event', this)
			}
		},
		// #ifdef H5
		mounted() {
			this.init()
			this.getSelectorQuery()
		},
		// #endif
		// #ifndef H5
		onReady() {
			this.init()
			this.getSelectorQuery()
		},
		// #endif
		beforeDestoy() {
			uni.$off('__uni__swipe__event')
		},
		methods: {
			init() {
				uni.$on('__uni__swipe__event', (res) => {
					if (res !== this && this.autoClose) {
						if (this.left !== 0) {
							this.close()
						}
					}
				})
			},
			onClick(index, item) {
				this.$emit('click', {
					content: item,
					index
				})
			},
			touchstart(e) {
				const {
					pageX
				} = e.touches[0]
				if (this.disabled) return
				const left = this.position[0].left
				uni.$emit('__uni__swipe__event', this)
				this.width = pageX - left
				if (this.isopen) return
				if (this.uniShow) {
					this.uniShow = false
					this.isopen = true
					this.openleft = this.left + this.position[1].width
				}
			},
			touchmove(e, index) {
				if (this.disabled) return
				const {
					pageX
				} = e.touches[0]
				this.setPosition(pageX)
			},
			touchend() {
				if (this.disabled) return
				if (this.isopen) {
					this.move(this.openleft, 0)
					return
				}
				this.move(this.left, -40)
			},
			setPosition(x, y) {
				if (!this.position[1].width) {
					return
				}
				// const width = this.position[0].width
				this.left = x - this.width
				this.setValue(x - this.width)
			},
			setValue(value) {
				// 设置最大最小值
				this.left = Math.max(-this.position[1].width, Math.min(parseInt(value), 0))
				this.position[0].left = this.left
				if (this.isopen) {
					this.openleft = this.left + this.position[1].width
				}
			},
			move(left, value) {
				if (left >= value) {
					this.$emit('change', false)
					this.close()
				} else {
					this.$emit('change', true)
					this.open()
				}
			},
			open() {
				this.uniShow = true
				this.left = -this.position[1].width
				this.setValue(-this.position[1].width)
			},
			close() {
				this.uniShow = true
				this.setValue(0)
				setTimeout(() => {
					this.uniShow = false
					this.isopen = false
				}, 200)
			},
			getSelectorQuery() {
				const views = uni.createSelectorQuery()
					// #ifndef MP-ALIPAY
					.in(this)
				// #endif
				views
					.selectAll('.selector-query-hock')
					.boundingClientRect(data => {
						this.position = data
						if (this.autoClose) return
						if (this.show) {
							this.open()
						} else {
							this.close()
						}
					})
					.exec()
			}
		}
	}
</script>

<style>
	.uni-swipe_content {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	.uni-swipe_move-box {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.uni-swipe_box {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		font-size: 14px;
		color: #333333;
		/* padding: 15px 20px; */
		box-sizing: border-box;
	}

	.uni-swipe_button-group {
		display: flex;
		flex-shrink: 0;
	}

	.uni-swipe_button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		/* width: 100px; */
		height: 100%;
		font-size: 14px;
		box-sizing: border-box;
	}

	.ani {
		transition: transform 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}
</style>