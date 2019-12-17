<template>
	<view class="uni-title__box" :style="{'align-items':textAlign}">
		<text class="uni-title__base" :class="['uni-'+type]" :style="{'color':color}">{{title}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			align: {
				type: String,
				default: 'left'
			},
			color: {
				type: String,
				default: '#333333'
			},
			stat: {
				type: [Boolean, String],
				default: ''
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
		watch: {
			title(newVal) {
				if (this.isOpenStat()) {
					// 上报数据
					if (uni.report) {
						uni.report('title', this.title)
					}
				}
			}
		},
		mounted() {
			if (this.isOpenStat()) {
				// 上报数据
				if (uni.report) {
					uni.report('title', this.title)
				}
			}
		},
		methods: {
			isOpenStat() {
				if (this.stat === '') {
					this.isStat = false
				}
				let stat_type = (typeof(this.stat) === 'boolean' && this.stat) || (typeof(this.stat) === 'string' && this.stat !==
					'')
				if (this.type === "") {
					this.isStat = true
					if (this.stat.toString() === 'false') {
						this.isStat = false
					}
				}

				if (this.type !== '') {
					this.isStat = true
					if (stat_type) {
						this.isStat = true
					} else {
						this.isStat = false
					}
				}
				return this.isStat
			}
		}
	}
</script>

<style scoped>
	/* .uni-title {

	} */
	.uni-title__box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 8px 0;
		flex: 1;
	}

	.uni-title__base {
		font-size: 15px;
		color: #333;
		font-weight: 500;
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