<template>
	<view class="uni-badge--x">
		<slot />
		<text v-if="text" :class="classNames" :style="[badgeWidth, positionStyle, customStyle, dotStyle]"
			class="uni-badge"
			@click="onClick()">{{displayValue}}</text>
	</view>
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
		emits:['click'],
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			isDot: {
				type: Boolean,
				default: false
			},
			maxNum: {
				type: Number,
				default: 99
			},
			absolute: {
				type: String,
				default: ''
			},
			offset: {
				type: Array,
				default () {
					return [0, 0]
				}
			},
			text: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			},
			customStyle: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {};
		},
		computed: {
			width() {
				return String(this.text).length * 8 + 12
			},
			classNames() {
				const {
					inverted,
					type,
					size,
					absolute
				} = this
				return [
					inverted ? 'uni-badge--' + type + '-inverted' : '',
					'uni-badge--' + type,
					'uni-badge--' + size,
					absolute ? 'uni-badge--absolute' : ''
				].join(' ')
			},
			positionStyle() {
				if (!this.absolute) return {}
				let w = this.width / 2,
					h = 10
				if (this.isDot) {
					w = 5
					h = 5
				}
				const x = `${- w  + this.offset[0]}px`
				const y = `${- h + this.offset[1]}px`

				const whiteList = {
					rightTop: {
						right: x,
						top: y
					},
					rightBottom: {
						right: x,
						bottom: y
					},
					leftBottom: {
						left: x,
						bottom: y
					},
					leftTop: {
						left: x,
						top: y
					}
				}
				const match = whiteList[this.absolute]
				return match ? match : whiteList['rightTop']
			},
			badgeWidth() {
				return {
					width: `${this.width}px`
				}
			},
			dotStyle() {
				if (!this.isDot) return {}
				return {
					width: '10px',
					height: '10px',
					borderRadius: '10px'
				}
			},
			displayValue() {
				const { isDot, text, maxNum } = this
				return isDot ? '' : (Number(text) > maxNum ? `${maxNum}+` : text)
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	$bage-size: 12px;
	$bage-small: scale(0.8);
	$bage-height: 20px;

	.uni-badge--x {
		/* #ifdef APP-NVUE */
		// align-self: flex-start;
		/* #endif */
		/* #ifndef APP-NVUE */
		display: inline-block;
		/* #endif */
		position: relative;
	}

	.uni-badge--absolute {
		position: absolute;
	}

	.uni-badge {
		/* #ifndef APP-NVUE */
		display: flex;
		overflow: hidden;
		box-sizing: border-box;
		/* #endif */
		justify-content: center;
		flex-direction: row;
		height: $bage-height;
		line-height: $bage-height;
		color: $uni-text-color;
		border-radius: 100px;
		background-color: $uni-bg-color-hover;
		background-color: transparent;
		text-align: center;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		font-size: $bage-size;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-badge--inverted {
		padding: 0 5px 0 0;
		color: $uni-bg-color-hover;
	}

	.uni-badge--default {
		color: $uni-text-color;
		background-color: $uni-bg-color-hover;
	}

	.uni-badge--default-inverted {
		color: $uni-text-color-grey;
		background-color: transparent;
	}

	.uni-badge--primary {
		color: $uni-text-color-inverse;
		background-color: $uni-color-primary;
	}

	.uni-badge--primary-inverted {
		color: $uni-color-primary;
		background-color: transparent;
	}

	.uni-badge--success {
		color: $uni-text-color-inverse;
		background-color: $uni-color-success;
	}

	.uni-badge--success-inverted {
		color: $uni-color-success;
		background-color: transparent;
	}

	.uni-badge--warning {
		color: $uni-text-color-inverse;
		background-color: $uni-color-warning;
	}

	.uni-badge--warning-inverted {
		color: $uni-color-warning;
		background-color: transparent;
	}

	.uni-badge--error {
		color: $uni-text-color-inverse;
		background-color: $uni-color-error;
	}

	.uni-badge--error-inverted {
		color: $uni-color-error;
		background-color: transparent;
	}

	.uni-badge--small {
		transform: $bage-small;
		transform-origin: center center;
	}
</style>
