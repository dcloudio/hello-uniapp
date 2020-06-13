<template>
	<!-- #ifdef APP-NVUE -->
	<cell>
		<!-- #endif -->
		<view :class="disabled ? 'uni-list-item--disabled' : ''" :hover-class="disabled || showSwitch ? '' : 'uni-list-item--hover'" class="uni-list-item" @click="onClick">
			<view class="uni-list-item__container" :class="{'uni-list-item--first':isFirstChild}">
				<view v-if="thumb" class="uni-list-item__icon">
					<image :src="thumb" class="uni-list-item__icon-img" />
				</view>
				<view v-else-if="showExtraIcon" class="uni-list-item__icon">
					<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" class="uni-icon-wrapper" />
				</view>
				<view class="uni-list-item__content">
					<slot />
					<text class="uni-list-item__content-title">{{ title }}</text>
					<text v-if="note" class="uni-list-item__content-note">{{ note }}</text>
				</view>
				<view class="uni-list-item__extra">
					<text v-if="rightText" class="uni-list-item__extra-text">{{rightText}}</text>
					<uni-badge v-if="showBadge" :type="badgeType" :text="badgeText" />
					<switch v-if="showSwitch" :disabled="disabled" :checked="switchChecked" @change="onSwitchChange" />
					<slot name="right"></slot>
					<uni-icons v-if="showArrow" :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
				</view>
			</view>
		</view>
		<!-- #ifdef APP-NVUE -->
	</cell>
	<!-- #endif -->
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	import uniBadge from '../uni-badge/uni-badge.vue'

	/**
	 * ListItem 列表子组件
	 * @description 列表子组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 * @property {String} title 标题
	 * @property {String} note 描述
	 * @property {String} thumb 左侧缩略图，若thumb有值，则不会显示扩展图标
	 * @property {String} badgeText 数字角标内容
	 * @property {String} badgeType 数字角标类型，参考[uni-icons](https://ext.dcloud.net.cn/plugin?id=21)
	 * @property {String} rightText 右侧文字内容
	 * @property {Boolean} disabled = [true|false]是否禁用
	 * @property {Boolean} showArrow = [true|false] 是否显示箭头图标
	 * @property {Boolean} showBadge = [true|false] 是否显示数字角标
	 * @property {Boolean} showSwitch = [true|false] 是否显示Switch
	 * @property {Boolean} switchChecked = [true|false] Switch是否被选中
	 * @property {Boolean} showExtraIcon = [true|false] 左侧是否显示扩展图标
	 * @property {Boolean} scrollY = [true|false] 允许纵向滚动，需要显式的设置其宽高
	 * @property {Object} extraIcon 扩展图标参数，格式为 {color: '#4cd964',size: '22',type: 'spinner'}
	 * @event {Function} click 点击 uniListItem 触发事件
	 * @event {Function} switchChange 点击切换 Switch 时触发
	 */
	export default {
		name: 'UniListItem',
		components: {
			uniIcons,
			uniBadge
		},
		props: {
			title: {
				type: String,
				default: ''
			}, // 列表标题
			note: {
				type: String,
				default: ''
			}, // 列表描述
			disabled: {
				// 是否禁用
				type: [Boolean, String],
				default: false
			},
			showArrow: {
				// 是否显示箭头
				type: [Boolean, String],
				default: true
			},
			showBadge: {
				// 是否显示数字角标
				type: [Boolean, String],
				default: false
			},
			showSwitch: {
				// 是否显示Switch
				type: [Boolean, String],
				default: false
			},
			switchChecked: {
				// Switch是否被选中
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				// badge内容
				type: String,
				default: ''
			},
			badgeType: {
				// badge类型
				type: String,
				default: 'success'
			},
			rightText: {
				// 右侧文字内容
				type: String,
				default: ''
			},
			thumb: {
				// 缩略图
				type: String,
				default: ''
			},
			showExtraIcon: {
				// 是否显示扩展图标
				type: [Boolean, String],
				default: false
			},
			extraIcon: {
				type: Object,
				default () {
					return {
						type: 'contact',
						color: '#000000',
						size: 20
					}
				}
			}
		},
		inject: ['list'],
		data() {
			return {
				isFirstChild: false
			}
		},
		mounted() {
			if (!this.list.firstChildAppend) {
				this.list.firstChildAppend = true
				this.isFirstChild = true
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail)
			}
		}
	}
</script>

<style scoped>
	.uni-list-item {
		font-size: 16;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 15px;
	}

	.uni-list-item--disabled {
		opacity: 0.3;
	}

	.uni-list-item--hover {
		background-color: #f1f1f1;
	}

	.uni-list-item__container {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 12px 15px;
		padding-left: 0;
		flex: 1;
		position: relative;
		justify-content: space-between;
		align-items: center;
		/* #ifdef APP-PLUS */
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 0.5px;
		/* #endif */
	}

	.uni-list-item--first {
		border-top-width: 0px;
	}

	/* #ifndef APP-NVUE */
	.uni-list-item__container:after {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #e5e5e5;
	}

	.uni-list-item--first:after {
		height: 0px;
	}

	/* #endif */





	.uni-list-item__content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		overflow: hidden;
		flex-direction: column;
		color: #3b4144;

	}

	.uni-list-item__content-title {
		font-size: 14px;
		color: #3b4144;
		overflow: hidden;
	}

	.uni-list-item__content-note {
		margin-top: 6rpx;
		color: #999;
		font-size: 12px;
		overflow: hidden;
	}

	.uni-list-item__extra {
		/* width: 25%;
 */
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.uni-list-item__icon {
		margin-right: 18rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.uni-list-item__icon-img {
		height: 26px;
		width: 26px;
	}

	.uni-list-item__extra-text {
		color: #999;
		font-size: 12px;
	}
</style>