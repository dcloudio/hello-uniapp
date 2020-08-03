<template>
	<!-- #ifdef APP-NVUE -->
	<cell>
		<!-- #endif -->

		<view :class="disabled ? 'uni-list-item--disabled' : ''" :hover-class="(!clickable && !link) || disabled || showSwitch ? '' : 'uni-list-item--hover'" class="uni-list-item" @click.stop="onClick">
			<view v-if="!isFirstChild" class="border--left" :class="{ 'uni-list--border': border }"></view>
			<view class="uni-list-item__container">
				<slot name="left">
					<view v-if="thumb" class="uni-list-item__icon">
						<image :src="thumb" class="uni-list-item__icon-img" :class="['uni-list--' + thumbSize]" />
					</view>
					<view v-else-if="showExtraIcon" class="uni-list-item__icon">
						<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" class="uni-icon-wrapper" />
					</view>
				</slot>
				<view class="uni-list-item__content">
					<slot>
						<text v-if="title" class="uni-list-item__content-title" :class="[ellipsis !== 0 && ellipsis <= 2 ? 'uni-ellipsis-' + ellipsis : '']">{{ title }}</text>
						<text v-if="note" class="uni-list-item__content-note">{{ note }}</text>
					</slot>
				</view>
				<view class="uni-list-item__extra">
					<slot name="right">
						<text v-if="rightText" class="uni-list-item__extra-text">{{ rightText }}</text>
						<uni-badge v-if="showBadge" :type="badgeType" :text="badgeText" />
						<switch v-if="showSwitch" :disabled="disabled" :checked="switchChecked" @change="onSwitchChange" />
					</slot>
					<uni-icons v-if="showArrow || link" :size="16" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
				</view>
			</view>
		</view>
		<!-- #ifdef APP-NVUE -->
	</cell>
	<!-- #endif -->
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue';
	import uniBadge from '../uni-badge/uni-badge.vue';

	/**
	 * ListItem 列表子组件
	 * @description 列表子组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 * @property {String} 	title 							标题
	 * @property {String} 	note 							描述
	 * @property {String} 	thumb 							左侧缩略图，若thumb有值，则不会显示扩展图标
	 * @property {String}  	thumbSize = [lg|base|sm]		略缩图大小
	 * 	@value 	 lg			大图
	 * 	@value 	 base		一般
	 * 	@value 	 sm			小图
	 * @property {String} 	badgeText						数字角标内容
	 * @property {String} 	badgeType 						数字角标类型，参考[uni-icons](https://ext.dcloud.net.cn/plugin?id=21)
	 * @property {String} 	rightText 						右侧文字内容
	 * @property {Boolean} 	disabled = [true|false]			是否禁用
	 * @property {Boolean} 	clickable = [true|false] 		是否开启点击反馈
	 * @property {String} 	link = [navigateTo|redirectTo|reLaunch|switchTab] 是否展示右侧箭头并开启点击反馈
	 *  @value 	navigateTo 	同 uni.navigateTo()
	 * 	@value redirectTo 	同 uni.redirectTo()
	 * 	@value reLaunch   	同 uni.reLaunch()
	 * 	@value switchTab  	同 uni.switchTab()
	 * @property {String} 	to  							跳转目标页面
	 * @property {Boolean} 	showBadge = [true|false] 		是否显示数字角标
	 * @property {Boolean} 	showSwitch = [true|false] 		是否显示Switch
	 * @property {Boolean} 	switchChecked = [true|false] 	Switch是否被选中
	 * @property {Boolean} 	showExtraIcon = [true|false] 	左侧是否显示扩展图标
	 * @property {Object} 	extraIcon 						扩展图标参数，格式为 {color: '#4cd964',size: '22',type: 'spinner'}
	 * @event {Function} 	click 							点击 uniListItem 触发事件
	 * @event {Function} 	switchChange 					点击切换 Switch 时触发
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
			},
			note: {
				type: String,
				default: ''
			},
			ellipsis: {
				type: [Number],
				default: 0
			},
			disabled: {
				type: [Boolean, String],
				default: false
			},
			clickable: {
				type: Boolean,
				default: false
			},
			showArrow: {
				type: [Boolean, String],
				default: false
			},
			link: {
				type: [Boolean, String],
				default: false
			},
			to: {
				type: String,
				default: ''
			},
			showBadge: {
				type: [Boolean, String],
				default: false
			},
			showSwitch: {
				type: [Boolean, String],
				default: false
			},
			switchChecked: {
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				type: String,
				default: ''
			},
			badgeType: {
				type: String,
				default: 'success'
			},
			rightText: {
				type: String,
				default: ''
			},
			thumb: {
				type: String,
				default: ''
			},
			thumbSize: {
				type: String,
				default: 'base'
			},
			showExtraIcon: {
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
					};
				}
			}
		},
		inject: ['list'],
		data() {
			return {
				isFirstChild: false,
				border: true
			};
		},
		mounted() {
			if (!this.list.firstChildAppend) {
				this.list.firstChildAppend = true;
				this.isFirstChild = true;
			}
			this.border = this.list.border;
		},
		methods: {
			onClick() {
				if (this.clickable || this.link) {
					if (this.to !== '') {
						this.openPage();
						return
					}
					this.$emit('click', {
						data: {}
					});
				}

			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail);
			},
			openPage() {
				if (['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'].indexOf(this.link) !== -1) {
					this.pageApi(this.link);
				} else {
					this.pageApi('navigateTo');
				}
			},
			pageApi(api) {
				uni[api]({
					url: this.to,
					complete: res => {
						this.$emit('click', {
							data: res
						});
					}
				});
			}
		}
	};
</script>

<style scoped>
	.uni-list-item {
		font-size: 16px;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		background-color: #fff;
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
		padding-left: 15px;
		flex: 1;
		position: relative;
		justify-content: space-between;
		align-items: center;
	}

	.border--left {
		margin-left: 15px;
	}

	.uni-list--border {
		position: relative;
		/* #ifdef APP-PLUS */
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 0.5px;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.uni-list--border:after {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #e5e5e5;
	}

	.uni-list-item--first:after {
		height: 0px;
	}

	/* #endif */
	.uni-list-item--first {
		border-top-width: 0px;
	}

	.uni-list-item__content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding-right: 8px;
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
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		height: 26px;
		width: 26px;
	}

	.uni-list--lg {
		height: 40px;
		width: 40px;
	}

	.uni-list--base {
		height: 26px;
		width: 26px;
	}

	.uni-list--sm {
		height: 20px;
		width: 20px;
	}

	.uni-list-item__extra-text {
		color: #999;
		font-size: 12px;
	}

	.uni-ellipsis-1 {
		/* #ifndef APP-NVUE */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 1;
		/* #endif */
	}

	.uni-ellipsis-2 {
		/* #ifndef APP-NVUE */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 2;
		/* #endif */
	}
</style>