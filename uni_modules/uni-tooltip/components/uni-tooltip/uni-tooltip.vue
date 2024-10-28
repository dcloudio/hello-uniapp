<template>
	<view class="uni-tooltip">
		<slot></slot>
		<view v-if="content || $slots.content" class="uni-tooltip-popup" :style="initPlacement">
			<slot name="content">
				{{content}}
			</slot>
		</view>
	</view>
</template>


<script>
	/**
	 * Tooltip 提示文字
	 * @description 常用于展示鼠标 hover 时的提示信息。
	 * @tutorial https://uniapp.dcloud.io/component/uniui/uni-tooltip
	 * @property {String} content   弹出层显示的内容
	 * @property {String}  placement出现位置, 目前支持：left right top bottom
	 */
	export default {
		name: "uni-tooltip",
		data() {
			return {

			};
		},
		methods: {},
		computed: {
			initPlacement() {
				let style = {};
				switch (this.placement) {
					case 'left':
						style = {
							top: '50%',
							transform: 'translateY(-50%)',
							right: '100%',
							"margin-right": '10rpx',
						}
						break;
					case 'right':
						style = {
							top: '50%',
							transform: 'translateY(-50%)',
							left: '100%',
							"margin-left": '10rpx',
						}
						break;
					case 'top':
						style = {
							bottom: '100%',
							transform: 'translateX(-50%)',
							left: '50%',
							"margin-bottom": '10rpx',
						}
						break;
					case 'bottom':
						style = {
							top: '100%',
							transform: 'translateX(-50%)',
							left: '50%',
							"margin-top": '10rpx',
						}
						break;
				}
				return style;
			}
		},
		props: {
			content: {
				type: String,
				default: ''
			},

			placement: {
				type: String,
				default: 'bottom'
			},
		}
	}
</script>

<style>
	.uni-tooltip {
		position: relative;
		cursor: pointer;
		display: inline-block;
	}

	.uni-tooltip-popup {
		z-index: 1;
		display: none;
		position: absolute;
		background-color: #333;
		border-radius: 8px;
		color: #fff;
		font-size: 12px;
		text-align: left;
		line-height: 16px;
		padding: 12px;
		overflow: auto;
	}


	.uni-tooltip:hover .uni-tooltip-popup {
		display: block;
	}
</style>
