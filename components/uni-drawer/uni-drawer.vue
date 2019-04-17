<template>
	<view v-if="visibleSync" :class="{'uni-drawer--visible':showDrawer,'uni-drawer--right':rightMode}" class="uni-drawer" @touchmove.stop.prevent="moveHandle">
		<view class="uni-drawer__mask" @click="close" />
		<view class="uni-drawer__content">
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
				closeTimer: null,
				watchTimer: null
			}
		},
		watch: {
			visible(val) {
				clearTimeout(this.watchTimer)
				setTimeout(() => {
					this.showDrawer = val
				}, 100)
				if (this.visibleSync) {
					clearTimeout(this.closeTimer)
				}
				if (val) {
					this.visibleSync = val
				} else {
					this.watchTimer = setTimeout(() => {
						this.visibleSync = val
					}, 300)
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
				this.showDrawer = false
				this.closeTimer = setTimeout(() => {
					this.visibleSync = false
					this.$emit('close')
				}, 200)
			},
			moveHandle() {}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-drawer {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		visibility: hidden;
		z-index: 10001;
		height: 100%
	}

	.uni-drawer.uni-drawer--right .uni-drawer__content {
		left: auto;
		right: 0;
		transform: translatex(100%)
	}

	.uni-drawer.uni-drawer--visible {
		visibility: visible
	}

	.uni-drawer.uni-drawer--visible .uni-drawer__content {
		transform: translatex(0)
	}

	.uni-drawer.uni-drawer--visible .uni-drawer__mask {
		display: block;
		opacity: 1
	}

	.uni-drawer__mask {
		display: block;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		transition: opacity .3s
	}

	.uni-drawer__content {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 61.8%;
		height: 100%;
		background: #fff;
		transition: all .3s ease-out;
		transform: translatex(-100%)
	}
</style>