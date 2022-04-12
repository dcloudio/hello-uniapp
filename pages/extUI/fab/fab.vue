<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-fab foldable Hover button</text>
		</uni-card>

		<uni-section title="Basic Functions" subTitle="Click the button to switch fab different states" type="line">
			<view class="warp">
				<button class="button" type="primary" @click="switchBtn(0)">Switching menu direction({{ directionStr }})</button>
				<button class="button" type="primary" @click="switchBtn('left', 'bottom')">The lower left corner shows</button>
				<button class="button" type="primary" @click="switchBtn('right', 'bottom')">The lower right corner shows</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">Top left corner shows</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">Top left corner shows</button>
				<button class="button" type="primary" @click="switchBtn('right', 'top')">The upper right corner shows</button>
				<button class="button" type="primary" @click="switchColor">Modify color</button>
			</view>
		</uni-section>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				title: 'uni-fab',
				directionStr: 'Vertical',
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				is_color_type: false,
				content: [{
						iconPath: '/static/image.png',
						selectedIconPath: '/static/image-active.png',
						text: 'image',
						active: false
					},
					{
						iconPath: '/static/home.png',
						selectedIconPath: '/static/home-active.png',
						text: 'home',
						active: false
					},
					{
						iconPath: '/static/star.png',
						selectedIconPath: '/static/star-active.png',
						text: 'star',
						active: false
					}
				]
			}
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				uni.showModal({
					title: 'Tips',
					content: `you ${this.content[e.index].active ? 'Selected' : 'Canceled'}${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('User clicks OK')
						} else if (res.cancel) {
							console.log('User clicks Cancel')
						}
					}
				})
			},
			fabClick() {
				uni.showToast({
					title: 'Clicked the hover button',
					icon: 'none'
				})
			},
			switchBtn(hor, ver) {
				if (hor === 0) {
					this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
					this.directionStr = this.direction === 'horizontal' ? 'Vertical' : 'horizontal'
				} else {
					this.horizontal = hor
					this.vertical = ver
				}
				this.$forceUpdate()
			},
			switchColor() {
				this.is_color_type = !this.is_color_type
				if (this.is_color_type) {
					this.pattern.iconColor = '#aaa'
					this.pattern.buttonColor = '#fff'
				} else {
					this.pattern.iconColor = '#fff'
					this.pattern.buttonColor = '#007AFF'
				}
			}
		}
	}
</script>

<style lang="scss">
	.warp {
		padding: 10px;
	}

	.button {
		margin-bottom: 10px;
	}
</style>
