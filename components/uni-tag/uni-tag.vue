<template>
	<view v-if="text" :class="[
      disabled === true || disabled === 'true' ? 'uni-tag--disabled' : '',
      inverted === true || inverted === 'true' ? 'uni-tag--inverted' : '',
      circle === true || circle === 'true' ? 'uni-tag--circle' : '',
      mark === true || mark === 'true' ? 'uni-tag--mark' : '',
      'uni-tag--' + size,
      'uni-tag--' + type
    ]" class="uni-tag" @click="onClick()">
		{{ text }}
	</view>
</template>

<script>
	export default {
		name: 'UniTag',
		props: {
			type: {
				// 标签类型default、primary、success、warning、danger、royal
				type: String,
				default: 'default'
			},
			size: {
				// 标签大小 normal, small
				type: String,
				default: 'normal'
			},
			// 标签内容
			text: {
				type: String,
				default: ''
			},
			disabled: {
				// 是否为禁用状态
				type: [String, Boolean],
				defalut: false
			},
			inverted: {
				// 是否为空心
				type: [String, Boolean],
				defalut: false
			},
			circle: {
				// 是否为圆角样式
				type: [String, Boolean],
				defalut: false
			},
			mark: {
				// 是否为标记样式
				type: [String, Boolean],
				defalut: false
			}
		},
		methods: {
			onClick() {
				if (this.disabled === true || this.disabled === 'true') {
					return
				}
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-tag {
		box-sizing: border-box;
		padding: 0 32upx;
		height: 60upx;
		line-height: calc(60upx - 2px);
		font-size: 28upx;
		display: inline-flex;
		align-items: center;
		color: #333;
		border-radius: 6upx;
		background-color: #f8f8f8;
		border: 1px solid #f8f8f8
	}

	.uni-tag--circle {
		border-radius: 30upx
	}

	.uni-tag--mark {
		border-radius: 0 30upx 30upx 0
	}

	.uni-tag--disabled {
		opacity: .5
	}

	.uni-tag--small {
		height: 40upx;
		padding: 0 16upx;
		line-height: calc(40upx - 2px);
		font-size: 24upx
	}

	.uni-tag--primary {
		color: #fff;
		background-color: #007aff;
		border: 1px solid #007aff
	}

	.uni-tag--primary.uni-tag--inverted {
		color: #007aff;
		background-color: #fff;
		border: 1px solid #007aff
	}

	.uni-tag--success {
		color: #fff;
		background-color: #4cd964;
		border: 1px solid #4cd964
	}

	.uni-tag--success.uni-tag--inverted {
		color: #4cd964;
		background-color: #fff;
		border: 1px solid #4cd964
	}

	.uni-tag--warning {
		color: #fff;
		background-color: #f0ad4e;
		border: 1px solid #f0ad4e
	}

	.uni-tag--warning.uni-tag--inverted {
		color: #f0ad4e;
		background-color: #fff;
		border: 1px solid #f0ad4e
	}

	.uni-tag--error {
		color: #fff;
		background-color: #dd524d;
		border: 1px solid #dd524d
	}

	.uni-tag--error.uni-tag--inverted {
		color: #dd524d;
		background-color: #fff;
		border: 1px solid #dd524d
	}

	.uni-tag--inverted {
		color: #333;
		background-color: #fff;
		border: 1px solid #f8f8f8
	}
</style>