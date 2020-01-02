<template>
	<text v-if="text" :class="inverted ? 'uni-badge--' + type + ' uni-badge--' + size + ' uni-badge--' + type + '-inverted' : 'uni-badge--' + type + ' uni-badge--' + size" :style="badgeStyle" class="uni-badge" @click="onClick()">{{ text }}</text>
</template>

<script>
	/**
	 * Badge 数字角标
	 * @description 数字角标一般和其它控件（列表、9宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=21
	 * @property {String} text 角标内容
	 * @property {String} type = [default|primary|success|warning|error] 颜色类型
	 * 	@value default 灰色
	 * 	@value primary 蓝色
	 * 	@value success 绿色
	 * 	@value warning 黄色
	 * 	@value error 红色
	 * @property {String} size = [normal|small] Badge 大小
	 * 	@value normal 一般尺寸
	 * 	@value small 小尺寸
	 * @property {String} inverted = [true|false] 是否无需背景颜色
	 * @event {Function} click 点击 Badge 触发事件
	 * @example <uni-badge text="1"></uni-badge>
	 */
	export default {
		name: 'UniBadge',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		data() {
			return {
				badgeStyle: ''
			};
		},
		watch: {
			text() {
				this.setStyle()
			}
		},
		mounted() {
			this.setStyle()
		},
		methods: {
			setStyle() {
				this.badgeStyle = `width: ${String(this.text).length * 8 + 12}px`
			},
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>

<style scoped>
	.uni-badge {
		/* #ifndef APP-PLUS */
		display: flex;
		/* #endif */
		justify-content: center;
		flex-direction: row;
		height: 20px;
		line-height: 20px;
		color: #333;
		border-radius: 100px;
		background-color: #f1f1f1;
		background-color: transparent;
		text-align: center;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		font-size: 12px;
		padding: 0px 6px;
	}

	.uni-badge--inverted {
		padding: 0 5px 0 0;
		color: #f1f1f1;
	}

	.uni-badge--default {
		color: #333;
		background-color: #f1f1f1;
	}

	.uni-badge--default-inverted {
		color: #999;
		background-color: transparent;
	}

	.uni-badge--primary {
		color: #fff;
		background-color: #007aff;
	}

	.uni-badge--primary-inverted {
		color: #007aff;
		background-color: transparent;
	}

	.uni-badge--success {
		color: #fff;
		background-color: #4cd964;
	}

	.uni-badge--success-inverted {
		color: #4cd964;
		background-color: transparent;
	}

	.uni-badge--warning {
		color: #fff;
		background-color: #f0ad4e;
	}

	.uni-badge--warning-inverted {
		color: #f0ad4e;
		background-color: transparent;
	}

	.uni-badge--error {
		color: #fff;
		background-color: #dd524d;
	}

	.uni-badge--error-inverted {
		color: #dd524d;
		background-color: transparent;
	}

	.uni-badge--small {
		transform: scale(0.8);
		transform-origin: center center;
	}
</style>