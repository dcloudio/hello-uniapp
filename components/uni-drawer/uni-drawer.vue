<template>
	<view v-if="visibleSync" :class="{ 'uni-drawer--visible': showDrawer }" class="uni-drawer">
		<view class="uni-drawer__mask" :class="{ 'uni-drawer__mask--visible': showDrawer && mask }" @tap="close" />
		<view class="uni-drawer__content" :class="{'uni-drawer--right': rightMode,'uni-drawer--left': !rightMode, 'uni-drawer__content--visible': showDrawer}">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniDrawer',
		props: {
			/**
			 * 显示状态
			 */
			visible: {
				type: Boolean,
				default: false
			},
			/**
			 * 显示模式（左、右），只在初始化生效
			 */
			mode: {
				type: String,
				default: ''
			},
			/**
			 * 蒙层显示状态
			 */
			mask: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				visibleSync: false,
				showDrawer: false,
				rightMode: false,
				watchTimer: null
			}
		},
		watch: {
			visible(val) {
				if (val) {
					this.open()
				} else {
					this.close()
				}
			}
		},
		created() {
			this.visibleSync = this.visible
			setTimeout(() => {
				this.showDrawer = this.visible
			}, 100)
			this.rightMode = this.mode === 'right'
		},
		methods: {
			close() {
				this._change('showDrawer', 'visibleSync', false)
			},
			open() {
				this._change('visibleSync', 'showDrawer', true)
			},
			_change(param1, param2, status) {
				this[param1] = status
				if (this.watchTimer) {
					clearTimeout(this.watchTimer)
				}
				this.watchTimer = setTimeout(() => {
					this[param2] = status
					this.$emit(status ? 'open' : 'close')
				}, status ? 50 : 300)
			}
		}
	}
</script>

<style scoped>
	/* 抽屉宽度
 */
	.uni-drawer {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		z-index: 999;
	}

	.uni-drawer__content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		position: absolute;
		top: 0;
		width: 220px;
		bottom: 0;
		background-color: #ffffff;
		transition: transform 0.3s ease;
	}

	.uni-drawer--left {
		left: 0;
		transform: translateX(-220px);
	}

	.uni-drawer--right {
		right: 0;
		transform: translateX(220px);
	}

	.uni-drawer__content--visible {
		transform: translateX(0px);
	}


	.uni-drawer__mask {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
		transition: opacity 0.3s;
	}

	.uni-drawer__mask--visible {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		opacity: 1;
	}
</style>