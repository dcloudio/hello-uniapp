<template>
	<view v-if="showPopup" class="uni-popup" @touchmove.stop.prevent="clear">
		<uni-transition :mode-class="['fade']" :styles="maskClass" :duration="duration" :show="showTrans" @click="onTap" />
		<uni-transition :mode-class="ani" :styles="transClass" :duration="duration" :show="showTrans" @click="onTap">
			<view class="uni-popup__wrapper-box" @click.stop="clear">
				<slot />
			</view>
		</uni-transition>
	</view>
</template>

<script>
	import uniTransition from '../uni-transition/uni-transition.vue'

	/**
	 * PopUp 弹出层
	 * @description 弹出层组件，为了解决遮罩弹层的问题
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
	 * @property {String} type = [top|center|bottom] 弹出方式
	 * 	@value top 顶部弹出
	 * 	@value center 中间弹出
	 * 	@value bottom 底部弹出
	 * @property {Boolean} animation = [ture|false] 是否开启动画
	 * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗
	 * @event {Function} change 打开关闭弹窗触发，e={show: false}
	 */

	export default {
		name: 'UniPopup',
		components: {
			uniTransition
		},
		props: {
			// 开启动画
			animation: {
				type: Boolean,
				default: true
			},
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
			type: {
				type: String,
				default: 'center'
			},
			// maskClick
			maskClick: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				duration: 300,
				ani: [],
				showPopup: false,
				showTrans: false,
				maskClass: {
					'position': 'fixed',
					'bottom': 0,
					'top': 0,
					'left': 0,
					'right': 0,
					'backgroundColor': 'rgba(0, 0, 0, 0.4)'
				},
				transClass: {
					'position': 'fixed',
					'left': 0,
					'right': 0,
				}
			}
		},
		watch: {
			type: {
				handler: function(newVal) {
					switch (this.type) {
						case 'top':
							this.ani = ['slide-top']
							this.transClass = {
								'position': 'fixed',
								'left': 0,
								'right': 0,
							}
							break
						case 'bottom':
							this.ani = ['slide-bottom']
							this.transClass = {
								'position': 'fixed',
								'left': 0,
								'right': 0,
								'bottom': 0
							}
							break
						case 'center':
							this.ani = ['zoom-out', 'fade']
							this.transClass = {
								'position': 'fixed',
								/* #ifndef APP-NVUE */
								'display': 'flex',
								'flexDirection': 'column',
								/* #endif */
								'bottom': 0,
								'left': 0,
								'right': 0,
								'top': 0,
								'justifyContent': 'center',
								'alignItems': 'center'
							}

							break
					}
				},
				immediate: true
			}
		},
		created() {
			if (this.animation) {
				this.duration = 300
			} else {
				this.duration = 0
			}
		},
		methods: {
			clear(e) {
				// TODO nvue 取消冒泡
				e.stopPropagation()
			},
			open() {
				this.showPopup = true
				this.$nextTick(() => {
					clearTimeout(this.timer)
					this.timer = setTimeout(() => {
						this.showTrans = true
					}, 50);
				})
				this.$emit('change', {
					show: true
				})
			},
			close(type) {
				this.showTrans = false
				this.$nextTick(() => {
					clearTimeout(this.timer)
					this.timer = setTimeout(() => {
						this.$emit('change', {
							show: false
						})
						this.showPopup = false
					}, 300)
				})
			},
			onTap() {
				if (!this.maskClick) return
				this.close()
			}
		}
	}
</script>
<style scoped>
	.uni-popup {
		position: fixed;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		bottom: 0;
		left: 0;
		right: 0;
		/* #ifndef APP-NVUE */
		z-index: 99;
		/* #endif */
	}

	.uni-popup__mask {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
		opacity: 0;
	}

	.mask-ani {
		transition-property: opacity;
		transition-duration: 0.2s;
	}

	.uni-top-mask {
		opacity: 1;
	}

	.uni-bottom-mask {
		opacity: 1;
	}

	.uni-center-mask {
		opacity: 1;
	}

	.uni-popup__wrapper {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		position: absolute;
	}

	.top {
		top: 0;
		left: 0;
		right: 0;
		transform: translateY(-500px);
	}

	.bottom {
		bottom: 0;
		left: 0;
		right: 0;
		transform: translateY(500px);
	}

	.center {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		justify-content: center;
		align-items: center;
		transform: scale(1.2);
		opacity: 0;
	}

	.uni-popup__wrapper-box {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		position: relative;
	}

	.content-ani {
		/* transition: transform 0.3s;
 */
		transition-property: transform, opacity;
		transition-duration: 0.2s;
	}


	.uni-top-content {
		transform: translateY(0);
	}

	.uni-bottom-content {
		transform: translateY(0);
	}

	.uni-center-content {
		transform: scale(1);
		opacity: 1;
	}
</style>