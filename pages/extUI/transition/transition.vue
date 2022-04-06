<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等</text>
		</uni-card>
		<uni-section title="示例" type="line">
			<view class="example">
				<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :styles="styles"
					:show="show"><text class="text">示例元素</text></uni-transition>
			</view>
		</uni-section>

		<uni-section title="操作" subTitle="点击按钮 ,切换动画效果" type="line">
			<view class="example-body">
				<button class="transition-button" type="primary" @click="handle('fade')">淡隐淡出</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'slide-top'])">由上至下</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'slide-right'])">由右至左过</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'zoom-in'])">由小到大过</button>
				<button class="transition-button" type="primary" @click="custom">自定义动画</button>
			</view>
		</uni-section>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				show: true,
				modeClass: 'fade',
				styles: {}
			}
		},
		onLoad() {
			// #ifdef APP-NVUE
			this.styles = {
				justifyContent: 'center',
				alignItems: 'center',
				width: '100px',
				height: '100px',
				borderRadius: '5px',
				textAlign: 'center',
				backgroundColor: '#4cd964',
				boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)'
			}
			// #endif
		},
		methods: {
			handle(type) {
				this.show = !this.show
				this.modeClass = type
			},
			custom() {
				// TODO 下面修改宽高在百度下还有些问题待修复
				// this.$refs.ani.step({
				// 	width: '200px'
				// })
				// this.$refs.ani.step({
				// 	height: '150px'
				// },{
				// 	delay:100,
				// 	duration:200
				// })
				this.$refs.ani.step({
					width: '100px',
					height: '100px',
					rotate: '180'
				}, {
					delay: 200,
					duration: 300
				})
				this.$refs.ani.step({
					width: '100px',
					height: '100px',
					rotate: '0'
				}, {
					transformOrigin: '50% 50%'
				})

				this.$refs.ani.step({
					translateX: '-100px'
				}, {
					timingFunction: 'ease-in',
					duration: 100
				})

				this.$refs.ani.step({
					translateX: '100px'
				}, {
					timingFunction: 'ease',
					duration: 300
				})

				this.$refs.ani.step({
					translateX: '50px',
					scale: 1.5
				}, {
					timingFunction: 'linear',
					duration: 100
				})
				this.$refs.ani.step({
					translateX: '0px',
					scale: 1
				}, {
					timingFunction: 'linear',
					duration: 150
				})

				this.$refs.ani.run()
			}
		}
	}
</script>

<style lang="scss">
	.example {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #fff;
	}

	.example-body {
		padding: 10px 20px;
		padding-bottom: 0px;
	}

	.transition-button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		flex: 1;
		margin-bottom: 10px;
	}

	/* #ifndef APP-NVUE */
	.example ::v-deep .transition {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 5px;
		text-align: center;
		background-color: #4cd964;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
	}

	/* #endif */

	.text {
		font-size: 14px;
		color: #fff;
	}
</style>
