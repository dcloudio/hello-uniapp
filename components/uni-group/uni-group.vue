<template>
	<view class="uni-group" :style="{marginTop: `${top}px` }">
		<view v-if="title" class="uni-group__content">
			<text class="uni-group__content-title">{{ title }}</text>
		</view>
		<slot />
	</view>
</template>

<script>
	/**
	 * Group 分组
	 * @description 表单字段分组
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=21002
	 * @property {String} title 主标题
	 * @property {Number} top 分组间隔
	 */
	export default {
		name: 'UniFormGroup',
		props: {
			title: {
				type: String,
				default: ''
			},
			top: {
				type: [Number, String],
				default: 10
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
	.uni-group {
		background: #fff;
		margin-top: 10px;
	}

	.uni-group__content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		padding-left: 15px;
		height: 40px;
		background-color: #f8f8f8;
		font-weight: normal;
		color: #333;
	}

	.uni-group__content-title {
		font-size: 14px;
		color: #333;
	}

	.distraction {
		flex-direction: row;
		align-items: center;
	}
</style>