<template>
	<view class="uni-title" :style="{'justify-content':textAlign}">
		<text :class="['uni-'+type]" :style="{'color':color}">
			<slot>{{title}}</slot>
		</text>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'h3'
			},
			title: {
				type: String,
				default: ''
			},
			align: {
				type: String,
				default: 'left'
			},
			stat: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: '#333333'
			}
		},
		data() {
			return {

			};
		},
		computed: {
			textAlign() {
				let align = 'center';
				switch (this.align) {
					case 'left':
						align = 'flex-start'
						break;
					case 'center':
						align = 'center'
						break;
					case 'right':
						align = 'flex-end'
						break;
				}
				return align
			}
		},
		mounted() {
			if (uni.report) {
				uni.report('title', this.title)
			}
		}
	}
</script>

<style scoped>
	.uni-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-h1 {
		font-size: 20px;
		color: #333;
		font-weight: bold;
	}

	.uni-h2 {
		font-size: 18px;
		color: #333;
		font-weight: bold;
	}

	.uni-h3 {
		font-size: 16px;
		color: #333;
		font-weight: bold;
		/* font-weight: 400; */
	}

	.uni-h4 {
		font-size: 14px;
		color: #333;
		font-weight: bold;
		/* font-weight: 300; */
	}

	.uni-h5 {
		font-size: 12px;
		color: #333;
		font-weight: bold;
		/* font-weight: 200; */
	}
</style>