<template>
	<view class="uni-numbox">
		<text :class="{ 'uni-numbox--disabled': inputValue <= min || disabled }" @click="_calcValue('minus')" class="uni-numbox__minus">-</text>
		<input :disabled="disabled" @blur="_onBlur" class="uni-numbox__value" type="number" v-model="inputValue" />
		<text :class="{ 'uni-numbox--disabled': inputValue >= max || disabled }" @click="_calcValue('plus')" class="uni-numbox__plus">+</text>
	</view>
</template>
<script>
	export default {
		name: "UniNumberBox",
		props: {
			value: {
				type: [Number, String],
				default: 1
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			step: {
				type: Number,
				default: 1
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				inputValue: 0
			};
		},
		watch: {
			value(val) {
				this.inputValue = +val;
			},
			inputValue(newVal, oldVal) {
				if (+newVal !== +oldVal) {
					this.$emit("change", newVal);
				}
			}
		},
		created() {
			this.inputValue = +this.value;
		},
		methods: {
			_calcValue(type) {
				if (this.disabled) {
					return;
				}
				const scale = this._getDecimalScale();
				let value = this.inputValue * scale;
				let step = this.step * scale;
				if (type === "minus") {
					value -= step;
				} else if (type === "plus") {
					value += step;
				}
				if (value < this.min || value > this.max) {
					return;
				}

				this.inputValue = String(value / scale);
			},
			_getDecimalScale() {
				let scale = 1;
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + "").split(".")[1].length);
				}
				return scale;
			},
			_onBlur(event) {
				let value = event.detail.value;
				if (!value) {
					// this.inputValue = 0;
					return;
				}
				value = +value;
				if (value > this.max) {
					value = this.max;
				} else if (value < this.min) {
					value = this.min;
				}
				this.inputValue = value;
			}
		}
	};
</script>
<style scoped>
	/* #ifdef APP-PLUS-NVUE */
	/* #endif */
	/* #ifdef APP-PLUS */

	/* #endif */

	.uni-numbox {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		height: 70rpx;
		line-height: 70rpx;
		width: 240rpx;
	}

	.uni-numbox__value {
		background-color: #ffffff;
		width: 80rpx;
		height: 70rpx;
		text-align: center;
		font-size: 32rpx;
		border-width: 1rpx;
		border-style: solid;
		border-color: #e5e5e5;
		border-left-width: 0;
		border-right-width: 0;
	}

	.uni-numbox__minus {
		width: 70rpx;
		height: 70rpx;
		line-height: 62rpx;
		text-align: center;
		font-size: 40rpx;
		color: #333;
		background-color: #f8f8f8;
		border-width: 1rpx;
		border-style: solid;
		border-color: #e5e5e5;
		border-top-left-radius: 6rpx;
		border-bottom-left-radius: 6rpx;
		border-right-width: 0;
	}

	.uni-numbox__plus {
		width: 70rpx;
		height: 70rpx;
		line-height: 62rpx;
		text-align: center;
		font-size: 40rpx;
		color: #333;
		border-width: 1rpx;
		border-style: solid;
		border-color: #e5e5e5;
		border-top-right-radius: 6rpx;
		border-bottom-right-radius: 6rpx;
		background-color: #f8f8f8;
		border-left-width: 0;
	}

	.uni-numbox--disabled {
		color: #c0c0c0;
	}
</style>