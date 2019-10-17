<template>
	<view :class="{sticky:sticky}" :style="{top:stickyTop+'px'}" class="uni-title">
		<view v-if="type" class="uni-title__head">
			<view :class="type" class="uni-title__head-tag" />
		</view>
		<view class="uni-title__content">
			<text :class="{'distraction':!subTitle}" class="uni-title__content-title">{{ title }}</text>
			<text v-if="subTitle" class="uni-title__content-sub">{{ subTitle }}</text>
		</view>
		<slot />
	</view>
</template>

<script>
	export default {
		name: 'UniTitle',
		props: {
			type: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			},
			sticky: {
				type: Boolean,
				default: false
			},
			stickyTop: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {}
		},
		watch: {
			title(newVal) {
				if (uni.report && newVal !== '') {
					uni.report('title', newVal)
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>
<style scoped>
	.uni-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		margin-top: 10px;
		flex-direction: row;
		align-items: center;
		padding: 5px 10px;
		height: 50px;
		background-color: #fdfdfd;
		border-bottom-color: #f5f5f5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		font-weight: normal;
	}

	.sticky {
		position: sticky;
		/* top: 44px;
 */
	}

	.uni-title__head {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}

	.uni-title__head-tag {}

	.line {
		height: 15px;
		background-color: #ccc;
		border-radius: 5px;
		width: 3px;
	}

	.circle {
		width: 8px;
		height: 8px;
		/* border-radius: 50px;
 */
		border-top-right-radius: 50px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		background-color: #ccc;
	}

	.uni-title__content {
		flex: 1;
		color: #464e52;
	}

	.uni-title__content-title {
		font-size: 15px;
		color: #464e52;
	}

	.distraction {
		flex-direction: row;
		align-items: center;
	}

	.uni-title__content-sub {
		font-size: 12px;
		color: #999;
	}
</style>