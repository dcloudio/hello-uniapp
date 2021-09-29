<template>
	<text class="uni-tag" v-if="text" :class="classes" :style="customStyle" @click="onClick" ><slot/>{{text}}<slot name="right" /></text>
</template>

<script>
	/**
	 * Tag 标签
	 * @description 用于展示1个或多个文字标签，可点击切换选中、不选中的状态
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=35
	 * @property {String} text 标签内容
	 * @property {String} size = [normal|small] 大小尺寸
	 * 	@value normal 正常
	 * 	@value small 小尺寸
	 * @property {String} type = [default|primary|success｜warning｜error｜royal]  颜色类型
	 * 	@value default 灰色
	 * 	@value primary 蓝色
	 * 	@value success 绿色
	 * 	@value warning 黄色
	 * 	@value error 红色
	 * 	@value royal 紫色
	 * @property {Boolean} disabled = [true|false] 是否为禁用状态
	 * @property {Boolean} inverted = [true|false] 是否无需背景颜色（空心标签）
	 * @property {Boolean} circle = [true|false] 是否为圆角
	 * @event {Function} click 点击 Tag 触发事件
	 */

	export default {
		name: "UniTag",
		emits:['click'],
		props: {
			type: {
				// 标签类型default、primary、success、warning、error、royal
				type: String,
				default: "default"
			},
			size: {
				// 标签大小 normal, small
				type: String,
				default: "normal"
			},
			// 标签内容
			text: {
				type: String,
				default: ""
			},
			disabled: {
				// 是否为禁用状态
				type: [Boolean, String],
				default: false
			},
			inverted: {
				// 是否为空心
				type: [Boolean, String],
				default: false
			},
			circle: {
				// 是否为圆角样式
				type: [Boolean, String],
				default: false
			},
			mark: {
				// 是否为标记样式
				type: [Boolean, String],
				default: false
			},
			customStyle: {
				type: String,
				default: ''
			}
		},
		computed: {
			classes() {
				const { type, disabled, inverted, circle, mark, size, isTrue } = this
				const classArr = [
					'uni-tag--' + type,
					isTrue(disabled) ? 'uni-tag--disabled' : '',
					isTrue(inverted) ? type + '-uni-tag--inverted' : '',
					isTrue(circle) ? 'uni-tag--circle' : '',
					isTrue(mark) ? 'uni-tag--mark' : '',
					'uni-tag--' + size,
					// type === 'default' ? 'uni-tag--default' : 'uni-tag-text',
					isTrue(inverted) ? 'uni-tag-text--' + type : '',
					size === 'small' ? 'uni-tag-text--small' : ''
				]
				return classArr.join(' ')
			}
		},
		methods: {
			isTrue(value) {
				return value === true || value === 'true'
			},
			onClick() {
				if (this.isTrue(this.disabled)) return
				this.$emit("click");
			}
		}
	};
</script>

<style lang="scss" scoped>
	$tag-pd: 0px 16px;
	$tag-small-pd: 0px 8px;
	$uni-color-royal: #4335d6;


	.uni-tag {
		/* #ifndef APP-NVUE */
		display: inline-block;
		/* #endif */
		/* #ifdef APP-NVUE */
		align-self: flex-start;
		/* #endif */
		padding: $tag-pd;
		line-height: 30px;
		color: $uni-text-color;
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-grey;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-bg-color-grey;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-tag--circle {
		border-radius: 15px;
	}

	.uni-tag--mark {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	.uni-tag--disabled {
		opacity: 0.5;
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */

	}

	.uni-tag--small {
		height: 20px;
		padding: $tag-small-pd;
		line-height: 20px;
		font-size: $uni-font-size-sm;
	}

	.uni-tag--default {
		color: $uni-text-color;
		font-size: $uni-font-size-base;
	}

	.uni-tag--royal {
		color: $uni-text-color;
		font-size: $uni-font-size-base;
	}

	.uni-tag-text--small {
		font-size: $uni-font-size-sm;
	}

	.uni-tag-text {
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-base;
	}

	.uni-tag-text--primary {
		color: $uni-color-primary;
	}

	.uni-tag-text--success {
		color: $uni-color-success;
	}

	.uni-tag-text--warning {
		color: $uni-color-warning;
	}

	.uni-tag-text--error {
		color: $uni-color-error;
	}

	.uni-tag-text--royal {
		color: $uni-color-royal;
	}


	.uni-tag--primary {
		color: $uni-text-color-inverse;
		background-color: $uni-color-primary;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-primary;
	}

	.primary-uni-tag--inverted {
		color: $uni-color-primary;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-primary;
	}

	.uni-tag--success {
		color: $uni-text-color-inverse;
		background-color: $uni-color-success;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-success;
	}

	.success-uni-tag--inverted {
		color: $uni-color-success;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-success;
	}

	.uni-tag--warning {
		color: $uni-text-color-inverse;
		background-color: $uni-color-warning;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-warning;
	}

	.warning-uni-tag--inverted {
		color: $uni-color-warning;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-warning;
	}

	.uni-tag--error {
		color: $uni-text-color-inverse;
		background-color: $uni-color-error;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-error;
	}

	.error-uni-tag--inverted {
		color: $uni-color-error;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-error;
	}

	.uni-tag--royal {
		color: $uni-text-color-inverse;
		background-color: $uni-color-royal;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-royal;
	}

	.royal-uni-tag--inverted {
		color: $uni-color-royal;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-color-royal;
	}

	.uni-tag--inverted {
		color: $uni-text-color;
		background-color: $uni-bg-color;
		border-width: 1rpx;
		border-style: solid;
		border-color: $uni-bg-color-grey;
	}
</style>
