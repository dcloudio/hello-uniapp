<template>
	<view class="gesture-lock" :class="{error:error}" :style="{width: containerWidth +'rpx', height:containerWidth +'rpx'}"
	 @touchstart.stop="onTouchStart" @touchmove.stop="onTouchMove" @touchend.stop="onTouchEnd">
		<!-- 同级 v-for 的 key 重复会有问题，需要套一层。 -->
		<!-- 9 个圆 -->
		<view>
			<view v-for="(item,i) in circleArray" :key="i" class="cycle" :class="{check:item.check}" :style="{left:item.style.left,top:item.style.top,width:item.style.width,height:item.style.width}">
			</view>
		</view>
		<view>
			<!-- 已激活锁之间的线段 -->
			<view v-for="(item,i) in lineArray" :key="i" class="line" :style="{left:item.activeLeft,top:item.activeTop,width:item.activeWidth,'-webkit-transform':'rotate('+item.activeRotate+')',transform:'rotate('+item.activeRotate+')'}">
			</view>
		</view>
		<!-- 最后一个激活的锁与当前位置之间的线段 -->
		<view class="line" :style="{left:activeLine.activeLeft,top:activeLine.activeTop,width:activeLine.activeWidth,'-webkit-transform':'rotate('+activeLine.activeRotate+')',transform:'rotate('+activeLine.activeRotate+')'}">
		</view>
	</view>
</template>
<script>
	import GestureLock from './gestureLock';

	export default {
		name: 'index',
		props: {
			/**
			 * 容器宽度
			 */
			containerWidth: {
				type: [Number, String],
				default: 0
			},
			/**
			 * 圆的半径
			 */
			cycleRadius: {
				type: [Number, String],
				default: 0
			},
			/**
			 * 已设定的密码
			 */
			password: {
				type: Array,
				default () {
					return []
				}
			},
		},
		data() {
			return {
				gestureLock: {}, // 锁对象
				circleArray: [], // 圆对象数组
				lineArray: [], // 已激活锁之间的线段
				activeLine: {}, // 最后一个激活的锁与当前位置之间的线段
				error: false
			}
		},
		methods: {
			onTouchStart(e) {
				this.gestureLock.onTouchStart(e);
				this.refesh();
			},

			onTouchMove(e) {
				this.gestureLock.onTouchMove(e);
				this.refesh();
			},

			onTouchEnd(e) {
				const checkPoints = this.gestureLock.onTouchEnd(e);
				if (!this.password.length || checkPoints.join('') == this.password.join('')) {
					this.refesh();
					this.$emit('end', checkPoints);
				} else {
					this.error = true;
					setTimeout(() => {
						this.refesh();
						this.$emit('end', checkPoints);
					}, 800);
				}

			},
			refesh() {
				this.error = false;
				this.circleArray = this.gestureLock.getCycleArray();
				this.lineArray = this.gestureLock.getLineArray();
				this.activeLine = this.gestureLock.getActiveLine();
			}
		},
		mounted() {
			this.gestureLock = new GestureLock(this.containerWidth, this.cycleRadius);
			this.refesh();
		}
	}
</script>

<style scoped>
	.gesture-lock {
		margin: 0 auto;
		position: relative;
		box-sizing: border-box;
		overflow: auto;
	}

	.gesture-lock .cycle {
		box-sizing: border-box;
		position: absolute;
		border: 2px solid #66aaff;
		border-radius: 50%;
	}

	.gesture-lock .cycle.check:after {
		content: "";
		display: block;
		position: absolute;
		width: 32%;
		height: 32%;
		border: 2px solid #66aaff;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.gesture-lock .line {
		height: 0;
		border-top: 2px solid #66aaff;
		position: absolute;
		transform-origin: left center;
	}

	.gesture-lock.error .cycle.check,
	.gesture-lock.error .cycle.check:after,
	.gesture-lock.error .line {
		border-color: #ffa197;
	}
</style>
