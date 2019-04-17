<template>
	<view :class="{ text: styleType === 'text' }" :style="{ borderColor: styleType === 'text' ? '' : activeColor }" class="segmented-control">
		<view v-for="(item, index) in values" :class="[{ text: styleType === 'text' }, { active: index === currentIndex }]" :key="index" :style="{
        color:
          index === currentIndex
            ? styleType === 'text'
              ? activeColor
              : '#fff'
            : styleType === 'text'
              ? '#000'
              : activeColor,
        backgroundColor: index === currentIndex && styleType === 'button' ? activeColor : ''
      }" class="segmented-control-item" @click="_onClick(index)">
			{{ item }}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniSegmentedControl',
		props: {
			current: {
				type: Number,
				default: 0
			},
			values: {
				type: Array,
				default () {
					return []
				}
			},
			activeColor: {
				type: String,
				default: '#007aff'
			},
			styleType: {
				type: String,
				default: 'button'
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		watch: {
			current(val) {
				if (val !== this.currentIndex) {
					this.currentIndex = val
				}
			}
		},
		created() {
			this.currentIndex = this.current
		},
		methods: {
			_onClick(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index
					this.$emit('clickItem', index)
				}
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.segmented-control {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 75%;
		font-size: 28upx;
		box-sizing: border-box;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid;
		border-radius: 10upx
	}

	.segmented-control.text {
		border: 0;
		border-radius: 0
	}

	.segmented-control-item {
		flex: 1;
		text-align: center;
		line-height: 60upx;
		box-sizing: border-box;
		border-left: 1px solid
	}

	.segmented-control-item.active {
		color: #fff
	}

	.segmented-control-item.text {
		border-left: 0;
		color: #000
	}

	.segmented-control-item.text.active {
		border-bottom-style: solid
	}

	.segmented-control-item:first-child {
		border-left-width: 0
	}
</style>